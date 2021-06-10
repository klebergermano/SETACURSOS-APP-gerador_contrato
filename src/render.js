const { ipcRenderer} = require("electron");
const VMasker = require("vanilla-masker");
const InsertInputDateValue = require('./modules/InsertInputDateValue');
const InsertInputValorTotal = require('./modules/InsertInputValorTotal');
const InsertCursoInfo = require('./modules/InsertCursoInfo');
const InputComboCheckbox= require('./modules/InputComboCheckbox');
const InsertComboTextarea = require("./modules/InsertComboTextarea");

//variáveis
const form = document.querySelector("#form_contrato");
const checkCombo = document.querySelector("#check_combo");
const valor = document.querySelector("#curso_valor");
const desconto = document.querySelector("#curso_desconto");
const comboTextarea = document.querySelector("#combo_textarea");
const vencimento = document.querySelector("#curso_vencimento");
const fieldset_aluno = document.querySelector("#fieldset_aluno");
const loadinContrato = document.querySelector("#loading_contrato");

//Listeners
form.addEventListener("submit", sendForm);

//input Resp Aluno
document.querySelector("#label_checkbox_resp_aluno")
.addEventListener("input", checkboxRespAluno); 

//Button Checkbox Combo
document.querySelector("#label_check_combo")
.addEventListener("input", InputComboCheckbox);

//Listener no nome do curso
document.querySelector("#curso_nome")
.addEventListener("change", InsertCursoInfo);

document.querySelector("#combo_curso_2")
.addEventListener("input", InsertComboTextarea);

valor.addEventListener("input", InsertInputValorTotal);
desconto.addEventListener("input", InsertInputValorTotal);
desconto.addEventListener("change", InsertComboTextarea);

//Mascaras
VMasker(valor).maskMoney();
VMasker(desconto).maskMoney();
VMasker(document.querySelector("#resp_cep")).maskPattern("99999-999");
VMasker(document.querySelector("#resp_cpf")).maskPattern("999.999.999-99");
VMasker(document.querySelector("#resp_rg")).maskPattern("99.999.999-S");
VMasker(document.querySelector("#aluno_rg")).maskPattern("99.999.999-S");
VMasker(document.querySelector("#aluno_cep")).maskPattern("99999-999");

//Insere a data corrente do dia como possível data do contrato.
InsertInputDateValue(new Date(), "#curso_data_contrato");
//Insere a data corrente do dia como possível inicio do curso.
InsertInputDateValue(new Date(), "#curso_inicio");
//Insere a dia atual como como possível dia de vencimento do curso.
vencimento.value = String(new Date().getDate()).padStart(2, "0");

//Remove e reinsere o aluno usando css transition em ".aluno_off"
function checkboxRespAluno(e) {
  e.target.parentElement.classList.toggle("active");
  if (e.target.parentElement.classList.contains("active")) {
    fieldset_aluno.classList.add("aluno_off");
  } else {
    fieldset_aluno.classList.remove("aluno_off");
  }
}

//Envia o objeto com as informações do formulário para a main stream index.js

function sendForm(e) {
  e.preventDefault();
  let conclusao = new Date(e.target.curso_inicio.value);
  conclusao.setMonth(
    conclusao.getMonth() + parseInt(e.target.curso_duracao.value)
  );
  let dia = String(conclusao.getDate() + 1).padStart(2, "0");
  let mes = String(conclusao.getMonth() + 1).padStart(2, "0");
  let ano = String(conclusao.getFullYear()).padStart(2, "0");
  let f_conclusao = ano + "-" + mes + "-" + dia;

const formData = [...e.target];
let formValues = {}; 
formData.forEach((element)=>{
  formValues[`${element.id}`] = element.value;
});

formValues.curso_combo = comboTextarea.innerHTML;
formValues.curso_conclusao =  f_conclusao;

  if (e.target.checkbox_resp_aluno.checked) {
    formValues.aluno_nome = "IDEM";
    data.aluno_end = "--//--";
    data.aluno_numero = "--//--";
    data.aluno_parentesco = "--//--";
    data.aluno_bairro = "--//--";
    data.aluno_cep = "--//--";
    data.aluno_rg = "--//--";
    data.aluno_cel = "--//--";
    data.aluno_tel = "--//--";
  }
console.log("formValues:", formValues);
  result = new Promise((resolve, reject) => {
    let res = ipcRenderer.invoke("submit", formValues);

    loadinContrato.style.display = "block";
    if (res) {
      resolve(res);
    } else {
      reject();
    }
  });
  result.then(() => {
    loadinContrato.style.display = "none";
  });
}
