import express from 'express';
const router = express.Router();
import { ensureAuthenticated } from '../common/authGuard';
import { fetchTableData } from '../models/upload';
import { saveTrackData } from '../models/track';


router.get('/', ensureAuthenticated, (req, res) => {
  res.render('dashboard/index', { title: 'Result' });
});
let result_count;
function compareIndustries(val, arr) {
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return true;
    }
  }
  return false;

}
router.post('/', (req, res) => {

  let reqdata = req.body;
  console.log(reqdata);

  let data = Object.assign({}, reqdata);
  data.firstname = req.user.firstname;
  data.lastname = req.user.lastname;
saveTrackData(data, () => {

});
  //Calculates Goodwill and Contingenet Consideration, Inventory, PPA
  let Intangible, KeyWord, Industry, Industry1, Industry2, Discr;
  let GW_PC, GW_NA, GW_NANC, GW_EC, GW_INV, GW_PPE;
  let i, k, j = new Array(4), CC, GW, INV, PPE;
  let sheet = {}, sheetMAIN, sheetTEST;
  let EC;
  let selected_industries;
  let Year , preliminary;
  Industry = 'Hello';

  if(reqdata.industries) {
    selected_industries = reqdata.industries;
    // Industry1 = reqdata.industries[0];
    // Industry2 = reqdata.industries[1];
  }



  fetchTableData((results) => {

    // Caculations Procedure

    sheetMAIN = results;

    k = 0; //k: 0 = Contingent Consideration, 1 - Goodwill, 2 - Inventory, 3 - PPE

    for(k=0; k<=3; k++) {

      GW_PC = []; GW_NA = []; GW_NANC = []; GW_EC = []; GW_INV = []; GW_PPE = [];

      i = 0;
      GW = 0;
      CC = 0;
      INV = 0;
      PPE = 0;

      //j(): 1-PC, 2-net assets, 3-net assets net cash, 4-excess consideration
      while(Industry != undefined) {

        Industry = Cells(sheetMAIN, 3 + i, 6);
        Discr = Cells(sheetMAIN, 3 + i, 8);
        Year = Cells(sheetMAIN, 3+i, 4);
        Year = Year.substring(Year.length-2, Year.length);
        //this if-statement to count total industr observations
        
        if(compareIndustries(Industry,selected_industries)) {
          if(Cells(sheetMAIN, 3 + i, 13) != 'na' && Cells(sheetMAIN, 3 + i, 18) != 0)
            GW++;
          if(Cells(sheetMAIN, 3 + i, 12) != 'na')
            CC++;
          if(Cells(sheetMAIN, 3 + i, 14) != 'na')
            INV++;
          if(Cells(sheetMAIN, 3 + i, 15) != 'na')
            PPE++;
        }

        //starting main goodwill and contingent consideration stat calculations
        if(RightTrans(reqdata, sheetMAIN, Industry, Discr, i + 3, Year) == 1) {

          if(Cells(sheetMAIN, 3 + i, 13) == 'na')
            EC = 0;
          else
            EC = Number(Cells(sheetMAIN, 3 + i, 13)) + Number(Cells(sheetMAIN, 3 + i, 18)) + Number(Cells(sheetMAIN, 3 + i, 22)) + Number(Cells(sheetMAIN, 3 + i, 26)) + Number(Cells(sheetMAIN, 3 + i, 30)) + Number(Cells(sheetMAIN, 3 + i, 34)) + Number(Cells(sheetMAIN, 3 + i, 38));

          if(Cells(sheetMAIN, 3 + i, 12 + k) == "na" || Cells(sheetMAIN, 3 + i, 12 + k) == 0 || EC == 0 || EC == Cells(sheetMAIN, 3 + i, 13))
            GW_EC.push("Empty");
          else
              GW_EC.push(Number(Cells(sheetMAIN, 3 + i, 12 + k)) / EC);

          if(Cells(sheetMAIN, 3 + i, 9) == "na" || Cells(sheetMAIN, 3 + i, 12 + k) == "na" || Cells(sheetMAIN, 3 + i, 12 + k) == 0)
              GW_PC.push("Empty");
          else
              GW_PC.push(Number(Cells(sheetMAIN, 3 + i, 12 + k)) / Number(Cells(sheetMAIN, 3 + i, 9)));

          if(Cells(sheetMAIN, 3 + i, 10) == "na" || Cells(sheetMAIN, 3 + i, 12 + k) == "na" || Cells(sheetMAIN, 3 + i, 12 + k) == 0)
              GW_NA.push("Empty");
          else
              GW_NA.push(Number(Cells(sheetMAIN, 3 + i, 12 + k)) / Number(Cells(sheetMAIN, 3 + i, 10)));

          if(Cells(sheetMAIN, 3 + i, 11) == "na" || Cells(sheetMAIN, 3 + i, 12 + k) == "na" || Cells(sheetMAIN, 3 + i, 12 + k) == 0)
              GW_NANC.push("Empty");
          else
              GW_NANC.push(Number(Cells(sheetMAIN, 3 + i, 12 + k)) / Number(Cells(sheetMAIN, 3 + i, 11)));

        }

        i++;
        Industry = Cells(sheetMAIN, 3 + i, 6);

      }

      if(k <= 1) {

        sheet[(15 + 2 * k) + '_' + 4] = median(GW_PC);
        sheet[(15 + 2 * k) + '_' + 5] = median(GW_NA);
        sheet[(15 + 2 * k) + '_' + 6] = median(GW_NANC);
        sheet[(15 + 2 * k) + '_' + 7] = median(GW_EC);

        sheet[(15 + 2 * k) + '_' + 9] = stDev(GW_PC);
        sheet[(15 + 2 * k) + '_' + 10] = stDev(GW_NA);
        sheet[(15 + 2 * k) + '_' + 11] = stDev(GW_NANC);
        sheet[(15 + 2 * k) + '_' + 12] = stDev(GW_EC);

        sheet[(15 + 2 * k) + '_' + 14] = count(GW_PC);
        sheet[(15 + 2 * k) + '_' + 15] = count(GW_NA);
        sheet[(15 + 2 * k) + '_' + 16] = count(GW_NANC);
        sheet[(15 + 2 * k) + '_' + 17] = count(GW_EC);

        sheet[15+ '_' +18] = CC;
        sheet[17+ '_' +18] = GW;
        sheet[38+ '_' +18] = INV;
        sheet[39+ '_' +18] = PPE;

      } else {

        sheet[(36 + k) + '_' + 4] = median(GW_PC);
        sheet[(36 + k) + '_' + 5] = median(GW_NA);
        sheet[(36 + k) + '_' + 6] = median(GW_NANC);
        sheet[(36 + k) + '_' + 7] = median(GW_EC);

        sheet[(36 + k) + '_' + 9] = stDev(GW_PC);
        sheet[(36 + k) + '_' + 10] = stDev(GW_NA);
        sheet[(36 + k) + '_' + 11] = stDev(GW_NANC);
        sheet[(36 + k) + '_' + 12] = stDev(GW_EC);

        sheet[(36 + k) + '_' + 14] = count(GW_PC);
        sheet[(36 + k) + '_' + 15] = count(GW_NA);
        sheet[(36 + k) + '_' + 16] = count(GW_NANC);
        sheet[(36 + k) + '_' + 17] = count(GW_EC);

      }

      Industry = 'Hello';

    }


    // Drill Procedure
    if((reqdata.not_financial_flag == 'true') && (reqdata.financial_flag == 'true')) {
      result_count = 14;
      sheet[30+'_'+2] = 'Developed Technology';
      sheet[31+'_'+2] = 'In-Process R&D';
      sheet[32+'_'+2] = 'Customer Relationships';
      sheet[33+'_'+2] = 'Trade Name';
      sheet[34+'_'+2] = 'Backlog';
      sheet[35+'_'+2] = 'Non-Compete Agreement';
      sheet[37+'_'+2] = 'Contracts';
      sheet[40+'_'+2] = 'Others';
      sheet[41+'_'+2] = 'Core Deposit Intangibles';
      sheet[42+'_'+2] = 'Insurance, Other Licenses';
      sheet[43+'_'+2] = 'Servicing Rights';
      sheet[36+'_'+2] = 'NA';
    }
    if ((reqdata.financial_flag == 'true') && (reqdata.not_financial_flag == 'false')) {
      result_count = 12;
      sheet[30+'_'+2] = 'Developed Technology';
      sheet[31+'_'+2] = 'Customer Relationships';
      sheet[32+'_'+2] = 'Trade Name';
      sheet[33+'_'+2] = 'Non-Compete Agreement';
      sheet[34+'_'+2] = 'Contracts';
      sheet[35+'_'+2] = 'Others';
      sheet[37+'_'+2] = 'Core Deposit Intangibles';
      sheet[40+'_'+2] = 'Insurance, Other Licenses';
      sheet[41+'_'+2] = 'Servicing Rights';
      sheet[36+'_'+2] = 'NA';
    }
    if((reqdata.financial_flag == 'false')){
      result_count = 11;
      sheet[30+'_'+2] = 'Developed Technology';
      sheet[31+'_'+2] = 'In-Process R&D';
      sheet[32+'_'+2] = 'Customer Relationships';
      sheet[33+'_'+2] = 'Trade Name';
      sheet[34+'_'+2] = 'Backlog';
      sheet[36+'_'+2] = 'NA';
      sheet[35+'_'+2] = 'Non-Compete Agreement';
      sheet[37+'_'+2] = 'Contracts';
      sheet[40+'_'+2] = 'Others';
      
    }
    // result_count = 7;
    // sheet[30+'_'+2] = 'Developed Technology';
    // sheet[31+'_'+2] = 'In-Process R&D';
    // sheet[32+'_'+2] = 'Customer Relationships';
    // sheet[33+'_'+2] = 'Trade Name';
    // sheet[34+'_'+2] = 'Backlog';
    // sheet[35+'_'+2] = 'Non-Compete Agreement';
    // sheet[36+'_'+2] = 'NA';

    let Asset, Asset1;
    let Int_Amount, Int_AmountLF, Life;
    let Asset_All = {}, Asset_PC = [], Asset_NA = [], Asset_NANC = [], Asset_EC = [], UsLife = [];
    let l, A, UsLifeIND, IndCount;

    Industry = "Hello";
    A = 0;
    Asset = sheetCells(sheet, 30 + A, 2);
    
    while(Asset != undefined) {

      Asset_All = {}; Asset_PC = []; Asset_NA = []; Asset_NANC = []; Asset_EC = []; UsLife = [];

      i = 0;
      j = 0;
      k = 0;
      UsLifeIND = 0;
      IndCount = 0;

      while(Industry != undefined) {

        Industry = Cells(sheetMAIN, 3 + i, 6);
        Discr = Cells(sheetMAIN, 3 + i, 8);

      //counting total industry observations
        if(compareIndustries(Industry,selected_industries)) {

          if((Cells(sheetMAIN, 3 + i, 17) == Asset) || (Cells(sheetMAIN, 3 + i, 21) == Asset) || (Cells(sheetMAIN, 3 + i, 25) == Asset) || (Cells(sheetMAIN, 3 + i, 29) == Asset) || (Cells(sheetMAIN, 3 + i, 33) == Asset) || (Cells(sheetMAIN, 3 + i, 37) == Asset) )
            IndCount++;

        }

      //main stat calculations of Prototype tab
        if(RightTrans(reqdata, sheetMAIN, Industry, Discr, i + 3, Year) == 1) {

        // calculation useful lives
          Int_Amount = 0;
          Int_AmountLF = 0;
          Life = 0;

          for(l=0; l<=5; l++) {

            Asset1 = Cells(sheetMAIN, 3 + i, 17 + 4 * l);
            //'adding intangible values'
            if(Asset1 == Asset && Cells(sheetMAIN, 3 + i, 18 + 4 * l) != 'na')
              Int_Amount += Number(Cells(sheetMAIN, 3 + i, 18 + 4 * l));

            //'counting indefinete lived assets'
            if(Asset1 == Asset && Cells(sheetMAIN, 3 + i, 18 + 4 * l + 1) == 'Indefinite')
              UsLifeIND++; // infinite useful life counter

            //adding intangibles that have lives
            if(Asset1 == Asset && Cells(sheetMAIN, 3 + i, 18 + 4 * l + 1) != 'na' && Cells(sheetMAIN, 3 + i, 18 + 4 * l + 1) != 'Indefinite') {
              Int_AmountLF += Number(Cells(sheetMAIN, 3 + i, 18 + 4 * l));
              Life += (Number(Cells(sheetMAIN, 3 + i, 18 + 4 * l + 1)) * Number(Cells(sheetMAIN, 3 + i, 18 + 4 * l)));
            }

          }

        // populating useful lives that are finite
          if(Int_AmountLF > 0 && Life > 0) {
            UsLife.push(Life / Int_AmountLF);
          }
        // calculating percentages
        // k 0-PC, 1-net assets, 2-net assets net cash, 3-excess consideration
          for(k=0; k<=3; k++) {

            if(Int_Amount == 0) {
              Asset_All[j+'_'+k] = 'Empty';
              break;
            } else {
              if(k==3) {
                if(Cells(sheetMAIN, 3 + i, 13) == 'na')
                  Asset_All[j+'_'+k] = 'Empty';
                else {
                  let Demon = Number(Cells(sheetMAIN, 3 + i, 13)) + Number(Cells(sheetMAIN, 3 + i, 18)) + Number(Cells(sheetMAIN, 3 + i, 22)) + Number(Cells(sheetMAIN, 3 + i, 26)) + Number(Cells(sheetMAIN, 3 + i, 30)) + Number(Cells(sheetMAIN, 3 + i, 34)) + Number(Cells(sheetMAIN, 3 + i, 38));
                  Asset_All[j+'_'+k] = Int_Amount / Demon;
                }
              } else {
                if(Cells(sheetMAIN, 3 + i, 9 + k) != 'na') {
                  let Demon = Number(Cells(sheetMAIN, 3 + i, 9 + k));
                  Asset_All[j+'_'+k] = Int_Amount / Demon;
                }
              }
            }

            j++;

          }
        }

        i++;
        Industry = Cells(sheetMAIN, 3 + i, 6);

      }

      for(l = 0; l<=200; l++) {
        Asset_PC.push(Asset_All[l+'_'+0]);
        Asset_NA.push(Asset_All[l+'_'+1]);
        Asset_NANC.push(Asset_All[l+'_'+2]);
        Asset_EC.push(Asset_All[l+'_'+3]);
      }
      // console.log(A);
      // console.log(Asset);
      sheet[(30 + A) + '_' + 4]    = median(Asset_PC);
      sheet[(30 + A) + '_' + 9]    = stDev(Asset_PC);
      sheet[(30 + A) + '_' + 14]   = count(Asset_PC);

      sheet[(30 + A) + '_' + 5]    = median(Asset_NA);
      sheet[(30 + A) + '_' + 10]   = stDev(Asset_NA);
      sheet[(30 + A) + '_' + 15]   = count(Asset_NA);

      sheet[(30 + A) + '_' + 6]    = median(Asset_NANC);
      sheet[(30 + A) + '_' + 11]   = stDev(Asset_NANC);
      sheet[(30 + A) + '_' + 16]   = count(Asset_NANC);

      sheet[(30 + A) + '_' + 7]    = median(Asset_EC);
      sheet[(30 + A) + '_' + 12]   = stDev(Asset_EC);
      sheet[(30 + A) + '_' + 17]   = count(Asset_EC);

      sheet[(30 + A) + '_' + 18]   = IndCount;

      sheet[(30 + A) + '_' + 20]   = 'na';
      sheet[(30 + A) + '_' + 21]   = 'na';
      sheet[(30 + A) + '_' + 22]   = 'na';
      sheet[(30 + A) + '_' + 23]   = 'na';

      if(count(UsLife) > 0) {
        sheet[(30 + A) + '_' + 20] = median(UsLife);
        sheet[(30 + A) + '_' + 21] = stDev(UsLife);
        sheet[(30 + A) + '_' + 22] = count(UsLife);
      }

      if(UsLifeIND > 0)
        sheet[(30 + A) + '_' + 23] = UsLifeIND;

      Industry = 'Hello';
      IndCount = 0;
      j = 0;

      A++;
      Asset = sheetCells(sheet, 30 + A, 2);

    }

    for(let key in sheet) {
      if(isNaN(sheet[key]))
        continue;

      switch(key) {
        case '15_4':
        case '15_5':
        case '15_6':
        case '15_7':
        case '15_9':
        case '15_10':
        case '15_11':
        case '15_12':

        case '17_4':
        case '17_5':
        case '17_6':
        case '17_7':
        case '17_9':
        case '17_10':
        case '17_11':
        case '17_12':

        case '30_4':
        case '30_5':
        case '30_6':
        case '30_7':
        case '30_9':
        case '30_10':
        case '30_11':
        case '30_12':

        case '31_4':
        case '31_5':
        case '31_6':
        case '31_7':
        case '31_9':
        case '31_10':
        case '31_11':
        case '31_12':

        case '32_4':
        case '32_5':
        case '32_6':
        case '32_7':
        case '32_9':
        case '32_10':
        case '32_11':
        case '32_12':

        case '33_4':
        case '33_5':
        case '33_6':
        case '33_7':
        case '33_9':
        case '33_10':
        case '33_11':
        case '33_12':

        case '34_4':
        case '34_5':
        case '34_6':
        case '34_7':
        case '34_9':
        case '34_10':
        case '34_11':
        case '34_12':

        case '35_4':
        case '35_5':
        case '35_6':
        case '35_7':
        case '35_9':
        case '35_10':
        case '35_11':
        case '35_12':

        case '36_4':
        case '36_5':
        case '36_6':
        case '36_7':
        case '36_9':
        case '36_10':
        case '36_11':
        case '36_12':

        case '38_4':
        case '38_5':
        case '38_6':
        case '38_9':
        case '38_10':
        case '38_11':
        case '38_12':

        case '39_4':
        case '39_5':
        case '39_6':
        case '39_9':
        case '39_10':
        case '39_11':
        case '39_12':
          sheet[key] = Math.round(sheet[key] * 100) + '%';
          break;

        case '38_7':
        case '39_7':
          sheet[key] = Math.round(sheet[key] * 100)/100 + 'x';
          break;

        case '30_20':
        case '30_21':
        case '30_22':
        case '30_23':

        case '31_20':
        case '31_21':
        case '31_22':
        case '31_23':

        case '32_20':
        case '32_21':
        case '32_22':
        case '32_23':

        case '33_20':
        case '33_21':
        case '33_22':
        case '33_23':

        case '34_20':
        case '34_21':
        case '34_22':
        case '34_23':

        case '33_20':
        case '33_21':
        case '33_22':
        case '33_23':

        case '34_20':
        case '34_21':
        case '34_22':
        case '34_23':

        case '35_20':
        case '35_21':
        case '35_22':
        case '35_23':

        case '36_20':
        case '36_21':
        case '36_22':
        case '36_23':
          sheet[key] = Math.round(sheet[key] * 10)/10;
          break;
      }
    }
    console.log({ title: 'Result', result_count: result_count,tabledata: sheet, checkedids1: reqdata.checkedids1, checkedids: reqdata.checkedids, keyword1: reqdata.keyword[0], keyword2: reqdata.keyword[1] });
    res.render('dashboard/index', { title: 'Result', result_count: result_count, tabledata: sheet, checkedids1: reqdata.checkedids1, checkedids: reqdata.checkedids, keyword1: reqdata.keyword[0], keyword2: reqdata.keyword[1], preliminary: reqdata.preliminary? true:false});

  });
});

