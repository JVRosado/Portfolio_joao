const projects = [
  {
    number: "01",
    category: "VISÃO COMPUTACIONAL",
    title: "Tecnologia aplicada à agricultura",
    description:
      "Projeto para identificação de doenças e deficiências em tomateiros por meio de visão computacional.",
    tags: ["Python", "Visão computacional", "Dados"],
    visual: "vision",
  },
  {
    number: "02",
    category: "AUTOMAÇÃO",
    title: "Fluxos que trabalham sozinhos",
    description:
      "Automação de processos conectando n8n e ferramentas Google para reduzir tarefas manuais.",
    tags: ["n8n", "Google Workspace", "Workflows"],
    visual: "automation",
  },
  {
    number: "03",
    category: "DESENVOLVIMENTO",
    title: "Gestão de clientes",
    description:
      "Aplicativo para organizar e gerenciar informações de clientes de um salão de beleza.",
    tags: ["Software", "UX", "Gestão"],
    visual: "app",
  },
  {
    number: "04",
    category: "WEB DESIGN",
    title: "Landing pages interativas",
    description:
      "Experiências digitais responsivas com hierarquia clara, interação e foco na apresentação.",
    tags: ["React", "UI Design", "Web"],
    visual: "web",
  },
  {
    number: "05",
    category: "DATA ANALYTICS",
    title: "Dados que contam histórias",
    description:
      "Dashboards e relatórios para transformar dados em informações claras para análise.",
    tags: ["Power BI", "SQL Server", "Relatórios"],
    visual: "data",
  },
]

