const modulos = document.querySelector("#curso_modulos");
const duracao = document.querySelector("#curso_duracao");
const parcelas = document.querySelector("#curso_parcelas");
const select = document.getElementById("curso_nome");
const comboCurso1 = document.querySelector("#combo_curso_1");
const cursosSelect2 = document.querySelector("#combo_curso_2");

const InsertComboTextarea = require("./InsertComboTextarea");

function selectCursoInfo(nomeCurso) {
  let cursos = {
    IFP: {
      nome: "Informática Pratica",
      modulos:
        "Introdução a Informática, Dispositivos, Pacote Office," +
        "Instalação de Programas, Atualização e Formatação, Windows, " +
        "Digitação, Hardware, Redes, Internet, " +
        "Backup e Segurança, Gerenciamento de Dados.",
      valor: "90,00",
      duracao: "12",
      parcelas: "12",
    },

    IFPRO: {
      nome: "Informática Profissional",
      modulos:
        "Introdução a Informática, Dispositivos, Pacote Office, " +
        "Instalação de Programas, Atualização e Formatação, Windows," +
        "Digitação, Hardware, Redes, Internet, Backup e Segurança, " +
        "Gerenciamento de Dados, Inglês Instrumental, Introdução ao Banco de Dados.",
      valor: "90,00",
      duracao: "12",
      parcelas: "12",
    },

    IFC: {
      nome: "Informática Completo",
      modulos:
        "Introdução a Informática, Dispositivos, Pacote Office," +
        "Atualização e Formatação, Instalação de Programas," +
        "Windows, Redes, Digitação, Hardware, Internet, Backup e Segurança," +
        "Gerenciamento de Dados, Inglês Instrumental." +
        "#Lógica de Programação, HTML, CSS, JS, Photoshop.",
      valor: "90,00",
      duracao: "12",
      parcelas: "12",
    },
    IFK: {
      nome: "Informática Completo",
      modulos:
        "Introdução a Informática, Dispositivos, " +
        "Pacote Office, Instalação de Programas, Windows, " +
        "Digitação, Hardware, Internet, Programação KIDS.",
      valor: "90,00",
      duracao: "6",
      parcelas: "6",
    },

    IGM: {
      nome: "",
      modulos:
        "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },
    IGA: {
      nome: "",
      modulos:
        "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },

    IGK1: {
      nome: "",
      modulos:
        "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },

    IGK2: {
      nome: "",
      modulos:
        "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },

    IGK3: {
      nome: "",
      modulos:
        "Básico, Pré Intermediário, Gramática, Vocabulário, Pronunciação 1.",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },

    EXA: {
      nome: "",
      modulos:
        "Atalhos, Funções de Lógica C, Indice mais Corresp, Tabela Dinâmica, Formatação Condicional, " +
        "Gráfico Dinâmico, Validação de Dados, Macro, Solver, Ahead, Atingir Meta, Vínculos," +
        "Imprimir Documentos, Importação de Banco de Dados, Importação e Exportação de Dados," +
        "Segurança de Planilhas, Dashboard, Auditoria, Hiperlink," +
        "Funções Aninhadas, Funções de Texto, Funções de Data e Hora, Funções de Pesquisa," +
        "Funções Financeiras ",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },

    BDB: {
      nome: "",
      modulos:
        "Introdução a Banco de Dados, Banco de Dados Relacional, " +
        "DDL, DCL, DEL DQL, FN1, FN2, FN3, Pesquisa Avançada.",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },

    DWB: {
      nome: "",
      modulos:
        "Lógica de Programação, HTML, CSS, Manipulação com JS, Photoshop, Wireframe.",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },
  };
  return cursos[nomeCurso];
}

function InsertCursoInfo(e) {
  let nomeCurso = select.options[select.selectedIndex].getAttribute("name");
  let cursoInfo = selectCursoInfo(nomeCurso);

  let selectOptions = cursosSelect2.querySelectorAll("option");
  selectOptions.forEach((e) => {
    e.removeAttribute("disabled");
  });

  let option = cursosSelect2.querySelectorAll(`[name='${nomeCurso}']`)[0];
  option.setAttribute("disabled", "true");

  valor.value = cursoInfo.valor;
  duracao.value = cursoInfo.duracao;
  parcelas.value = cursoInfo.parcelas;
  modulos.value = cursoInfo.modulos;
  comboCurso1.value = cursoInfo.nome;
  InsertInputValorTotal();
  InsertComboTextarea();
}
module.exports = InsertCursoInfo;
