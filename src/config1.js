
// export const domainConfig = 'http://localhost:3000';
export const domainConfig = 'http://ec2-52-70-116-17.compute-1.amazonaws.com:3000/';

// product

// export const dbConfig = {
//   host: 'localhost',
//   user: 'root',
//   password: 'Benchmark805!',
//   database: 'bench805db'
// };

// test

// export const dbConfig = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'bench805'
// };

export const dbConfig = {
   host: 'localhost',
   user: 'root',
   password: 'Benchmark805!',
   database: 'bench805db'
 };
export const jwtSecret = "d93k!2~4j2vf2@2@^(*($2)w!23";

export const emailConfig = {
  username: 'akmksi211@gmail.com',
  password: 'dkfwkfgu890',

  serviceName: 'Bench805 Service',
  serviceEmail: 'john@outlook.com'
}

export const admin = {
  id: -1,
  firstname: 'Admin',
  lastname: 'Admin',
  email: 'bench805admin@gmail.com',
  password: '$2a$10$Vr7Ve/oQ0JtDLotWkUCyHOUAE062r73SAwtwv5im3ADsoqJVtHGaa',
  active: 1,
  enabled: 1
}

export const uploadConfig = {
  tablename: 'main',
  uploadCount: 2
}


/*
DB Migration

drop table if exists main // not available



CREATE TABLE main (
  id int(11) NOT NULL AUTO_INCREMENT,
  col1 varchar(64) DEFAULT NULL,
  col2 varchar(64) DEFAULT NULL,
  col3 varchar(64) DEFAULT NULL,
  col4 varchar(64) DEFAULT NULL,
  col5 varchar(64) DEFAULT NULL,
  col6 varchar(64) DEFAULT NULL,
  col7 varchar(64) DEFAULT NULL,
  col8 text DEFAULT NULL,
  col9 varchar(64) DEFAULT NULL,
  col10 varchar(64) DEFAULT NULL,
  col11 varchar(64) DEFAULT NULL,
  col12 varchar(64) DEFAULT NULL,
  col13 varchar(64) DEFAULT NULL,
  col14 varchar(64) DEFAULT NULL,
  col15 varchar(64) DEFAULT NULL,
  col16 varchar(64) DEFAULT NULL,
  col17 varchar(64) DEFAULT NULL,
  col18 varchar(64) DEFAULT NULL,
  col19 varchar(64) DEFAULT NULL,
  col20 varchar(64) DEFAULT NULL,
  col21 varchar(64) DEFAULT NULL,
  col22 varchar(64) DEFAULT NULL,
  col23 varchar(64) DEFAULT NULL,
  col24 varchar(64) DEFAULT NULL,
  col25 varchar(64) DEFAULT NULL,
  col26 varchar(64) DEFAULT NULL,
  col27 varchar(64) DEFAULT NULL,
  col28 varchar(64) DEFAULT NULL,
  col29 varchar(64) DEFAULT NULL,
  col30 varchar(64) DEFAULT NULL,
  col31 varchar(64) DEFAULT NULL,
  col32 varchar(64) DEFAULT NULL,
  col33 varchar(64) DEFAULT NULL,
  col34 varchar(64) DEFAULT NULL,
  col35 varchar(64) DEFAULT NULL,
  col36 varchar(64) DEFAULT NULL,
  col37 varchar(64) DEFAULT NULL,
  col38 varchar(64) DEFAULT NULL,
  col39 varchar(64) DEFAULT NULL,
  col40 varchar(64) DEFAULT NULL,
  col41 varchar(64) DEFAULT NULL,
  col42 varchar(64) DEFAULT NULL,
  col43 varchar(150) DEFAULT NULL,
  col44 varchar(64) DEFAULT NULL,
  col45 varchar(64) DEFAULT NULL,

  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1

CREATE TABLE `bench805`.`track` (
  `id` INT(11) NOT NULL AUTO_INCREMENT ,
  `firstname` VARCHAR(32) DEFAULT NULL ,
  `lastname` VARCHAR(32) DEFAULT NULL ,
  `searchdate` DATE DEFAULT NULL ,
  `industries` VARCHAR(128) DEFAULT NULL ,
  `included_intans` VARCHAR(128) DEFAULT NULL ,
  `excluded_intans` VARCHAR(128) DEFAULT NULL ,
  `keywords` VARCHAR(128) DEFAULT NULL ,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `bench805db`.`user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(64) NOT NULL,
  `lastname` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(128) NOT NULL,
  `company` varchar(64) NOT NULL,
  `jobfunction` varchar(32) NOT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `temporaryToken` varchar(300) DEFAULT NULL,
  `resetToken` varchar(300) DEFAULT NULL,
  `signupDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `bench805db`.`user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `email` (`email`);

ALTER TABLE `bench805db`.`user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;COMMIT;

ALTER TABLE `bench805db`.`user` ADD `signupDate` DATE NULL DEFAULT NULL AFTER `resetToken`;

ALTER TABLE `bench805db`.`user` ADD `enabled` TINYINT(1) NOT NULL DEFAULT '1' AFTER `signupDate`;

*/
