//Insere as informações dos cursos nos inputs baseado em qual curso for selecionado.
const InsertComboTextarea = require("./InsertComboTextarea");
const comboCurso1 = document.querySelector("#combo_curso_1");
const comboCurso2 = document.querySelector("#combo_curso_2");
const combo_textarea = document.querySelector("#combo_textarea");
const checkCombo = document.querySelector("#check_combo");

function InputComboCheckbox(e) {
    if (!e.target.checked) {
      checkCombo.value = false;
      e.target.parentElement.classList.remove("check_combo_checked");
    } else {
      checkCombo.value = true;
      e.target.parentElement.classList.add("check_combo_checked");
    }
    comboTextarea(e);
  }
  
function comboTextarea(e) {
    if (e.target.checked) {
      combo_textarea.classList.remove("display_off");
      comboCurso2.parentElement.style.opacity = "1";
      comboCurso1.parentElement.style.opacity = "1";
      comboCurso1.style.color = "#444";
      comboCurso2.style.color = "#444";
      comboCurso2.style["pointer-events"] = "auto";
      InsertComboTextarea();
    } else {
      combo_textarea.classList.add("display_off");
      comboCurso1.parentElement.style.opacity = "0.5";
      comboCurso2.parentElement.style.opacity = "0.5";
      comboCurso1.style.color = "#f0f0f0";
      comboCurso2.style.color = "#fff";
      comboCurso2.style["pointer-events"] = "none";
    }
  }
  
  module.exports = InputComboCheckbox