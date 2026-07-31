const TRANSLATIONS = {
  en: {
    /* ── NAV ── */
    'nav.sobre':       'About',
    'nav.experiencia': 'Experience',
    'nav.projetos':    'Projects',
    'nav.contato':     'Contact',

    /* ── SIDEBAR ── */
    'sidebar.role':       'Software Developer',
    'sidebar.student':    'CS Student · Uppsala University',
    'sidebar.location':   'Porto Alegre, Brazil',
    'sidebar.available':  'Open to opportunities',

    'sidebar.skills.title': 'Skills',
    'sidebar.skills.web':   'Web',
    'sidebar.skills.data':  'Data & Backend',
    'sidebar.skills.tools': 'Tools',

    'sidebar.edu.title':    'Education',
    'sidebar.edu.ups.name': 'Uppsala University',
    'sidebar.edu.ups.deg':  'Computer Science (exchange)',
    'sidebar.edu.ups.year': '2025 – 2026',
    'sidebar.edu.puc.name': 'PUCRS',
    'sidebar.edu.puc.deg':  'B.Sc. Computer Science',
    'sidebar.edu.puc.year': '2024 – 2027',

    'sidebar.langs.title': 'Languages',
    'sidebar.lang.pt': 'Portuguese — Native',
    'sidebar.lang.en': 'English — Fluent',
    'sidebar.lang.sv': 'Swedish — Basic',

    /* ── ABOUT ── */
    'about.label': 'About',
    'about.p1': "I'm a Computer Science student at PUCRS (Porto Alegre, Brazil), currently in my fourth semester and on exchange at Uppsala University in Sweden.",
    'about.p2': "I enjoy building things that work well — from industrial monitoring dashboards to data pipelines and web interfaces. I care about clean architecture, readable code, and software that solves real problems.",
    'about.p3': "Outside of academics I work on personal projects, explore public datasets, and occasionally build websites for small local businesses.",

    /* ── EXPERIENCE ── */
    'exp.label':   'Experience',
    'exp.date':    'Apr 2025 — Dec 2025',
    'exp.role':    'Software Developer',
    'exp.type':    'Internship',
    'exp.li1': 'Built industrial monitoring dashboards in Python (Dash) for clients like Agrosul and Vibra, enabling real-time production tracking.',
    'exp.li2': 'Designed modular component architecture replacing a ~3,000-line monolithic system.',
    'exp.li3': 'Integrated PostgreSQL databases and developed data processing pipelines.',
    'exp.li4': 'Implemented real-time video streaming (HLS/RTSP) directly into dashboards.',
    'exp.li5': 'Delivered a complete data pipeline for Vibra\'s Sete Lagoas plant, adapting the Agrosul architecture.',
    'exp.li6': 'Developed supporting internal tooling interfaces using HTML and CSS.',

    /* ── PROJECTS ── */
    'proj.label': 'Projects',

    'proj.intui.label': 'In development',
    'proj.intui.title': 'Intui',
    'proj.intui.desc':  'SaaS that automates NFS-e (electronic service invoice) generation for doctors via WhatsApp. Python backend, Nuvem Fiscal API integration, and Google Gemini for natural language processing.',

    'proj.ceap.label': 'Data Engineering',
    'proj.ceap.title': 'Parliamentary Spending Analysis',
    'proj.ceap.desc':  'Analyzed 332,000+ records of Brazilian parliamentary spending (2023–2024) at PUCRS using CRISP-DM: Python ETL, star-schema data model, and Power BI dashboards.',

    'proj.medquiz.label': 'Software Engineering',
    'proj.medquiz.title': 'MedQuiz',
    'proj.medquiz.desc':  'Gamified medical education platform built with a small team at PUCRS. Led risk planning, user story mapping, and Figma prototyping.',

    'proj.java.label': 'Engineering Fundamentals',
    'proj.java.title': 'Java Systems',
    'proj.java.desc':  'Order management system with Clean Architecture and a vehicle management system with 100% JUnit test coverage.',

    /* ── FREELANCE NOTE ── */
    'freelance.label':  'Freelance',
    'freelance.text':   'I also build websites for small businesses — markets, restaurants, salons — using HTML, CSS, React, and Node.js. Fast, simple, affordable.',
    'freelance.cta':    'Get in touch',

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

  sv: {
    /* ── NAV ── */
    'nav.sobre':       'Om mig',
    'nav.experiencia': 'Erfarenhet',
    'nav.projetos':    'Projekt',
    'nav.contato':     'Kontakt',

    /* ── SIDEBAR ── */
    'sidebar.role':      'Mjukvaruutvecklare',
    'sidebar.student':   'Datastudent · Uppsala universitet',
    'sidebar.location':  'Porto Alegre, Brasilien',
    'sidebar.available': 'Öppen för möjligheter',

    'sidebar.skills.title': 'Kompetenser',
    'sidebar.skills.web':   'Webb',
    'sidebar.skills.data':  'Data & Backend',
    'sidebar.skills.tools': 'Verktyg',

    'sidebar.edu.title':    'Utbildning',
    'sidebar.edu.ups.name': 'Uppsala universitet',
    'sidebar.edu.ups.deg':  'Datavetenskap (utbyte)',
    'sidebar.edu.ups.year': '2025 – 2026',
    'sidebar.edu.puc.name': 'PUCRS',
    'sidebar.edu.puc.deg':  'Kandidat i datavetenskap',
    'sidebar.edu.puc.year': '2024 – 2027',

    'sidebar.langs.title': 'Språk',
    'sidebar.lang.pt': 'Portugisiska — Modersmål',
    'sidebar.lang.en': 'Engelska — Flytande',
    'sidebar.lang.sv': 'Svenska — Grundläggande',

    /* ── ABOUT ── */
    'about.label': 'Om mig',
    'about.p1': 'Jag studerar datavetenskap vid PUCRS (Porto Alegre, Brasilien), just nu i min fjärde termin och på utbytesstudier vid Uppsala universitet.',
    'about.p2': 'Jag gillar att bygga saker som fungerar bra — från industriella övervakningssystem till datapipelines och webbgränssnitt. Jag värdesätter ren arkitektur, läsbar kod och mjukvara som löser verkliga problem.',
    'about.p3': 'Utanför studierna arbetar jag med egna projekt, utforskar offentliga dataset och bygger ibland webbplatser för lokala småföretag.',

    /* ── EXPERIENCE ── */
    'exp.label':   'Erfarenhet',
    'exp.date':    'Apr 2025 — Dec 2025',
    'exp.role':    'Mjukvaruutvecklare',
    'exp.type':    'Praktik',
    'exp.li1': 'Byggde dashboards för industriell övervakning i Python (Dash) för kunder som Agrosul och Vibra, med realtidsuppföljning av produktion.',
    'exp.li2': 'Designade modulär komponentarkitektur som ersatte ett ~3 000-radigt monolitiskt system.',
    'exp.li3': 'Integrerade PostgreSQL-databaser och utvecklade datapipelines.',
    'exp.li4': 'Implementerade realtidsvideoströmning (HLS/RTSP) direkt i dashboards.',
    'exp.li5': 'Levererade en komplett datapipeline för Vibras anläggning i Sete Lagoas.',
    'exp.li6': 'Utvecklade interna verktyggränssnitt med HTML och CSS.',

    /* ── PROJECTS ── */
    'proj.label': 'Projekt',

    'proj.intui.label': 'Under utveckling',
    'proj.intui.title': 'Intui',
    'proj.intui.desc':  'SaaS som automatiserar generering av NFS-e (elektroniska fakturor) för läkare via WhatsApp. Python-backend, Nuvem Fiscal API och Google Gemini för språkbehandling.',

    'proj.ceap.label': 'Datateknik',
    'proj.ceap.title': 'Analys av offentliga utgifter',
    'proj.ceap.desc':  'Analyserade 332 000+ poster av brasilianska parlamentariska utgifter (2023–2024) vid PUCRS med CRISP-DM: Python ETL, stjärnschema och Power BI-dashboards.',

    'proj.medquiz.label': 'Mjukvaruteknik',
    'proj.medquiz.title': 'MedQuiz',
    'proj.medquiz.desc':  'Spelifierad plattform för medicinsk utbildning byggd med ett litet team vid PUCRS. Ansvarade för riskplanering, användarberättelser och Figma-prototyper.',

    'proj.java.label': 'Tekniska grunder',
    'proj.java.title': 'Java-system',
    'proj.java.desc':  'Orderhanteringssystem med Clean Architecture och fordonshanteringssystem med 100 % testtäckning med JUnit.',

    /* ── FREELANCE NOTE ── */
    'freelance.label': 'Frilans',
    'freelance.text':  'Jag bygger även webbplatser för småföretag — butiker, restauranger, salonger — med HTML, CSS, React och Node.js. Enkelt, snabbt och prisvärt.',
    'freelance.cta':   'Hör av dig',

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