const Cells = (data, i, j) => {
  if(data[i-1] != undefined)
    return data[i-1]["col"+j];
  else
    return undefined;
}

const sheetCells = (data, i, j) => {
  return data[i+'_'+j];
}

const median = (values) => {

  let filteredvalues = [], retval;

  for(let i=0; i<values.length; i++) {
    if(isNaN(values[i]))
      continue;
    filteredvalues.push(values[i]);
  }

  if(filteredvalues.length == 0)
    return 'na';



  filteredvalues.sort( (a,b) => {return a - b;} );

  var half = Math.floor(filteredvalues.length/2);

  if(filteredvalues.length % 2)
      retval = filteredvalues[half];
  else
      retval = (filteredvalues[half-1] + filteredvalues[half]) / 2.0;
  if(isNaN(retval))
    retval = 'na';

  return retval;
}

const stDev = (values) => {
  let numbersArr = [];

  for(let i=0; i<values.length; i++) {
    if(isNaN(values[i]))
      continue;
    numbersArr.push(values[i]);
  }

  if(numbersArr.length == 0)
    return 'na';

  var total = 0;
  for(var key in numbersArr)
     total += parseFloat(numbersArr[key]);
  var meanVal = total / numbersArr.length;
  //--CALCULATE AVAREGE--

  //--CALCULATE STANDARD DEVIATION--
  var SDprep = 0;
  for(var key in numbersArr)
     SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal),2);
  var SDresult = Math.sqrt(SDprep/(numbersArr.length-1));

  if(isNaN(SDresult))
    return 'na';

  return SDresult;

}

