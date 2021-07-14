
function replaceToNonBreakSpaceHifen(info) {
  let res = info.replace(/(?<!,)\s/g, "&nbsp;").replace(/-/g, "&#8209;");
  return res;
}

function converteData(data) {
  let data_arr = data.split("-");
  let ano = data_arr[0];
  let mes = data_arr[1];
  let dia = data_arr[2];
  let f_data = dia + "/" + mes + "/" + ano;
  return f_data;
}
const TemplateContrato =(data)=>{
let curso;
switch(true){

case (/Informática/gmi).test(data.curso_nome) :  curso = 'Informática'
break; 
case (/Inglês/gmi).test(data.curso_nome) : curso = 'Inglês'
break;
case (/Excel/gmi).test(data.curso_nome) : curso = 'Excel'
break; 
case (/Banco/gmi).test(data.curso_nome) : curso = 'Banco de Dados'
break; 
case (/Escolar/gmi).test(data.curso_nome) : curso = 'Reforço Escolar'
break; 

default : 'NOP' 
}

let data_contrato = data.curso_data_contrato.split('-');
let dia_contrato = data_contrato[2];
let mes_contrato = data_contrato[1];
let ano_contrato = data_contrato[0];
let f_mes_contrato; 

switch(mes_contrato){
  case '01' : f_mes_contrato = 'Janeiro' 
  break;
  case '02' : f_mes_contrato = 'Fevereiro' 
  break;
  case '03' : f_mes_contrato = 'Março' 
  break;
  case '04' : f_mes_contrato = 'Abril' 
  break;
  case '05' : f_mes_contrato = 'Maio' 
  break;
  case '06' : f_mes_contrato = 'Junho' 
  break;
  case '07' : f_mes_contrato = 'Julho' 
  break;
  case '08' : f_mes_contrato = 'Agosto' 
  break;
  case '09' : f_mes_contrato = 'Setembro' 
  break;
  case '10' : f_mes_contrato = 'Outubro' 
  break;
  case '11' : f_mes_contrato = 'Novembro' 
  break;
  case '12' : f_mes_contrato = 'Dezembro' 
  break;

};
let data_contrato_extenso = "São Paulo - SP, "+dia_contrato+' de '+f_mes_contrato+' de '+ ano_contrato;



   return( `
<!DOCTYPE html>
<html lang="pt">
  <head>

    <title>Contrato</title>
    <link rel="stylesheet" href="style.css" />
    <style>

body{
    background:#ccc;
}

*{ margin: 0px;  padding:0px;  box-sizing: border-box; font-size:12pt;}
.paginacao{
    color:#666;
    position: absolute;
    bottom:40px;
    right:40px;
}
.folha{
    text-align: justify;
    position:relative;
    font-family: Arial, Helvetica, sans-serif;
    width:21cm;
    height:29.7cm;
    font-size:12px;
    background:#fff;
    margin: 0 auto;
    padding:40px;
   
   
}
h1, h2, h3{ text-align: center; margin: 20px 0px;}

h1{
    font-size:14pt; margin-bottom:40px;
    padding:0px;
    margin-top:-10px !important;
    text-transform: uppercase;
}
 h2{
    font-size: 12pt;
    margin-bottom:20px;
}

em{font-weight: bold; color:#333399;}
p{
    line-height: 22px;
    margin-bottom:20px;
}

.text_compac_light{ letter-spacing: -0.2pt;}
.text_compac{ letter-spacing: -0.5pt;}
.text_compac_heavy{ letter-spacing: -1pt;}



#assinaturas div{
    width:50%; float:left;
    overflow: hidden;
    text-align: center;

}
#assinaturas div span{
  padding-bottom:10px;
    display:block;
}

#folha_4{
  max-height:29.6cm !important;
  overflow:hidden !important;
}
#folha_5{
  height:29.6cm;
}
#folha_5 p {
  line-height:22px !important;
  margin-bottom:5px !important;
  margin-top:0px !important;
}
    </style>
  </head>
  <body>
    <div class="folha" id="folha_1">
      <h1>
        <b>CONTRATO</b> DE PRESTAÇÃO DE SERVIÇOS DE ENSINO DE ${curso}
      </h1>

      <div id="indentificacao_contratantes">
        <h2>IDENTIFICAÇÃO DAS PARTES CONTRATANTES</h2>

<p>
  <span class='text_compac_light'><b>CONTRATANTE:</b> <em>${data.resp_nome}</em>, 
  portador do R.G.:&nbsp;<em>${replaceToNonBreakSpaceHifen(data.resp_rg)}</em>,
  e CPF:&nbsp;<em>${replaceToNonBreakSpaceHifen(data.resp_cpf)}</em>,
  residente e domiciliado&nbsp;</span> em:&nbsp;<em>${data.resp_end}</em>, 
  número:&nbsp;<em>${replaceToNonBreakSpaceHifen(data.resp_numero)}</em>, 
  bairro:&nbsp;<em>${replaceToNonBreakSpaceHifen(data.resp_bairro)}</em>, 
  CEP:&nbsp;<em>${replaceToNonBreakSpaceHifen(data.resp_cep)}</em>, na Cidade de São Paulo, no Estado de São Paulo; 
  responsável pelo <b>ALUNO(a):</b>&nbsp;<em>${data.aluno_nome}</em>, 
  que possui vínculo parental de: <em>${data.aluno_parentesco}</em>, 
 portador do R.G.:&nbsp;<em>${data.aluno_rg}</em>, 
 residente e domiciliado em:&nbsp;<em>${data.aluno_end}</em>,
 número:&nbsp;<em>${replaceToNonBreakSpaceHifen(data.aluno_numero)}</em>, 
 bairro:&nbsp;<em>${replaceToNonBreakSpaceHifen(data.aluno_bairro)}</em>, 
 CEP:&nbsp;<em>${replaceToNonBreakSpaceHifen(data.aluno_cep)}</em>,
na Cidade de São Paulo, no Estado de São Paulo.
</p>

<p>
  <b>CONTRATADA:</b> SETA CURSOS M.E, com sede na Rua Gustavo Bacarisas, nº 8 - Sala 3, Jardim Zilda, CEP: 04856-382, no Estado de 
  São Paulo - SP, <span class='text_compac'>inscrita no C.N.P.J. sob o nº 36.784.174/0001&#8209;30</span>,
   neste ato representada pelo seu responsável: Cristian Germano. 
</p>
<p>
  As partes acima identificadas como CONTRATANTE E CONTRATADA têm, entre si, justo e acertado o presente <em>Contrato de Prestação de
  Serviços de Ensino de ${curso}</em>, que se regerá pelas cláusulas seguintes e pelas condições descritas no presente. 
</p>
      </div><!--indentificacao_contratantes-->
      <div id='objeto_contrato'>
        <h2>DO OBJETO DO CONTRATO</h2>
        <p>Cláusula 1ª. O presente contrato tem como OBJETO, a prestação, pela CONTRATADA, ao CONTRATANTE, 
          dos serviços de ensino de Informática ao ALUNO(a) pelo período de <em>12 meses </em>onde será ministrado o curso:
          <em>${replaceToNonBreakSpaceHifen(data.curso_nome)}</em>, sendo este composto pelos módulos:<em> ${data.curso_modulos}</em> 
      </div><!--objecto_contrato-->

      <div id='das_aulas'>
        <h2>DAS AULAS</h2>
        <p>
          Cláusula 2ª. As aulas serão ministradas 2 vezes por semana, 2 horas por aula, totalizando assim <b>4&nbsp;horas semanais</b> (ressalvando o 
          caso de feriados ou eventos de força maior sendo estes devidamente compensados em horário e dia a serem acertados posteriormente), tendo os dias e 
          horários acertados anexados a este documento via o <b>requerimento de matrícula</b>, podendo este ser modificado posteriormente estando as duas partes em comum acordo.
        </p>
      </div>

      <div id='obrigacoes_contratada'>
        <h2>DAS OBRIGAÇÕES DA CONTRATADA</h2>
<p>
        Cláusula 3ª. A CONTRATADA se compromete  a cumprir a programação prevista no objeto deste contrato, ressalvando-se que a orientação técnica sobre a prestação dos serviços é de inteira responsabilidade da CONTRATADA, especialmente em relação a indicação de professores, a modalidade de ensino e a orientação didático-pedagógica, razão pela qual, poderá a CONTRATADA a qualquer tempo proceder alterações nas atividades aqui mencionadas, sendo de responsabilidade da CONTRATADA a prévia comunicação ao CONTRATANTE por qualquer meio de comunicação disponível.
                                           
      
      </p>     
     
      </div>
      <span class='paginacao'> Página 1 de 4</span>
    </div><!--folha_1-->

<!-------------------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------------------->

    <div class="folha" id="folha_2">
      <p>
        Cláusula 4ª. A CONTRATADA se compromete a fornecer ao ALUNO(a) todos os meios necessários para a execução do curso de maneira plena dentro de suas dependências, onde o ALUNO(a) deverá ter acesso a todos os materiais necessários para a conclusão de suas tarefas durante o período de suas aulas.
      </p>
      <div id='obrigacoes_contratante'>
        <h2>DAS OBRIGAÇÕES DA CONTRATANTE</h2>
        <p>
          Cláusula 5ª. A CONTRATANTE obriga-se a ressarcir quaisquer danos de natureza material causados à CONTRATADA, por dolo ou culpa do ALUNO(a), bem como aqueles de natureza material ou moral causados, nas dependências da CONTRATADA, contra professor, funcionário, aluno ou qualquer outra pessoa física.
        </p>
        <p>
          Cláusula 6ª. A CONTRATANTE obriga-se a Informar à CONTRATADA toda e qualquer alteração de seus endereços tanto residencial quanto eletrônico (e-mail), bem como números telefônicos e outros meios de contato fornecidos pelo CONTRATANTE, sempre que isso ocorrer, durante a vigência do presente instrumento e enquanto perdurar alguma obrigação ainda não adimplida por qualquer das partes.
        </p>
        <p>
          Cláusula 7ª. A CONTRATANTE comprometesse a instruir e se responsabilizar para que o ALUNO(a) não grave, reproduza ou disponibilize aulas que eventualmente tenham sido gravadas sem autorização da CONTRATADA, sob pena de responder pela violação de direitos autorais, sem prejuízo de outras sanções relacionadas ao ilícito.
        </p>
        <p>
          Cláusula 8ª.  A CONTRATANTE comprometesse a instruir e garantir que ALUNO(a) assista às aulas com urbanidade e respeito aos demais colegas, professores e funcionários.                
        </p>

      </div>
      <div id='frequencia'>
<p>
  Cláusula 9ª. A fim de que possa receber o certificado ao final do curso, o ALUNO(a) não deverá se ausentar por mais de 25% (vinte e cinco por cento) das aulas. 
</p>
      </div>
      <div id='pagamento'>
        <h2>
          DO PAGAMENTO
          </h2>
        <p>
          
Cláusula 10ª. Pelos serviços prestados, o CONTRATANTE pagará à CONTRATADA a quantidade de 
<em>${data.curso_parcelas}</em>
parcelas de <em>R$ ${replaceToNonBreakSpaceHifen(data.curso_valor)},</em> a serem pagas até o dia: 
<em>${replaceToNonBreakSpaceHifen(data.curso_vencimento)}</em> de cada mês, sendo estas parcelas
 referentes a cada mês de duração do curso <em>${replaceToNonBreakSpaceHifen(data.curso_nome)}</em>. 
        </p>
        <p>
          Cláusula 11ª. A ausência do ALUNO(a) às atividades presenciais, bem como a falta do cumprimento, pelo mesmo, das demais obrigações acadêmicas de sua responsabilidade, não exime a CONTRATANTE do pagamento das mensalidades que se vencerem durante esse período. 
        </p>
        <p>
          Cláusula 12ª. A matrícula, ato que estabelece o vínculo entre as partes, dar-se-á com o preenchimento do Requerimento de Matrícula e o pagamento da primeira parcela mensal do curso neste documento especificado.
        </p>
      </div>
      <span class='paginacao'> Página 2 de 4</span>
<div>

</div>
</div><!--folha_2-->
<!-------------------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------------------->

<div class="folha" id="folha_3">
  <div id='rescisao'>
    <h2>DA RESCISÃO</h2>
<p>
Cláusula 13ª. O presente contrato poderá ser rescindido pelo CONTRATANTE, mediante pedido formal endereçado à 
CONTRATADA, podendo também ser rescindido pela CONTRATADA em caso de móvitos de força maior, incluindo, mas não se restringindo à mudança ou fechamento de unidade, inadequação do ALUNO, cancelamento de curso, ou quaisquer 
outros motivos que a CONTRATADA julgue pertinentes, não devendo a CONTRADA sofrer quaisquer ônus ou ressarcimentos das parcelas até então efetuadas pelo CONTRATANTE.
</p>
<p>
  Cláusula 14ª. O pedido de rescisão, <b>antes do início das aulas</b> ou <b>após o início das aulas</b>, mediante pedido formal nos termos previstos 
  acima, não comportará a restituição da matricula, parcelas ou quaisquer valores pagos até 
  o momento pelo CONTRATANTE, a título de remuneração dos custos operacionais despendidos pela CONTRATADA.     
</p>
<p>
  Cláusula 15ª. Enquanto não apresentado o pedido formal de cancelamento, o CONTRATANTE continuará obrigado aos pagamentos pelas aulas ministradas, sem exceção, não ocorrendo, por parte da CONTRATADA, reembolsos de valores retroativos anteriores à data de comunicação da rescisão relacionados às aulas.
</p>
<p>
  Cláusula 16ª. O presente instrumento também poderá ser rescindido caso o CONTRATANTE deixe de pagar a mensalidade após 30 dias do vencimento. 
</p>
<p>
  Cláusula 17ª. No ato de rescindir o contrato a CONTRATANTE devera quitar quaisquer parcelas em atraso além de qualquer ônus acometido a CONTRATADA. 
</p>
  </div id='prazo'>
  <h2>DO PRAZO</h2>
  <p>
    Cláusula 18ª. O presente contrato terá prazo de <em>${data.curso_duracao} meses; </em> 
    Iniciando-se no dia <em>${converteData(data.curso_inicio)}</em>, e terminado no dia <em>${converteData(data.curso_conclusao)}</em>. 
    Podendo este período ser estendido ou ajustado caso ambas as partes, CONTRATADA e CONTRATANTE, 
    estejam de comum acordo, recebendo este documento um novo anexo com o justo e acertado.
  </p>
  <div>
<div id='condicoes_gerais'>
  <h2>CONDIÇÕES GERAIS</h2>
    <p>
      Cláusula 19ª. Ao final deste contrato, o ALUNO(a) receberá um certificado de conclusão 
do curso <em>${replaceToNonBreakSpaceHifen(data.curso_nome)}</em>.               

    </p>
    <p>
      
Cláusula 20ª. Não se incluem neste contrato os serviços de reforço e reciclagem. 

    </p>
    
    <p>
    Cláusula 21ª.  O CONTRATANTE autoriza a CONTRATADA, desde já, em caráter irretratável e 
    irrevogável, a utilizar e veicular sua imagem e a do ALUNO(a) através de fotografias ou 
    vídeos realizadas nas dependências da CONTRATADA para fins de publicidade interna ou externa 
    em materiais impressos, redes sociais, websites e veículos de comunicação, 
    sem qualquer ônus ou limite de número de inserções e reproduções para a CONTRATADA.
    </p>



</div>
  </div>
  <span class='paginacao'> Página 3 de 4</span>
  </div><!--folha_3-->
  
<!------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------->
<div class="folha" id="folha_4">
  <p>
    Cláusula 22ª.  CONTRATADA e CONTRATANTE possuem ainda em comum acordo os seguintes detalhes firmados: 
    <em>${ data.check_combo ==='true' ? data.curso_combo + "<br/>": "" }</em>
    <em>${data.curso_obs}</em>
  </p>
  <h2>DO FORO</h2><br/>
  <div id='foro'>
  </br>
    <p>
      Cláusula 23ª. Para dirimir quaisquer controvérsias oriundas do CONTRATO, as partes elegem o foro da comarca de São Paulo/SP; 
    </p>
    <p>
      E, por estarem de pleno acordo, firmam o presente instrumento, em duas vias de igual teor e conteúdo, 
      para fins de direito. 
    </p>
    <p>
      ${data_contrato_extenso}
    </p>
  </div>
  </br>
  </br>
  </br>

  <div id='assinaturas'>
    <div> 
      <span>________________________________</span>
      <span>Assinatura do Contratante</span>
    </div>
    <div> 
      <span>________________________________</span>
      <span>Representante SETA CURSOS</span>
    </div>
  <div>
  <span class='paginacao'> Página 4 de 4</span>
</div><!--folha_4-->
</div>
</div>
<!------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------->
<div class="folha" id="folha_5">
  <h2>Resumo de Informações do Contrato</h2><br/>
  <div id='resumo_contrato'>
  <h3>Responsável</h3>
  <p>
   Nome:<em>${ data.resp_nome}</em>
  </p>
  <p> Endereço:<em>${ data.resp_end}, nº ${ data.resp_numero}</em>
  </p>
  <p> Bairro:<em>${ data.resp_bairro}</em>
   CEP:<em>${ data.resp_cep}</em>
  </p>
  <p>
   CPF.:<em>${ data.resp_cpf}</em>
   RG.:<em>${ data.resp_rg}</em>
  </p>
  <p>
     Tel.:<em>${ data.resp_tel}</em>
     Cel.:<em>${ data.resp_cel}</em>
  </p>
  <hr/>
  <h3>Aluno:</h3>

    <p>
    Nome:<em>${ data.aluno_nome}</em>
    Parentesco:<em>${ data.aluno_parentesco}</em>
    </p>
    <p>Endereço:<em>${ data.aluno_end}, nº ${ data.aluno_numero}</em>
    </p>
    <p>Bairro:<em>${ data.aluno_bairro}</em>
    CEP:<em>${ data.aluno_cep}</em>
    </p>
    <p>
    RG.:<em>${ data.aluno_rg}</em>
    </p>
    <p>
    Tel.:<em>${ data.aluno_tel}</em>&nbsp;&nbsp;
    Cel.:<em>${ data.aluno_cel}</em>
    </p>
    <hr/>
   
  <h3>Curso:</h3>
  <p>
    Nome: <em>${ data.curso_nome}</em>&nbsp;&nbsp;
    Duração: <em>${ data.curso_duracao}</em>&nbsp;&nbsp;
   Parcelas: <em>${ data.curso_parcelas}</em>
   </p>
   <p>
    Valor : <em>${ data.curso_valor}</em> &nbsp;&nbsp;
    Desconto: <em>${ data.curso_desconto}</em>&nbsp;&nbsp;
    Valor Total: <em>${ data.curso_total}</em>
    </p>
    <p>
    Início: <em>${converteData(data.curso_inicio)}</em>
    Conclusão: <em>${converteData( data.curso_conclusao)}</em>
    </p>
      <p>
      Data do Contrato: <em>${ data_contrato_extenso}</em>
    </p>
    
    <p>
   
    Obs.: <em>${ data.check_combo ==='true' ? data.curso_combo + "<br/>": "" }</em>
    <em>${data.curso_obs}</em>
  </p>
  </div>
</div><!--folha_5-->

  </body>
</html>



    `
)



}

    
       

module.exports = TemplateContrato;