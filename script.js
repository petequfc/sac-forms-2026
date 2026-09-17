const perguntas = [
  { tipo: "secao", titulo: "Seção 1: Competências Gerais, Práticas e Interpessoais da Engenharia (Atribuições CREA)", descricao: "Avalie de 0 a 5 o quanto sua formação contribuiu para o desenvolvimento de cada competência (0 = nenhuma contribuição; 5 = máxima contribuição)." },
  { numero:"1", texto:"Gestão e Liderança", detalhe:"Capacidade de orientar equipes e gerir recursos em projetos ou atividades técnicas." },
  { numero:"2", texto:"Projetos e Dimensionamento", detalhe:"Habilidade para conceber, detalhar e dimensionar sistemas, processos e equipamentos." },
  { numero:"3", texto:"Estudo de Viabilidade", detalhe:"Capacidade de analisar a viabilidade técnica, econômica e socioambiental de projetos." },
  { numero:"4", texto:"Execução de Serviços Técnicos", detalhe:"Condução e aplicação prática de obras, serviços e procedimentos operacionais de engenharia." },
  { numero:"5", texto:"Inspeção e Laudos Técnicos", detalhe:"Habilidade em realizar vistorias, monitoramento técnico e emissão de pareceres ou laudos." },
  { numero:"6", texto:"Pesquisa e Experimentação", detalhe:"Capacidade de planejar experimentos, analisar dados e atuar no desenvolvimento científico/tecnológico (P&D)." },
  { numero:"7", texto:"Operação e Manutenção Industrial", detalhe:"Habilidade para atuar na operação e supervisão da manutenção de instalações e equipamentos." },
  { numero:"8", texto:"Comunicação Gráfica e Desenho", detalhe:"Habilidade de interpretar e elaborar fluxogramas, esquemas e desenhos técnicos." },
  { numero:"9", texto:"Resolução de Problemas Complexos", detalhe:"Capacidade de formular e aplicar soluções eficientes para problemas práticos de engenharia." },
  { numero:"10", texto:"Ética e Legislação Profissional", detalhe:"Aplicação de princípios éticos, responsabilidade social e conformidade com a legislação da profissão." },

  { tipo: "secao", titulo: "Seção 2: Competências do CREA para Engenharia Química", descricao: "Avalie de 0 a 5 o quanto sua formação contribuiu para o desenvolvimento de cada competência (0 = nenhuma contribuição; 5 = máxima contribuição)." },
  { numero:"11", texto:"Gestão de Processos Químicos", detalhe:"Capacidade de supervisionar e otimizar rotas de produção e processos da indústria química." },
  { numero:"12", texto:"Dimensionamento de Equipamentos de Processo", detalhe:"Habilidade de projetar e especificar reatores, colunas de separação e trocadores de calor." },
  { numero:"13", texto:"Controle de Qualidade e Padronização", detalhe:"Capacidade de aplicar técnicas analíticas, mensuração e controle de qualidade em insumos e produtos." },
  { numero:"14", texto:"Consultoria e Assessoria Técnica", detalhe:"Habilidade de fornecer suporte especializado, pareceres e consultoria em engenharia química e biotecnologia." },
  { numero:"15", texto:"Diagramas e Representação de Processos", detalhe:"Domínio na leitura e elaboração de fluxogramas de processos (PFD) e diagramas de tubulação e instrumentação (P&ID)." },
  { numero:"16", texto:"Engenharia de Rejeitos e Meio Ambiente", detalhe:"Capacidade de conduzir processos focados na gestão, tratamento e minimização de resíduos e efluentes industriais." },
  { numero:"17", texto:"Sustentabilidade e Transição Energética", detalhe:"Habilidade para avaliar e propor alternativas eficientes de integração energética e uso de matérias-primas renováveis." },
  { numero:"18", texto:"Segurança de Processos Industriais", detalhe:"Capacidade de identificar riscos e aplicar normas de segurança operacional em plantas químicas." },

  { tipo:"secao", titulo:"Seção 3: Questões Específicas por Disciplina", descricao:"Informe sua situação em cada disciplina. Para as disciplinas já concluídas, avalie de 0 a 5 o quanto elas contribuíram para sua formação técnica e para o desenvolvimento das suas competências em Engenharia Química." },
  { tipo:"disciplina", grupo:"Disciplinas de Formação Básica", numero:"19", texto:"Cálculo Diferencial e Integral" },
  { tipo:"disciplina", grupo:"Disciplinas de Formação Básica", numero:"20", texto:"Fundamentos de Física I e III (Física Geral)" },
  { tipo:"disciplina", grupo:"Disciplinas de Formação Básica", numero:"21", texto:"Química Geral" },
  { tipo:"disciplina", grupo:"Disciplinas de Formação Básica", numero:"22", texto:"Química Inorgânica: Geral e Experimental" },
  { tipo:"disciplina", grupo:"Disciplinas de Formação Básica", numero:"23", texto:"Química Analítica" },
  { tipo:"disciplina", grupo:"Disciplinas de Formação Básica", numero:"24", texto:"Química Orgânica: Teórica I e II e Experimental" },
  { tipo:"disciplina", grupo:"Disciplinas de Ciência da Engenharia", numero:"25", texto:"Fundamentos e Expressões Gráficas de Projetos" },
  { tipo:"disciplina", grupo:"Disciplinas de Ciência da Engenharia", numero:"26", texto:"Programação Computacional" },
  { tipo:"disciplina", grupo:"Disciplinas de Ciência da Engenharia", numero:"27", texto:"Mecânica dos Fluidos" },
  { tipo:"disciplina", grupo:"Disciplinas de Ciência da Engenharia", numero:"28", texto:"Termodinâmica" },
  { tipo:"disciplina", grupo:"Disciplinas de Ciência da Engenharia", numero:"29", texto:"Fenômenos de Transporte" },
  { tipo:"disciplina", grupo:"Disciplinas de Ciência da Engenharia", numero:"30", texto:"Eletrônica Industrial: Geral e Laboratorial" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"31", texto:"Princípios de Processos Químicos e Bioquímicos" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"32", texto:"Métodos Matemáticos Aplicados à Engenharia Química" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"33", texto:"Análise Numérica para Engenharia Química" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"34", texto:"Operações Unitárias I" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"35", texto:"Operações Unitárias II" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"36", texto:"Projeto Industrial I e III" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"37", texto:"Sistemas Particulares" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"38", texto:"Engenharia das Reações Químicas I e II" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"39", texto:"Processo de Transferência de Calor I e II" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"40", texto:"Modelagem e Simulação de Processos" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"41", texto:"Laboratório de Engenharia Química I e II" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"42", texto:"Engenharia de Bioprocessos I e II" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"43", texto:"Materiais para Indústria Química" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"44", texto:"Segurança de Processos Industriais" },
  { tipo:"disciplina", grupo:"Disciplinas de Engenharia Química Específicas", numero:"45", texto:"Dinâmica e Controle de Processos" }
];
/* =========================================================
   APENAS AS PERGUNTAS REAIS
   ========================================================= */

