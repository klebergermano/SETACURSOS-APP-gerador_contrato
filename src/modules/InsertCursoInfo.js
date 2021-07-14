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
      nome: "Informática Prática",
      modulos:
      "Introdução a Informática, Dispositivos, Pacote Office, Instalação de Programas, Atualização e Formatação, "+ 
       "Windows, Digitação, Hardware, Redes, Internet, Backup e Segurança, Gerenciamento de Dados.",
      valor: "90,00",
      duracao: "12",
      parcelas: "12",
    },

    IFPRO: {
      nome: "Informática Profissional",
      modulos:
      "Introdução a Informática, Dispositivos, Pacote Office, Instalação de Programas, Atualização e Formatação, Windows, "+ 
      "Digitação, Hardware, Redes, Internet, Backup e Segurança, Gerenciamento de Dados, Inglês Instrumental, Introdução a Banco de Dados.",
      valor: "90,00",
      duracao: "12",
      parcelas: "12",
    },

    IFC: {
      nome: "Informática Completo",
      modulos:
        "Introdução a Informática, Dispositivos, Pacote Office, Atualização e Formatação, Instalação de Programas, Windows, Redes, Digitação, "+ 
        "Hardware, Internet, Backup e Segurança, Gerenciamento de Dados, Inglês Instrumental, Lógica de Programação e Introdução a: HTML, CSS, JS, Photoshop.",
      valor: "90,00",
      duracao: "12",
      parcelas: "12",
    },
    IFK: {
      nome: "Informática KIDS",
      modulos:
        "Introdução a Informática, Dispositivos, Pacote Office, Instalação de Programas, Windows, Digitação, Hardware, Internet, Programação KIDS.",
      valor: "90,00",
      duracao: "12",
      parcelas: "12",
    },
    IGB: {
      nome: "Inglês Básico",
      modulos:
        "Básico 1 (o aluno terá o primeiro contato com o idioma, abecedário, numerais, vocabulário baseado no seu dia a dia e aprenderá a usar frases simples). "+ 
        "Básico 2 (o aluno será capaz de usar frases e pequenos diálogos, compreendendo mais sobre a gramática e a como trabalhar com tempos verbais simples).",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },

    IGI: {
      nome: "Inglês Intermediário",
      modulos:
        "Intermediário 1 (o aluno começará a se expressar com mais independência, compreendera textos mais comuns além de ser introduzido a outros tempos verbais). "+
        "Intermediário 2 (o aluno conseguirá trabalhar com todos os tempos verbais, e a se expressar sobre assuntos variados).",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },
    IGA: {
      nome: "Inglês Avançado",
      modulos:
        "Avançado 1 (o aluno conseguira se expressar de forma mais natural sem depender do interlocutor, compreender textos e diálogos sobre diversos assuntos, e uma boa compreensão da gramática inglesa). "+
        "Avançado 2 (o aluno será capaz de falar de forma mais fluente, e conhecerá mais sobre a cultura inglesa, expressões idiomáticas, phrasal verbs, além de identificar diferentes sotaques e peculiaridades do idioma).",
        valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },

    IGK: {
      nome: "Inglês KIDS",
      modulos:
          "KIDS (a criança aprenderá de forma divertida, espontânea e prática, tendo o contato com a língua inglesa através de atividades, jogos, quadrinhos e dinâmicas onde ela começará a formar seu vocabulário, "+ 
          "tendo como base o alfabeto, cores, numerais, itens do dia-a-dia além das expressões bases do idioma). ",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },

    IGPT: {
      nome: "Inglês Pre-teen",
      modulos:
        "Pre-teen (o aluno será preparado para as próximas etapas do Inglês, onde terá seu vocabulário expandido, trabalhando as bases do idioma de forma dinâmica e interativa). ",
      valor: "120,00",
      duracao: "12",
      parcelas: "12",
    },


    EXA: {
      nome: "Excel Avançado",
      modulos:
        "Atalhos, Tabelas Dinâmicas, Gráficos Dinâmicos, Formatação Condicional, Validação de Dados, Macros, Segurança de Planilhas e Pastas de Trabalho, Hiperlinks, Dashboards, "+
        "Importação e Exportação de Dados do Excel e Banco de Dados, Vínculos, Solver, Atingir Meta, Funções Aninhadas. Funções de Lógica de Texto, Funções de Data e Hora, Funções Matemáticas, "+
        "Funções de Pesquisa, PROCC e PROCV.",
      valor: "140,00",
      duracao: "6",
      parcelas: "6",
    },

<<<<<<< HEAD
    BDBMySQL: {
=======
    BDBMYSQL: {
>>>>>>> 2c9da93dfec579f3ef802f3fc01b34f2d5678fb5
      nome: "Banco de Dados Básico MySQL",
      modulos:
        "Introdução a Banco de Dados, Banco de Dados Relacional, Introdução ao SQL, DDL, DML, DQL, DCL, Normalização de Dados, Introdução ao Workbench, Diagrama EER.",
      valor: "140,00",
      duracao: "6",
      parcelas: "6",
    },

    DWB: {
      nome: "Desenvolvimento WEB",
      modulos:
        "Lógica de Programação, Wireframes, HTML, CSS, Javascript, Photoshop.",
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
