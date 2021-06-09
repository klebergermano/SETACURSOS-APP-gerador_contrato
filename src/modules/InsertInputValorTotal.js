const InsertInputValue = require('./InsertInputValue');

//Soma valores decimais em string ex.: "9,99" + "70,45", retorna string formatada "99,99".
function addClassNameElement(className, target) {
    let element = document.querySelector(target);
    element.classList.add(className);
  }
  
  function removeClassNameElement(className, target) {
    let element = document.querySelector(target);
    element.classList.remove(className);
  }
  
function SumStringDecimal(value1, value2) {
    let v1 = value1.replace(",", "").replace(".", "");
    let v2 = value2.replace(",", "").replace(".", "");
    let res = "" + (v1 - v2);
    if (res.search("-")) {
      removeClassNameElement("red", "#curso_total");
    } else {
      addClassNameElement("red", "#curso_total");
    }
    let t = VMasker.toMoney(res, { showSignal: true });
    return t;
  };

  //Exported Module
function InsertInputValorTotal() {
    let valor_total = SumStringDecimal(valor.value, desconto.value);
    InsertInputValue(valor_total, "#curso_total");
  }
  
  module.exports = InsertInputValorTotal;