const perguntasReais =
  perguntas.filter(
    pergunta => pergunta.tipo !== "secao"
  );


/* =========================================================
   VARIÁVEIS
   ========================================================= */

let indiceAtual = 0;

let respostas = {};


/* =========================================================
   ELEMENTOS
   ========================================================= */

const container =
  document.getElementById("perguntaContainer");

const totalPerguntasElemento =
  document.getElementById("totalPerguntas");


totalPerguntasElemento.textContent =
  perguntasReais.length;


/* =========================================================
   TROCAR DE PÁGINA
   ========================================================= */

function mostrarPagina(id) {

  document
    .querySelectorAll(".pagina")
    .forEach(pagina => {

      pagina.classList.remove("ativa");

    });


  document
    .getElementById(id)
    .classList.add("ativa");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   PÁGINA INICIAL
   ========================================================= */

function irParaIdentificacao() {

  mostrarPagina(
    "paginaIdentificacao"
  );

}


function voltarInicio() {

  mostrarPagina(
    "paginaInicio"
  );

}


/* =========================================================
   IDENTIFICAÇÃO
   ========================================================= */

function irParaFormulario() {

  const nome =
    document
      .getElementById("nome")
      .value
      .trim();


  const matricula =
    document
      .getElementById("matricula")
      .value
      .trim();


  const semestre =
    document
      .getElementById("semestre")
      .value;


  const anoIngresso = document.getElementById("anoIngresso").value.trim();

  const curriculo =
    document.querySelector(
      'input[name="curriculo"]:checked'
    );


  if (!nome) {

    alert(
      "Digite seu nome completo."
    );

    document
      .getElementById("nome")
      .focus();

    return;

  }


  if (!matricula) {

    alert(
      "Digite sua matrícula."
    );

    document
      .getElementById("matricula")
      .focus();

    return;

  }


  if (!semestre) {

    alert(
      "Selecione seu semestre."
    );

    return;

  }


  if (!/^\d{4}$/.test(anoIngresso)) {
    alert("Informe o ano de ingresso com 4 dígitos.");
    document.getElementById("anoIngresso").focus();
    return;
  }

  if (!curriculo) {

    alert(
      "Selecione seu currículo."
    );

    return;

  }


  mostrarPagina(
    "paginaFormulario"
  );


  renderizarPergunta();

}


/* =========================================================
   DESCOBRIR A SEÇÃO DA PERGUNTA
   ========================================================= */

function descobrirSecao(perguntaAtual) {

  let secaoAtual = "";


  for (
    let i = 0;
    i < perguntas.length;
    i++
  ) {

    if (
      perguntas[i] === perguntaAtual
    ) {

      break;

    }


    if (
      perguntas[i].tipo === "secao"
    ) {

      secaoAtual =
        perguntas[i].titulo;

    }

  }


  return secaoAtual;

}


/* =========================================================
   RENDERIZAR PERGUNTA
   ========================================================= */

function renderizarPergunta() {

  const pergunta =
    perguntasReais[indiceAtual];


  const numeroVisual =
    indiceAtual + 1;


  const porcentagem =
    Math.round(
      (
        numeroVisual /
        perguntasReais.length
      ) * 100
    );


  /* NÚMERO DA PERGUNTA */

  document
    .getElementById("numeroPergunta")
    .textContent =
    numeroVisual;


  /* PORCENTAGEM */

  document
    .getElementById("porcentagem")
    .textContent =
    porcentagem + "%";


  /* BARRA */

  document
    .getElementById("barraProgresso")
    .style.width =
    porcentagem + "%";


  /* SEÇÃO */

  const secaoAtual =
    descobrirSecao(pergunta);


  document
    .getElementById("descricaoSecao")
    .textContent =
    secaoAtual;


  /* =======================================================
     COMEÇA A MONTAR A PERGUNTA
     ======================================================= */

  let html = `

    <div class="pergunta-card">

      <span class="secao">
        ${secaoAtual}
      </span>

  `;


  /* NÚMERO ORIGINAL DO SAC */

  if (pergunta.numero) {

    html += `

      <div class="numero">
        ${pergunta.numero}
      </div>

    `;

  }


  /* SUBSEÇÃO */

  if (pergunta.secao) {

    html += `

      <h3 class="subtitulo">
        ${pergunta.secao}
      </h3>

    `;

  }


  /* TÍTULO DAS REFLEXIVAS */

  if (pergunta.titulo) {

    html += `

      <h3 class="subtitulo">
        ${pergunta.titulo}
      </h3>

    `;

  }


  /* TEXTO */

  html += `

      <h2>
        ${pergunta.texto}
      </h2>
      ${pergunta.detalhe ? `<p class="detalhe-pergunta">${pergunta.detalhe}</p>` : ""}

  `;


  /* =======================================================
     RESPOSTA DA PERGUNTA
     ======================================================= */

  if (pergunta.tipo === "aberta") {
    html += `<p class="instrucao">Digite sua resposta.</p>
      <textarea id="respostaAtual" placeholder="Digite sua resposta..."></textarea>`;
  } else {
    if (pergunta.tipo === "disciplina") {
      html += `
        <div class="bloco-status">
          <label>Situação nesta disciplina</label>
          <div class="status-opcoes">
            ${[
              ["concluida","Já concluí"],
              ["cursando","Estou cursando"],
              ["nao_cursei","Ainda não cursei"],
              ["nao_concluida","Já me matriculei anteriormente, mas não concluí"]
            ].map(([v,t]) => `<label class="status-opcao"><input type="radio" name="statusDisciplina" value="${v}" onchange="atualizarCamposDisciplina()"> ${t}</label>`).join("")}
          </div>
          <div id="motivoNaoCursou" class="motivo-nao-cursou oculto">
            <label for="motivoDisciplina">Por que você ainda não cursou esta disciplina?</label>
            <select id="motivoDisciplina" onchange="atualizarOutroMotivo()">
              <option value="">Selecione um motivo</option>
              <option value="fluxo">Ainda não cheguei ao período/semestre previsto para cursá-la</option>
              <option value="prerequisito">Ainda não cumpri algum pré-requisito</option>
              <option value="atraso">Estou com pendências/atraso no fluxo curricular</option>
              <option value="oferta">Não consegui cursar por oferta, vaga ou conflito de horário</option>
              <option value="trancamento">Trancamento ou afastamento temporário do curso</option>
              <option value="planejamento">Optei por deixar a disciplina para outro semestre</option>
              <option value="outro">Outro motivo</option>
            </select>
            <textarea id="outroMotivo" class="oculto" placeholder="Descreva brevemente o outro motivo..."></textarea>
          </div>
          <div id="motivoNaoConcluiu" class="motivo-nao-cursou oculto">
            <label for="situacaoTentativa">O que ocorreu quando você cursou a disciplina?</label>
            <select id="situacaoTentativa" onchange="atualizarOutroNaoConcluiu()">
              <option value="">Selecione uma opção</option>
              <option value="reprovacao">Fui reprovado(a)</option>
              <option value="trancamento">Tranquei a disciplina</option>
              <option value="abandono">Abandonei/cancelei a disciplina</option>
              <option value="outro">Outro</option>
            </select>
            <textarea id="outroNaoConcluiu" class="oculto" placeholder="Descreva brevemente o que ocorreu..."></textarea>
          </div>
        </div>`;
    }

    html += `<div id="escalaWrapper" class="escala-wrapper oculto">
      <p class="instrucao">${pergunta.tipo === "disciplina" ? "Avalie a contribuição da disciplina de 0 a 5." : "Selecione uma opção de 0 a 5."}</p>
      <div class="escala">${criarEscala()}</div>
    </div>`;
  }

  /* Observação disponível em TODAS as perguntas */
  html += `<div class="observacao">
    <label>Observação <span class="opcional">(opcional)</span></label>
    <textarea id="comentarioAtual" placeholder="Se quiser, registre uma observação sobre sua resposta..."></textarea>
  </div>`;

  html += `

    </div>

  `;


  container.innerHTML =
    html;


  carregarResposta();

  atualizarBotoes();

}


function atualizarCamposDisciplina() {
  const status = document.querySelector('input[name="statusDisciplina"]:checked')?.value;
  const motivoNaoCursou = document.getElementById("motivoNaoCursou");
  const motivoNaoConcluiu = document.getElementById("motivoNaoConcluiu");
  const escala = document.getElementById("escalaWrapper");

  if (!motivoNaoCursou || !motivoNaoConcluiu || !escala) return;

  // Todos os campos condicionais começam escondidos.
  motivoNaoCursou.classList.add("oculto");
  motivoNaoConcluiu.classList.add("oculto");
  escala.classList.add("oculto");

  if (status === "concluida") {
    escala.classList.remove("oculto");
  } else if (status === "nao_cursei") {
    motivoNaoCursou.classList.remove("oculto");
  } else if (status === "nao_concluida") {
    motivoNaoConcluiu.classList.remove("oculto");
  }
}

function atualizarOutroMotivo() {
  const select = document.getElementById("motivoDisciplina");
  const outro = document.getElementById("outroMotivo");
  if (select && outro) outro.classList.toggle("oculto", select.value !== "outro");
}

function atualizarOutroNaoConcluiu() {
  const select = document.getElementById("situacaoTentativa");
  const outro = document.getElementById("outroNaoConcluiu");
  if (select && outro) outro.classList.toggle("oculto", select.value !== "outro");
}

/* =========================================================
   CRIAR ESCALA DE 0 A 5
   ========================================================= */

function criarEscala() {

  let html = "";


  for (
    let i = 0;
    i <= 5;
    i++
  ) {

    html += `

      <label>

        <input
          type="radio"
          name="escalaAtual"
          value="${i}"
        >

        <span>
          ${i}
        </span>

      </label>

    `;

  }


  return html;

}


/* =========================================================
   SALVAR A RESPOSTA ATUAL
   ========================================================= */

function salvarResposta() {

  const dados =
    respostas[indiceAtual] || {};

  const statusDisciplina = document.querySelector('input[name="statusDisciplina"]:checked');
  if (statusDisciplina) dados.statusDisciplina = statusDisciplina.value;
  const motivoDisciplina = document.getElementById("motivoDisciplina");
  if (motivoDisciplina) dados.motivoDisciplina = motivoDisciplina.value;
  const outroMotivo = document.getElementById("outroMotivo");
  if (outroMotivo) dados.outroMotivo = outroMotivo.value;
  const situacaoTentativa = document.getElementById("situacaoTentativa");
  if (situacaoTentativa) dados.situacaoTentativa = situacaoTentativa.value;
  const outroNaoConcluiu = document.getElementById("outroNaoConcluiu");
  if (outroNaoConcluiu) dados.outroNaoConcluiu = outroNaoConcluiu.value;


  /* =======================================================
     NOTA
     ======================================================= */

  const escala =
    document.querySelector(
      'input[name="escalaAtual"]:checked'
    );


  if (escala) {

    dados.nota =
      Number(
        escala.value
      );

  }
  else if (statusDisciplina && statusDisciplina.value !== "concluida") {
    delete dados.nota;
  }


  /* =======================================================
     RESPOSTA ABERTA
     ======================================================= */

  const respostaAtual =
    document.getElementById(
      "respostaAtual"
    );


  if (respostaAtual) {

    dados.resposta =
      respostaAtual.value;

  }


  /* =======================================================
     COMENTÁRIO
     ======================================================= */

  const comentarioAtual =
    document.getElementById(
      "comentarioAtual"
    );


  if (comentarioAtual) {

    dados.comentario =
      comentarioAtual.value;

  }


  /* =======================================================
     COMPLEMENTAR
     ======================================================= */

  const complementar =
    document.getElementById(
      "respostaComplementar"
    );


  if (complementar) {

    dados.complementar =
      complementar.value;

  }


  respostas[indiceAtual] =
    dados;

}


/* =========================================================
   CARREGAR RESPOSTA ANTERIOR
   ========================================================= */

function carregarResposta() {

  const dados =
    respostas[indiceAtual];


  if (!dados) {

    return;

  }


  /* SITUAÇÃO DA DISCIPLINA */
  if (dados.statusDisciplina) {
    const status = document.querySelector(`input[name="statusDisciplina"][value="${dados.statusDisciplina}"]`);
    if (status) status.checked = true;
    atualizarCamposDisciplina();
    const motivo = document.getElementById("motivoDisciplina");
    if (motivo && dados.motivoDisciplina !== undefined) motivo.value = dados.motivoDisciplina;
    atualizarOutroMotivo();
    const outro = document.getElementById("outroMotivo");
    if (outro && dados.outroMotivo !== undefined) outro.value = dados.outroMotivo;
    const situacaoTentativa = document.getElementById("situacaoTentativa");
    if (situacaoTentativa && dados.situacaoTentativa !== undefined) situacaoTentativa.value = dados.situacaoTentativa;
    atualizarOutroNaoConcluiu();
    const outroNaoConcluiu = document.getElementById("outroNaoConcluiu");
    if (outroNaoConcluiu && dados.outroNaoConcluiu !== undefined) outroNaoConcluiu.value = dados.outroNaoConcluiu;
  }

  /* NOTA */

  if (
    dados.nota !== undefined
  ) {

    const radio =
      document.querySelector(
        `input[name="escalaAtual"][value="${dados.nota}"]`
      );


    if (radio) {

      radio.checked =
        true;

    }

  }


  /* ABERTA */

  const respostaAtual =
    document.getElementById(
      "respostaAtual"
    );


  if (
    respostaAtual &&
    dados.resposta !== undefined
  ) {

    respostaAtual.value =
      dados.resposta;

  }


  /* COMENTÁRIO */

  const comentarioAtual =
    document.getElementById(
      "comentarioAtual"
    );


  if (
    comentarioAtual &&
    dados.comentario !== undefined
  ) {

    comentarioAtual.value =
      dados.comentario;

  }


  /* COMPLEMENTAR */

  const complementar =
    document.getElementById(
      "respostaComplementar"
    );


  if (
    complementar &&
    dados.complementar !== undefined
  ) {

    complementar.value =
      dados.complementar;

  }

}


/* =========================================================
   VALIDAR A PERGUNTA ATUAL
   ========================================================= */

function validarPerguntaAtual() {
  const pergunta = perguntasReais[indiceAtual];

  if (pergunta.tipo === "aberta") {
    const campo = document.getElementById("respostaAtual");
    if (!campo || campo.value.trim() === "") {
      alert("Preencha sua resposta antes de continuar.");
      campo?.focus();
      return false;
    }
    return true;
  }

  if (pergunta.tipo === "disciplina") {
    const status = document.querySelector('input[name="statusDisciplina"]:checked');
    if (!status) { alert("Informe sua situação nesta disciplina antes de continuar."); return false; }
    if (status.value === "nao_cursei") {
      const motivo = document.getElementById("motivoDisciplina");
      if (!motivo?.value) { alert("Selecione o motivo pelo qual você ainda não cursou esta disciplina."); motivo?.focus(); return false; }
      if (motivo.value === "outro" && !document.getElementById("outroMotivo")?.value.trim()) {
        alert("Descreva brevemente o outro motivo."); document.getElementById("outroMotivo")?.focus(); return false;
      }
      return true;
    }
    if (status.value === "nao_concluida") {
      const situacao = document.getElementById("situacaoTentativa");
      if (!situacao?.value) { alert("Informe o que ocorreu quando você cursou esta disciplina."); situacao?.focus(); return false; }
      if (situacao.value === "outro" && !document.getElementById("outroNaoConcluiu")?.value.trim()) {
        alert("Descreva brevemente o que ocorreu."); document.getElementById("outroNaoConcluiu")?.focus(); return false;
      }
      return true;
    }
    if (status.value === "cursando") return true;
  }

  const escala = document.querySelector('input[name="escalaAtual"]:checked');
  if (!escala) { alert("Selecione uma opção de 0 a 5 antes de continuar."); return false; }
  return true;
}

/* =========================================================
   PRÓXIMA
   ========================================================= */

function proxima() {

  /*
     AGORA NÃO É POSSÍVEL AVANÇAR
     SEM RESPONDER A PERGUNTA ATUAL.
  */

  if (
    !validarPerguntaAtual()
  ) {

    return;

  }


  salvarResposta();


  if (
    indiceAtual <
    perguntasReais.length - 1
  ) {

    indiceAtual++;

    renderizarPergunta();


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

}


/* =========================================================
   ANTERIOR / VOLTAR
   ========================================================= */

function anterior() {

  /*
     AO VOLTAR, SALVAMOS QUALQUER
     ALTERAÇÃO FEITA NA PERGUNTA.
  */

  salvarResposta();


  /*
     NA PRIMEIRA PERGUNTA,
     VOLTA PARA IDENTIFICAÇÃO.
  */

  if (
    indiceAtual === 0
  ) {

    mostrarPagina(
      "paginaIdentificacao"
    );

    return;

  }


  /*
     NAS DEMAIS,
     VOLTA UMA PERGUNTA.
  */

  indiceAtual--;

  renderizarPergunta();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   ATUALIZAR BOTÕES
   ========================================================= */

function atualizarBotoes() {

  const anterior =
    document.getElementById(
      "btnAnterior"
    );


  const proximo =
    document.getElementById(
      "btnProximo"
    );


  const enviar =
    document.getElementById(
      "btnEnviar"
    );


  /* =======================================================
     TEXTO DO BOTÃO VOLTAR
     ======================================================= */

  anterior.style.visibility =
    "visible";


  if (
    indiceAtual === 0
  ) {

    anterior.textContent =
      "← Voltar";

  }

  else {

    anterior.textContent =
      "← Anterior";

  }


  /* =======================================================
     ÚLTIMA PERGUNTA
     ======================================================= */

  if (
    indiceAtual ===
    perguntasReais.length - 1
  ) {

    proximo.style.display =
      "none";

    enviar.style.display =
      "block";

  }

  else {

    proximo.style.display =
      "block";

    enviar.style.display =
      "none";

  }

}


/* =========================================================
   ENVIAR FORMULÁRIO
   ========================================================= */

function enviar() {

  /*
     A ÚLTIMA PERGUNTA TAMBÉM
     PRECISA ESTAR RESPONDIDA.
  */

  if (
    !validarPerguntaAtual()
  ) {

    return;

  }


  salvarResposta();


  /* =======================================================
     SEGURANÇA EXTRA:
     CONFERE SE TODAS FORAM RESPONDIDAS
     ======================================================= */

  const perguntasPendentes =
    [];


  perguntasReais.forEach(
    (pergunta, indice) => {

      const dados =
        respostas[indice];


      if (!dados) {

        perguntasPendentes.push(
          indice
        );

        return;

      }


      /* PERGUNTA ABERTA */

      if (
        pergunta.tipo === "aberta"
      ) {

        if (
          !dados.resposta ||
          dados.resposta.trim() === ""
        ) {

          perguntasPendentes.push(
            indice
          );

        }


        return;

      }


      if (pergunta.tipo === "disciplina") {
        if (!dados.statusDisciplina) { perguntasPendentes.push(indice); return; }
        if (dados.statusDisciplina === "nao_cursei") {
          if (!dados.motivoDisciplina || (dados.motivoDisciplina === "outro" && !dados.outroMotivo?.trim())) perguntasPendentes.push(indice);
          return;
        }
        if (dados.statusDisciplina === "nao_concluida") {
          if (!dados.situacaoTentativa || (dados.situacaoTentativa === "outro" && !dados.outroNaoConcluiu?.trim())) perguntasPendentes.push(indice);
          return;
        }
        if (dados.statusDisciplina === "cursando") return;
      }

      if (dados.nota === undefined || dados.nota === null) {
        perguntasPendentes.push(indice);
        return;
      }

    }
  );


  /*
     NORMALMENTE ISTO NÃO DEVE MAIS
     ACONTECER, PORQUE O SISTEMA JÁ
     IMPEDE QUE A PESSOA AVANCE.
  */

  if (
    perguntasPendentes.length > 0
  ) {

    alert(
      "Existem perguntas obrigatórias que ainda não foram respondidas."
    );


    indiceAtual =
      perguntasPendentes[0];


    renderizarPergunta();


    return;

  }


  /* =======================================================
     DADOS DE IDENTIFICAÇÃO
     ======================================================= */

  const identificacao = {

    nome:
      document
        .getElementById("nome")
        .value,

    matricula:
      document
        .getElementById("matricula")
        .value,

    semestre:
      document
        .getElementById("semestre")
        .value,

    anoIngresso: document.getElementById("anoIngresso").value,

    curriculo:
      document.querySelector(
        'input[name="curriculo"]:checked'
      ).value

  };


  /* =======================================================
     POR ENQUANTO, MOSTRA NO CONSOLE
     ======================================================= */

  console.log(
    "IDENTIFICAÇÃO:",
    identificacao
  );


  console.log(
    "RESPOSTAS:",
    respostas
  );


  /*
     ============================================
     FUTURAMENTE:
     CONEXÃO COM SUPABASE ENTRARÁ AQUI
     ============================================
  */


  mostrarPagina(
    "paginaFinal"
  );

}
