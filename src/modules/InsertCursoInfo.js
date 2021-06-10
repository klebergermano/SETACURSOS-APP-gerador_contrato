const modulos = document.querySelector("#curso_modulos");
const duracao = document.querySelector("#curso_duracao");
const parcelas = document.querySelector("#curso_parcelas");
const select = document.getElementById("curso_nome");
const comboCurso1 = document.querySelector("#combo_curso_1");
const InsertComboTextarea = require("./InsertComboTextarea");

function selectCursoInfo(nomeCurso) {
  let cursos = {
    IFB: {
      nome: "Informática Básico",
      modulos:
        "Introdução a Informática, Dispositivos Eletrônicos, Pacote Office Básico, " +
        "Windows Básico, Digitação, Introdução ao Hardware, Redes Básico, Internet.",
      valor: "90,00",
      duracao: "6",
      parcelas: "6"
    },
    IFC: {
      nome: "Informática Completo",
      modulos:
        "Introdução a Informática, Dispositivos Eletrônicos, Pacote Office Básico, " +
        "Windows Básico, Digitação, Introdução ao Hardware, Redes Básico, Internet.",
      valor: "90,00",
      duracao: "6",
      parcelas: "6"
    },
   IGB : {
        nome: "",
        modulos:
          "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
        valor: "120,00",
        duracao: "12",
        parcelas: "12",
      },

      IGM : {
        nome: "",
        modulos:
          "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
        valor: "120,00",
        duracao: "12",
        parcelas: "12",
      },
      IGA : {
        nome: "",
        modulos:
          "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
        valor: "120,00",
        duracao: "12",
        parcelas: "12",
      },

      IGK1 : {
        nome: "",
        modulos:
          "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
        valor: "120,00",
        duracao: "12",
        parcelas: "12",
      },

      
      IGK2 : {
        nome: "",
        modulos:
          "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
        valor: "120,00",
        duracao: "12",
        parcelas: "12",
      },

      
      IGK3 : {
        nome: "",
        modulos:
          "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
        valor: "120,00",
        duracao: "12",
        parcelas: "12",
      },

      EXA : {
        nome: "",
        modulos:
          "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
        valor: "120,00",
        duracao: "12",
        parcelas: "12",
      },

      
      BDB : {
        nome: "",
        modulos:
          "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
        valor: "120,00",
        duracao: "12",
        parcelas: "12",
      },

      
      DWB : {
        nome: "",
        modulos:
          "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
        valor: "120,00",
        duracao: "12",
        parcelas: "12",
      },

  };
  return cursos[nomeCurso];
}

function InsertCursoInfo(e) {
    let nomeCurso = select.options[select.selectedIndex].getAttribute("name");
    let cursoInfo = selectCursoInfo("IFB");
console.log(cursoInfo)


    valor.value = cursoInfo.valor;
      duracao.value = cursoInfo.duracao;
      parcelas.value = cursoInfo.parcelas;
      modulos.value = cursoInfo.modulos;
      comboCurso1.value = cursoInfo.nome;
      InsertInputValorTotal();
      InsertComboTextarea();
  
}
module.exports = InsertCursoInfo;
