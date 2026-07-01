const TRANSLATIONS = {
  en: {
    /* ── NAV ── */
    'nav.sobre':       'About',
    'nav.experiencia': 'Experience',
    'nav.projetos':    'Projects',
    'nav.negocios':    'Sites for businesses',
    'nav.contato':     'Contact',

    /* ── HERO ── */
    'hero.label':    'Software Developer · CS Student',
    'hero.tagline':  'I build systems and simple, affordable websites for small businesses.\nCurrently studying Computer Science at Uppsala University, Sweden.',
    'hero.btn.contact':  'Get in touch',
    'hero.btn.projects': 'View projects',

    /* ── SOBRE ── */
    'sobre.label': '01 — About',
    'sobre.title': 'Who I am',
    'sobre.p1': "I'm a Computer Science student at PUCRS (Porto Alegre, Brazil), currently in my fourth semester and on exchange at Uppsala University in Sweden, studying Computer Science.",
    'sobre.p2': "Between April and December 2025, I worked as a developer at THEIA Sistemas, building industrial monitoring dashboards in Python — systems used by companies like Agrosul and Vibra to track production and data in real time, including live camera streaming, data processing, and PostgreSQL database integration.",
    'sobre.p3': "Outside of work, I enjoy applying what I learn to my own projects — from AI-driven automation to public data analysis — and exploring Europe during my exchange. Right now, alongside my studies, I also offer my services helping small local businesses get a simple, fast, and affordable online presence.",
    'sobre.fact.formation.label': 'Currently at',
    'sobre.fact.formation.val':   'Uppsala University, Sweden',
    'sobre.fact.base.label': 'Based in',
    'sobre.fact.base.val':   'Porto Alegre, Brazil',
    'sobre.fact.focus.label': 'Focus',
    'sobre.fact.focus.val':   'Software · Data · Web',
    'sobre.fact.stack.label': 'Main stack',
    'sobre.fact.stack.val':   'Python · Java · JavaScript · SQL',

    /* ── EXPERIÊNCIA ── */
    'exp.label':    '02 — Experience',
    'exp.title':    'Where I\'ve worked',
    'exp.date':     'April 2025 — December 2025',
    'exp.role':     'Software Developer',
    'exp.company':  'THEIA Sistemas',
    'exp.li1': 'Built industrial monitoring dashboards in Python (Dash), used by clients like Agrosul and Vibra for real-time production tracking.',
    'exp.li2': 'Modular component-based architecture, replacing a monolithic system of ~3,000 lines.',
    'exp.li3': 'PostgreSQL database integration and data processing pipelines.',
    'exp.li4': 'Real-time video streaming (HLS/RTSP) integrated into dashboards for live production monitoring.',
    'exp.li5': 'Built a complete data pipeline for Vibra\'s plant in Sete Lagoas, replicating and adapting the Agrosul system architecture.',

    /* ── PROJETOS ── */
    'proj.label': '03 — Projects',
    'proj.title': 'What I build',

    'proj.intui.label': 'In development',
    'proj.intui.title': 'Intui',
    'proj.intui.desc':  'A SaaS built in partnership that automates the generation of NFS-e (electronic service invoices) for doctors directly via WhatsApp. Python backend, integration with the Nuvem Fiscal API, and Google Gemini for natural language processing.',

    'proj.ceap.label': 'Data Engineering',
    'proj.ceap.title': 'Parliamentary Spending Analysis',
    'proj.ceap.desc':  'Led data engineering on a project analyzing over 332,000 records of Brazilian parliamentary spending (2023–2024) at PUCRS, using the CRISP-DM methodology: Python-based ETL, a star-schema data model, and Power BI dashboards for visualization.',

    'proj.medquiz.label': 'Software Engineering',
    'proj.medquiz.title': 'MedQuiz',
    'proj.medquiz.desc':  'A gamified medical education platform, built as part of a small software engineering team at PUCRS. My role covered risk planning, user story mapping, and prototyping in Figma.',

    'proj.java.label': 'Engineering Fundamentals',
    'proj.java.title': 'Java Projects',
    'proj.java.desc':  'An order management system with Clean Architecture and a vehicle management system with 100% JUnit test coverage — exercises in solid engineering and best practices.',

    /* ── NEGÓCIOS / SERVICES ── */
    'neg.label': '04 — For small businesses',
    'neg.title': 'Do you run a local business without a website yet?',
    'neg.intro': 'I help small businesses — markets, restaurants, salons, and service providers — get a simple, professional online presence that actually helps bring in customers.',
    'neg.step1': 'We talk about your business and what you need.',
    'neg.step2': 'I put together a preview of your site, no commitment required.',
    'neg.step3': 'You only pay if you approve the result.',
    'neg.includes.label': 'What\'s included',
    'neg.inc1': 'A professional site with contact info, photos, and opening hours',
    'neg.inc2': 'WhatsApp and Google Maps integration',
    'neg.inc3': 'Ready in just a few days',
    'neg.btn':  'Tell me more',

    /* ── CONTATO ── */
    'contact.label':  '05 — Contact',
    'contact.title':  'Let\'s talk.',
    'contact.wa':     'WhatsApp',
    'contact.email':  'Email',
    'contact.li':     'LinkedIn',

    /* ── FOOTER ── */
    'footer.copy': '© 2025 Victor Closs Duarte',
    'footer.sub':  'Porto Alegre · Uppsala',
  },

  sv: {
    /* ── NAV ── */
    'nav.sobre':       'Om mig',
    'nav.experiencia': 'Erfarenhet',
    'nav.projetos':    'Projekt',
    'nav.negocios':    'Webbplatser för företag',
    'nav.contato':     'Kontakt',

    /* ── HERO ── */
    'hero.label':    'Mjukvaruutvecklare · Datastudent',
    'hero.tagline':  'Jag bygger system och enkla, prisvärda webbplatser för småföretag.\nStuderar för närvarande datavetenskap vid Uppsala universitet.',
    'hero.btn.contact':  'Kontakta mig',
    'hero.btn.projects': 'Se projekt',

    /* ── SOBRE ── */
    'sobre.label': '01 — Om mig',
    'sobre.title': 'Vem är jag',
    'sobre.p1': 'Jag studerar datavetenskap vid PUCRS (Porto Alegre, Brasilien), just nu i min fjärde termin och på utbytesstudier vid Uppsala universitet, där jag läser datavetenskap.',
    'sobre.p2': 'Mellan april och december 2025 arbetade jag som utvecklare på THEIA Sistemas, där jag byggde system för industriell övervakning i Python — system som används av företag som Agrosul och Vibra för att följa produktion och data i realtid, inklusive livevideoströmning, databearbetning och integration med PostgreSQL.',
    'sobre.p3': 'Utanför jobbet gillar jag att tillämpa det jag lär mig i egna projekt — från AI-driven automatisering till analys av offentlig data — och att utforska Europa under mitt utbyte. Just nu, vid sidan av studierna, erbjuder jag även mina tjänster till lokala småföretag som vill ha en enkel, snabb och prisvärd digital närvaro.',
    'sobre.fact.formation.label': 'Studerar vid',
    'sobre.fact.formation.val':   'Uppsala universitet, Sverige',
    'sobre.fact.base.label': 'Hemstad',
    'sobre.fact.base.val':   'Porto Alegre, Brasilien',
    'sobre.fact.focus.label': 'Inriktning',
    'sobre.fact.focus.val':   'Mjukvara · Data · Webb',
    'sobre.fact.stack.label': 'Huvudsaklig stack',
    'sobre.fact.stack.val':   'Python · Java · JavaScript · SQL',

    /* ── EXPERIÊNCIA ── */
    'exp.label':   '02 — Erfarenhet',
    'exp.title':   'Var jag har arbetat',
    'exp.date':    'April 2025 — December 2025',
    'exp.role':    'Mjukvaruutvecklare',
    'exp.company': 'THEIA Sistemas',
    'exp.li1': 'Byggde dashboards för industriell övervakning i Python (Dash), använda av kunder som Agrosul och Vibra för realtidsuppföljning av produktion.',
    'exp.li2': 'Modulär komponentbaserad arkitektur som ersatte ett monolitiskt system på ~3 000 rader.',
    'exp.li3': 'PostgreSQL-integration och datapipelines för bearbetning.',
    'exp.li4': 'Realtidsvideoströmning (HLS/RTSP) integrerad i dashboards för visuell produktionsövervakning.',
    'exp.li5': 'Byggde en komplett datapipeline för Vibras anläggning i Sete Lagoas, baserad på arkitekturen från Agrosul-systemet.',

    /* ── PROJETOS ── */
    'proj.label': '03 — Projekt',
    'proj.title': 'Vad jag bygger',

    'proj.intui.label': 'Under utveckling',
    'proj.intui.title': 'Intui',
    'proj.intui.desc':  'Ett SaaS-verktyg byggt i samarbete som automatiserar generering av NFS-e (elektroniska tjänstefakturor) för läkare direkt via WhatsApp. Python-backend, integration med Nuvem Fiscal API och Google Gemini för naturlig språkbehandling.',

    'proj.ceap.label': 'Datateknik',
    'proj.ceap.title': 'Analys av offentliga utgifter',
    'proj.ceap.desc':  'Ansvarade för datahantering i ett projekt vid PUCRS som analyserade över 332 000 poster av brasilianska parlamentariska utgifter (2023–2024), med CRISP-DM-metodik: Python-baserad ETL, en stjärnschema-datamodell och Power BI-dashboards för visualisering.',

    'proj.medquiz.label': 'Mjukvaruteknik',
    'proj.medquiz.title': 'MedQuiz',
    'proj.medquiz.desc':  'En spelifierad plattform för medicinsk utbildning, byggd tillsammans med ett mindre utvecklingsteam vid PUCRS. Mitt ansvar omfattade riskplanering, kartläggning av användarberättelser och prototyper i Figma.',

    'proj.java.label': 'Tekniska grunder',
    'proj.java.title': 'Java-projekt',
    'proj.java.desc':  'Ett orderhanteringssystem med Clean Architecture och ett fordonshanteringssystem med 100 % testtäckning med JUnit — övningar i gedigen mjukvaruteknik och bra praxis.',

    /* ── NEGÓCIOS / SERVICES ── */
    'neg.label': '04 — För småföretag',
    'neg.title': 'Driver du ett lokalt företag utan hemsida?',
    'neg.intro': 'Jag hjälper småföretag — butiker, restauranger, salonger och andra tjänsteföretag — att få en enkel, professionell digital närvaro som faktiskt hjälper till att locka kunder.',
    'neg.step1': 'Vi pratar om ditt företag och vad du behöver.',
    'neg.step2': 'Jag tar fram ett förslag på hemsida, helt utan förpliktelser.',
    'neg.step3': 'Du betalar bara om du är nöjd med resultatet.',
    'neg.includes.label': 'Det här ingår',
    'neg.inc1': 'En professionell hemsida med kontaktuppgifter, bilder och öppettider',
    'neg.inc2': 'Integration med WhatsApp och Google Maps',
    'neg.inc3': 'Klar på bara några dagar',
    'neg.btn':  'Berätta mer',

    /* ── CONTATO ── */
    'contact.label':  '05 — Kontakt',
    'contact.title':  'Hör av dig.',
    'contact.wa':     'WhatsApp',
    'contact.email':  'E-post',
    'contact.li':     'LinkedIn',

    /* ── FOOTER ── */
    'footer.copy': '© 2025 Victor Closs Duarte',
    'footer.sub':  'Porto Alegre · Uppsala',
  }
};
