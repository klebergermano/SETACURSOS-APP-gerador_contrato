const InsertInputValue = require('./InsertInputValue');
//Insere Data nos inputs, aceita strings no formato "MM-DD-YYYY" insere o formato "YYYY-MM-DD";
function InsertInputDateValue(date, target) {
    let d = new Date(date);
    let day = String(d.getDate()).padStart(2, "0");
    let month = String(d.getMonth() + 1).padStart(2, "0");
    let year = String(d.getFullYear()).padStart(2, "0");
    let f_date = year + "-" + month + "-" + day;
    InsertInputValue(f_date, target);
  }

module.exports = InsertInputDateValue;