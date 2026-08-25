/* =========================================================
   SAC FORMS
   SISTEMA DE AVALIAÇÃO CURRICULAR
   ========================================================= */


/* =========================================================
   PERGUNTAS
   ========================================================= */

const perguntas = [

  /* =======================================================
     SEÇÃO 1
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
     SEÇÃO 2
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
     SEÇÃO 3
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
     SEÇÃO 4
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
     SEÇÃO 5
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
     SEÇÃO 6 — REFLEXIVAS
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


  /* CÁLCULO */

  {
    tipo: "secao",
    titulo: "Disciplinas de Formação Básica — Cálculo Diferencial e Integral",
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


  /* FÍSICA */

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


  /* QUÍMICA */

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


  /* TERMODINÂMICA */

  {
    tipo: "secao",
    titulo: "Disciplinas de Ciência da Engenharia — Termodinâmica",
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


  /* FENÔMENOS DE TRANSPORTE */

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


  /* MECÂNICA DOS FLUIDOS */

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


  /* OPERAÇÕES UNITÁRIAS I */

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


  /* OPERAÇÕES UNITÁRIAS II */

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


  /* REATORES */

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


  /* CONTROLE */

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


  /* PLANTAS */

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


  /* ENGENHARIA ECONÔMICA */

  {
    tipo: "secao",
    titulo: "Disciplinas Complementares — Engenharia Econômica",
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


  /* GESTÃO */

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


  /* AMBIENTAL */

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


  /* SEGURANÇA */

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


  /* LABORATÓRIO */

  {
    tipo: "secao",
    titulo: "Atividades Práticas — Laboratório de Engenharia Química",
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


  /* ESTÁGIO */

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


  /* BIOTECNOLOGIA */

  {
    tipo: "secao",
    titulo: "Disciplinas Avançadas — Biotecnologia/Bioprocessos",
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


  /* PETRÓLEO */

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


  /* POLÍMEROS */

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


  /* CATÁLISE */

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


  /* SIMULAÇÃO */

  {
    tipo: "secao",
    titulo: "Disciplinas Integradoras — Simulação de Processos",
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


  /* OTIMIZAÇÃO */

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


  /* TCC */

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
   PERGUNTAS REAIS
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
   DESCOBRIR SEÇÃO ATUAL
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


  document
    .getElementById("numeroPergunta")
    .textContent =
    numeroVisual;


  document
    .getElementById("porcentagem")
    .textContent =
    porcentagem + "%";


  document
    .getElementById("barraProgresso")
    .style.width =
    porcentagem + "%";


  const secaoAtual =
    descobrirSecao(pergunta);


  document
    .getElementById("descricaoSecao")
    .textContent =
    secaoAtual;


  let html = `

    <div class="pergunta-card">

      <span class="secao">
        ${secaoAtual}
      </span>

  `;


  if (pergunta.numero) {

    html += `

      <div class="numero">
        ${pergunta.numero}
      </div>

    `;

  }


  if (pergunta.secao) {

    html += `

      <h3 class="subtitulo">
        ${pergunta.secao}
      </h3>

    `;

  }


  if (pergunta.titulo) {

    html += `

      <h3 class="subtitulo">
        ${pergunta.titulo}
      </h3>

    `;

  }


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
        Escreva sua resposta abaixo.
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
        Avalie de 0 a 5.
      </p>

      <div class="escala">
        ${criarEscala()}
      </div>

    `;


    /* COMENTÁRIO OPCIONAL */

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


    /* PERGUNTA ABERTA COMPLEMENTAR */

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

  adicionarEventosAutomaticos();

  atualizarBotoes();

  atualizarMapaPerguntas();

}


/* =========================================================
   ESCALA 0 A 5
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
   SALVAR RESPOSTA ATUAL
   ========================================================= */

function salvarResposta() {

  const dados =
    respostas[indiceAtual] || {};


  const escala =
    document.querySelector(
      'input[name="escalaAtual"]:checked'
    );


  if (escala) {

    dados.nota =
      Number(
        escala.value
      );

  } else {

    delete dados.nota;

  }


  const respostaAtual =
    document.getElementById(
      "respostaAtual"
    );


  if (respostaAtual) {

    dados.resposta =
      respostaAtual.value;

  }


  const comentarioAtual =
    document.getElementById(
      "comentarioAtual"
    );


  if (comentarioAtual) {

    dados.comentario =
      comentarioAtual.value;

  }


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
   CARREGAR RESPOSTA
   ========================================================= */

function carregarResposta() {

  const dados =
    respostas[indiceAtual];


  if (!dados) {
    return;
  }


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
   ATUALIZAR AUTOMATICAMENTE O MAPA
   ========================================================= */

function adicionarEventosAutomaticos() {

  const radios =
    document.querySelectorAll(
      'input[name="escalaAtual"]'
    );


  radios.forEach(radio => {

    radio.addEventListener(
      "change",
      function () {

        salvarResposta();

        atualizarMapaPerguntas();

      }
    );

  });


  const camposTexto =
    document.querySelectorAll(
      "#respostaAtual, #respostaComplementar, #comentarioAtual"
    );


  camposTexto.forEach(campo => {

    campo.addEventListener(
      "input",
      function () {

        salvarResposta();

        atualizarMapaPerguntas();

      }
    );

  });

}


/* =========================================================
   VERIFICAR SE A PERGUNTA ESTÁ COMPLETA
   ========================================================= */

function perguntaEstaRespondida(indice) {

  const pergunta =
    perguntasReais[indice];


  const dados =
    respostas[indice];


  if (!dados) {

    return false;

  }


  /* PERGUNTA TOTALMENTE ABERTA */

  if (
    pergunta.tipo === "aberta"
  ) {

    return Boolean(
      dados.resposta &&
      dados.resposta.trim() !== ""
    );

  }


  /* ESCALA OBRIGATÓRIA */

  const escalaRespondida =
    dados.nota !== undefined &&
    dados.nota !== null;


  if (!escalaRespondida) {

    return false;

  }


  /*
     SE EXISTIR PERGUNTA ABERTA
     COMPLEMENTAR, ELA TAMBÉM
     É OBRIGATÓRIA.
  */

  if (pergunta.aberta) {

    const complementarRespondida =
      dados.complementar &&
      dados.complementar.trim() !== "";


    if (!complementarRespondida) {

      return false;

    }

  }


  /*
     "Comentários" são opcionais.
  */

  return true;

}


/* =========================================================
   MAPA DAS PERGUNTAS
   ========================================================= */

function atualizarMapaPerguntas() {

  const mapa =
    document.getElementById(
      "mapaPerguntas"
    );


  mapa.innerHTML =
    "";


  perguntasReais.forEach(
    (pergunta, indice) => {

      const indicador =
        document.createElement(
          "div"
        );


      indicador.classList.add(
        "indicador-pergunta"
      );


      /*
         O mapa usa a ordem do
         formulário, e não a
         numeração original,
         pois o PDF possui números
         repetidos.
      */

      indicador.textContent =
        indice + 1;


      if (
        perguntaEstaRespondida(
          indice
        )
      ) {

        indicador.classList.add(
          "respondida"
        );

      } else {

        indicador.classList.add(
          "pendente"
        );

      }


      if (
        indice === indiceAtual
      ) {

        indicador.classList.add(
          "atual"
        );

      }


      indicador.title =
        pergunta.texto;


      indicador.onclick =
        function () {

          salvarResposta();

          indiceAtual =
            indice;

          renderizarPergunta();

        };


      mapa.appendChild(
        indicador
      );

    }
  );

}


/* =========================================================
   PRÓXIMA
   ========================================================= */

function proxima() {

  /*
     A pessoa pode avançar
     mesmo sem responder.
  */

  salvarResposta();


  if (
    indiceAtual <
    perguntasReais.length - 1
  ) {

    indiceAtual++;

    renderizarPergunta();

  }

}


/* =========================================================
   VOLTAR / ANTERIOR
   ========================================================= */

function anterior() {

  salvarResposta();


  /*
     NA PRIMEIRA PERGUNTA:
     volta para a identificação.
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
     NAS OUTRAS:
     volta uma pergunta.
  */

  indiceAtual--;

  renderizarPergunta();

}


/* =========================================================
   BOTÕES
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


  anterior.style.visibility =
    "visible";


  if (
    indiceAtual === 0
  ) {

    anterior.textContent =
      "← Voltar";

  } else {

    anterior.textContent =
      "← Anterior";

  }


  if (
    indiceAtual ===
    perguntasReais.length - 1
  ) {

    proximo.style.display =
      "none";

    enviar.style.display =
      "block";

  } else {

    proximo.style.display =
      "block";

    enviar.style.display =
      "none";

  }

}


/* =========================================================
   DESCRIÇÃO DE UMA PENDÊNCIA
   ========================================================= */

function descricaoPerguntaPendente(
  indice
) {

  const pergunta =
    perguntasReais[indice];


  let identificacao =
    `Pergunta ${indice + 1}`;


  /*
     Mostra também o número
     original do formulário
     quando houver.
  */

  if (pergunta.numero) {

    identificacao +=
      ` (item ${pergunta.numero})`;

  }


  let motivo = "";


  const dados =
    respostas[indice] || {};


  if (
    pergunta.tipo === "aberta"
  ) {

    motivo =
      "resposta aberta não preenchida";

  }

  else if (
    dados.nota === undefined ||
    dados.nota === null
  ) {

    motivo =
      "nota de 0 a 5 não selecionada";

  }

  else if (
    pergunta.aberta &&
    (
      !dados.complementar ||
      dados.complementar.trim() === ""
    )
  ) {

    motivo =
      "pergunta complementar não respondida";

  }


  return (
    `${identificacao} — ${pergunta.texto}` +
    (motivo ? ` [${motivo}]` : "")
  );

}


/* =========================================================
   ENVIAR
   ========================================================= */

function enviar() {

  salvarResposta();


  const perguntasPendentes =
    [];


  perguntasReais.forEach(
    (pergunta, indice) => {

      if (
        !perguntaEstaRespondida(
          indice
        )
      ) {

        perguntasPendentes.push(
          indice
        );

      }

    }
  );


  /* =======================================================
     EXISTEM PENDÊNCIAS
     ======================================================= */

  if (
    perguntasPendentes.length > 0
  ) {

    const quantidade =
      perguntasPendentes.length;


    const lista =
      perguntasPendentes
        .map(indice =>
          descricaoPerguntaPendente(
            indice
          )
        )
        .join("\n\n");


    alert(

      "Não foi possível finalizar o formulário.\n\n" +

      "Todas as perguntas são obrigatórias.\n\n" +

      "Ainda faltam " +
      quantidade +
      (
        quantidade === 1
          ? " pergunta:"
          : " perguntas:"
      ) +

      "\n\n" +

      lista +

      "\n\n" +

      "Você será direcionado(a) para a primeira pergunta pendente."

    );


    indiceAtual =
      perguntasPendentes[0];


    renderizarPergunta();


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });


    return;

  }


  /* =======================================================
     TUDO RESPONDIDO
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


  console.log(
    "IDENTIFICAÇÃO:",
    identificacao
  );


  console.log(
    "RESPOSTAS:",
    respostas
  );


  /*
     IMPORTANTE:

     POR ENQUANTO OS DADOS
     NÃO SÃO ENVIADOS PARA
     O SUPABASE.

     A CONEXÃO COM O BANCO
     ENTRARÁ AQUI.
  */


  mostrarPagina(
    "paginaFinal"
  );

}