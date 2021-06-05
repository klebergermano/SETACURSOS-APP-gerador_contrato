const { ipcRenderer, remote, NodeEventEmitter } = require("electron");
const VMasker = require("vanilla-masker");
const form = document.querySelector("#form_contrato");
form.addEventListener("submit", sendForm);

//Botão checkbox de seta Responsável como Aluno
const btnRespAluno = document.querySelector("#label_checkbox_resp_aluno");
btnRespAluno.addEventListener("input", checkboxRespAluno);

const btnCombo = document.querySelector("#label_check_combo");
btnCombo.addEventListener("input", comboTextarea);

//Curso Inputs
const cursoSelect = document.querySelector("#curso_nome");
cursoSelect.addEventListener("change", insertCursoInfo);

let valor = document.querySelector("#curso_valor");
let modulos = document.querySelector("#curso_modulos");
let duracao = document.querySelector("#curso_duracao");
let parcelas = document.querySelector("#curso_parcelas");
let vencimento = document.querySelector("#curso_vencimento");
let inicio = document.querySelector("#curso_inicio");
let data_contrato = document.querySelector("#curso_data_contrato");

//Insere a data atual nos campos de data e o dia do vencimento.
let fullDate = new Date();
let dia = String(fullDate.getDate()).padStart(2, "0");
let mes = String(fullDate.getMonth() + 1).padStart(2, "0");
let ano = String(fullDate.getFullYear()).padStart(2, "0");


let today = ano + "-" + mes + "-" + dia;
data_contrato.value = today;
inicio.value = today;
vencimento.value = dia;

//Geras as mascaras dos campos usando o vanilla-masker
VMasker(document.querySelector("#curso_valor")).maskMoney();
VMasker(document.querySelector("#resp_cpf")).maskPattern("999.999.999-99");
VMasker(document.querySelector("#resp_rg")).maskPattern("99.999.999-S");
VMasker(document.querySelector("#aluno_rg")).maskPattern("99.999.999-S");

//Insere as informações dos cursos nos inputs baseado em qual curso for selecionado.

function comboTextarea(e){
let comboTextArea = document.querySelector('#combo_textarea');
comboTextArea.innerHTML = 'O RESPONSÁVEL recebera desconto de  R$40,00 em cada parcela, onde o valor'+
'passará a ser R$ 50,00 pelo periodo estipulado, refente ao COMBO dos cursos "Informática" '+
'e "Inglês Completo", *Desconto válido somente enquanto o ALUNO(a) frequentar os 2 Cursos ' +
'(O valor das parcelas voltará a sua totalidade caso o ALUNO(a) conclua ou desista de um dos cursos).';
            

}

function insertCursoInfo(e) {
  var select = document.getElementById("curso_nome");
  var curso = select.options[select.selectedIndex].getAttribute("name");

  const setCursoInfo = new Promise((resolve, reject) => {
    switch (curso) {
      case "IFB":
        cursoInfo = {
          modulos: "Introdução a Informática, Dispositivos Eletrônicos, Pacote Office Básico, Windows Básico, Digitação, Introdução ao Hardware, Redes Básico, Internet.",
          valor: "90,00",
          duracao: "6",
          parcelas: "6",
        };
        break;
      case "IFC":
        cursoInfo = {
          modulos: "Introdução a Informática, Dispositivos, Pacote Office, Instalação de Programas, Atualização e Formatação, Windows, Digitação, Hardware, Redes, Internet, Backup e Segurança, Gerenciamento de Dados.",
          valor: "90,00",
          duracao: "12",
          parcelas: "12",
        };
        break;
      case "IGB":
        cursoInfo = {
          modulos: "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
          valor: "120,00",
          duracao: "12",
          parcelas: "12",
        };
        break;
      case "IGM":
        cursoInfo = {
          modulos: "Vocabulário, Pronunciação, Gramática.",
          valor: "120,00",
          duracao: "12",
          parcelas: "12",
        };
      case "IGK1":
        cursoInfo = {
          modulos: "Intermediário, Pré Avançado.",
          valor: "120,00",
          duracao: "12",
          parcelas: "12",
        };

      case "IGK2":
        cursoInfo = {
          modulos: "Intermediário, Pré Avançado.",
          valor: "120,00",
          duracao: "12",
          parcelas: "12",
        };

      case "IGK3":
        cursoInfo = {
          modulos: "Intermediário, Pré Avançado.",
          valor: "120,00",
          duracao: "12",
          parcelas: "12",
        };
        break;
      case "IGA":
        cursoInfo = {
          modulos: "Avançado.",
          valor: "120,00",
          duracao: "12",
          parcelas: "12",
        };
        break;
      case "EXA":
        cursoInfo = {
          modulos: "Avançado.",
          valor: "140,00",
          duracao: "6",
          parcelas: "6",
        };
        break;
      case "BDB":
        cursoInfo = {
          modulos: "Avançado",
          valor: "140,00",
          duracao: "6",
          parcelas: "6",
        };
        break;
      case "RFE":
        cursoInfo = {
          modulos: "Avançado",
          valor: "100,00",
          duracao: "3",
          parcelas: "3",
        };
        break;
    }

    resolve(cursoInfo);
  });

  setCursoInfo.then((res) => {
    valor.value = res.valor;
    duracao.value = res.duracao;
    parcelas.value = res.parcelas;
    modulos.value = res.modulos;
  });
}

//Remove e reinsere o aluno usando css transition em ".aluno_off"
function checkboxRespAluno(e) {
  e.target.parentElement.classList.toggle("active");

  let fieldset_aluno = document.querySelector("#fieldset_aluno");
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

  let dia = String(conclusao.getDate()+1).padStart(2, "0");
  let mes = String(conclusao.getMonth() + 1).padStart(2, "0");
  let ano = String(conclusao.getFullYear()).padStart(2, "0");


let f_conclusao = ano+'-'+mes+'-'+dia;



  let data = {
    resp_nome: e.target.resp_nome.value,
    resp_end: e.target.resp_end.value,
    resp_numero: e.target.resp_numero.value,
    resp_bairro: e.target.resp_bairro.value,
    resp_cep: e.target.resp_cep.value,
    resp_cpf: e.target.resp_cpf.value,
    resp_rg: e.target.resp_rg.value,
    resp_cel: e.target.resp_cel.value,
    resp_tel: e.target.resp_tel.value,

    aluno_nome: e.target.aluno_nome.value,
    aluno_end: e.target.aluno_end.value,
    aluno_numero: e.target.aluno_numero.value,
    aluno_parentesco: e.target.aluno_parentesco.value,
    aluno_bairro: e.target.aluno_bairro.value,
    aluno_cep: e.target.aluno_cep.value,
    aluno_rg: e.target.aluno_rg.value,
    aluno_cel: e.target.aluno_cel.value,
    aluno_tel: e.target.aluno_tel.value,

    curso_nome: e.target.curso_nome.value,
    curso_modulos: e.target.curso_modulos.value,
    curso_valor: e.target.curso_valor.value,
    curso_parcelas: e.target.curso_parcelas.value,
    curso_duracao: e.target.curso_duracao.value,
    curso_vencimento: e.target.curso_vencimento.value,
    curso_inicio: e.target.curso_inicio.value,
    curso_conclusao: f_conclusao,

    curso_data_contrato: e.target.curso_data_contrato.value,
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
    
    document.querySelector('#loading_contrato').style.display = 'block';
    if (res) {
      resolve(res);
      
    } else {
      reject();
      //alert("Ouve um erro! tente novamente");
    }
  });

  result.then(()=>{
    document.querySelector('#loading_contrato').style.display = 'none';

  });
}
       