const count = (values) => {
  let numbersArr = [];

  for(let i=0; i<values.length; i++) {
    if(isNaN(values[i]))
      continue;
    numbersArr.push(values[i]);
  }

  return numbersArr.length;
}

const RightTrans = (reqdata, sheet, Industry, Discr, i, Year) => {

  let retRightTrans;

  let A, B1, B2, C, D1, D2,Y1,Y2,P, j;

  let Industry1, Industry2, Industry3, KeyWord1, KeyWord2, Intangible1, Intangible2, IntangibleX1, IntangibleX2;
  let Year1, Year2;
  let selected_industries;

  if(reqdata.industries) {
    selected_industries = reqdata.industries;
    // Industry1 = reqdata.industries[0];
    // Industry2 = reqdata.industries[1];
    // Industry3 = reqdata.industries[2];
  }
  if(reqdata.keyword) {
    KeyWord1 = reqdata.keyword[0];
    KeyWord2 = reqdata.keyword[1];
  }
  if(reqdata.include) {
    Intangible1 = reqdata.include[0];
    Intangible2 = reqdata.include[1];
  }
  if(reqdata.exclude) {
    IntangibleX1 = reqdata.exclude[0];
    IntangibleX2 = reqdata.exclude[1];
  }

  if(reqdata.year) {
    Year1 = reqdata.year[0];
    Year2 = reqdata.year[1];
  }
  
  retRightTrans = 0;

  A = 0;
  B1 = 0;
  B2 = 0;
  C = 0;
  D1 = 1;
  D2 = 1;
  Y1 = 0;
  Y2 = 0;
  P = 1;
  //checking industry
  if(compareIndustries(Industry,selected_industries))
    A = 1;
  if(Industry1 == "ALL" || Industry2 == "ALL" || Industry3 == "ALL")
    A = 1;

  //checking keyword / one keyword
  if(KeyWord1 != 'NA' && KeyWord1 != '')
    C = Discr == undefined ? 0 : Discr.indexOf(KeyWord1) + 1;
  if(KeyWord2 != 'NA' && KeyWord2 != '')
    C = Discr == undefined ? 0 : C + Discr.indexOf(KeyWord2) + 1;
  if((KeyWord1 == 'NA' || KeyWord1 == '') && (KeyWord2 == 'NA' || KeyWord2 == ''))
    C = 1;

  //checking intangible to include
  if((Intangible1 != 'NA' && Intangible1 != undefined ) || (Intangible2 != 'NA' && Intangible2 != undefined )) {
    for(j=0; j<=5; j++) {
      if(Cells(sheet, i, 17 + j * 4) == Intangible1)
        B1++;
      if(Cells(sheet, i, 17 + j * 4) == Intangible2)
        B2++;
      if(Intangible1 == 'NA' || Intangible1 == undefined)
        B1 = 1;
      if(Intangible2 == 'NA' || Intangible2 == undefined)
        B2 = 1;
    }
  } else {
    B1 = 1;
    B2 = 1;
  }

  //checking intangible tp exclude
  if((IntangibleX1 != "NA" && IntangibleX1 != undefined) || (IntangibleX2 !="NA" && IntangibleX2 != undefined)) {
    for(j=0; j<=5; j++) {
      if(Cells(sheet, i, 17 + j * 4) == IntangibleX1)
        D1 = 0;
      if(Cells(sheet, i, 17 + i *4)  == IntangibleX2)
        D2 = 0;
      if(IntangibleX1 == "NA" || IntangibleX1 == undefined)
        D1 = 1;
      if(IntangibleX2 == "NA" || IntangibleX2 == undefined)
        D2 = 1;
    }
  } else {
    D1 = 1;
    D2 = 1;
  }

  if((Year1 != "NA" && Year1 != undefined) || (Year2 != "NA" && Year2 != undefined)) {
    if((Year == Year1) || (Year == Year2)) {
      Y1 = 1;
      Y2 = 1;
    } 
    if((Year != Year1) && (Year != Year2)) {
      Y1 = 0;
      Y2 = 0;
    } 
  }

  if(reqdata.preliminary == "NA" && reqdata.preliminary == undefined) {
    if(Cells(sheet, i, 45) == 'Preliminary')
      P = 0;
  }
  
  if(A * B1 * B2 * C * D1 * D2 * Y1 * Y2 * P > 0)
    retRightTrans = 1;

  return retRightTrans;
}

export default router;
