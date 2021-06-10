const total = document.querySelector("#curso_total");
const desconto = document.querySelector("#curso_desconto");
const comboTextarea = document.querySelector("#combo_textarea");
const comboCurso1 = document.querySelector("#combo_curso_1");
const comboCurso2 = document.querySelector("#combo_curso_2");

function InsertComboTextarea() {
    comboTextarea.innerHTML =
      'O RESPONSÁVEL receberá desconto de R$ <span class="red">' +
      desconto.value +
      "</span> em cada parcela" +
      " referente ao pacote de cursos<b> (" +
      comboCurso1.value +
      "</b> + <b>" +
      comboCurso2.value +
      "</b>), " +
      'passando o valor das parcelas a R$ <span class="green"><b>' +
      total.value +
      "</b></span>, " +
      "*Desconto válido somente enquanto o ALUNO(a) frequentar os 2 Cursos. <br/>" +
      "(O valor das parcelas voltará a sua totalidade caso o ALUNO(a) conclua ou desista de um dos cursos).";
  }

module.exports = InsertComboTextarea;