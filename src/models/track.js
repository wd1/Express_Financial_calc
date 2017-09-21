import mysql from 'mysql';
import { dbConfig } from '../config';

const mysqlPool = mysql.createPool({
	host: dbConfig.host,
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database
});

export const saveTrackData = (data, callback) => {
  mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

    let firstname = data.firstname == undefined ? '' : data.firstname,
        lastname = data.lastname == undefined ? '' : data.lastname,
        searchdate = new Date(),
        industries = data.industries == undefined ? '' : data.industries.join(', '),
        included_intans = data.include == undefined ? '' : data.include.join(', '),
        excluded_intans = data.exclude == undefined ? '' : data.exclude.join(', '),
        keywords;
    let keywordsArr = [];
    for(let i=0; i<data.keyword.length; i++)
      if(data.keyword[i] != '')
        keywordsArr.push(data.keyword[i]);
    keywords = keywordsArr.join(', ');

    let trackdata = {
      firstname,
      lastname,
      searchdate,
      industries,
      included_intans,
      excluded_intans,
      keywords
    }

    console.log(trackdata);

		connection.query("insert into track set ? ", trackdata, (err, results) => {
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

export const getTrackData = (callback) => {
  mysqlPool.getConnection((err, connection) => {
		if(err) {
			connection.release();
			console.log(err);
			return;
		}

		connection.query("select concat(firstname, ' ', lastname) as fullname, DATE_FORMAT(searchdate, '%m-%d-%Y') AS searchdate, industries, included_intans, excluded_intans, keywords from track order by id desc", (err, results) => {
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
