/* =========================================================
   SAC FORMS
   SISTEMA DE AVALIAÇÃO CURRICULAR
   ========================================================= */


/* =========================================================
   BANCO DE PERGUNTAS
   ========================================================= */

const perguntas = [

  /* =======================================================
     SEÇÃO 1 — COMPETÊNCIAS TÉCNICAS FUNDAMENTAIS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Seção 1: Competências Técnicas Fundamentais",
    descricao:
      "Avalie de 0 a 5 o nível de desenvolvimento das seguintes competências técnicas (0 = nenhuma contribuição; 5 = máxima contribuição)."
  },

  {
    numero: "1",
    secao: "1.1 Capacidades de Investigação e Análise",
    texto:
      "Projetar e conduzir experimentos e interpretar resultados",
    comentario: true
  },

  {
    numero: "2",
    secao: "1.1 Capacidades de Investigação e Análise",
    texto:
      "Desenvolver e/ou utilizar novas ferramentas e técnicas",
    comentario: true
  },

  {
    numero: "3",
    secao: "1.2 Capacidades de Projeto e Concepção",
    texto:
      "Conceber, projetar e analisar sistemas, produtos e processos",
    comentario: true
  },


  /* =======================================================
     SEÇÃO 2 — COMPETÊNCIAS GERAIS DE ENGENHARIA
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Seção 2: Competências Gerais de Engenharia",
    descricao: ""
  },

  {
    numero: "4",
    secao: "2.1 Resolução de Problemas",
    texto:
      "Formular, conceber e avaliar soluções para problemas de engenharia",
    aberta:
      "Como você aplica metodologias de resolução de problemas?"
  },

  {
    numero: "5",
    secao: "2.2 Análise e Compreensão Científica",
    texto:
      "Analisar e compreender fenômenos físicos e químicos através de modelos",
    aberta:
      "Cite exemplos de modelos que você utiliza:"
  },

  {
    numero: "6",
    secao: "2.3 Comunicação",
    texto:
      "Comunicar-se nas formas escrita, oral e gráfica",
    aberta:
      "Avalie suas habilidades de comunicação técnica:"
  },

  {
    numero: "7",
    secao: "2.4 Trabalho em Equipe",
    texto:
      "Trabalhar e liderar equipes profissionais e multidisciplinares",
    aberta:
      "Como você contribui para o trabalho em equipe?"
  },

  {
    numero: "8",
    secao: "2.5 Ética e Legislação",
    texto:
      "Aplicar ética e legislação no exercício profissional",
    aberta:
      "Cite situações onde aplicou princípios éticos:"
  },


  /* =======================================================
     SEÇÃO 3 — COMPETÊNCIAS ESPECÍFICAS
     ======================================================= */

  {
    tipo: "secao",
    titulo:
      "Seção 3: Competências Específicas em Engenharia Química",
    descricao: ""
  },

  {
    numero: "9",
    secao: "3.1 Fundamentos Matemáticos e Científicos",
    texto:
      "Aplicar conhecimentos matemáticos, científicos e tecnológicos",
    aberta:
      "Exemplos de aplicação:"
  },

  {
    numero: "10",
    secao: "3.2 Fenômenos de Transporte",
    texto:
      "Compreender e modelar transferência de quantidade de movimento, calor e massa"
  },

  {
    numero: "11",
    secao: "3.2 Fenômenos de Transporte",
    texto:
      "Aplicar conhecimentos de fenômenos de transporte ao projeto de equipamentos"
  },

  {
    numero: "12",
    secao: "3.3 Transformação de Matéria e Energia",
    texto:
      "Compreender mecanismos de transformação da matéria e energia"
  },

  {
    numero: "13",
    secao: "3.4 Separação e Purificação",
    texto:
      "Projetar sistemas de recuperação, separação e purificação"
  },

  {
    numero: "14",
    secao: "3.5 Reatores e Cinética",
    texto:
      "Compreender mecanismos cinéticos de reações químicas"
  },

  {
    numero: "15",
    secao: "3.5 Reatores e Cinética",
    texto:
      "Projetar e otimizar sistemas reacionais e reatores"
  },

  {
    numero: "16",
    secao: "3.6 Controle de Processos",
    texto:
      "Projetar sistemas de controle de processos industriais"
  },

  {
    numero: "17",
    secao: "3.7 Projeto de Plantas Industriais",
    texto:
      "Projetar e otimizar plantas industriais considerando aspectos ambientais e de segurança"
  },


  /* =======================================================
     SEÇÃO 4 — EIXOS DE FORMAÇÃO PRÁTICA
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Seção 4: Eixos de Formação Prática",
    descricao:
      "Avalie a relevância para os seguintes campos de atuação profissional."
  },

  {
    numero: "18",
    secao: "4.1 Projeto",
    texto:
      "Aplicação de conhecimentos em projeto básico e dimensionamento"
  },

  {
    numero: "19",
    secao: "4.2 Processos",
    texto:
      "Execução de projetos de produção e melhorias de processos"
  },


  /* =======================================================
     SEÇÃO 5 — COMPETÊNCIAS INDIVIDUAIS
     ======================================================= */

  {
    tipo: "secao",
    titulo:
      "Seção 5: Competências Individuais e Comportamentais",
    descricao: ""
  },

  {
    numero: "20",
    texto:
      "Capacidade de aprender rapidamente novos conceitos"
  },


  /* =======================================================
     SEÇÃO 6 — PERGUNTAS REFLEXIVAS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Seção 6: Perguntas Reflexivas",
    descricao: ""
  },

  {
    tipo: "aberta",
    titulo: "6.1 Autoavaliação Geral",
    texto:
      "Como você avalia seu desenvolvimento geral em competências técnicas?"
  },

  {
    tipo: "aberta",
    titulo: "6.1 Autoavaliação Geral",
    texto:
      "Quais competências considera como seus pontos fortes?"
  },

  {
    tipo: "aberta",
    titulo: "6.1 Autoavaliação Geral",
    texto:
      "Quais competências necessitam de maior desenvolvimento?"
  },

  {
    tipo: "aberta",
    titulo: "6.2 Experiência Prática",
    texto:
      "Como as atividades acadêmicas/profissionais contribuíram para seu desenvolvimento?"
  },

  {
    tipo: "aberta",
    titulo: "6.2 Experiência Prática",
    texto:
      "Cite exemplos concretos onde aplicou competências desenvolvidas:"
  },

  {
    tipo: "aberta",
    titulo: "6.3 Perspectivas Futuras",
    texto:
      "Quais competências considera essenciais para sua carreira futura?"
  },

  {
    tipo: "aberta",
    titulo: "6.3 Perspectivas Futuras",
    texto:
      "Como planeja continuar desenvolvendo suas competências?"
  },

  {
    tipo: "aberta",
    titulo: "Observações Finais",
    texto:
      "Comentários adicionais ou sugestões:"
  },


  /* =======================================================
     QUESTÕES ESPECÍFICAS POR DISCIPLINA
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Questões Específicas por Disciplina",
    descricao: "Engenharia Química"
  },


  /* =======================================================
     CÁLCULO DIFERENCIAL E INTEGRAL
     ======================================================= */

  {
    tipo: "secao",
    titulo:
      "Disciplinas de Formação Básica — Cálculo Diferencial e Integral",
    descricao: ""
  },

  {
    numero: "21",
    texto:
      "Analisar grandes volumes de dados",
    comentario: true
  },

  {
    numero: "52",
    texto:
      "Formação Básica (cálculo, física, química, estatística)",
    comentario: true
  },


  /* =======================================================
     FÍSICA GERAL
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Física Geral",
    descricao: ""
  },

  {
    numero: "22",
    texto:
      "Analisar criticamente a operação e manutenção de sistemas",
    comentario: true
  },

  {
    numero: "53",
    texto:
      "Ciência da Engenharia (mecânica, resistência dos materiais)",
    comentario: true
  },


  /* =======================================================
     QUÍMICA GERAL E ANALÍTICA
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Química Geral e Analítica",
    descricao: ""
  },

  {
    numero: "23",
    texto:
      "Aplicar conhecimentos de transformação a processos de produção",
    comentario: true
  },

  {
    numero: "24",
    texto:
      "Conceber e desenvolver produtos e processos de fabricação",
    comentario: true
  },


  /* =======================================================
     TERMODINÂMICA
     ======================================================= */

  {
    tipo: "secao",
    titulo:
      "Disciplinas de Ciência da Engenharia — Termodinâmica",
    descricao: ""
  },

  {
    numero: "25",
    texto:
      "Projetar sistemas de suprimento energético",
    comentario: true
  },

  {
    numero: "54",
    texto:
      "Ciência da Engenharia Química (termodinâmica, fenômenos de transporte)",
    comentario: true
  },


  /* =======================================================
     FENÔMENOS DE TRANSPORTE
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Fenômenos de Transporte",
    descricao: ""
  },

  {
    numero: "26",
    texto:
      "Aplicar conhecimentos de fenômenos de transporte ao projeto de equipamentos",
    comentario: true
  },

  {
    numero: "27",
    texto:
      "Comunicar-se tecnicamente e usar recursos gráficos em projetos",
    comentario: true
  },


  /* =======================================================
     MECÂNICA DOS FLUIDOS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Mecânica dos Fluidos",
    descricao: ""
  },

  {
    numero: "28",
    texto:
      "Implantar, implementar, supervisionar e controlar soluções de Engenharia",
    comentario: true
  },

  {
    numero: "29",
    texto:
      "Operar e supervisionar instalações e fábricas",
    comentario: true
  },


  /* =======================================================
     OPERAÇÕES UNITÁRIAS I
     ======================================================= */

  {
    tipo: "secao",
    titulo:
      "Disciplinas de Engenharia Química Específica — Operações Unitárias I",
    descricao:
      "Separações Mecânicas"
  },

  {
    numero: "30",
    texto:
      "Inspecionar e coordenar manutenção de equipamentos químicos",
    comentario: true
  },

  {
    numero: "55",
    texto:
      "Tecnologia Industrial (operações unitárias, controle de processos)",
    comentario: true
  },


  /* =======================================================
     OPERAÇÕES UNITÁRIAS II
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Operações Unitárias II",
    descricao:
      "Transferência de Massa"
  },

  {
    numero: "31",
    texto:
      "Elaborar estudos de impactos ambientais",
    comentario: true
  },

  {
    numero: "32",
    texto:
      "Projetar processos de tratamento ambiental",
    comentario: true
  },


  /* =======================================================
     REATORES QUÍMICOS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Reatores Químicos",
    descricao: ""
  },

  {
    numero: "33",
    texto:
      "Gerir recursos estratégicos na produção industrial",
    comentario: true
  },

  {
    numero: "34",
    texto:
      "Aplicar modelos de produção e controle de qualidade",
    comentario: true
  },


  /* =======================================================
     CONTROLE DE PROCESSOS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Controle de Processos",
    descricao: ""
  },

  {
    numero: "35",
    texto:
      "Controle e supervisão de instalações",
    comentario: true
  },

  {
    numero: "36",
    texto:
      "Gestão de empreendimentos industriais",
    comentario: true
  },


  /* =======================================================
     PROJETO DE PLANTAS INDUSTRIAIS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Projeto de Plantas Industriais",
    descricao: ""
  },

  {
    numero: "56",
    texto:
      "Projetos Industriais e Gestão",
    comentario: true
  },

  {
    numero: "57",
    texto:
      "Ética, Meio Ambiente e Humanidades",
    comentario: true
  },


  /* =======================================================
     ENGENHARIA ECONÔMICA
     ======================================================= */

  {
    tipo: "secao",
    titulo:
      "Disciplinas Complementares — Engenharia Econômica",
    descricao: ""
  },

  {
    numero: "37",
    texto:
      "Capacidade de aprender rapidamente novos conceitos",
    comentario: true
  },

  {
    numero: "38",
    texto:
      "Visão de mundo ampla e global",
    comentario: true
  },


  /* =======================================================
     GESTÃO DA PRODUÇÃO E QUALIDADE
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Gestão da Produção e Qualidade",
    descricao: ""
  },

  {
    numero: "39",
    texto:
      "Capacidade de comprometimento organizacional",
    comentario: true
  },

  {
    numero: "40",
    texto:
      "Capacidade de gerar resultados efetivos",
    comentario: true
  },


  /* =======================================================
     ENGENHARIA AMBIENTAL
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Engenharia Ambiental",
    descricao: ""
  },

  {
    numero: "41",
    texto:
      "Capacidade de inovação",
    comentario: true
  },

  {
    numero: "42",
    texto:
      "Lidar com situações novas e inusitadas",
    comentario: true
  },


  /* =======================================================
     SEGURANÇA DE PROCESSOS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Segurança de Processos",
    descricao: ""
  },

  {
    numero: "43",
    texto:
      "Capacidade de lidar com incertezas",
    comentario: true
  },

  {
    numero: "44",
    texto:
      "Iniciativa e decisão",
    comentario: true
  },


  /* =======================================================
     LABORATÓRIO DE ENGENHARIA QUÍMICA
     ======================================================= */

  {
    tipo: "secao",
    titulo:
      "Atividades Práticas — Laboratório de Engenharia Química",
    descricao: ""
  },

  {
    numero: "45",
    texto:
      "Criatividade",
    comentario: true
  },

  {
    numero: "46",
    texto:
      "Relacionamento interpessoal",
    comentario: true
  },


  /* =======================================================
     ESTÁGIO SUPERVISIONADO
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Estágio Supervisionado",
    descricao: ""
  },

  {
    numero: "47",
    texto:
      "Autocontrole emocional",
    comentario: true
  },

  {
    numero: "48",
    texto:
      "Capacidade empreendedora",
    comentario: true
  },


  /* =======================================================
     BIOTECNOLOGIA / BIOPROCESSOS
     ======================================================= */

  {
    tipo: "secao",
    titulo:
      "Disciplinas Avançadas — Biotecnologia/Bioprocessos",
    descricao: ""
  },

  {
    numero: "49",
    texto:
      "Analisar grandes volumes de dados",
    comentario: true
  },

  {
    numero: "50",
    texto:
      "Desenvolver e/ou utilizar novas ferramentas e técnicas",
    comentario: true
  },


  /* =======================================================
     PETRÓLEO E GÁS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Petróleo e Gás",
    descricao: ""
  },

  {
    numero: "51",
    texto:
      "Projetar sistemas de recuperação, separação e purificação",
    comentario: true
  },

  {
    numero: "52",
    texto:
      "Projetar e otimizar sistemas reacionais e reatores",
    comentario: true
  },


  /* =======================================================
     POLÍMEROS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Polímeros",
    descricao: ""
  },

  {
    numero: "53",
    texto:
      "Compreender mecanismos cinéticos de reações químicas",
    comentario: true
  },

  {
    numero: "54",
    texto:
      "Conceber e desenvolver produtos e processos de fabricação",
    comentario: true
  },


  /* =======================================================
     CATÁLISE
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Catálise",
    descricao: ""
  },

  {
    numero: "55",
    texto:
      "Compreender mecanismos de transformação da matéria e energia",
    comentario: true
  },

  {
    numero: "56",
    texto:
      "Aplicar conhecimentos de transformação a processos de produção",
    comentario: true
  },


  /* =======================================================
     SIMULAÇÃO DE PROCESSOS
     ======================================================= */

  {
    tipo: "secao",
    titulo:
      "Disciplinas Integradoras — Simulação de Processos",
    descricao: ""
  },

  {
    numero: "57",
    texto:
      "Analisar grandes volumes de dados",
    comentario: true
  },

  {
    numero: "58",
    texto:
      "Comunicar-se tecnicamente e usar recursos gráficos em projetos",
    comentario: true
  },


  /* =======================================================
     OTIMIZAÇÃO DE PROCESSOS
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Otimização de Processos",
    descricao: ""
  },

  {
    numero: "59",
    texto:
      "Formular, conceber e avaliar soluções para problemas de engenharia",
    comentario: true
  },

  {
    numero: "60",
    texto:
      "Aplicar modelos de produção e controle de qualidade",
    comentario: true
  },


  /* =======================================================
     TCC
     ======================================================= */

  {
    tipo: "secao",
    titulo: "Trabalho de Conclusão de Curso (TCC)",
    descricao: ""
  },

  {
    numero: "61",
    texto:
      "Comunicar-se nas formas escrita, oral e gráfica",
    comentario: true
  },

  {
    numero: "62",
    texto:
      "Trabalhar e liderar equipes profissionais e multidisciplinares",
    comentario: true
  }

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

  `;


  /* =======================================================
     PERGUNTA TOTALMENTE ABERTA
     ======================================================= */

  if (
    pergunta.tipo === "aberta"
  ) {

    html += `

      <p class="instrucao">
        Esta pergunta é obrigatória.
      </p>

      <textarea
        id="respostaAtual"
        placeholder="Digite sua resposta..."
      ></textarea>

    `;

  }


  /* =======================================================
     PERGUNTA COM ESCALA
     ======================================================= */

  else {

    html += `

      <p class="instrucao">
        Selecione uma opção de 0 a 5.
      </p>

      <div class="escala">
        ${criarEscala()}
      </div>

    `;


    /* =====================================================
       COMENTÁRIO OPCIONAL
       ===================================================== */

    if (pergunta.comentario) {

      html += `

        <div class="comentario">

          <label>
            Comentários
            <span class="opcional">
              (opcional)
            </span>
          </label>

          <textarea
            id="comentarioAtual"
            placeholder="Digite seus comentários..."
          ></textarea>

        </div>

      `;

    }


    /* =====================================================
       PERGUNTA COMPLEMENTAR OBRIGATÓRIA
       ===================================================== */

    if (pergunta.aberta) {

      html += `

        <div class="comentario">

          <label>
            ${pergunta.aberta}
          </label>

          <textarea
            id="respostaComplementar"
            placeholder="Digite sua resposta..."
          ></textarea>

        </div>

      `;

    }

  }


  html += `

    </div>

  `;


  container.innerHTML =
    html;


  carregarResposta();

  atualizarBotoes();

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

  const pergunta =
    perguntasReais[indiceAtual];


  /* =======================================================
     PERGUNTA TOTALMENTE ABERTA
     ======================================================= */

  if (
    pergunta.tipo === "aberta"
  ) {

    const campo =
      document.getElementById(
        "respostaAtual"
      );


    if (
      !campo ||
      campo.value.trim() === ""
    ) {

      alert(
        "Esta pergunta é obrigatória. Preencha sua resposta antes de continuar."
      );


      if (campo) {

        campo.focus();

      }


      return false;

    }

  }


  /* =======================================================
     PERGUNTA COM ESCALA
     ======================================================= */

  else {

    const escala =
      document.querySelector(
        'input[name="escalaAtual"]:checked'
      );


    if (!escala) {

      alert(
        "Esta pergunta é obrigatória. Selecione uma opção de 0 a 5 antes de continuar."
      );


      return false;

    }


    /* =====================================================
       PERGUNTA COMPLEMENTAR
       ===================================================== */

    if (pergunta.aberta) {

      const complementar =
        document.getElementById(
          "respostaComplementar"
        );


      if (
        !complementar ||
        complementar.value.trim() === ""
      ) {

        alert(
          "Preencha também a pergunta complementar antes de continuar."
        );


        if (complementar) {

          complementar.focus();

        }


        return false;

      }

    }

  }


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


      /* ESCALA */

      if (
        dados.nota === undefined ||
        dados.nota === null
      ) {

        perguntasPendentes.push(
          indice
        );

        return;

      }


      /* COMPLEMENTAR */

      if (
        pergunta.aberta &&
        (
          !dados.complementar ||
          dados.complementar.trim() === ""
        )
      ) {

        perguntasPendentes.push(
          indice
        );

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
