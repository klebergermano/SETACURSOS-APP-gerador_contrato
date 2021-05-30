const { ipcRenderer, remote } = require("electron");
const form = document.querySelector("#form_contrato");
form.addEventListener("submit", sendForm);

const btnRespAluno = document.querySelector('#label_checkbox_resp_aluno');
btnRespAluno.addEventListener('click', checkboxRespAluno);


function checkboxRespAluno(e){
 e.target.classList.toggle("active");
 let block_aluno = document.querySelector('#block_aluno');
 let fieldset_aluno = document.querySelector('#fieldset_aluno');

if(e.target.classList.contains('active')){
  let alunoInput = document.querySelector('#aluno_nome');
  e.target.reset;
  console.log(); 
  alunoInput.value = 'IDEM';
  fieldset_aluno.classList.add("aluno_off")

}else{

  fieldset_aluno.classList.remove("aluno_off")
}
}



function sendForm(e) {
  e.preventDefault();

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


  };

  result = new Promise((resolve, reject) => {
    let res = ipcRenderer.invoke("submit", data);

    if (res) {
      alert("Contrato gerado com sucesso!");
      resolve(res);
    } else {
      reject();
      alert("Ouve um erro! tente novamente");
    }
  });
}