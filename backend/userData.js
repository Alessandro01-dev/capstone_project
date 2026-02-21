const userData = [
  {
    "name": "Giulia",
    "surname": "Rinaldi",
    "email": "giulia.rinaldi@example.com",
    "password": "password1",
    "dob": "1994-05-12",
    "avatar": "https://picsum.photos/200",
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "nationality": { "name": "Italy", "code": "it" },
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [{ "code": "en", "level": "C1" }, { "code": "es", "level": "B2" }],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "interests": ["travel", "books", "yoga", "culture"],
    "bio": "I’m Italian and I’d love to improve my French because I’m planning to move to Lyon next year for work. Happy to help you with natural Italian conversation in exchange!",
    "location": {
      "type": "Point",
      "coordinates": [9.21345, 45.46512],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Lorenzo",
    "surname": "Bianchi",
    "email": "lorenzo.bianchi@example.com",
    "password": "password1",
    "dob": "1991-11-20",
    "avatar": "https://picsum.photos/200",
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "nationality": { "name": "Italy", "code": "it" },
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [{ "code": "en", "level": "C1" }],
      "learning": [{ "code": "de", "level": "B1" }]
    },
    "interests": ["tech", "startups", "fitness", "travel"],
    "bio": "Italian software developer learning German because my company is opening an office in Berlin. I can help you sound more natural and confident in Italian.",
    "location": {
      "type": "Point",
      "coordinates": [7.68231, 45.07245],
      "city": "Torino",
      "country": "Italy"
    }
  },
  {
    "name": "Martina",
    "surname": "Greco",
    "email": "martina.greco@example.com",
    "password": "password1",
    "dob": "1995-07-03",
    "avatar": "https://picsum.photos/200",
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "nationality": { "name": "Italy", "code": "it" },
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [{ "code": "fr", "level": "C1" }, { "code": "en", "level": "B2" }],
      "learning": []
    },
    "interests": ["art", "cinema", "travel", "photography"],
    "bio": "From Rome 🇮🇹 I speak fluent French but I want to practice it more because my partner is French. Happy to help with Italian, especially for art and cinema lovers.",
    "location": {
      "type": "Point",
      "coordinates": [12.50321, 41.89987],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Alessandro",
    "surname": "Conti",
    "email": "alessandro.conti@example.com",
    "password": "password1",
    "dob": "1993-02-15",
    "avatar": "https://picsum.photos/200",
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "nationality": { "name": "Italy", "code": "it" },
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [{ "code": "es", "level": "B2" }],
      "learning": [{ "code": "pt", "level": "A2" }]
    },
    "interests": ["sports", "music", "travel", "culture"],
    "bio": "Italian from Florence. I’m learning Portuguese because I’d like to spend some months in Brazil. I can help you with everyday Italian and slang.",
    "location": {
      "type": "Point",
      "coordinates": [11.25874, 43.77521],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Sofía",
    "surname": "Martínez",
    "email": "sofia.martinez@example.com",
    "password": "password1",
    "dob": "1996-09-28",
    "avatar": "https://picsum.photos/200",
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "nationality": { "name": "Spain", "code": "es" },
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [{ "code": "it", "level": "C1" }, { "code": "en", "level": "B2" }],
      "learning": []
    },
    "interests": ["travel", "music", "food", "culture"],
    "bio": "Spanish living in Bologna 🇪🇸 I learned Italian for my master’s degree and now I want to keep improving it. I’d love to exchange Spanish for natural Italian practice.",
    "location": {
      "type": "Point",
      "coordinates": [11.33987, 44.49812],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Lucas",
    "surname": "Fernández",
    "email": "lucas.fernandez@example.com",
    "password": "password1",
    "dob": "1992-04-10",
    "avatar": "https://picsum.photos/200",
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "nationality": { "name": "Argentina", "code": "ar" },
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [{ "code": "it", "level": "B2" }, { "code": "en", "level": "B2" }],
      "learning": []
    },
    "interests": ["football", "travel", "history", "food"],
    "bio": "Argentinian based in Milan 🇦🇷 I’m improving my Italian because I’d like to apply for citizenship. Happy to help you with Spanish and casual conversation.",
    "location": {
      "type": "Point",
      "coordinates": [9.19632, 45.45974],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Hannah",
    "surname": "Schneider",
    "email": "hannah.schneider@example.com",
    "password": "password1",
    "dob": "1994-08-14",
    "avatar": "https://picsum.photos/200",
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "nationality": { "name": "Germany", "code": "de" },
    "languages": {
      "native": [{ "code": "de" }],
      "spoken": [{ "code": "it", "level": "B2" }, { "code": "en", "level": "C1" }],
      "learning": []
    },
    "interests": ["reading", "hiking", "travel", "culture"],
    "bio": "German living in Florence 🇩🇪 I started learning Italian because I fell in love with Tuscany. I’d like to practice speaking more fluently.",
    "location": {
      "type": "Point",
      "coordinates": [11.27218, 43.76854],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "João",
    "surname": "Silva",
    "email": "joao.silva@example.com",
    "password": "password1",
    "dob": "1989-06-30",
    "avatar": "https://picsum.photos/200",
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "nationality": { "name": "Brazil", "code": "br" },
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [{ "code": "it", "level": "C1" }, { "code": "en", "level": "B2" }],
      "learning": []
    },
    "interests": ["music", "travel", "fitness", "food"],
    "bio": "Brazilian living in Naples 🇧🇷 I moved here for love and I’m working on sounding more natural in Italian. Happy to exchange Portuguese!",
    "location": {
      "type": "Point",
      "coordinates": [14.27145, 40.84792],
      "city": "Napoli",
      "country": "Italy"
    }
  },
  {
    "name": "Claire",
    "surname": "Dubois",
    "email": "claire.dubois@example.com",
    "password": "password1",
    "dob": "1992-05-14",
    "avatar": "https://picsum.photos/200",
    "bio": "French in Turin 🇫🇷 I’m improving my Italian because I work in the wine industry and collaborate with local producers. Let’s exchange French and Italian!",
    "interests": ["art", "cinema", "travel", "wine"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "fr" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "France", "code": "fr" },
    "location": {
      "type": "Point",
      "coordinates": [7.70123, 45.06782],
      "city": "Torino",
      "country": "Italy"
    }
  },
  {
    "name": "Mateusz",
    "surname": "Kowalski",
    "email": "mateusz.kowalski@example.com",
    "password": "password1",
    "dob": "1990-11-22",
    "avatar": "https://picsum.photos/200",
    "bio": "Polish living in Milan 🇵🇱 I moved here for work in IT and I want to feel more confident speaking Italian in daily life. Happy to help with Polish or English.",
    "interests": ["tech", "gaming", "travel", "history"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pl" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Poland", "code": "pl" },
    "location": {
      "type": "Point",
      "coordinates": [9.18273, 45.47241],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Isabelle",
    "surname": "Lefevre",
    "email": "isabelle.lefevre@example.com",
    "password": "password1",
    "dob": "1988-03-30",
    "avatar": "https://picsum.photos/200",
    "bio": "French architect based in Genoa 🇫🇷 I learned Italian for work and now I’m studying Spanish because I’d like to collaborate with firms in Barcelona.",
    "interests": ["books", "art", "coffee", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "fr" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": [{ "code": "es", "level": "A2" }]
    },
    "nationality": { "name": "France", "code": "fr" },
    "location": {
      "type": "Point",
      "coordinates": [8.93842, 44.41258],
      "city": "Genova",
      "country": "Italy"
    }
  },
  {
    "name": "Daniel",
    "surname": "Thompson",
    "email": "daniel.thompson@example.com",
    "password": "password1",
    "dob": "1995-07-18",
    "avatar": "https://picsum.photos/200",
    "bio": "British living in Bologna 🇬🇧 I’m improving my Italian because my partner is from here. I’m also starting German for future career opportunities.",
    "interests": ["football", "music", "podcasts", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": false,
    "languages": {
      "native": [{ "code": "en" }],
      "spoken": [{ "code": "it", "level": "B2" }],
      "learning": [{ "code": "de", "level": "A2" }]
    },
    "nationality": { "name": "United Kingdom", "code": "gb" },
    "location": {
      "type": "Point",
      "coordinates": [11.35647, 44.50192],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Camila",
    "surname": "Santos",
    "email": "camila.santos@example.com",
    "password": "password1",
    "dob": "1997-12-05",
    "avatar": "https://picsum.photos/200",
    "bio": "Brazilian in Rome 🇧🇷 I moved here to study fashion and I want to sound more natural in Italian. I’d love to exchange Portuguese for Italian practice.",
    "interests": ["dance", "travel", "music", "culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Brazil", "code": "br" },
    "location": {
      "type": "Point",
      "coordinates": [12.50784, 41.89563],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Jan",
    "surname": "Novák",
    "email": "jan.novak@example.com",
    "password": "password1",
    "dob": "1991-09-25",
    "avatar": "https://picsum.photos/200",
    "bio": "Czech researcher living in Florence 🇨🇿 I’m learning Italian for academic collaboration with the university here. Happy to practice together.",
    "interests": ["history", "reading", "hiking", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "cs" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Czech Republic", "code": "cz" },
    "location": {
      "type": "Point",
      "coordinates": [11.26937, 43.76482],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Lucía",
    "surname": "García",
    "email": "lucia.garcia@example.com",
    "password": "password1",
    "dob": "1995-04-22",
    "avatar": "https://picsum.photos/200",
    "bio": "Spanish living in Naples 🇪🇸 I learned Italian for love and now I’m studying French because I’d like to work in the film industry in Paris.",
    "interests": ["cinema", "travel", "photography", "food"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": { "name": "Spain", "code": "es" },
    "location": {
      "type": "Point",
      "coordinates": [14.25538, 40.84691],
      "city": "Napoli",
      "country": "Italy"
    }
  },
  {
    "name": "Maximilian",
    "surname": "Weber",
    "email": "maximilian.weber@example.com",
    "password": "password1",
    "dob": "1988-11-30",
    "avatar": "https://picsum.photos/200",
    "bio": "German entrepreneur based in Milan 🇩🇪 I’m improving Italian to expand my business network here. Happy to exchange German or English.",
    "interests": ["startups", "tech", "fitness", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "de" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Germany", "code": "de" },
    "location": {
      "type": "Point",
      "coordinates": [9.20891, 45.45736],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Agnieszka",
    "surname": "Nowak",
    "email": "agnieszka.nowak@example.com",
    "password": "password1",
    "dob": "1991-07-14",
    "avatar": "https://picsum.photos/200",
    "bio": "Polish living in Turin 🇵🇱 I learned Italian because I married an Italian. I’d love to keep practicing and help you with Polish.",
    "interests": ["yoga", "books", "travel", "culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pl" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Poland", "code": "pl" },
    "location": {
      "type": "Point",
      "coordinates": [7.67152, 45.08574],
      "city": "Torino",
      "country": "Italy"
    }
  },
  {
    "name": "Michael",
    "surname": "Brown",
    "email": "michael.brown@example.com",
    "password": "password1",
    "dob": "1993-01-25",
    "avatar": "https://picsum.photos/200",
    "bio": "American living in Palermo 🇺🇸 I’m improving my Italian because I’m applying for a long-term visa. Also starting Spanish for future travels in South America.",
    "interests": ["history", "food", "travel", "podcasts"],
    "blogPosts": [],
    "comments": [],
    "isTutor": false,
    "languages": {
      "native": [{ "code": "en" }],
      "spoken": [{ "code": "it", "level": "B2" }],
      "learning": [{ "code": "es", "level": "A2" }]
    },
    "nationality": { "name": "United States", "code": "us" },
    "location": {
      "type": "Point",
      "coordinates": [13.34729, 38.12384],
      "city": "Palermo",
      "country": "Italy"
    }
  },
  {
    "name": "Inês",
    "surname": "Pereira",
    "email": "ines.pereira@example.com",
    "password": "password1",
    "dob": "1996-06-18",
    "avatar": "https://picsum.photos/200",
    "bio": "Portuguese living in Verona 🇵🇹 I moved here for work and want to feel completely fluent in Italian. Happy to exchange Portuguese conversations.",
    "interests": ["travel", "music", "food", "culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Portugal", "code": "pt" },
    "location": {
      "type": "Point",
      "coordinates": [10.99831, 45.44567],
      "city": "Verona",
      "country": "Italy"
    }
  },
  {
    "name": "Andrei",
    "surname": "Popescu",
    "email": "andrei.popescu@example.com",
    "password": "password1",
    "dob": "1992-06-14",
    "avatar": "https://picsum.photos/200",
    "bio": "Romanian based in Bologna 🇷🇴 I moved to Italy for university and now I want to refine my Italian for professional opportunities.",
    "interests": ["fitness", "travel", "tech", "music"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ro" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Romania", "code": "ro" },
    "location": {
      "type": "Point",
      "coordinates": [11.35812, 44.48973],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Sara",
    "surname": "Lindström",
    "email": "sara.lindstrom@example.com",
    "password": "password1",
    "dob": "1994-03-22",
    "avatar": "https://picsum.photos/200",
    "bio": "Swedish designer living in Milan 🇸🇪 I’m improving Italian to grow my freelance career here. Also learning French for future projects in Paris.",
    "interests": ["design", "travel", "yoga", "books"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "sv" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": { "name": "Sweden", "code": "se" },
    "location": {
      "type": "Point",
      "coordinates": [9.20463, 45.45287],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Carlos",
    "surname": "Ramírez",
    "email": "carlos.ramirez@example.com",
    "password": "password1",
    "dob": "1990-11-05",
    "avatar": "https://picsum.photos/200",
    "bio": "Mexican living in Rome 🇲🇽 I work in hospitality and want to communicate better with locals.",
    "interests": [
      "food",
      "travel",
      "cinema",
      "music"
    ],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [
        { "code": "es" }
      ],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Mexico",
      "code": "mx"
    },
    "location": {
      "type": "Point",
      "coordinates": [
        12.51238,
        41.88974
      ],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Elena",
    "surname": "Petrova",
    "email": "elena.petrova@example.com",
    "password": "password1",
    "dob": "1993-08-19",
    "avatar": "https://picsum.photos/200",
    "bio": "Russian living in Florence 🇷🇺 I learned Italian for my studies in art history and I’d like to keep practicing advanced conversation.",
    "interests": [
      "literature",
      "art",
      "travel",
      "theatre"
    ],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [
        { "code": "ru" }
      ],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Russia",
      "code": "ru"
    },
    "location": {
      "type": "Point",
      "coordinates": [
        11.26892,
        43.75841
      ],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Thomas",
    "surname": "Müller",
    "email": "thomas.muller@example.com",
    "password": "password1",
    "dob": "1989-01-25",
    "avatar": "https://picsum.photos/200",
    "bio": "German engineer based in Verona 🇩🇪 I relocated for work and want to integrate better locally.",
    "interests": [
      "cycling",
      "travel",
      "tech",
      "food"
    ],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [
        { "code": "de" }
      ],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Germany",
      "code": "de"
    },
    "location": {
      "type": "Point",
      "coordinates": [
        10.97864,
        45.45213
      ],
      "city": "Verona",
      "country": "Italy"
    }
  },
  {
    "name": "Valentina",
    "surname": "González",
    "email": "valentina.gonzalez@example.com",
    "password": "password1",
    "dob": "1996-09-30",
    "avatar": "https://picsum.photos/200",
    "bio": "Chilean living in Turin 🇨🇱 I’m improving my Italian because I plan to stay long-term. Happy to exchange Spanish conversations.",
    "interests": [
      "travel",
      "photography",
      "nature",
      "music"
    ],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [
        { "code": "es" }
      ],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Chile",
      "code": "cl"
    },
    "location": {
      "type": "Point",
      "coordinates": [
        7.70145,
        45.08392
      ],
      "city": "Torino",
      "country": "Italy"
    }
  },
  {
    "name": "Omar",
    "surname": "Haddad",
    "email": "omar.haddad@example.com",
    "password": "password1",
    "dob": "1991-04-12",
    "avatar": "https://picsum.photos/200",
    "bio": "Lebanese entrepreneur living in Milan 🇱🇧 I use Italian daily for business and want to refine my communication skills.",
    "interests": [
      "entrepreneurship",
      "travel",
      "food",
      "culture"
    ],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [
        { "code": "ar" }
      ],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Lebanon",
      "code": "lb"
    },
    "location": {
      "type": "Point",
      "coordinates": [
        9.17384,
        45.47816
      ],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Sophie",
    "surname": "Van Dijk",
    "email": "sophie.vandijk@example.com",
    "password": "password1",
    "dob": "1995-12-05",
    "avatar": "https://picsum.photos/200",
    "bio": "Dutch living in Bologna 🇳🇱 I’m improving Italian for work in design and starting Spanish for a future move to Madrid.",
    "interests": [
      "design",
      "travel",
      "books",
      "coffee"
    ],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [
        { "code": "nl" }
      ],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [
        { "code": "es", "level": "A2" }
      ]
    },
    "nationality": {
      "name": "Netherlands",
      "code": "nl"
    },
    "location": {
      "type": "Point",
      "coordinates": [
        11.33074,
        44.50638
      ],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Diego",
    "surname": "Álvarez",
    "email": "diego.alvarez@example.com",
    "password": "password1",
    "dob": "1997-07-28",
    "avatar": "https://picsum.photos/200",
    "bio": "Colombian living in Palermo 🇨🇴 I’m learning Italian because I recently moved here and want to build friendships locally.",
    "interests": [
      "music",
      "travel",
      "sports",
      "food"
    ],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [
        { "code": "es" }
      ],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Colombia",
      "code": "co"
    },
    "location": {
      "type": "Point",
      "coordinates": [
        13.34382,
        38.12947
      ],
      "city": "Palermo",
      "country": "Italy"
    }
  },
  {
    "name": "Nora",
    "surname": "Horváth",
    "email": "nora.horvath@example.com",
    "password": "password1",
    "dob": "1992-10-15",
    "avatar": "https://picsum.photos/200",
    "bio": "Hungarian living in Rome 🇭🇺 I’m improving my Italian because I’m completing my psychology internship here and need more confidence with clients.",
    "interests": [
      "travel",
      "psychology",
      "books",
      "culture"
    ],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [
        { "code": "hu" }
      ],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Hungary",
      "code": "hu"
    },
    "location": {
      "type": "Point",
      "coordinates": [
        12.50593,
        41.88742
      ],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Ahmed",
    "surname": "El-Sayed",
    "email": "ahmed.elsayed@example.com",
    "password": "password1",
    "dob": "1987-11-20",
    "avatar": "https://picsum.photos/200",
    "bio": "Egyptian based in Milan 🇪🇬 I use Italian daily for my small business and want to sound more natural in negotiations and networking.",
    "interests": ["history", "travel", "food", "entrepreneurship"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ar" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Egypt", "code": "eg" },
    "location": {
      "type": "Point",
      "coordinates": [9.16728, 45.48173],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Katarzyna",
    "surname": "Wójcik",
    "email": "katarzyna.wojcik@example.com",
    "password": "password1",
    "dob": "1994-05-14",
    "avatar": "https://picsum.photos/200",
    "bio": "Polish living in Florence 🇵🇱 I’m learning Italian for my fashion career and starting French because I’d like to work in Paris one day.",
    "interests": ["fashion", "travel", "yoga", "photography"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pl" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": { "name": "Poland", "code": "pl" },
    "location": {
      "type": "Point",
      "coordinates": [11.27263, 43.75684],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Alejandro",
    "surname": "Torres",
    "email": "alejandro.torres@example.com",
    "password": "password1",
    "dob": "1992-08-25",
    "avatar": "https://picsum.photos/200",
    "bio": "Peruvian living in Bologna 🇵🇪 I recently moved here and I’m focusing on improving Italian to find better job opportunities.",
    "interests": ["football", "music", "travel", "food"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Peru", "code": "pe" },
    "location": {
      "type": "Point",
      "coordinates": [11.32954, 44.50317],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Maja",
    "surname": "Jovanović",
    "email": "maja.jovanovic@example.com",
    "password": "password1",
    "dob": "1991-03-12",
    "avatar": "https://picsum.photos/200",
    "bio": "Serbian based in Turin 🇷🇸 I studied Italian literature and want to keep practicing advanced conversation and cultural topics.",
    "interests": ["art", "reading", "travel", "cinema"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "sr" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Serbia", "code": "rs" },
    "location": {
      "type": "Point",
      "coordinates": [7.66438, 45.08921],
      "city": "Torino",
      "country": "Italy"
    }
  },
  {
    "name": "Liam",
    "surname": "O’Connor",
    "email": "liam.oconnor@example.com",
    "password": "password1",
    "dob": "1989-07-04",
    "avatar": "https://picsum.photos/200",
    "bio": "Irish living in Naples 🇮🇪 I’m improving my Italian because I work remotely from here and want to integrate more locally.",
    "interests": ["music", "travel", "hiking", "pub culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "en" }],
      "spoken": [{ "code": "it", "level": "B2" }],
      "learning": [{ "code": "es", "level": "A2" }]
    },
    "nationality": { "name": "Ireland", "code": "ie" },
    "location": {
      "type": "Point",
      "coordinates": [14.28263, 40.83974],
      "city": "Napoli",
      "country": "Italy"
    }
  },
  {
    "name": "Anastasia",
    "surname": "Georgiou",
    "email": "anastasia.georgiou@example.com",
    "password": "password1",
    "dob": "1995-12-30",
    "avatar": "https://picsum.photos/200",
    "bio": "Greek living in Venice 🇬🇷 I’m learning Italian because I work in tourism and want to communicate more naturally with clients.",
    "interests": ["travel", "food", "culture", "photography"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "el" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Greece", "code": "gr" },
    "location": {
      "type": "Point",
      "coordinates": [12.30374, 45.43518],
      "city": "Venezia",
      "country": "Italy"
    }
  },
  {
    "name": "Noah",
    "surname": "Levi",
    "email": "noah.levi@example.com",
    "password": "password1",
    "dob": "1994-05-12",
    "avatar": "https://picsum.photos/200",
    "bio": "Israeli living in Milan 🇮🇱 I’m improving Italian because I joined a startup here and need better communication with local partners.",
    "interests": ["startups", "tech", "travel", "fitness"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "he" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Israel", "code": "il" },
    "location": {
      "type": "Point",
      "coordinates": [9.21457, 45.44892],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Beatriz",
    "surname": "Costa",
    "email": "beatriz.costa@example.com",
    "password": "password1",
    "dob": "1992-11-20",
    "avatar": "https://picsum.photos/200",
    "bio": "Brazilian living in Rome 🇧🇷 I learned Italian for my studies and now I’m starting French because I want to work in the luxury industry.",
    "interests": ["dance", "travel", "music", "fashion"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": { "name": "Brazil", "code": "br" },
    "location": {
      "type": "Point",
      "coordinates": [12.47925, 41.91376],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Victor",
    "surname": "Ionescu",
    "email": "victor.ionescu@example.com",
    "password": "password1",
    "dob": "1988-07-03",
    "avatar": "https://picsum.photos/200",
    "bio": "Romanian living in Palermo 🇷🇴 I’ve been in Italy for years and I’m focusing on refining my Italian for professional growth.",
    "interests": ["travel", "history", "food", "culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ro" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Romania", "code": "ro" },
    "location": {
      "type": "Point",
      "coordinates": [13.34987, 38.13264],
      "city": "Palermo",
      "country": "Italy"
    }
  },
  {
    "name": "Fatima",
    "surname": "Benali",
    "email": "fatima.benali@example.com",
    "password": "password1",
    "dob": "1991-03-15",
    "avatar": "https://picsum.photos/200",
    "bio": "Moroccan living in Turin 🇲🇦 I use Italian every day for work and I’d like to improve my fluency in professional conversations.",
    "interests": ["travel", "cooking", "culture", "books"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ar" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "fr", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Morocco", "code": "ma" },
    "location": {
      "type": "Point",
      "coordinates": [7.68123, 45.07891],
      "city": "Torino",
      "country": "Italy"
    }
  },
  {
    "name": "Ethan",
    "surname": "Williams",
    "email": "ethan.williams@example.com",
    "password": "password1",
    "dob": "1993-09-28",
    "avatar": "https://picsum.photos/200",
    "bio": "Canadian living in Florence 🇨🇦 I’m improving my Italian because I work remotely from here and want deeper local connections.",
    "interests": ["travel", "hiking", "photography", "coffee"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "en" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "fr", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Canada", "code": "ca" },
    "location": {
      "type": "Point",
      "coordinates": [11.26218, 43.77234],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "María",
    "surname": "Ortega",
    "email": "maria.ortega@example.com",
    "password": "password1",
    "dob": "1995-06-18",
    "avatar": "https://picsum.photos/200",
    "bio": "Spanish living in Milan 🇪🇸 I learned Italian for my master’s degree and now I’m starting German for future work opportunities in Berlin.",
    "interests": ["art", "travel", "cinema", "music"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": [{ "code": "de", "level": "A2" }]
    },
    "nationality": { "name": "Spain", "code": "es" },
    "location": {
      "type": "Point",
      "coordinates": [9.12567, 45.47021],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Dimitris",
    "surname": "Papadopoulos",
    "email": "dimitris.papadopoulos@example.com",
    "password": "password1",
    "dob": "1991-05-14",
    "avatar": "https://picsum.photos/200",
    "bio": "Greek based in Rome 🇬🇷 I’m improving my Italian because I collaborate with local universities on research projects.",
    "interests": ["history", "travel", "food", "philosophy"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "el" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Greece", "code": "gr" },
    "location": {
      "type": "Point",
      "coordinates": [12.50347, 41.89512],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Camille",
    "surname": "Moreau",
    "email": "camille.moreau@example.com",
    "password": "password1",
    "dob": "1994-11-22",
    "avatar": "https://picsum.photos/200",
    "bio": "French living in Bologna 🇫🇷 I’m improving Italian because I work in fashion and collaborate with Italian brands.",
    "interests": ["fashion", "travel", "design", "art"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "fr" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "France", "code": "fr" },
    "location": {
      "type": "Point",
      "coordinates": [11.34879, 44.50013],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Rafael",
    "surname": "Souza",
    "email": "rafael.souza@example.com",
    "password": "password1",
    "dob": "1993-02-15",
    "avatar": "https://picsum.photos/200",
    "bio": "Brazilian living in Verona 🇧🇷 I’m improving Italian because I plan to stay long-term and build my career here.",
    "interests": ["music", "travel", "fitness", "food"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "B2" }
      ],
      "learning": [{ "code": "es", "level": "A2" }]
    },
    "nationality": { "name": "Brazil", "code": "br" },
    "location": {
      "type": "Point",
      "coordinates": [10.98567, 45.44122],
      "city": "Verona",
      "country": "Italy"
    }
  },
  {
    "name": "Anja",
    "surname": "Kovač",
    "email": "anja.kovac@example.com",
    "password": "password1",
    "dob": "1990-08-10",
    "avatar": "https://picsum.photos/200",
    "bio": "Croatian based in Trieste 🇭🇷 I use Italian daily for work and want to refine my speaking skills even more.",
    "interests": ["travel", "reading", "culture", "nature"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "hr" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Croatia", "code": "hr" },
    "location": {
      "type": "Point",
      "coordinates": [13.78211, 45.65284],
      "city": "Trieste",
      "country": "Italy"
    }
  },
  {
    "name": "Sebastián",
    "surname": "Castillo",
    "email": "sebastian.castillo@example.com",
    "password": "password1",
    "dob": "1992-06-30",
    "avatar": "https://picsum.photos/200",
    "bio": "Argentinian living in Naples 🇦🇷 I’m learning Italian to apply for citizenship and feel fully integrated here.",
    "interests": ["football", "travel", "food", "music"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Argentina", "code": "ar" },
    "location": {
      "type": "Point",
      "coordinates": [14.27548, 40.85812],
      "city": "Napoli",
      "country": "Italy"
    }
  },
  {
    "name": "Laura",
    "surname": "Schmidt",
    "email": "laura.schmidt@example.com",
    "password": "password1",
    "dob": "1996-12-05",
    "avatar": "https://picsum.photos/200",
    "bio": "German living in Milan 🇩🇪 I’m refining my Italian for professional reasons and starting French for future relocation plans.",
    "interests": ["travel", "books", "art", "yoga"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "de" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": { "name": "Germany", "code": "de" },
    "location": {
      "type": "Point",
      "coordinates": [9.19574, 45.46832],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Nikola",
    "surname": "Petrović",
    "email": "nikola.petrovic@example.com",
    "password": "password1",
    "dob": "1988-03-25",
    "avatar": "https://picsum.photos/200",
    "bio": "Serbian living in Bologna 🇷🇸 I’m improving Italian because I work in tech and collaborate closely with Italian teams.",
    "interests": ["tech", "travel", "gaming", "fitness"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "sr" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Serbia", "code": "rs" },
    "location": {
      "type": "Point",
      "coordinates": [11.33792, 44.49857],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Olga",
    "surname": "Ivanova",
    "email": "olga.ivanova@example.com",
    "password": "password1",
    "dob": "1992-01-20",
    "avatar": "https://picsum.photos/200",
    "bio": "Russian living in Rome 🇷🇺 I studied Italian literature and now I’m learning German for academic collaborations in Austria.",
    "interests": ["literature", "travel", "theatre", "culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ru" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": [{ "code": "de", "level": "A2" }]
    },
    "nationality": { "name": "Russia", "code": "ru" },
    "location": {
      "type": "Point",
      "coordinates": [12.50112, 41.90021],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Miguel",
    "surname": "Herrera",
    "email": "miguel.herrera@example.com",
    "password": "password1",
    "dob": "1995-09-08",
    "avatar": "https://picsum.photos/200",
    "bio": "Spanish living in Palermo 🇪🇸 I’m improving my Italian because I work in the restaurant industry and interact with locals daily.",
    "interests": ["food", "travel", "football", "music"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Spain", "code": "es" },
    "location": {
      "type": "Point",
      "coordinates": [13.36422, 38.11689],
      "city": "Palermo",
      "country": "Italy"
    }
  },
  {
    "name": "Zuzana",
    "surname": "Kováčová",
    "email": "zuzana.kovacova@example.com",
    "password": "password1",
    "dob": "1994-05-12",
    "avatar": "https://picsum.photos/200",
    "bio": "Slovak living in Florence 🇸🇰 I’m learning Italian because I’m working in tourism and want more confidence with clients.",
    "interests": ["travel", "photography", "nature", "books"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "sk" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Slovakia", "code": "sk" },
    "location": {
      "type": "Point",
      "coordinates": [11.26097, 43.77241],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Pedro",
    "surname": "Mendes",
    "email": "pedro.mendes@example.com",
    "password": "password1",
    "dob": "1991-11-20",
    "avatar": "https://picsum.photos/200",
    "bio": "Portuguese based in Milan 🇵🇹 I use Italian at work and want to perfect my pronunciation. I’m also starting French for future opportunities.",
    "interests": ["travel", "music", "food", "culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": { "name": "Portugal", "code": "pt" },
    "location": {
      "type": "Point",
      "coordinates": [9.18245, 45.46678],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Leyla",
    "surname": "Yılmaz",
    "email": "leyla.yilmaz@example.com",
    "password": "password1",
    "dob": "1995-07-03",
    "avatar": "https://picsum.photos/200",
    "bio": "Turkish living in Rome 🇹🇷 I’m improving my Italian because I collaborate with Italian designers and need more fluent communication.",
    "interests": ["travel", "design", "food", "culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "tr" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Turkey", "code": "tr" },
    "location": {
      "type": "Point",
      "coordinates": [12.49078, 41.90512],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Samuel",
    "surname": "Okoro",
    "email": "samuel.okoro@example.com",
    "password": "password1",
    "dob": "1990-03-15",
    "avatar": "https://picsum.photos/200",
    "bio": "Nigerian living in Bologna 🇳🇬 I’m improving Italian because I recently relocated for work and want to build stronger local connections.",
    "interests": ["tech", "travel", "music", "entrepreneurship"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "en" }],
      "spoken": [{ "code": "it", "level": "B1" }],
      "learning": []
    },
    "nationality": { "name": "Nigeria", "code": "ng" },
    "location": {
      "type": "Point",
      "coordinates": [11.34789, 44.49721],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Helena",
    "surname": "Andersson",
    "email": "helena.andersson@example.com",
    "password": "password1",
    "dob": "1993-09-28",
    "avatar": "https://picsum.photos/200",
    "bio": "Swedish living in Verona 🇸🇪 I’m improving my Italian because I plan to stay here long-term and integrate fully into the community.",
    "interests": ["travel", "yoga", "books", "nature"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "sv" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Sweden", "code": "se" },
    "location": {
      "type": "Point",
      "coordinates": [10.98432, 45.44099],
      "city": "Verona",
      "country": "Italy"
    }
  },
  {
    "name": "Ricardo",
    "surname": "Morales",
    "email": "ricardo.morales@example.com",
    "password": "password1",
    "dob": "1988-06-18",
    "avatar": "https://picsum.photos/200",
    "bio": "Chilean based in Milan 🇨🇱 I’m refining my Italian because I work with Italian clients daily and want to sound completely natural.",
    "interests": ["travel", "photography", "food", "culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "C1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": { "name": "Chile", "code": "cl" },
    "location": {
      "type": "Point",
      "coordinates": [9.17891, 45.46567],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Amina",
    "surname": "Khan",
    "email": "amina.khan@example.com",
    "password": "password1",
    "dob": "1996-01-25",
    "avatar": "https://picsum.photos/200",
    "bio": "Pakistani living in Florence 🇵🇰 I’m improving my Italian because I’m completing my postgraduate studies here.",
    "interests": ["travel", "books", "culture", "food"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ur" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": { "name": "Pakistan", "code": "pk" },
    "location": {
      "type": "Point",
      "coordinates": [11.25876, 43.77321],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Tomáš",
    "surname": "Dvořák",
    "email": "tomas.dvorak@example.com",
    "password": "password1",
    "dob": "1992-10-12",
    "avatar": "https://picsum.photos/200",
    "bio": "Czech living in Turin 🇨🇿 I’m improving my Italian for professional growth and starting Spanish for future travel plans.",
    "interests": ["history", "travel", "music", "books"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "cs" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "es", "level": "A2" }]
    },
    "nationality": { "name": "Czech Republic", "code": "cz" },
    "location": {
      "type": "Point",
      "coordinates": [7.69012, 45.07189],
      "city": "Torino",
      "country": "Italy"
    }
  },
  {
    "name": "Sofia",
    "surname": "Petrova",
    "email": "sofia.petrova@example.com",
    "password": "password123",
    "dob": "1995-05-15",
    "avatar": "https://picsum.photos/200",
    "bio": "Bulgarian living in Venice 🇧🇬 I’m learning Italian to help with my art exhibitions and starting French for upcoming workshops in Paris.",
    "interests": ["photography", "travel", "music", "culture"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "bg" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A1" }]
    },
    "nationality": {
      "name": "Bulgaria",
      "code": "bg"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.31552, 45.44075],
      "city": "Venezia",
      "country": "Italy"
    }
  },
  {
    "name": "Lars",
    "surname": "Jensen",
    "email": "lars.jensen@example.com",
    "password": "password123",
    "dob": "1989-11-12",
    "avatar": "https://picsum.photos/200",
    "bio": "Danish living in Milan 🇩🇰 I’m learning Italian for work in the design industry and starting French to connect with colleagues in Paris.",
    "interests": ["cycling", "travel", "photography", "music"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "da" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A1" }]
    },
    "nationality": {
      "name": "Denmark",
      "code": "dk"
    },
    "location": {
      "type": "Point",
      "coordinates": [9.12902, 45.46421],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Giulia",
    "surname": "Esposito",
    "email": "giulia.esposito@example.com",
    "password": "password123",
    "dob": "1996-03-25",
    "avatar": "https://picsum.photos/200",
    "bio": "Italian living in Turin 🇮🇹 I’m learning Spanish to connect with international students at my university and explore new cultures.",
    "interests": ["cooking", "travel", "books", "yoga"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [
        { "code": "en", "level": "C1" },
        { "code": "de", "level": "B2" }
      ],
      "learning": [{ "code": "es", "level": "A2" }]
    },
    "nationality": {
      "name": "Italy",
      "code": "it"
    },
    "location": {
      "type": "Point",
      "coordinates": [7.68692, 45.07031],
      "city": "Torino",
      "country": "Italy"
    }
  },
  {
    "name": "Nina",
    "surname": "Kumar",
    "email": "nina.kumar@example.com",
    "password": "password123",
    "dob": "1991-07-14",
    "avatar": "https://picsum.photos/200",
    "bio": "Indian living in Rome 🇮🇳 I’m improving my Italian to better interact with local colleagues and immerse myself in Italian culture.",
    "interests": ["tech", "books", "yoga", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "hi" }],
      "spoken": [
        { "code": "en", "level": "C1" },
        { "code": "it", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "India",
      "code": "in"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.49641, 41.90281],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Oscar",
    "surname": "López",
    "email": "oscar.lopez@example.com",
    "password": "password123",
    "dob": "1993-12-05",
    "avatar": "https://picsum.photos/200",
    "bio": "Spanish living in Venice 🇪🇸 I’m improving Italian to communicate with locals and enjoy my travels across Italy.",
    "interests": ["football", "music", "travel", "cooking"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "B2" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Spain",
      "code": "es"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.31552, 45.44082],
      "city": "Venezia",
      "country": "Italy"
    }
  },
  {
    "name": "Chiwoo",
    "surname": "Park",
    "email": "chiwoo.park@example.com",
    "password": "password123",
    "dob": "1997-09-20",
    "avatar": "https://picsum.photos/200",
    "bio": "Korean living in Florence 🇰🇷 I’m learning Italian for university research in Renaissance art and French to collaborate with Parisian peers.",
    "interests": ["gaming", "travel", "photography", "music"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ko" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": {
      "name": "South Korea",
      "code": "kr"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.25582, 43.76961],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Martina",
    "surname": "Ricci",
    "email": "martina.ricci@example.com",
    "password": "password123",
    "dob": "1995-02-18",
    "avatar": "https://picsum.photos/200",
    "bio": "Italian living in Bologna 🇮🇹 I’m learning French to study abroad in Lyon next year and practice Portuguese to stay in touch with Brazilian friends.",
    "interests": ["travel", "yoga", "cooking", "language learning"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [
        { "code": "en", "level": "C1" },
        { "code": "pt", "level": "B2" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": {
      "name": "Italy",
      "code": "it"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.34261, 44.49491],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Elisa",
    "surname": "Ferrari",
    "email": "elisa.ferrari@example.com",
    "password": "password123",
    "dob": "1994-04-10",
    "avatar": "https://picsum.photos/200",
    "bio": "Italian living in Venice 🇮🇹 I’m learning Spanish to connect with international art students and German to prepare for my cultural exchange program.",
    "interests": ["art", "travel", "music", "language learning"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [
        { "code": "en", "level": "C1" },
        { "code": "de", "level": "B2" }
      ],
      "learning": [{ "code": "es", "level": "A2" }]
    },
    "nationality": {
      "name": "Italy",
      "code": "it"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.31553, 45.44081],
      "city": "Venezia",
      "country": "Italy"
    }
  },
  {
    "name": "Nikolai",
    "surname": "Ivanov",
    "email": "nikolai.ivanov@example.com",
    "password": "password123",
    "dob": "1992-01-15",
    "avatar": "https://picsum.photos/200",
    "bio": "Russian living in Florence 🇷🇺 I’m learning Italian for research on Renaissance art and French to participate in international conferences.",
    "interests": ["history", "travel", "books", "music"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ru" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": {
      "name": "Russia",
      "code": "ru"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.25583, 43.76963],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Sofia",
    "surname": "Carvalho",
    "email": "sofia.carvalho@example.com",
    "password": "password123",
    "dob": "1990-10-05",
    "avatar": "https://picsum.photos/200",
    "bio": "Portuguese living in Rome 🇵🇹 I’m improving Italian to work in tourism and help Portuguese-speaking visitors enjoy Italy.",
    "interests": ["cooking", "travel", "yoga", "books"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Portugal",
      "code": "pt"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.49643, 41.90282],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Beatriz",
    "surname": "Mendez",
    "email": "beatriz.mendez@example.com",
    "password": "password123",
    "dob": "1994-06-12",
    "avatar": "https://picsum.photos/200",
    "bio": "Mexican living in Bologna 🇲🇽 I’m learning Italian to connect with the Italian cultural scene and practice my English with tourists.",
    "interests": ["photography", "travel", "cooking", "history"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Mexico",
      "code": "mx"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.343, 44.495],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Timo",
    "surname": "Schneider",
    "email": "timo.schneider@example.com",
    "password": "password123",
    "dob": "1991-03-22",
    "avatar": "https://picsum.photos/200",
    "bio": "German living in Rome 🇩🇪 I’m learning Italian for work and also practicing French for my upcoming exchange program in Paris.",
    "interests": ["sports", "travel", "cooking", "reading"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "de" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": {
      "name": "Germany",
      "code": "de"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.4966, 41.903],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Gabriela",
    "surname": "Rodrigues",
    "email": "gabriela.rodrigues@example.com",
    "password": "password123",
    "dob": "1996-11-05",
    "avatar": "https://picsum.photos/200",
    "bio": "Brazilian living in Milan 🇧🇷 I’m improving my Italian to better interact with locals and preparing for my studies in Paris with French.",
    "interests": ["literature", "travel", "fashion", "music"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": {
      "name": "Brazil",
      "code": "br"
    },
    "location": {
      "type": "Point",
      "coordinates": [9.1934, 45.4643],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Lucia",
    "surname": "Martínez",
    "email": "lucia.martinez@example.com",
    "password": "password123",
    "dob": "1993-08-19",
    "avatar": "https://picsum.photos/200",
    "bio": "Spanish living in Naples 🇪🇸 I’m practicing Italian to better explore the history of Southern Italy and connect with locals during my travels.",
    "interests": ["travel", "history", "art", "photography"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Spain",
      "code": "es"
    },
    "location": {
      "type": "Point",
      "coordinates": [14.2683, 40.8523],
      "city": "Napoli",
      "country": "Italy"
    }
  },
  {
    "name": "Arianna",
    "surname": "Zhang",
    "email": "arianna.zhang@example.com",
    "password": "password123",
    "dob": "1997-12-30",
    "avatar": "https://picsum.photos/200",
    "bio": "Chinese living in Florence 🇨🇳 I’m learning Italian to explore the art history of Italy and practice my English with international visitors.",
    "interests": ["cooking", "travel", "fashion", "history"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "zh" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "China",
      "code": "cn"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.2559, 43.7697],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Thomas",
    "surname": "Dupont",
    "email": "thomas.dupont@example.com",
    "password": "password123",
    "dob": "1990-05-14",
    "avatar": "https://picsum.photos/200",
    "bio": "French living in Milan 🇫🇷 I’m learning Italian to connect with Italian musicians and study opera in Italy.",
    "interests": ["music", "culture", "literature", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "fr" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "France",
      "code": "fr"
    },
    "location": {
      "type": "Point",
      "coordinates": [9.19335, 45.46535],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Sofia",
    "surname": "Giordano",
    "email": "sofia.giordano@example.com",
    "password": "password123",
    "dob": "1995-09-02",
    "avatar": "https://picsum.photos/200",
    "bio": "Italian living in Florence 🇮🇹 I’m learning German to work with German-speaking tourists in the cultural sector.",
    "interests": ["music", "languages", "travel", "photography"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [
        { "code": "en", "level": "C1" },
        { "code": "de", "level": "B1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Italy",
      "code": "it"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.25585, 43.76965],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Yuki",
    "surname": "Tanaka",
    "email": "yuki.tanaka@example.com",
    "password": "password123",
    "dob": "1998-01-25",
    "avatar": "https://picsum.photos/200",
    "bio": "Japanese living in Venice 🇯🇵 I’m learning Italian to study art history in Italy and preparing for my studies in Paris with French.",
    "interests": ["cooking", "travel", "history", "art"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ja" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": {
      "name": "Japan",
      "code": "jp"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.31555, 45.44085],
      "city": "Venezia",
      "country": "Italy"
    }
  },
  {
    "name": "Jorge",
    "surname": "Pérez",
    "email": "jorge.perez@example.com",
    "password": "password123",
    "dob": "1992-07-08",
    "avatar": "https://picsum.photos/200",
    "bio": "Spanish living in Rome 🇪🇸 I’m learning Italian to explore the history and culture of Italy, and practicing English for work.",
    "interests": ["photography", "travel", "literature", "history"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Spain",
      "code": "es"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.49645, 41.90295],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Luca",
    "surname": "Ferrer",
    "email": "luca.ferrer@example.com",
    "password": "password123",
    "dob": "1994-10-15",
    "avatar": "https://picsum.photos/200",
    "bio": "Spanish living in Turin 🇪🇸 I’m improving my Italian to explore the cultural heritage of Northern Italy and practice English with tourists.",
    "interests": ["sports", "travel", "history", "music"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Spain",
      "code": "es"
    },
    "location": {
      "type": "Point",
      "coordinates": [7.68695, 45.07035],
      "city": "Torino",
      "country": "Italy"
    }
  },
  {
    "name": "Nina",
    "surname": "Jansen",
    "email": "nina.jansen@example.com",
    "password": "password123",
    "dob": "1993-04-12",
    "avatar": "https://picsum.photos/200",
    "bio": "Dutch living in Milan 🇳🇱 I’m learning Italian for my work in the fashion industry and improving my English to connect with international colleagues.",
    "interests": ["cycling", "travel", "history", "photography"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "nl" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Netherlands",
      "code": "nl"
    },
    "location": {
      "type": "Point",
      "coordinates": [9.19345, 45.46725],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Katrina",
    "surname": "Popova",
    "email": "katrina.popova@example.com",
    "password": "password123",
    "dob": "1991-08-25",
    "avatar": "https://picsum.photos/200",
    "bio": "Russian living in Florence 🇷🇺 I’m learning Italian to experience the Renaissance history and culture, and also working on my English for academic purposes.",
    "interests": ["history", "art", "travel", "reading"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ru" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Russia",
      "code": "ru"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.25585, 43.76965],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Mateo",
    "surname": "González",
    "email": "mateo.gonzalez@example.com",
    "password": "password123",
    "dob": "1995-11-02",
    "avatar": "https://picsum.photos/200",
    "bio": "Argentine living in Rome 🇦🇷 I’m learning Italian for professional opportunities and improving my English to connect with international clients.",
    "interests": ["sports", "music", "photography", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Argentina",
      "code": "ar"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.49645, 41.90285],
      "city": "Roma",
      "country": "Italy"
    }
  },
  {
    "name": "Emily",
    "surname": "Johnson",
    "email": "emily.johnson@example.com",
    "password": "password123",
    "dob": "1994-02-18",
    "avatar": "https://picsum.photos/200",
    "bio": "American living in Bologna 🇺🇸 I’m learning Italian for work in the food industry and also improving my Spanish to work with Latin American clients.",
    "interests": ["cooking", "travel", "music", "sports"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "en" }],
      "spoken": [
        { "code": "it", "level": "B1" },
        { "code": "es", "level": "A2" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "USA",
      "code": "us"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.3427, 44.495],
      "city": "Bologna",
      "country": "Italy"
    }
  },
  {
    "name": "Leandro",
    "surname": "Costa",
    "email": "leandro.costa@example.com",
    "password": "password123",
    "dob": "1990-06-30",
    "avatar": "https://picsum.photos/200",
    "bio": "Brazilian living in Florence 🇧🇷 I’m learning Italian to connect with locals and improve my English to engage with international tourists.",
    "interests": ["sports", "travel", "reading", "photography"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Brazil",
      "code": "br"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.2559, 43.7697],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Giulia",
    "surname": "Bianchi",
    "email": "giulia.bianchi.97@example.com",
    "password": "password123",
    "dob": "1997-03-22",
    "avatar": "https://picsum.photos/200",
    "bio": "Italian living in Milan 🇮🇹 I’m learning French to expand my opportunities in the fashion world and improve my English for international collaborations.",
    "interests": ["fashion", "music", "history", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [
        { "code": "en", "level": "C1" },
        { "code": "fr", "level": "B1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Italy",
      "code": "it"
    },
    "location": {
      "type": "Point",
      "coordinates": [9.2001, 45.4643],
      "city": "Milano",
      "country": "Italy"
    }
  },
  {
    "name": "Luca",
    "surname": "Ricci",
    "email": "luca.ricci.98@example.com",
    "password": "password123",
    "dob": "1998-07-08",
    "avatar": "https://picsum.photos/200",
    "bio": "Italian living in Naples 🇮🇹 I’m practicing English to work in international tourism and better understand foreign visitors to Naples.",
    "interests": ["sports", "history", "literature", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Italy",
      "code": "it"
    },
    "location": {
      "type": "Point",
      "coordinates": [14.26815, 40.85225],
      "city": "Napoli",
      "country": "Italy"
    }
  },
  {
    "name": "Ana",
    "surname": "Mendoza",
    "email": "ana.mendoza@example.com",
    "password": "password123",
    "dob": "1996-05-15",
    "avatar": "https://picsum.photos/200",
    "bio": "Mexican living in Florence 🇲🇽 I’m learning Italian to explore art galleries in Italy and improving my English to work with international clients.",
    "interests": ["history", "art", "travel", "photography"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Mexico",
      "code": "mx"
    },
    "location": {
      "type": "Point",
      "coordinates": [11.25595, 43.76975],
      "city": "Firenze",
      "country": "Italy"
    }
  },
  {
    "name": "Olga",
    "surname": "Kovalenko",
    "email": "olga.kovalenko@example.com",
    "password": "password123",
    "dob": "1990-12-10",
    "avatar": "https://picsum.photos/200",
    "bio": "Ukrainian living in Venice 🇺🇦 I’m learning Italian for my studies in art history and improving my English to communicate with tourists.",
    "interests": ["literature", "art", "travel", "cooking"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "uk" }],
      "spoken": [
        { "code": "it", "level": "B2" },
        { "code": "en", "level": "C1" }
      ],
      "learning": []
    },
    "nationality": {
      "name": "Ukraine",
      "code": "ua"
    },
    "location": {
      "type": "Point",
      "coordinates": [12.31565, 45.44085],
      "city": "Venezia",
      "country": "Italy"
    }
  },
  {
    "name": "Klaus",
    "surname": "Hofmann",
    "email": "klaus.hof@example.com",
    "password": "Berlin-To-Merano-26",
    "dob": "1987-05-14",
    "avatar": "https://picsum.photos",
    "bio": "German in Merano 🇩🇪 Retired teacher. I love the mountains and want to perfect my Italian to read the classics. I can help you with academic German.",
    "interests": ["hiking", "philosophy", "classical music", "gardening"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "de" }],
      "spoken": [{ "code": "it", "level": "B2" }, { "code": "en", "level": "C1" }],
      "learning": [{ "code": "it", "level": "C1" }]
    },
    "nationality": { "name": "Germany", "code": "de" },
    "location": {
      "type": "Point",
      "coordinates": [11.1594, 46.6701],
      "city": "Merano",
      "country": "Italy"
    }
  },
  {
    "name": "Aisling",
    "surname": "O'Sullivan",
    "email": "aisling.irish@example.com",
    "password": "Galway-Rain-882",
    "dob": "1994-11-22",
    "avatar": "https://picsum.photos",
    "bio": "Irish in Matera 🇮🇪 Photographer. I moved to the Sassi for an art project. Looking for someone for informal conversation in Italian.",
    "interests": ["photography", "art", "travel", "archeology"],
    "blogPosts": [],
    "comments": [],
    "isTutor": false,
    "languages": {
      "native": [{ "code": "en" }],
      "spoken": [{ "code": "fr", "level": "B1" }],
      "learning": [{ "code": "it", "level": "A2" }]
    },
    "nationality": { "name": "Ireland", "code": "ie" },
    "location": {
      "type": "Point",
      "coordinates": [16.6043, 40.6664],
      "city": "Matera",
      "country": "Italy"
    }
  },
  {
    "name": "Arjun",
    "surname": "Mehta",
    "email": "arjun.m@example.com",
    "password": "Mumbai-Spice-2025",
    "dob": "1991-03-08",
    "avatar": "https://picsum.photos",
    "bio": "Indian in Pisa 🇮🇳 Robotics researcher. I need Italian for daily life and to integrate with my colleagues in the department.",
    "interests": ["robotics", "cooking", "cricket", "movies"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "hi" }],
      "spoken": [{ "code": "en", "level": "C2" }, { "code": "it", "level": "A2" }],
      "learning": [{ "code": "it", "level": "B1" }]
    },
    "nationality": { "name": "India", "code": "in" },
    "location": {
      "type": "Point",
      "coordinates": [10.4017, 43.7228],
      "city": "Pisa",
      "country": "Italy"
    }
  },
  {
    "name": "Saskia",
    "surname": "De Jong",
    "email": "saskia.dj@example.com",
    "password": "Tulip-Field-443",
    "dob": "1996-07-19",
    "avatar": "https://picsum.photos",
    "bio": "Dutch in Urbino 🇳🇱 Studying restoration. I love Italian medieval villages. I want to learn technical Italian for my work.",
    "interests": ["restoration", "history", "cycling", "painting"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "nl" }],
      "spoken": [{ "code": "en", "level": "C1" }, { "code": "it", "level": "B1" }],
      "learning": [{ "code": "it", "level": "B2" }]
    },
    "nationality": { "name": "Netherlands", "code": "nl" },
    "location": {
      "type": "Point",
      "coordinates": [12.6364, 43.7262],
      "city": "Urbino",
      "country": "Italy"
    }
  },
  {
    "name": "Youssef",
    "surname": "Mansour",
    "email": "youssef.m@example.com",
    "password": "Nile-River-771",
    "dob": "1989-10-30",
    "avatar": "https://picsum.photos",
    "bio": "Egyptian in Catania 🇪🇬 Working in the import-export sector. I want to improve my business Italian and I can teach Arabic.",
    "interests": ["business", "fitness", "fishing", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ar" }],
      "spoken": [{ "code": "en", "level": "B2" }, { "code": "it", "level": "B2" }],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "nationality": { "name": "Egypt", "code": "eg" },
    "location": {
      "type": "Point",
      "coordinates": [15.083, 37.5079],
      "city": "Catania",
      "country": "Italy"
    }
  },
  {
    "name": "Marta",
    "surname": "Wiśniewska",
    "email": "marta.poland@example.com",
    "password": "Krakow-Square-99",
    "dob": "1993-02-12",
    "avatar": "https://picsum.photos",
    "bio": "Polish in Ravenna 🇵🇱 Tour guide. I love mosaics! Looking for language partners to keep my Italian fluent.",
    "interests": ["mosaics", "history", "yoga", "books"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pl" }],
      "spoken": [{ "code": "it", "level": "C1" }, { "code": "en", "level": "B2" }],
      "learning": [{ "code": "es", "level": "B1" }]
    },
    "nationality": { "name": "Poland", "code": "pl" },
    "location": {
      "type": "Point",
      "coordinates": [12.2035, 44.4184],
      "city": "Ravenna",
      "country": "Italy"
    }
  },
  {
    "name": "Felipe",
    "surname": "Santos",
    "email": "felipe.br@example.com",
    "password": "Rio-Samba-2022!",
    "dob": "1990-12-04",
    "avatar": "https://picsum.photos",
    "bio": "Brazilian in Siena 🇧🇷 Musician. Studying composition at the conservatory. Looking for Italian friends to hang out and talk a bit.",
    "interests": ["music", "football", "travel", "cooking"],
    "blogPosts": [],
    "comments": [],
    "isTutor": false,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [{ "code": "it", "level": "B1" }, { "code": "en", "level": "B1" }],
      "learning": [{ "code": "it", "level": "B2" }]
    },
    "nationality": { "name": "Brazil", "code": "br" },
    "location": {
      "type": "Point",
      "coordinates": [11.3305, 43.3186],
      "city": "Siena",
      "country": "Italy"
    }
  },
  {
    "name": "Ingrid",
    "surname": "Larsen",
    "email": "ingrid.nor@example.com",
    "password": "Fjord-Blue-001",
    "dob": "1995-06-25",
    "avatar": "https://picsum.photos",
    "bio": "Norwegian in Aosta 🇳🇴 Ski instructor. I love the Italian Alps. I want to learn Italian to communicate better with my young students.",
    "interests": ["skiing", "nature", "photography", "fitness"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "no" }],
      "spoken": [{ "code": "en", "level": "C2" }, { "code": "it", "level": "A2" }],
      "learning": [{ "code": "it", "level": "B1" }]
    },
    "nationality": { "name": "Norway", "code": "no" },
    "location": {
      "type": "Point",
      "coordinates": [7.32, 45.737],
      "city": "Aosta",
      "country": "Italy"
    }
  },
  {
    "name": "Santiago",
    "surname": "Lopez",
    "email": "santi.mex@example.com",
    "password": "Aztec-Sun-776",
    "dob": "1988-08-15",
    "avatar": "https://picsum.photos",
    "bio": "Mexican in Reggio Calabria 🇲🇽 Spanish teacher. I really like Southern Italy, and I want to improve my colloquial Italian.",
    "interests": ["teaching", "travel", "food", "beach"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [{ "code": "it", "level": "B2" }, { "code": "en", "level": "B2" }],
      "learning": [{ "code": "pt", "level": "A1" }]
    },
    "nationality": { "name": "Mexico", "code": "mx" },
    "location": {
      "type": "Point",
      "coordinates": [15.65, 38.1144],
      "city": "Reggio Calabria",
      "country": "Italy"
    }
  },
  {
    "name": "Li",
    "surname": "Wei",
    "email": "li.wei@example.com",
    "password": "Great-Wall-994",
    "dob": "1997-01-20",
    "avatar": "https://picsum.photos",
    "bio": "Chinese in Trieste 🇨🇳 Studying economics. Trieste is beautiful for its cafes. Looking for someone to practice Italian with every week.",
    "interests": ["economics", "travel", "coffee", "chess"],
    "blogPosts": [],
    "comments": [],
    "isTutor": false,
    "languages": {
      "native": [{ "code": "zh" }],
      "spoken": [{ "code": "en", "level": "B2" }, { "code": "it", "level": "B1" }],
      "learning": [{ "code": "it", "level": "B2" }]
    },
    "nationality": { "name": "China", "code": "cn" },
    "location": {
      "type": "Point",
      "coordinates": [13.7768, 45.6495],
      "city": "Trieste",
      "country": "Italy"
    }
  },
  {
    "name": "Finn",
    "surname": "Andersen",
    "email": "finn.oslo@example.com",
    "password": "Fjord-Explorer-2026",
    "dob": "1991-11-05",
    "avatar": "https://picsum.photos",
    "bio": "Norwegian in Courmayeur 🇳🇴 Mountaineering instructor. I want to learn Italian to lead local groups on the Grandes Jorasses.",
    "interests": ["mountaineering", "skiing", "nature", "photography"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "no" }],
      "spoken": [{ "code": "en", "level": "C2" }, { "code": "it", "level": "A2" }],
      "learning": [{ "code": "it", "level": "B1" }]
    },
    "nationality": { "name": "Norway", "code": "no" },
    "location": {
      "type": "Point",
      "coordinates": [6.9725, 45.7872],
      "city": "Courmayeur",
      "country": "Italy"
    }
  },
  {
    "name": "Amira",
    "surname": "Said",
    "email": "amira.cairo@example.com",
    "password": "Pyramid-Sun-88!",
    "dob": "1994-04-12",
    "avatar": "https://picsum.photos",
    "bio": "Egyptian in Syracuse 🇪🇬 Archaeologist. I study the links between Mediterranean civilizations. Looking for Italian-Arabic language exchanges in Ortigia.",
    "interests": ["archeology", "history", "swimming", "tea"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ar" }],
      "spoken": [{ "code": "en", "level": "B2" }, { "code": "it", "level": "B1" }],
      "learning": [{ "code": "it", "level": "B2" }]
    },
    "nationality": { "name": "Egypt", "code": "eg" },
    "location": {
      "type": "Point",
      "coordinates": [15.2866, 37.0755],
      "city": "Siracusa",
      "country": "Italy"
    }
  },
  {
    "name": "Lukas",
    "surname": "Novotny",
    "email": "lukas.prague@example.com",
    "password": "Vltava-Bridge-994",
    "dob": "1988-02-18",
    "avatar": "https://picsum.photos",
    "bio": "Czech in Trento 🇨🇿 Environmental engineer. I love the Dolomites and I'm trying to improve my Italian for my career in Italy.",
    "interests": ["environment", "hiking", "cycling", "beer"],
    "blogPosts": [],
    "comments": [],
    "isTutor": false,
    "languages": {
      "native": [{ "code": "cs" }],
      "spoken": [{ "code": "en", "level": "C1" }, { "code": "de", "level": "B2" }],
      "learning": [{ "code": "it", "level": "B1" }]
    },
    "nationality": { "name": "Czech Republic", "code": "cz" },
    "location": {
      "type": "Point",
      "coordinates": [11.1211, 46.0679],
      "city": "Trento",
      "country": "Italy"
    }
  },
  {
    "name": "Gabriela",
    "surname": "Ribeiro",
    "email": "gabi.lisboa@example.com",
    "password": "Fado-Night-2023",
    "dob": "1996-08-25",
    "avatar": "https://picsum.photos",
    "bio": "Portuguese in Mantua 🇵🇹 Graphic designer. I love the calm of the Po Valley and want to learn Italian to work in an agency.",
    "interests": ["design", "art", "cycling", "cooking"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [{ "code": "en", "level": "C1" }, { "code": "es", "level": "B2" }],
      "learning": [{ "code": "it", "level": "B1" }]
    },
    "nationality": { "name": "Portugal", "code": "pt" },
    "location": {
      "type": "Point",
      "coordinates": [10.7911, 45.1564],
      "city": "Mantova",
      "country": "Italy"
    }
  },
  {
    "name": "Oliver",
    "surname": "Smith",
    "email": "oliver.london@example.com",
    "password": "Thames-Flow-772",
    "dob": "1990-12-14",
    "avatar": "https://picsum.photos",
    "bio": "English in Orvieto 🇬🇧 Sommelier. I moved to study Umbrian wines. Looking for a partner for Italian conversation.",
    "interests": ["wine", "history", "travel", "gardening"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "en" }],
      "spoken": [{ "code": "fr", "level": "B2" }],
      "learning": [{ "code": "it", "level": "B2" }]
    },
    "nationality": { "name": "United Kingdom", "code": "gb" },
    "location": {
      "type": "Point",
      "coordinates": [12.1106, 42.7196],
      "city": "Orvieto",
      "country": "Italy"
    }
  },
  {
    "name": "Ewa",
    "surname": "Kowalska",
    "email": "ewa.warsaw@example.com",
    "password": "Baltic-Sand-101",
    "dob": "1993-06-30",
    "avatar": "https://picsum.photos",
    "bio": "Polish in Viterbo 🇵🇱 Language student. I love the historic center and want to practice Italian with the locals.",
    "interests": ["languages", "books", "medieval history", "yoga"],
    "blogPosts": [],
    "comments": [],
    "isTutor": false,
    "languages": {
      "native": [{ "code": "pl" }],
      "spoken": [{ "code": "en", "level": "B2" }, { "code": "ru", "level": "B1" }],
      "learning": [{ "code": "it", "level": "B2" }]
    },
    "nationality": { "name": "Poland", "code": "pl" },
    "location": {
      "type": "Point",
      "coordinates": [12.1047, 42.4173],
      "city": "Viterbo",
      "country": "Italy"
    }
  },
  {
    "name": "Kenji",
    "surname": "Tanaka",
    "email": "kenji.kyoto@example.com",
    "password": "Sakura-Bloom-441",
    "dob": "1985-03-22",
    "avatar": "https://picsum.photos",
    "bio": "Japanese in Ascoli Piceno 🇯🇵 Paper craftsman. I want to learn Italian techniques and teach origami.",
    "interests": ["crafts", "origami", "photography", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ja" }],
      "spoken": [{ "code": "en", "level": "B1" }],
      "learning": [{ "code": "it", "level": "A2" }]
    },
    "nationality": { "name": "Japan", "code": "jp" },
    "location": {
      "type": "Point",
      "coordinates": [13.5768, 42.8533],
      "city": "Ascoli Piceno",
      "country": "Italy"
    }
  },
  {
    "name": "Mariana",
    "surname": "Lopez",
    "email": "mariana.madrid@example.com",
    "password": "Sol-Madrid-998!",
    "dob": "1997-01-10",
    "avatar": "https://picsum.photos",
    "bio": "Spanish in Ferrara 🇪🇸 Law student. Ferrara is the city of bicycles, perfect for me! Looking for language partners.",
    "interests": ["law", "cycling", "music", "movies"],
    "blogPosts": [],
    "comments": [],
    "isTutor": false,
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [{ "code": "en", "level": "B2" }],
      "learning": [{ "code": "it", "level": "B2" }]
    },
    "nationality": { "name": "Spain", "code": "es" },
    "location": {
      "type": "Point",
      "coordinates": [11.6198, 44.8381],
      "city": "Ferrara",
      "country": "Italy"
    }
  },
  {
    "name": "Olek",
    "surname": "Popov",
    "email": "olek.kiev@example.com",
    "password": "Kyiv-Spirit-2022",
    "dob": "1992-07-28",
    "avatar": "https://picsum.photos",
    "bio": "Ukrainian in Rovereto 🇺🇦 IT specialist. I like the tranquility of Trentino and want to learn Italian for social life.",
    "interests": ["it", "gaming", "mountains", "travel"],
    "blogPosts": [],
    "comments": [],
    "isTutor": false,
    "languages": {
      "native": [{ "code": "uk" }],
      "spoken": [{ "code": "en", "level": "C1" }, { "code": "ru", "level": "C1" }],
      "learning": [{ "code": "it", "level": "A2" }]
    },
    "nationality": { "name": "Ukraine", "code": "ua" },
    "location": {
      "type": "Point",
      "coordinates": [11.0401, 45.8906],
      "city": "Rovereto",
      "country": "Italy"
    }
  },
  {
    "name": "Bahiya",
    "surname": "Mansour",
    "email": "bahiya.rabat@example.com",
    "password": "Atlas-Moon-773",
    "dob": "1995-10-15",
    "avatar": "https://picsum.photos",
    "bio": "Moroccan in Agrigento 🇲🇦 Studying cultural heritage conservation. The Valley of the Temples is my favorite place.",
    "interests": ["heritage", "art", "cooking", "history"],
    "blogPosts": [],
    "comments": [],
    "isTutor": true,
    "languages": {
      "native": [{ "code": "ar" }],
      "spoken": [{ "code": "fr", "level": "C1" }, { "code": "it", "level": "B1" }],
      "learning": [{ "code": "it", "level": "B2" }]
    },
    "nationality": { "name": "Morocco", "code": "ma" },
    "location": {
      "type": "Point",
      "coordinates": [13.5765, 37.3111],
      "city": "Agrigento",
      "country": "Italy"
    }
  }
]


module.exports = userData;