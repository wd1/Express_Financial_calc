import express from 'express';
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
const router = express.Router();
import { ensureAdmin } from '../common/authGuard';

import { createTable, fetchTableData } from '../models/upload';
import { getUsers, setEnable } from '../models/user';
import { getTrackData } from '../models/track';

router.get('/', ensureAdmin, (req, res) => {

  res.render('admin/index', {title: 'Admin'});

});

router.post('/upload', (req, res) => {

  if(req.files == undefined || req.files == null || req.files.length == 0) {

    req.flash('error', 'Please select file to upload');
    res.redirect('/admin');

  } else {

    let file = req.files[0];

    let originalname = file.originalname;
    let filename = file.filename;
    let mimetype = file.mimetype;
    let filepath = file.path;
    let size = file.size;

    let ext = path.extname(originalname).toLowerCase();

    if(ext == '.xlsm' || ext == '.xls' || ext == '.xlsx') {
      const workbook = XLSX.readFile(filepath);

      const sheet = workbook.Sheets.MAIN;

      if(sheet == undefined || sheet == null) {

        fs.unlinkSync(filepath);

        req.flash('error', 'This file is not correct. Please try again.');
        res.redirect('/admin');

      } else {
        const rows = XLSX.utils.sheet_to_json(sheet);

        createTable(rows, () => {

          fs.unlinkSync(filepath);

          req.flash('success', 'Successfully Uploaded.');
          res.redirect('/admin');
        });
      }
    } else {

      fs.unlinkSync(filepath);

      req.flash('error', 'This file is not correct. Please try again.');
      res.redirect('/admin');
    }



  }

});

router.get('/viewtable', ensureAdmin, (req, res) => {

  fetchTableData((result) => {
    result.shift();
    res.render('admin/viewtable', { title: 'Admin', tabledata: result });
  });

});

router.get('/users', ensureAdmin, (req, res) => {

  let jobfunctiondata = {
    job_1: 'Valuation Specialist',
    job_2: 'Auditor',
    job_3: 'Finance Executive',
    job_4: 'Press',
    job_5: 'Government',
    job_6: 'Other'
  };

  getUsers((results) => {

    res.render('admin/users', { title: 'Admin', tabledata: results, jobfunctiondata: jobfunctiondata });
  });

});

router.post('/users', (req, res) => {

  console.log(req.body);

  setEnable(req.body.id, req.body.checkval, (err) => {
    if(err)
      res.json({data: 'Error'});
    else {
      res.json({data: 'Successfully updated'});
    }
  });

});

router.get('/trackusers', ensureAdmin, (req, res) => {

  getTrackData((results) => {

    res.render('admin/trackusers', { title: 'Admin', tabledata: results });

  });


});

export default router;
