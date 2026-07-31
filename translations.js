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
    'record.lang.val':      'pt_BR · en_US · sv_SE',

    /* ── ABOUT ── */
    'about.label': 'About',
    'about.p1': 'At THEIA Sistemas, I built industrial monitoring dashboards in Python — systems now used daily by Agrosul and Vibra to track production in real time. I also refactored a ~3,000-line monolithic codebase into a modular component architecture. That was an internship.',
    'about.p2': 'Now I\'m in my fourth semester of CS at PUCRS, on exchange at Uppsala University in Sweden, and running a freelance web practice on the side — building websites for local businesses with paying clients.',
    'about.p3': 'My work sits at the intersection of data engineering (pipelines, PostgreSQL, real-time systems) and web development (React, Node.js, CSS). I care about clean architecture and code other people can maintain.',

    /* ── EXPERIENCE ── */
    'exp.label':   'Experience',
    'exp.date':    'Apr 2025 — Dec 2025',
    'exp.role':    'Software Developer',
    'exp.type':    'Internship',
    'exp.li1': 'Built industrial monitoring dashboards in Python (Dash) used daily by Agrosul and Vibra for real-time production tracking.',
    'exp.li2': 'Refactored a ~3,000-line monolithic system into a modular component architecture, improving maintainability and extensibility.',
    'exp.li3': 'Designed and maintained PostgreSQL data pipelines for production and sensor data.',
    'exp.li4': 'Integrated real-time video streaming (HLS/RTSP) into dashboards for live plant monitoring.',
    'exp.li5': 'Delivered a complete data pipeline for Vibra\'s Sete Lagoas plant, adapting and extending the Agrosul architecture.',
    'exp.li6': 'Built supporting internal UI components in HTML and CSS.',

    /* ── FREELANCE (proper section) ── */
    'freelance.label':    'Freelance',
    'freelance.role':     'Web Developer',
    'freelance.location': 'Uppsala, Sweden',
    'freelance.status':   'Active',
    'freelance.desc':     'While studying in Uppsala, I\'ve been building and maintaining websites for local businesses — markets, restaurants, salons — with paying clients. Working on real projects has sharpened how I approach engineering: scope clearly, ship fast, keep it maintainable.',
    'freelance.stack.label': 'Stack',
    'freelance.cta':      'Get in touch →',

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
    'about.p1': 'På THEIA Sistemas byggde jag dashboards för industriell övervakning i Python — system som nu används dagligen av Agrosul och Vibra för att följa produktion i realtid. Jag ersatte också ett ~3 000-radigt monolitiskt system med en modulär komponentarkitektur.',
    'about.p2': 'Nu är jag i min fjärde termin på PUCRS, på utbytesstudier vid Uppsala universitet, och driver parallellt frilansprojekt inom webbutveckling för lokala företag — med betalande kunder.',
    'about.p3': 'Mitt arbete spänner över datateknik (pipelines, PostgreSQL, realtidssystem) och webbutveckling (React, Node.js, CSS). Jag värdesätter ren arkitektur och kod som andra kan underhålla.',

    /* ── EXPERIENCE ── */
    'exp.label':   'Erfarenhet',
    'exp.date':    'apr 2025 — dec 2025',
    'exp.role':    'Mjukvaruutvecklare',
    'exp.type':    'Praktik',
    'exp.li1': 'Byggde dashboards för industriell övervakning i Python (Dash) som dagligen används av Agrosul och Vibra för realtidsuppföljning av produktion.',
    'exp.li2': 'Ersatte ett ~3 000-radigt monolitiskt system med en modulär komponentarkitektur.',
    'exp.li3': 'Designade och underhöll PostgreSQL-datapipelines för produktions- och sensordata.',
    'exp.li4': 'Integrerade realtidsvideoströmning (HLS/RTSP) direkt i dashboards för visuell fabriksövervakning.',
    'exp.li5': 'Levererade en komplett datapipeline för Vibras anläggning i Sete Lagoas, baserad på Agrosul-arkitekturen.',
    'exp.li6': 'Byggde interna UI-komponenter i HTML och CSS.',

    /* ── FREELANCE ── */
    'freelance.label':    'Frilans',
    'freelance.role':     'Webbutvecklare',
    'freelance.location': 'Uppsala, Sverige',
    'freelance.status':   'Aktiv',
    'freelance.desc':     'Under mina studier i Uppsala har jag byggt och underhållit webbplatser för lokala företag — butiker, restauranger, salonger — med betalande kunder. Att arbeta med riktiga uppdragsgivare har skärpt mitt sätt att tänka: tydlig kravanalys, snabb leverans, underhållbar kod.',
    'freelance.stack.label': 'Stack',
    'freelance.cta':      'Hör av dig →',

    /* ── PROJECTS ── */
    'proj.label': 'Projekt',

    'proj.intui.label': 'Under utveckling',
    'proj.intui.title': 'Intui',
    'proj.intui.desc':  'Medgrundade ett SaaS-verktyg som automatiserar generering av NFS-e (elektroniska fakturor) för läkare direkt via WhatsApp. Python-backend, Nuvem Fiscal API och Google Gemini för naturlig språkbehandling.',

    'proj.ceap.label': 'Datateknik',
    'proj.ceap.title': 'Analys av offentliga utgifter',
    'proj.ceap.desc':  'Ansvarade för datateknik i ett teamprojekt vid PUCRS med 332 000+ poster av brasilianska parlamentariska utgifter (2023–2024). CRISP-DM-metodik: Python ETL, stjärnschema-datamodell, Power BI-dashboards.',

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
