const modulos = document.querySelector("#curso_modulos");
const duracao = document.querySelector("#curso_duracao");
const parcelas = document.querySelector("#curso_parcelas");
const select = document.getElementById("curso_nome");
const comboCurso1 = document.querySelector("#combo_curso_1");
const InsertComboTextarea = require("./InsertComboTextarea");

function InsertCursoInfo(e) {
    var curso = select.options[select.selectedIndex].getAttribute("name");
    const setCursoInfo = new Promise((resolve, reject) => {
      switch (curso) {
        case "IFB":
          cursoInfo = {
            nome: e.target.value,
            modulos:
              "Introdução a Informática, Dispositivos Eletrônicos, Pacote Office Básico, Windows Básico, Digitação, Introdução ao Hardware, Redes Básico, Internet.",
            valor: "90,00",
            duracao: "6",
            parcelas: "6",
          };
          break;
        case "IFC":
          cursoInfo = {
            nome: e.target.value,
            modulos:
              "Introdução a Informática, Dispositivos, Pacote Office, Instalação de Programas, Atualização e Formatação, Windows, Digitação, Hardware, Redes, Internet, Backup e Segurança, Gerenciamento de Dados.",
            valor: "90,00",
            duracao: "12",
            parcelas: "12",
          };
          break;
        case "IGB":
          cursoInfo = {
            nome: e.target.value,
            modulos:
              "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
            valor: "120,00",
            duracao: "12",
            parcelas: "12",
          };
          break;
        case "IGM":
          cursoInfo = {
            nome: e.target.value,
            modulos: "Vocabulário, Pronunciação, Gramática.",
            valor: "120,00",
            duracao: "12",
            parcelas: "12",
          };
        case "IGK1":
          cursoInfo = {
            nome: e.target.value,
            modulos: "Intermediário, Pré Avançado.",
            valor: "120,00",
            duracao: "12",
            parcelas: "12",
          };
  
        case "IGK2":
          cursoInfo = {
            nome: e.target.value,
            modulos: "Intermediário, Pré Avançado.",
            valor: "120,00",
            duracao: "12",
            parcelas: "12",
          };
  
        case "IGK3":
          cursoInfo = {
            nome: e.target.value,
            modulos: "Intermediário, Pré Avançado.",
            valor: "120,00",
            duracao: "12",
            parcelas: "12",
          };
          break;
        case "IGA":
          cursoInfo = {
            nome: e.target.value,
            modulos: "Avançado.",
            valor: "120,00",
            duracao: "12",
            parcelas: "12",
          };
          break;
        case "EXA":
          cursoInfo = {
            nome: e.target.value,
            modulos: "Avançado.",
            valor: "140,00",
            duracao: "6",
            parcelas: "6",
          };
        case "DWB":
          cursoInfo = {
            nome: e.target.value,
            modulos:
              "HTML, CSS,Lógica de Programação, Manipulação com JS, Ajustes de Imagem Photoshop, ",
            valor: "120,00",
            duracao: "12",
            parcelas: "12",
          };
          break;
        case "BDB":
          cursoInfo = {
            nome: e.target.value,
            modulos: "Avançado",
            valor: "140,00",
            duracao: "6",
            parcelas: "6",
          };
          break;
        case "RFE":
          cursoInfo = {
            nome: e.target.value,
            modulos: "Avançado",
            valor: "100,00",
            duracao: "3",
            parcelas: "3",
          };
          break;
      }
  
      resolve(cursoInfo);
    });

    setCursoInfo
    .then((res) => {
      valor.value = res.valor;
      duracao.value = res.duracao;
      parcelas.value = res.parcelas;
      modulos.value = res.modulos;
      comboCurso1.value = res.nome;
    })
    .then(() => {
      InsertInputValorTotal();
    })
    .then(() => {
      InsertComboTextarea();
    });

}
module.exports = InsertCursoInfo;
