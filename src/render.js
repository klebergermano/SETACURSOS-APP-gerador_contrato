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
const combo_textarea = document.querySelector("#combo_textarea");
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

function replaceToNonBreakSpaceHifen(info) {
  let res = info.replace(/(?<!,)\s/g, "&nbsp;").replace(/-/g, "&#8209;");
  return res;
}

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
  
  let data = {
    resp_nome: e.target.resp_nome.value,
    resp_end: e.target.resp_end.value,
    resp_numero: e.target.resp_numero.value,
    resp_bairro: replaceToNonBreakSpaceHifen(e.target.resp_bairro.value),
    resp_cep: replaceToNonBreakSpaceHifen(e.target.resp_cep.value),
    resp_cpf: replaceToNonBreakSpaceHifen(e.target.resp_cpf.value),
    resp_rg: replaceToNonBreakSpaceHifen(e.target.resp_rg.value),
    resp_cel: replaceToNonBreakSpaceHifen(e.target.resp_cel.value),
    resp_tel: replaceToNonBreakSpaceHifen(e.target.resp_tel.value),

    aluno_nome: e.target.aluno_nome.value,
    aluno_end: e.target.aluno_end.value,
    aluno_numero: e.target.aluno_numero.value,
    aluno_parentesco: e.target.aluno_parentesco.value,
    aluno_bairro: replaceToNonBreakSpaceHifen(e.target.aluno_bairro.value),
    aluno_cep: replaceToNonBreakSpaceHifen(e.target.aluno_cep.value),
    aluno_rg: replaceToNonBreakSpaceHifen(e.target.aluno_rg.value),
    aluno_cel: replaceToNonBreakSpaceHifen(e.target.aluno_cel.value),
    aluno_tel: replaceToNonBreakSpaceHifen(e.target.aluno_tel.value),

    curso_nome: replaceToNonBreakSpaceHifen(e.target.curso_nome.value),
    curso_modulos: e.target.curso_modulos.value,
    curso_valor: e.target.curso_valor.value,
    curso_parcelas: e.target.curso_parcelas.value,
    curso_duracao: e.target.curso_duracao.value,
    curso_vencimento: e.target.curso_vencimento.value,
    curso_inicio: e.target.curso_inicio.value,
    curso_conclusao: f_conclusao,

    curso_data_contrato: e.target.curso_data_contrato.value,
    curso_check_combo: checkCombo.value,
    curso_combo: combo_textarea.innerHTML,
    curso_obs: e.target.curso_obs.value,
  };

  if (e.target.checkbox_resp_aluno.checked) {
    data.aluno_nome = "IDEM";
    data.aluno_end = "--//--";
    data.aluno_numero = "--//--";
    data.aluno_parentesco = "--//--";
    data.aluno_bairro = "--//--";
    data.aluno_cep = "--//--";
    data.aluno_rg = "--//--";
    data.aluno_cel = "--//--";
    data.aluno_tel = "--//--";
  }

  result = new Promise((resolve, reject) => {
    let res = ipcRenderer.invoke("submit", data);

    loadinContrato.style.display = "block";
    if (res) {
      resolve(res);
    } else {
      reject();
      //alert("Ouve um erro! tente novamente");
    }
  });
  result.then(() => {
    loadinContrato.style.display = "none";
  });
}
