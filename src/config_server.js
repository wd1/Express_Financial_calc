
export const domainConfig = 'http://ec2-34-207-112-229.compute-1.amazonaws.com:3000';

// product

export const dbConfig = {
   host: 'localhost',
   user: 'root',
   password: 'Benchmark805!',
   database: 'bench805db'
 };

// test

export const jwtSecret = "d93k!2~4j2vf2@2@^(*($2)w!23";

export const emailConfig = {
  username: 'bench805service@gmail.com',
  password: 'Benchmark805!',

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

ALTER TABLE `bench805db`.`user` ADD `signupDate` DATE NULL DEFAULT NULL AFTER `bench805db`.`resetToken`;

*/
