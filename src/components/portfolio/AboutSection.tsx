const skills = {
  devops: ['Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Prometheus', 'Ansible', 'Terraform'],
  development: ['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'Go', 'PHP'],
  security: ['Pentest', 'OSINT', 'Kali Linux', 'Burp Suite', 'Nmap', 'Metasploit'],
};

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">&gt; cat about.txt</h2>
        <div className="about-content">
          <div className="about-text slide-in-left">
            <p>
              Sou engenheiro de software Full Stack com experiência prática na construção de
              aplicações web modernas, utilizando JavaScript e TypeScript com Vue.js, React e
              Node.js. Atuo tanto no front-end quanto no back-end, priorizando arquitetura clara,
              desempenho e manutenibilidade. Tenho histórico de implementar funcionalidades
              complexas, refatorar código legado e aplicar melhorias arquiteturais que facilitam
              evolução e suporte do software.
            </p>
            <p>
              Estudante e entusiasta em: websec, malware dev & analysis, c2 design e firmware
              development.
            </p>

            <div className="skills">
              <h3>$ ls skills/</h3>
              <div className="skills-categories">
                <div className="skill-category">
                  <h4>Stack DevOps/</h4>
                  <div className="skills-grid">
                    {skills.devops.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Web Technologies/</h4>
                  <div className="skills-grid">
                    {skills.development.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Pentest Tools/</h4>
                  <div className="skills-grid">
                    {skills.security.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual slide-in-right">
            <div className="code-block">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-title">profile.json</span>
              </div>
              <div className="code-content">
                <pre>{`{
  "name": "Kerlon Amaral",
  "role": [
    "Eng. de Software Full Stack",
    "Est. e entusiasta em websec",
    "Malware Dev e Analysis"
  ],
  "focus": "Node.js CI/CD MySQL Jest Python C C++ Go Rust",
  "motto": "Como é perigoso libertar um povo que prefere a escravidão!"
}
`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