const skillGroups = [
  {
    index: "01",
    title: "Análise de dados",
    items: ["Power BI", "SQL Server", "Dashboards", "Relatórios"],
  },
  {
    index: "02",
    title: "Desenvolvimento",
    items: ["Desenvolvimento de software", "Landing pages", "Interfaces web"],
  },
  {
    index: "03",
    title: "Automação",
    items: ["n8n", "Otimização de processos", "Ferramentas Google"],
  },
  {
    index: "04",
    title: "Tecnologia",
    items: ["Visão computacional", "Digitalização", "Soluções digitais"],
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={diagonal ? "icon icon-diagonal" : "icon"}
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "vision") {
    return (
      <div className="project-graphic vision-graphic" aria-hidden="true">
        <span className="scan-line" />
        <div className="focus-box">
          <i />
          <i />
          <i />
          <i />
          <span className="leaf">◒</span>
        </div>
        <small>ANALYSIS / 87%</small>
      </div>
    )
  }

  if (type === "automation") {
    return (
      <div className="project-graphic flow-graphic" aria-hidden="true">
        <span className="node n1">G</span>
        <span className="node n2">n8n</span>
        <span className="node n3">✓</span>
        <svg viewBox="0 0 360 180">
          <path d="M60 60 C130 60 112 120 180 120 S245 60 302 60" />
          <path d="M180 120 V155" />
        </svg>
        <small>WORKFLOW ACTIVE</small>
      </div>
    )
  }

  if (type === "app") {
    return (
      <div className="project-graphic app-graphic" aria-hidden="true">
        <div className="app-window">
          <span className="window-top" />
          <div className="avatar-row">
            <i />
            <span />
          </div>
          <div className="avatar-row">
            <i />
            <span />
          </div>
          <div className="avatar-row">
            <i />
            <span />
          </div>
        </div>
        <small>CLIENTS / DATABASE</small>
      </div>
    )
  }

  if (type === "web") {
    return (
      <div className="project-graphic web-graphic" aria-hidden="true">
        <div className="browser">
          <span className="browser-top" />
          <strong>
            IDEIAS
            <br />
            EM MOVIMENTO.
          </strong>
          <i />
        </div>
        <small>RESPONSIVE / INTERACTIVE</small>
      </div>
    )
  }

  return (
    <div className="project-graphic data-graphic" aria-hidden="true">
      <div className="chart-bars">
        <i style={{ height: "38%" }} />
        <i style={{ height: "63%" }} />
        <i style={{ height: "49%" }} />
        <i style={{ height: "82%" }} />
        <i style={{ height: "70%" }} />
      </div>
      <svg viewBox="0 0 360 180">
        <polyline points="20,135 82,95 142,115 210,55 275,78 338,28" />
      </svg>
      <small>DATA / INSIGHTS</small>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a
          href="#inicio"
          className="brand"
          aria-label="João Vitor Rosado — início"
        >
          JOÃO<span>_</span>ROSADO
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#competencias">Skills</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
        </nav>
        <a href="#contato" className="header-cta">
          CONTATO <Arrow diagonal />
        </a>
      </header>

      <section className="hero section-grid" id="inicio">
        <div className="hero-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="hero-copy">
          <p className="status">
            <span /> SISTEMA ONLINE // DISPONÍVEL PARA CONEXÕES
          </p>
          <h1>
            JOÃO VITOR
            <br />
            <em>ROSADO</em>
            <b>_</b>
          </h1>
          <p className="hero-lead">
            Transformo problemas em soluções digitais.
          </p>
          <p className="hero-text">
            Tecnologia, dados e automação conectados para criar experiências e
            processos mais inteligentes.
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="button button-primary">
              EXPLORAR PROJETOS <Arrow />
            </a>
            <a href="#contato" className="button button-ghost">
              ENTRAR EM CONTATO
            </a>
          </div>
        </div>

        <div
          className="system-panel"
          aria-label="Painel visual sobre áreas de atuação"
        >
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />
          <div className="panel-meta">
            <span>
              SYS.STATUS: <b>ONLINE</b>
            </span>
            <span>FOCUS: DIGITAL</span>
          </div>
          <div className="core">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <div className="core-center">
              <small>CONNECTING</small>
              <strong>DATA</strong>
              <i>×</i>
              <strong>CODE</strong>
            </div>
          </div>
          <div className="panel-bars">
            <div>
              <span>ANÁLISE</span>
              <i>
                <b style={{ width: "88%" }} />
              </i>
              <em>88</em>
            </div>
            <div>
              <span>AUTOMAÇÃO</span>
              <i>
                <b style={{ width: "76%" }} />
              </i>
              <em>76</em>
            </div>
            <div>
              <span>SOFTWARE</span>
              <i>
                <b style={{ width: "82%" }} />
              </i>
              <em>82</em>
            </div>
          </div>
          <p className="panel-count">
            <strong>05</strong>
            <span>
              PROJETOS
              <br />
              EM DESTAQUE
            </span>
          </p>
        </div>

        <div className="scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>
      </section>

      <section className="about section-shell" id="sobre">
        <div className="section-kicker">
          <span>01</span>
          <p>SOBRE MIM</p>
        </div>
        <div className="about-layout">
          <h2>
            ENTRE A LÓGICA
            <br />E A <em>CURIOSIDADE.</em>
          </h2>
          <div className="about-copy">
            <p className="large-copy">
              Sou formado em <strong>Sistemas de Informação</strong> pela PUC
              Minas e acredito que boas soluções começam com perguntas bem
              feitas.
            </p>
            <p>
              Minha trajetória conecta análise de dados, desenvolvimento de
              software e otimização de processos. Sou dedicado, curioso e
              comprometido com o aprendizado contínuo — sempre buscando novas
              habilidades para resolver problemas por meio da tecnologia.
            </p>
          </div>
          <div className="about-card education-card">
            <span>FORMAÇÃO / 01</span>
            <div>
              <small>BACHARELADO</small>
              <h3>
                Sistemas de
                <br />
                Informação
              </h3>
              <p>PUC MINAS</p>
            </div>
            <b>SI</b>
          </div>
          <div className="about-card mindset-card">
            <span>MINDSET / 02</span>
            <blockquote>
              “Aprender,
              <br />
              testar, otimizar
              <br />e evoluir.”
            </blockquote>
            <div className="mini-grid" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="skills section-shell" id="competencias">
        <div className="section-kicker">
          <span>02</span>
          <p>COMPETÊNCIAS</p>
        </div>
        <div className="section-heading">
          <h2>
            FERRAMENTAS PARA
            <br />
            <em>CRIAR SOLUÇÕES.</em>
          </h2>
          <p>
            Conhecimentos que se complementam para transformar desafios em
            entregas digitais.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.index}>
              <span className="card-number">{group.index}</span>
              <div className="skill-icon" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-shell" id="projetos">
        <div className="section-kicker">
          <span>03</span>
          <p>PROJETOS SELECIONADOS</p>
        </div>
        <div className="section-heading project-heading">
          <h2>
            IDEIAS EM
            <br />
            <em>MOVIMENTO.</em>
          </h2>
          <p>
            Uma seleção de projetos que combinam tecnologia, análise e
            experiência digital.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-copy">
                <div className="project-label">
                  <span>{project.number}</span>
                  <p>{project.category}</p>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <ProjectVisual type={project.visual} />
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-shell" id="experiencia">
        <div className="section-kicker">
          <span>04</span>
          <p>EXPERIÊNCIA</p>
        </div>
        <div className="experience-layout">
          <div className="experience-title">
            <p>TRAJETÓRIA PROFISSIONAL</p>
            <h2>
              TECNOLOGIA QUE
              <br />
              <em>APOIA PESSOAS.</em>
            </h2>
          </div>
          <article className="timeline-card">
            <div className="timeline-head">
              <span>INSTITUTO METAMORFOSE</span>
              <i>ATUAÇÃO PROFISSIONAL</i>
            </div>
            <h3>
              Dados, digitalização
              <br />e melhoria de processos.
            </h3>
            <p>
              Atuação em atividades relacionadas à organização e análise de
              dados, criação de relatórios, digitalização de informações e apoio
              à evolução de processos internos.
            </p>
            <ul>
              <li>Dados e relatórios</li>
              <li>Digitalização</li>
              <li>Melhoria de processos</li>
            </ul>
          </article>
        </div>
      </section>

      <footer className="contact section-shell" id="contato">
        <div className="contact-top">
          <p className="status">
            <span /> CANAL ABERTO // VAMOS CONVERSAR
          </p>
          <h2>
            TEM UM DESAFIO?
            <br />
            <em>VAMOS CONECTAR.</em>
          </h2>
          <p>
            Estou aberto a novas conexões, projetos e oportunidades para
            aprender e construir.
          </p>
          <a
            href="mailto:seu-email@exemplo.com"
            className="button button-primary"
          >
            ENVIAR UM E-MAIL <Arrow />
          </a>
        </div>
        <div className="contact-links">
          <a href="#contato" aria-label="LinkedIn — link a preencher">
            <span>01 / LINKEDIN</span>
            <strong>Perfil profissional</strong>
            <Arrow diagonal />
          </a>
          <a href="#contato" aria-label="GitHub — link a preencher">
            <span>02 / GITHUB</span>
            <strong>Repositórios e código</strong>
            <Arrow diagonal />
          </a>
          <a href="mailto:seu-email@exemplo.com">
            <span>03 / E-MAIL</span>
            <strong>seu-email@exemplo.com</strong>
            <Arrow diagonal />
          </a>
        </div>
        <div className="footer-base">
          <a href="#inicio" className="brand">
            JOÃO<span>_</span>ROSADO
          </a>
          <p>PORTFÓLIO / 2025</p>
          <a href="#inicio">VOLTAR AO TOPO ↑</a>
        </div>
      </footer>
    </main>
  )
}
