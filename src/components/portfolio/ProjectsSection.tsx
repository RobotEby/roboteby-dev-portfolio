import { ExternalLink, Github } from 'lucide-react';
interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  github?: string;
}
const projects: Project[] = [
  {
    title: 'Movelaria On Demand',
    description:
      'Transforme seus ambientes com móveis sob medida, criados especialmente para você. Na Movelaria On Demand, cada peça é pensada para unir design moderno, funcionalidade e personalização.',
    image: 'images/movelaria-on-demand.png',
    tech: [
      'Vite',
      'TypeScript',
      'React',
      'Shadcn-ui',
      'Tailwind CSS',
      'Docker',
      'Docker Compose',
      'Node.js',
      'PostgreSQL',
    ],
    demo: 'https://movelaria-on-demand.vercel.app/',
  },
  {
    title: 'CBAAP',
    description:
      'A CBAAP tem como foco transformar o marketing digital para pequenos negócios por meio de um modelo consultivo inovador. Através de reuniões estratégicas, a agência busca entender profundamente as necessidades e desejos de cada cliente. Ao combinar esse conhecimento com táticas avançadas de anúncios pagos, a CBAAP propõe soluções que não só atraem mais clientes, mas também potencializam o crescimento sustentável do negócio.',
    image: 'images/cbaap.png',
    tech: ['Vite', 'TypeScript', 'React', 'Shadcn-ui', 'Tailwind CSS'],
    demo: 'https://cbaap.com.br',
  },
  {
    title: 'Docker To-Do List',
    description:
      'Este projeto é um aplicativo completo de lista de tarefas criado para demonstrar o poder da conteinerização e da orquestração de microsserviços. O aplicativo usa um front-end moderno em React, uma API robusta em Node.js, um banco de dados NoSQL e um pipeline CI/CD automatizado. ',
    image: 'images/docker-task-list.png',
    tech: [
      'React',
      'Vite',
      'TailwindCSS',
      'Node.js',
      'Express',
      'Mongoose',
      'MongoDB',
      'Docker',
      'Docker Compose',
      'GitHub Actions (CI)',
    ],
    demo: 'https://docker-task-list.vercel.app/',
    github: 'https://github.com/RobotEby/docker-task-list',
  },
  {
    title: 'Movie Cards Library',
    description:
      'Uma biblioteca de filmes (Movie Magic Library) que visa gerenciar e organizar uma coleção de filmes. ',
    image: 'images/movie-cards-library.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
    demo: 'https://movie-magic-library.netlify.app/',
    github: 'https://github.com/RobotEby/movie-cards-library',
  },
  {
    title: 'Recipe App',
    description:
      'Um aplicativo moderno de receitas desenvolvido em React, que permite explorar, pesquisar, adicionar aos favoritos e acompanhar o progresso de receitas de pratos e bebidas.',
    image: 'images/recipe-app-gamma-swart.png',
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'Context API',
      'Tailwind CSS',
      'Vitest + React Testing Library',
    ],
    demo: 'https://recipe-app-gamma-swart.vercel.app/',
    github: 'https://github.com/RobotEby/recipe-app',
  },
  {
    title: 'Vanilla Chess Js',
    description:
      'Um jogo de xadrez totalmente funcional implementado em JavaScript puro, HTML5 e CSS3. Este projeto demonstra a implementação de algoritmos avançados, manipulação DOM e estilos CSS modernos. ',
    image: 'images/vanilla-chess-js.png',
    tech: ['JavaScript ES6+', 'JSDoc', 'CSS3', 'HTML5'],
    demo: 'https://vanilla-chess-js.netlify.app/',
    github: 'https://github.com/RobotEby/vanilla-chess-js',
  },
  {
    title: 'PanzerDiv Squad Hub',
    description:
      'Site oficial do PanzerDiv (PzDiv), um clã especializado em operações com veículos blindados no simulador militar SQUAD. A aplicação apresenta uma plataforma moderna para recrutamento e divulgação das atividades do clã.',
    image: 'images/panzerdiv-squad-hub.png',
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demo: 'https://panzerdiv-squad-hub.netlify.app/',
    github: 'https://github.com/RobotEby/panzerdiv-squad-hub',
  },
];
export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">&gt; ls projects/</h2>
        <div className="projects-grid slide-in-up">
          {projects.map((project, index) => (
            <div key={index} className="project-card h-full flex flex-col">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content flex-1 flex flex-col">
                <h3>{project.title}</h3>
                <p className="flex-1">{project.description}</p>

                <div className="project-tech mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
