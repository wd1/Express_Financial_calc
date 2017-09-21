import mysql from 'mysql';
import { dbConfig, uploadConfig } from '../config';

const mysqlPool = mysql.createPool({
	host: dbConfig.host,
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database
});

export const createTable = (rows, callback) => {
	let headerRow = {};

	for(let i=1; i<=45; i++) {
		headerRow[i.toString()] = i.toString();
	}

	rows.unshift(headerRow);

	insertData(rows, () => {
		callback();
	});

}

const insertData = (rows, callback) => {
  if(rows.length == 0) {
    return callback();
  }

  let row = rows.shift();

	row = convertRow(row);

	isExistRow(row[43], (id) => {
		if(id == -1) {
			runSqlInsert(row, () => {
		    insertData(rows, callback);
		  });
		} else {
			runSqlUpdate(row, id, () => {
		    insertData(rows, callback);
		  });
		}

	});


}

export const convertRow = (row) => {
  let data = [];
  let i;

  for(i=1; i<=45; i++) {

    let val = row[i.toString()];

    if(val === undefined || val === null) {
      data.push("'"+"'");
      continue;
    }

    val = val.trim();

		if(val == '-')
			val = '0';

    switch(i) {
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 18:
			case 19:
			case 22:
			case 23:
			case 26:
			case 27:
			case 30:
			case 31:
			case 34:
			case 35:
			case 38:
      case 39:
        val = val.replace(/\,/g,'');

        // if(val === 'Indefinite')

        data.push('"'+val+'"');
        break;
      default:

        data.push('"'+val+'"');
        break;
    }



  }
  return data;
}

const runSqlInsert = (row, callback) => {
  mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}





    let sql = 'insert into main (';

    let colArr = [];

    for(let i=1; i<=45; i++)
      colArr.push('col'+i);

    sql += colArr.toString();

    sql += ') values (';

    sql += row.toString() + ')';


    connection.query(sql, (err, results) => {

      callback();

      connection.release();

    });

  });
}

const runSqlUpdate = (row, id, callback) => {
  mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

    let sql = 'update main set ';

    let colArr = [];

    for(let i=1; i<=45; i++)
      colArr.push('col'+i + '=' + row[i-1]);

    sql += colArr.toString();

    sql += ' where id='+id;

    connection.query(sql, (err, results) => {

      callback();

      connection.release();

    });

  });
}

const isExistRow = (transactionId, callback) => {
	mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

    let sql = "select * from main where col44="+ transactionId;

    connection.query(sql, (err, results) => {

			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			if(results.length > 1) {
				connection.release();
				console.log('duplicated data');
				return;
			}

			if(results.length == 0)
				callback(-1);
			else
				callback(results[0].id);

      connection.release();

    });

  });
}

export const fetchTableData = (callback) => {
  mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query('select * from main ', (err, results) => {
			if(err) {
				connection.release();
				console.log(err);
				return;
			}

			connection.release();

			callback(results);

		});

	});
}
