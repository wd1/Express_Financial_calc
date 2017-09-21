import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mysql from 'mysql';

import { jwtSecret, dbConfig, admin } from '../config';



const mysqlPool = mysql.createPool({
	host: dbConfig.host,
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database
});

export const createUser = (newUser, callback) => {

  let { firstname, lastname, email, password, company, jobfunction, signupDate } = newUser;

  let temporaryToken = jwt.sign({ firstname, lastname, email }, jwtSecret, { expiresIn: '24h'});

  let user = {
    firstname,
    lastname,
    email,
    password: bcrypt.hashSync(password, 10),
    company,
    jobfunction,
    temporaryToken,
		signupDate
  }

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query('insert into user set ? ', user, (err, results) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			// if(results.length == 0)
			// 	return callback(false);
			//
			// return callback(results[0]);

			return callback(results, temporaryToken);

		});

	});

}

export const isExistUser = (email, callback) => {

  getUserByEmail(email, user => {
    if(user)
      return callback(true);
    else
      return callback(false);
  });

}

export const getUserByEmail = (email, callback) => {

	if(email === admin.email)
		return callback(admin);

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query('select * from user where ?', { email }, (err, results) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			if(results.length == 0)
				return callback(false);

			return callback(results[0]);

		});

	});

}

export const getUserById = (id, callback) => {

	if(id === admin.id)
		return callback(admin);

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query('select * from user where ?', { id }, (err, results) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			if(results.length == 0)
				return callback(false);

			return callback(results[0]);

		});

	});
}

export const getUserByTemporaryToken = (temporaryToken, callback) => {

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query('select * from user where ?', { temporaryToken }, (err, results) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			if(results.length == 0)
				return callback(false);

			return callback(results[0]);

		});

	});

}

export const comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		if(err) return callback(err);
		callback(null, isMatch);
	});
}

export const activateAccount = (temporaryToken, callback) => {

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query('update user set active = ?, temporaryToken = null where ?', [1, {temporaryToken}], (err) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			callback();

		});

	});
}

export const resetPasswordToken = (id, resetToken, callback) => {

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query('update user set ? where ? ', [{resetToken}, {id}], (err) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			callback();

		});

	});

}

export const getUserByResetToken = (resetToken, callback) => {

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query('select * from user where ?', { resetToken }, (err, results) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			if(results.length == 0)
	      return callback(false);

	    return callback(results[0]);

		});

	});

}

export const resetPasswordByToken = (password, resetToken, callback) => {

	let hash = bcrypt.hashSync(password, 10);

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query('update user set password = ?, resetToken = null where ?', [hash, {resetToken}], err => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			callback();

		});

	});

}

export const getUsers = (callback) => {

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query("select id, concat(firstname, ' ', lastname) as fullname, email , DATE_FORMAT(signupDate, '%m-%d-%Y') AS signupDate, enabled, company, jobfunction from user", (err, results) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			return callback(results);

		});

	});

}

export const setEnable = (id, checkval, callback) => {

	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query("update user set enabled='"+checkval+"' where id="+id, (err) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			return callback();

		});

	});

}

export const isEnabled = (email, callback) => {

	getUserByEmail(email, user => {
    if(user.enabled)
      return callback(true);
    else
      return callback(false);
  });

}
