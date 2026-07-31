const TRANSLATIONS = {
  en: {
    /* ── NAV ── */
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.contact':    'Contact',

    /* ── SIDEBAR ── */
    'sidebar.role':      'Software Developer',
    'sidebar.student':   'CS · Uppsala University',
    'sidebar.location':  'Uppsala, Sweden',
    'sidebar.available': 'Freelancing · Open to roles',

    'sidebar.skills.title': 'Skills',
    'sidebar.skills.web':   'Web',
    'sidebar.skills.data':  'Data & Backend',
    'sidebar.skills.tools': 'Tools',

    'sidebar.edu.title':    'Education',
    'sidebar.edu.ups.name': 'Uppsala University',
    'sidebar.edu.ups.deg':  'Computer Science — exchange',
    'sidebar.edu.ups.year': '2025 – 2026',
    'sidebar.edu.puc.name': 'PUCRS',
    'sidebar.edu.puc.deg':  'B.Sc. Computer Science',
    'sidebar.edu.puc.year': '2024 – 2027',

    'sidebar.langs.title': 'Languages',
    'sidebar.lang.pt': 'Portuguese — Native',
    'sidebar.lang.en': 'English — Fluent',
    'sidebar.lang.es': 'Spanish — Intermediate',
    'sidebar.lang.sv': 'Swedish — Basic',

    /* ── HERO ── */
    'hero.label':    'Software Developer · CS Student',
    'hero.headline': 'Building systems that run in production.',

    /* ── DATA RECORD ── */
    'record.role.key':      'role',
    'record.role.val':      'Software Developer',
    'record.location.key':  'location',
    'record.location.val':  'Uppsala, SE  ↔  Porto Alegre, BR',
    'record.active.key':    'active',
    'record.active.val':    'Apr 2025 — present',
    'record.stack.key':     'stack',
    'record.stack.val':     'Python · Java · SQL · React',
    'record.lang.key':      'lang',
    'record.lang.val':      'pt_BR · en_US · es_ES · sv_SE',

    /* ── ABOUT ── */
    'about.label': 'About',
    'about.p1': 'I\'m Victor, a Computer Science student who\'d rather ship something people actually use than optimize for a resume line. Over the past year I\'ve built real-time monitoring dashboards for industrial clients in Brazil, co-founded a SaaS that automates tax paperwork over WhatsApp, and now run my own freelance web development practice for small business owners in Sweden, where I\'m on exchange at Uppsala University.',
    'about.p2': 'I like the unglamorous parts of engineering: turning a 3,000-line script into something a team can actually maintain, or turning a client\'s vague idea into a working site. Right now I\'m splitting my coursework between systems (operating systems, networks, parallel programming) and human-centered design — because the engineers I\'ve learned the most from cared as much about the person using the software as the code running it.',

    /* ── EXPERIENCE — THEIA ── */
    'exp.label':          'Experience',
    'exp.theia.role':     'Python Developer',
    'exp.theia.type':     'Internship',
    'exp.theia.date':     'Apr 2025 – Dec 2025',
    'exp.theia.li1': 'Built and maintained a real-time industrial monitoring dashboard (Python, Dash) for Agrosul\'s poultry processing operations — live camera feeds, production metrics, and PostgreSQL-backed reporting used daily by plant operators.',
    'exp.theia.li2': 'Led a full refactor of the dashboard\'s codebase, breaking a single ~3,000-line file into a modular, card-based architecture the rest of the team could extend without going through me first.',
    'exp.theia.li3': 'Designed and built a parallel monitoring system for Vibra\'s Sete Lagoas facility — paw-classification tracking, shift-scheduling views, and pie-chart reporting tailored to a different production line.',

    /* ── EXPERIENCE — INTUI ── */
    'exp.intui.role': 'Co-founder & Developer',
    'exp.intui.li1':  'Co-built a SaaS platform that automates the generation of Brazilian NFS-e tax invoices directly through WhatsApp, cutting a manual paperwork step for small business owners.',
    'exp.intui.li2':  'Owned both the technical build and the product calls as a two-person team — architecture decisions and what the customer actually needed.',

    /* ── EXPERIENCE — MEDQUIZ ── */
    'exp.medquiz.role': 'Developer',
    'exp.medquiz.li1':  'Developer on a Scrum team building a gamified medical education platform — shipped features sprint over sprint alongside product and design.',

    /* ── FREELANCE ── */
    'freelance.label':    'Freelance',
    'freelance.role':     'Web Developer — Founder',
    'freelance.location': 'Uppsala, Sweden',
    'freelance.status':   'Active',
    'freelance.li1':      'Run an independent freelance practice building websites for small, immigrant-owned businesses in Uppsala, using a "build first, pitch after" approach — shipping a working site before asking for the sale.',
    'freelance.li2':      'Own the full client relationship solo: scoping, tiered pricing, design, build, and delivery.',
    'freelance.stack.label': 'Stack',
    'freelance.cta':      'Get in touch →',

    /* ── SOFT SKILLS ── */
    'skills.label': 'Soft Skills',
    'skills.adaptability.title': 'Cross-cultural adaptability',
    'skills.adaptability.desc':  'Moved from Porto Alegre to Uppsala mid-degree, picked up conversational Swedish, and now sell web development to Swedish business owners in a language that\'s second for both of us.',
    'skills.client.title': 'Client communication',
    'skills.client.desc':  'Freelance work means I am the entire client-facing side of the business — explaining trade-offs, managing expectations, and closing without a sales team behind me.',
    'skills.ownership.title': 'Ownership',
    'skills.ownership.desc':  'At THEIA, I didn\'t just build features — I decided a 3,000-line file needed to become five well-organized ones, and made it happen.',
    'skills.collab.title': 'Collaboration',
    'skills.collab.desc':  'Worked inside a Scrum team on MedQuiz, syncing with product and design instead of just taking tickets off a board.',
    'skills.learning.title': 'Continuous learning',
    'skills.learning.desc':  'Currently pairing an HCI course with a self-directed UX/UI track on Alura — because building something is only half the job if nobody can use it.',

    /* ── PROJECTS ── */
    'proj.label': 'Projects',

    'proj.intui.label': 'In development',
    'proj.intui.title': 'Intui',
    'proj.intui.desc':  'Co-built a SaaS automating NFS-e (electronic service invoice) generation for doctors directly via WhatsApp. Python backend, Nuvem Fiscal API integration, and Google Gemini for natural language processing.',

    'proj.ceap.label': 'Data Engineering',
    'proj.ceap.title': 'Parliamentary Spending Analysis',
    'proj.ceap.desc':  'Led data engineering on a team project analyzing 332,000+ records of Brazilian parliamentary spending (2023–2024). CRISP-DM methodology: Python ETL pipeline, star-schema data model, Power BI dashboards.',

    'proj.medquiz.label': 'Software Engineering',
    'proj.medquiz.title': 'MedQuiz',
    'proj.medquiz.desc':  'Gamified medical education platform built with a cross-functional team at PUCRS. Led risk planning, user story mapping, and Figma prototyping under Scrum.',

    'proj.java.label': 'Engineering Fundamentals',
    'proj.java.title': 'Java Systems',
    'proj.java.desc':  'Order management system with Clean Architecture and a vehicle management system with 100% JUnit test coverage — both built to production-quality engineering standards.',

    /* ── CONTACT ── */
    'contact.label': 'Contact',
    'contact.title': 'Let\'s talk.',
    'contact.wa':    'WhatsApp',
    'contact.email': 'Email',
    'contact.li':    'LinkedIn',

    /* ── FOOTER ── */
    'footer.copy': '© 2025 Victor Closs Duarte',
    'footer.sub':  'Porto Alegre · Uppsala',
  },

  pt: {
    /* ── NAV ── */
    'nav.about':      'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects':   'Projetos',
    'nav.contact':    'Contato',

    /* ── SIDEBAR ── */
    'sidebar.role':      'Desenvolvedor de Software',
    'sidebar.student':   'CC · Uppsala University',
    'sidebar.location':  'Uppsala, Suécia',
    'sidebar.available': 'Freelancing · Aberto a vagas',

    'sidebar.skills.title': 'Habilidades',
    'sidebar.skills.web':   'Web',
    'sidebar.skills.data':  'Dados & Backend',
    'sidebar.skills.tools': 'Ferramentas',

    'sidebar.edu.title':    'Formação',
    'sidebar.edu.ups.name': 'Uppsala University',
    'sidebar.edu.ups.deg':  'Ciência da Computação — intercâmbio',
    'sidebar.edu.ups.year': '2025 – 2026',
    'sidebar.edu.puc.name': 'PUCRS',
    'sidebar.edu.puc.deg':  'Bacharelado em Ciência da Computação',
    'sidebar.edu.puc.year': '2024 – 2027',

    'sidebar.langs.title': 'Idiomas',
    'sidebar.lang.pt': 'Português — Nativo',
    'sidebar.lang.en': 'Inglês — Fluente',
    'sidebar.lang.es': 'Espanhol — Intermediário',
    'sidebar.lang.sv': 'Sueco — Básico',

    /* ── HERO ── */
    'hero.label':    'Desenvolvedor de Software · Estudante de CC',
    'hero.headline': 'Construindo sistemas que rodam em produção.',

    /* ── DATA RECORD ── */
    'record.role.key':      'papel',
    'record.role.val':      'Desenvolvedor de Software',
    'record.location.key':  'local',
    'record.location.val':  'Uppsala, SE  ↔  Porto Alegre, BR',
    'record.active.key':    'ativo',
    'record.active.val':    'abr 2025 — presente',
    'record.stack.key':     'stack',
    'record.stack.val':     'Python · Java · SQL · React',
    'record.lang.key':      'idiomas',
    'record.lang.val':      'pt_BR · en_US · es_ES · sv_SE',

    /* ── ABOUT ── */
    'about.label': 'Sobre',
    'about.p1': 'Sou Victor, estudante de Ciência da Computação que prefere entregar algo que as pessoas realmente usam a otimizar uma linha de currículo. No último ano, construí dashboards de monitoramento em tempo real para clientes industriais no Brasil, cofundei um SaaS que automatiza burocracia fiscal pelo WhatsApp e agora tenho minha própria prática freelance de desenvolvimento web para pequenos negócios na Suécia, onde estou em intercâmbio na Universidade de Uppsala.',
    'about.p2': 'Gosto das partes sem glamour da engenharia: transformar um script de 3.000 linhas em algo que um time consegue manter, ou transformar a ideia vaga de um cliente em um site funcional. No momento, estou dividindo meu currículo entre sistemas (sistemas operacionais, redes, programação paralela) e design centrado no humano — porque os engenheiros com quem mais aprendi se importavam tanto com a pessoa que usa o software quanto com o código que o faz rodar.',

    /* ── EXPERIENCE — THEIA ── */
    'exp.label':          'Experiência',
    'exp.theia.role':     'Desenvolvedor Python',
    'exp.theia.type':     'Estágio',
    'exp.theia.date':     'abr 2025 – dez 2025',
    'exp.theia.li1': 'Construí e mantive um dashboard de monitoramento industrial em tempo real (Python, Dash) para as operações de abate da Agrosul — câmeras ao vivo, métricas de produção e relatórios com PostgreSQL usados diariamente pelos operadores de planta.',
    'exp.theia.li2': 'Liderando um refactor completo da base de código do dashboard, quebrando um único arquivo de ~3.000 linhas em uma arquitetura modular baseada em cards que o restante do time consegue estender sem passar por mim.',
    'exp.theia.li3': 'Projetei e construí um sistema paralelo de monitoramento para a planta da Vibra em Sete Lagoas — rastreamento de classificação de patas, visões de escala de turnos e relatórios em gráfico de pizza adaptados a uma linha de produção diferente.',

    /* ── EXPERIENCE — INTUI ── */
    'exp.intui.role': 'Cofundador & Desenvolvedor',
    'exp.intui.li1':  'Co-construí uma plataforma SaaS que automatiza a geração de NFS-e diretamente pelo WhatsApp, eliminando uma etapa burocrática manual para pequenos empreendedores.',
    'exp.intui.li2':  'Fui responsável pela construção técnica e pelas decisões de produto como equipe de duas pessoas — arquitetura e o que o cliente realmente precisava.',

    /* ── EXPERIENCE — MEDQUIZ ── */
    'exp.medquiz.role': 'Desenvolvedor',
    'exp.medquiz.li1':  'Desenvolvedor em um time Scrum construindo uma plataforma gamificada de educação médica — entreguei features sprint após sprint ao lado de produto e design.',

    /* ── FREELANCE ── */
    'freelance.label':    'Freelance',
    'freelance.role':     'Desenvolvedor Web — Fundador',
    'freelance.location': 'Uppsala, Suécia',
    'freelance.status':   'Ativo',
    'freelance.li1':      'Tenho uma prática freelance independente construindo sites para pequenos negócios de imigrantes em Uppsala, usando uma abordagem "construo primeiro, ofereço depois" — entrego um site funcional antes de pedir a venda.',
    'freelance.li2':      'Gerencio todo o relacionamento com clientes sozinho: escopo, precificação em camadas, design, construção e entrega.',
    'freelance.stack.label': 'Stack',
    'freelance.cta':      'Fale comigo →',

    /* ── SOFT SKILLS ── */
    'skills.label': 'Habilidades Interpessoais',
    'skills.adaptability.title': 'Adaptabilidade intercultural',
    'skills.adaptability.desc':  'Me mudei de Porto Alegre para Uppsala no meio da graduação, aprendi sueco conversacional e agora vendo desenvolvimento web para donos de negócios suecos em uma língua que é segunda para nós dois.',
    'skills.client.title': 'Comunicação com clientes',
    'skills.client.desc':  'Trabalho freelance significa que sou a face completa do negócio para o cliente — explicando trade-offs, gerenciando expectativas e fechando contratos sem uma equipe de vendas.',
    'skills.ownership.title': 'Dono do problema',
    'skills.ownership.desc':  'Na THEIA, não apenas construí features — decidi que um arquivo de 3.000 linhas precisava se tornar cinco bem organizados, e fiz acontecer.',
    'skills.collab.title': 'Colaboração',
    'skills.collab.desc':  'Trabalhei dentro de um time Scrum no MedQuiz, sincronizando com produto e design em vez de apenas pegar tickets do board.',
    'skills.learning.title': 'Aprendizado contínuo',
    'skills.learning.desc':  'No momento, estou combinando uma disciplina de IHC com uma trilha autônoma de UX/UI na Alura — porque construir é só metade do trabalho se ninguém conseguir usar.',

    /* ── PROJECTS ── */
    'proj.label': 'Projetos',

    'proj.intui.label': 'Em desenvolvimento',
    'proj.intui.title': 'Intui',
    'proj.intui.desc':  'Co-construí um SaaS que automatiza a geração de NFS-e para médicos diretamente pelo WhatsApp. Backend em Python, integração com a API da Nuvem Fiscal e Google Gemini para processamento de linguagem natural.',

    'proj.ceap.label': 'Engenharia de Dados',
    'proj.ceap.title': 'Análise de Gastos Parlamentares',
    'proj.ceap.desc':  'Liderando a engenharia de dados em um projeto de equipe com 332.000+ registros de gastos parlamentares brasileiros (2023–2024). Metodologia CRISP-DM: pipeline ETL em Python, modelo estrela, dashboards Power BI.',

    'proj.medquiz.label': 'Engenharia de Software',
    'proj.medquiz.title': 'MedQuiz',
    'proj.medquiz.desc':  'Plataforma gamificada de educação médica construída com um time multifuncional na PUCRS. Liderando planejamento de riscos, histórias de usuário e prototipação no Figma com Scrum.',

    'proj.java.label': 'Fundamentos de Engenharia',
    'proj.java.title': 'Sistemas Java',
    'proj.java.desc':  'Sistema de gerenciamento de pedidos com Clean Architecture e sistema de gestão de veículos com 100% de cobertura JUnit — ambos construídos com padrões de qualidade produtiva.',

    /* ── CONTACT ── */
    'contact.label': 'Contato',
    'contact.title': 'Vamos conversar.',
    'contact.wa':    'WhatsApp',
    'contact.email': 'E-mail',
    'contact.li':    'LinkedIn',

    /* ── FOOTER ── */
    'footer.copy': '© 2025 Victor Closs Duarte',
    'footer.sub':  'Porto Alegre · Uppsala',
  },

  sv: {
    /* ── NAV ── */
    'nav.about':      'Om mig',
    'nav.experience': 'Erfarenhet',
    'nav.projects':   'Projekt',
    'nav.contact':    'Kontakt',

    /* ── SIDEBAR ── */
    'sidebar.role':      'Mjukvaruutvecklare',
    'sidebar.student':   'Datavetenskap · Uppsala universitet',
    'sidebar.location':  'Uppsala, Sverige',
    'sidebar.available': 'Frilansar · Öppen för roller',

    'sidebar.skills.title': 'Kompetenser',
    'sidebar.skills.web':   'Webb',
    'sidebar.skills.data':  'Data & Backend',
    'sidebar.skills.tools': 'Verktyg',

    'sidebar.edu.title':    'Utbildning',
    'sidebar.edu.ups.name': 'Uppsala universitet',
    'sidebar.edu.ups.deg':  'Datavetenskap — utbyte',
    'sidebar.edu.ups.year': '2025 – 2026',
    'sidebar.edu.puc.name': 'PUCRS',
    'sidebar.edu.puc.deg':  'Kandidat i datavetenskap',
    'sidebar.edu.puc.year': '2024 – 2027',

    'sidebar.langs.title': 'Språk',
    'sidebar.lang.pt': 'Portugisiska — Modersmål',
    'sidebar.lang.en': 'Engelska — Flytande',
    'sidebar.lang.es': 'Spanska — Mellanliggande',
    'sidebar.lang.sv': 'Svenska — Grundläggande',

    /* ── HERO ── */
    'hero.label':    'Mjukvaruutvecklare · Datastudent',
    'hero.headline': 'Bygger system som körs i produktion.',

    /* ── DATA RECORD ── */
    'record.role.key':      'roll',
    'record.role.val':      'Mjukvaruutvecklare',
    'record.location.key':  'plats',
    'record.location.val':  'Uppsala, SE  ↔  Porto Alegre, BR',
    'record.active.key':    'aktiv',
    'record.active.val':    'apr 2025 — nu',
    'record.stack.key':     'stack',
    'record.stack.val':     'Python · Java · SQL · React',
    'record.lang.key':      'språk',
    'record.lang.val':      'pt_BR · en_US · sv_SE',

    /* ── ABOUT ── */
    'about.label': 'Om mig',
    'about.p1': 'Jag är Victor, en datastudent som hellre levererar något folk faktiskt använder än optimerar en CV-rad. Det senaste året har jag byggt realtidsdashboards för industriella kunder i Brasilien, medgrundade ett SaaS som automatiserar skattebyråkrati via WhatsApp, och driver nu en egen frilanspraktik inom webbutveckling för småföretagare i Sverige, där jag studerar på utbyte vid Uppsala universitet.',
    'about.p2': 'Jag gillar de oglamourösa delarna av ingenjörsarbete: att förvandla ett 3 000-radigt skript till något ett team faktiskt kan underhålla, eller att göra en kunds vaga idé till en fungerande webbplats. Just nu delar jag mina kurser mellan system (operativsystem, nätverk, parallellprogrammering) och användarcentrerad design — för de ingenjörer jag lärt mig mest av brydde sig lika mycket om personen som använder mjukvaran som om koden som driver den.',

    /* ── EXPERIENCE — THEIA ── */
    'exp.label':          'Erfarenhet',
    'exp.theia.role':     'Python-utvecklare',
    'exp.theia.type':     'Praktik',
    'exp.theia.date':     'apr 2025 – dec 2025',
    'exp.theia.li1': 'Byggde och underhöll ett realtidsdashboard för industriell övervakning (Python, Dash) för Agrosuls anläggning — livekameror, produktionsmätetal och PostgreSQL-baserad rapportering som dagligen används av operatörer.',
    'exp.theia.li2': 'Ledde ett fullständigt refaktor av dashboardens kodbas och bröt en enda ~3 000-radig fil till en modulär, kortbaserad arkitektur som resten av teamet kan utöka utan att gå genom mig.',
    'exp.theia.li3': 'Designade och byggde ett parallellt övervakningssystem för Vibras anläggning i Sete Lagoas — tassklassificering, skiftschemavy och cirkeldiagramrapportering anpassad för en annan produktionslinje.',

    /* ── EXPERIENCE — INTUI ── */
    'exp.intui.role': 'Medgrundare & Utvecklare',
    'exp.intui.li1':  'Medbyggde en SaaS-plattform som automatiserar generering av brasilianska NFS-e-fakturor direkt via WhatsApp, och eliminerade ett manuellt pappersarbetssteg för småföretagare.',
    'exp.intui.li2':  'Ansvarade för både den tekniska byggnaden och produktbesluten som ett tvåpersonsteam — arkitektur och vad kunden faktiskt behövde.',

    /* ── EXPERIENCE — MEDQUIZ ── */
    'exp.medquiz.role': 'Utvecklare',
    'exp.medquiz.li1':  'Utvecklare i ett Scrum-team som byggde en spelifierad plattform för medicinsk utbildning — levererade funktioner sprint för sprint tillsammans med produkt och design.',

    /* ── FREELANCE ── */
    'freelance.label':    'Frilans',
    'freelance.role':     'Webbutvecklare — Grundare',
    'freelance.location': 'Uppsala, Sverige',
    'freelance.status':   'Aktiv',
    'freelance.li1':      'Driver en oberoende frilanspraktik och bygger webbplatser för invandrarägda småföretag i Uppsala med en "bygg först, pitcha sedan"-metod — levererar en fungerande sajt innan jag ber om affären.',
    'freelance.li2':      'Äger hela kundrelationen solo: kravanalys, prisnivåer, design, bygge och leverans.',
    'freelance.stack.label': 'Stack',
    'freelance.cta':      'Hör av dig →',

    /* ── SOFT SKILLS ── */
    'skills.label': 'Mjuka kompetenser',
    'skills.adaptability.title': 'Kulturell anpassningsförmåga',
    'skills.adaptability.desc':  'Flyttade från Porto Alegre till Uppsala mitt i examen, lärde mig konversationssvenska och säljer nu webbutveckling till svenska företagare på ett språk som är andraspråk för oss båda.',
    'skills.client.title': 'Kundkommunikation',
    'skills.client.desc':  'Frilansarbete innebär att jag är hela den kundvända sidan av verksamheten — förklarar avvägningar, hanterar förväntningar och stänger affärer utan ett säljteam bakom mig.',
    'skills.ownership.title': 'Ägarskap',
    'skills.ownership.desc':  'På THEIA byggde jag inte bara funktioner — jag bestämde att en 3 000-radig fil behövde bli fem välorganiserade, och genomförde det.',
    'skills.collab.title': 'Samarbete',
    'skills.collab.desc':  'Arbetade i ett Scrum-team på MedQuiz och synkade med produkt och design istället för att bara ta ärenden från en board.',
    'skills.learning.title': 'Kontinuerligt lärande',
    'skills.learning.desc':  'Kombinerar just nu en MDI-kurs med ett självriktat UX/UI-spår på Alura — för att bygga är bara halva jobbet om ingen kan använda det.',

    /* ── PROJECTS ── */
    'proj.label': 'Projekt',

    'proj.intui.label': 'Under utveckling',
    'proj.intui.title': 'Intui',
    'proj.intui.desc':  'Medgrundade ett SaaS-verktyg som automatiserar generering av NFS-e (elektroniska fakturor) för läkare direkt via WhatsApp. Python-backend, Nuvem Fiscal API och Google Gemini för naturlig språkbehandling.',

    'proj.ceap.label': 'Datateknik',
    'proj.ceap.title': 'Analys av offentliga utgifter',
    'proj.ceap.desc':  'Ansvarade för datateknik i ett teamprojekt med 332 000+ poster av brasilianska parlamentariska utgifter (2023–2024). CRISP-DM-metodik: Python ETL, stjärnschema-datamodell, Power BI-dashboards.',

    'proj.medquiz.label': 'Mjukvaruteknik',
    'proj.medquiz.title': 'MedQuiz',
    'proj.medquiz.desc':  'Spelifierad plattform för medicinsk utbildning byggd med ett tvärfunktionellt team vid PUCRS. Ansvarade för riskplanering, användarberättelser och Figma-prototyper under Scrum.',

    'proj.java.label': 'Tekniska grunder',
    'proj.java.title': 'Java-system',
    'proj.java.desc':  'Orderhanteringssystem med Clean Architecture och fordonshanteringssystem med 100 % testtäckning med JUnit — båda byggda med produktionskvalitet.',

    /* ── CONTACT ── */
    'contact.label': 'Kontakt',
    'contact.title': 'Hör av dig.',
    'contact.wa':    'WhatsApp',
    'contact.email': 'E-post',
    'contact.li':    'LinkedIn',

    /* ── FOOTER ── */
    'footer.copy': '© 2025 Victor Closs Duarte',
    'footer.sub':  'Porto Alegre · Uppsala',
  }
};
