export const tutorsMock = [
  {
    id: 1,
    name: 'Giulia',
    surname: 'Rinaldi',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }, { code: 'es', level: 'B2' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['travel', 'books', 'yoga', 'culture'],
    bio: 'I’m Italian and I’d love to improve my French because I’m planning to move to Lyon next year for work. Happy to help you with natural Italian conversation in exchange!',
    location: {
      type: 'Point',
      coordinates: [45.46512, 9.21345],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 2,
    name: 'Lorenzo',
    surname: 'Bianchi',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }],
      learning: [{ code: 'de', level: 'B1' }]
    },
    interests: ['tech', 'startups', 'fitness', 'travel'],
    bio: 'Italian software developer learning German because my company is opening an office in Berlin. I can help you sound more natural and confident in Italian.',
    location: {
      type: 'Point',
      coordinates: [45.07245, 7.68231],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 3,
    name: 'Martina',
    surname: 'Greco',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'fr', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['art', 'cinema', 'travel', 'photography'],
    bio: 'From Rome 🇮🇹 I speak fluent French but I want to practice it more because my partner is French. Happy to help with Italian, especially for art and cinema lovers.',
    location: {
      type: 'Point',
      coordinates: [41.89987, 12.50321],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 4,
    name: 'Alessandro',
    surname: 'Conti',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'es', level: 'B2' }],
      learning: [{ code: 'pt', level: 'A2' }]
    },
    interests: ['sports', 'music', 'travel', 'culture'],
    bio: 'Italian from Florence. I’m learning Portuguese because I’d like to spend some months in Brazil. I can help you with everyday Italian and slang.',
    location: {
      type: 'Point',
      coordinates: [43.77521, 11.25874],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 5,
    name: 'Sofía',
    surname: 'Martínez',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Spain', code: 'es' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['travel', 'music', 'food', 'culture'],
    bio: 'Spanish living in Bologna 🇪🇸 I learned Italian for my master’s degree and now I want to keep improving it. I’d love to exchange Spanish for natural Italian practice.',
    location: {
      type: 'Point',
      coordinates: [44.49812, 11.33987],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 6,
    name: 'Lucas',
    surname: 'Fernández',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Argentina', code: 'ar' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['football', 'travel', 'history', 'food'],
    bio: 'Argentinian based in Milan 🇦🇷 I’m improving my Italian because I’d like to apply for citizenship. Happy to help you with Spanish and casual conversation.',
    location: {
      type: 'Point',
      coordinates: [45.45974, 9.19632],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 7,
    name: 'Hannah',
    surname: 'Schneider',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Germany', code: 'de' },
    languages: {
      native: [{ code: 'de' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['reading', 'hiking', 'travel', 'culture'],
    bio: 'German living in Florence 🇩🇪 I started learning Italian because I fell in love with Tuscany. I’d like to practice speaking more fluently.',
    location: {
      type: 'Point',
      coordinates: [43.76854, 11.27218],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 8,
    name: 'Emily',
    surname: 'Johnson',
    avatar: 'https://picsum.photos/200',
    isTutor: false,
    nationality: { country: 'United States', code: 'us' },
    languages: {
      native: [{ code: 'en' }],
      spoken: [{ code: 'it', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['travel', 'photography', 'coffee', 'books'],
    bio: 'American expat in Rome 🇺🇸 I learned Italian for work in tourism. Now I’m studying French because I want to move to Montreal one day.',
    location: {
      type: 'Point',
      coordinates: [41.91021, 12.48874],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 9,
    name: 'João',
    surname: 'Silva',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Brazil', code: 'br' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['music', 'travel', 'fitness', 'food'],
    bio: 'Brazilian living in Naples 🇧🇷 I moved here for love and I’m working on sounding more natural in Italian. Happy to exchange Portuguese!',
    location: {
      type: 'Point',
      coordinates: [40.84792, 14.27145],
      city: 'Napoli',
      country: 'Italy'
    }
  },
  {
    id: 10,
    name: 'Claire',
    surname: 'Dubois',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'France', code: 'fr' },
    languages: {
      native: [{ code: 'fr' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['art', 'cinema', 'travel', 'wine'],
    bio: 'French in Turin 🇫🇷 I’m improving my Italian because I work in the wine industry and collaborate with local producers. Let’s exchange French and Italian!',
    location: {
      type: 'Point',
      coordinates: [45.06782, 7.70123],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 11,
    name: 'Mateusz',
    surname: 'Kowalski',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Poland', code: 'pl' },
    languages: {
      native: [{ code: 'pl' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['tech', 'gaming', 'travel', 'history'],
    bio: 'Polish living in Milan 🇵🇱 I moved here for work in IT and I want to feel more confident speaking Italian in daily life. Happy to help with Polish or English.',
    location: {
      type: 'Point',
      coordinates: [45.47241, 9.18273],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 12,
    name: 'Isabelle',
    surname: 'Lefevre',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'France', code: 'fr' },
    languages: {
      native: [{ code: 'fr' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['books', 'art', 'coffee', 'travel'],
    bio: 'French architect based in Genoa 🇫🇷 I learned Italian for work and now I’m studying Spanish because I’d like to collaborate with firms in Barcelona.',
    location: {
      type: 'Point',
      coordinates: [44.41258, 8.93842],
      city: 'Genova',
      country: 'Italy'
    }
  },
  {
    id: 13,
    name: 'Daniel',
    surname: 'Thompson',
    avatar: 'https://picsum.photos/200',
    isTutor: false,
    nationality: { country: 'United Kingdom', code: 'gb' },
    languages: {
      native: [{ code: 'en' }],
      spoken: [{ code: 'it', level: 'B2' }],
      learning: [{ code: 'de', level: 'A2' }]
    },
    interests: ['football', 'music', 'podcasts', 'travel'],
    bio: 'British living in Bologna 🇬🇧 I’m improving my Italian because my partner is from here. I’m also starting German for future career opportunities.',
    location: {
      type: 'Point',
      coordinates: [44.50192, 11.35647],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 14,
    name: 'Camila',
    surname: 'Santos',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Brazil', code: 'br' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['dance', 'travel', 'music', 'culture'],
    bio: 'Brazilian in Rome 🇧🇷 I moved here to study fashion and I want to sound more natural in Italian. I’d love to exchange Portuguese for Italian practice.',
    location: {
      type: 'Point',
      coordinates: [41.89563, 12.50784],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 15,
    name: 'Jan',
    surname: 'Novák',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Czech Republic', code: 'cz' },
    languages: {
      native: [{ code: 'cs' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['history', 'reading', 'hiking', 'travel'],
    bio: 'Czech researcher living in Florence 🇨🇿 I’m learning Italian for academic collaboration with the university here. Happy to practice together.',
    location: {
      type: 'Point',
      coordinates: [43.76482, 11.26937],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 16,
    name: 'Lucía',
    surname: 'García',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Spain', code: 'es' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['cinema', 'travel', 'photography', 'food'],
    bio: 'Spanish living in Naples 🇪🇸 I learned Italian for love and now I’m studying French because I’d like to work in the film industry in Paris.',
    location: {
      type: 'Point',
      coordinates: [40.84691, 14.25538],
      city: 'Napoli',
      country: 'Italy'
    }
  },
  {
    id: 17,
    name: 'Maximilian',
    surname: 'Weber',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Germany', code: 'de' },
    languages: {
      native: [{ code: 'de' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['startups', 'tech', 'fitness', 'travel'],
    bio: 'German entrepreneur based in Milan 🇩🇪 I’m improving Italian to expand my business network here. Happy to exchange German or English.',
    location: {
      type: 'Point',
      coordinates: [45.45736, 9.20891],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 18,
    name: 'Agnieszka',
    surname: 'Nowak',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Poland', code: 'pl' },
    languages: {
      native: [{ code: 'pl' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['yoga', 'books', 'travel', 'culture'],
    bio: 'Polish living in Turin 🇵🇱 I learned Italian because I married an Italian. I’d love to keep practicing and help you with Polish.',
    location: {
      type: 'Point',
      coordinates: [45.08574, 7.67152],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 19,
    name: 'Michael',
    surname: 'Brown',
    avatar: 'https://picsum.photos/200',
    isTutor: false,
    nationality: { country: 'United States', code: 'us' },
    languages: {
      native: [{ code: 'en' }],
      spoken: [{ code: 'it', level: 'B2' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['history', 'food', 'travel', 'podcasts'],
    bio: 'American living in Palermo 🇺🇸 I’m improving my Italian because I’m applying for a long-term visa. Also starting Spanish for future travels in South America.',
    location: {
      type: 'Point',
      coordinates: [38.12384, 13.34729],
      city: 'Palermo',
      country: 'Italy'
    }
  },
  {
    id: 20,
    name: 'Inês',
    surname: 'Pereira',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Portugal', code: 'pt' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['travel', 'music', 'food', 'culture'],
    bio: 'Portuguese living in Verona 🇵🇹 I moved here for work and want to feel completely fluent in Italian. Happy to exchange Portuguese conversations.',
    location: {
      type: 'Point',
      coordinates: [45.44567, 10.99831],
      city: 'Verona',
      country: 'Italy'
    }
  },
  {
    id: 21,
    name: 'Yuki',
    surname: 'Tanaka',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Japan', code: 'jp' },
    languages: {
      native: [{ code: 'ja' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['photography', 'travel', 'food', 'art'],
    bio: 'Japanese living in Venice 🇯🇵 I’m learning Italian because I work in art restoration and collaborate with local museums. I can help with Japanese or English.',
    location: {
      type: 'Point',
      coordinates: [45.44692, 12.32741],
      city: 'Venezia',
      country: 'Italy'
    }
  },
  {
    id: 22,
    name: 'Andrei',
    surname: 'Popescu',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Romania', code: 'ro' },
    languages: {
      native: [{ code: 'ro' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['fitness', 'travel', 'tech', 'music'],
    bio: 'Romanian based in Bologna 🇷🇴 I moved to Italy for university and now I want to refine my Italian for professional opportunities.',
    location: {
      type: 'Point',
      coordinates: [44.48973, 11.35812],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 23,
    name: 'Sara',
    surname: 'Lindström',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Sweden', code: 'se' },
    languages: {
      native: [{ code: 'sv' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['design', 'travel', 'yoga', 'books'],
    bio: 'Swedish designer living in Milan 🇸🇪 I’m improving Italian to grow my freelance career here. Also learning French for future projects in Paris.',
    location: {
      type: 'Point',
      coordinates: [45.45287, 9.20463],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 24,
    name: 'Carlos',
    surname: 'Ramírez',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Mexico', code: 'mx' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['food', 'travel', 'cinema', 'music'],
    bio: 'Mexican living in Rome 🇲🇽 I’m practicing Italian because I work in hospitality and want to communicate better with locals.',
    location: {
      type: 'Point',
      coordinates: [41.88974, 12.51238],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 25,
    name: 'Elena',
    surname: 'Petrova',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Russia', code: 'ru' },
    languages: {
      native: [{ code: 'ru' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['literature', 'art', 'travel', 'theatre'],
    bio: 'Russian living in Florence 🇷🇺 I learned Italian for my studies in art history and I’d like to keep practicing advanced conversation.',
    location: {
      type: 'Point',
      coordinates: [43.75841, 11.26892],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 26,
    name: 'Thomas',
    surname: 'Müller',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Germany', code: 'de' },
    languages: {
      native: [{ code: 'de' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['cycling', 'travel', 'tech', 'food'],
    bio: 'German engineer based in Verona 🇩🇪 I’m learning Italian because I relocated for work and want to integrate better locally.',
    location: {
      type: 'Point',
      coordinates: [45.45213, 10.97864],
      city: 'Verona',
      country: 'Italy'
    }
  },
  {
    id: 27,
    name: 'Valentina',
    surname: 'González',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Chile', code: 'cl' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['travel', 'photography', 'nature', 'music'],
    bio: 'Chilean living in Turin 🇨🇱 I’m improving my Italian because I plan to stay long-term. Happy to exchange Spanish conversations.',
    location: {
      type: 'Point',
      coordinates: [45.08392, 7.70145],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 28,
    name: 'Omar',
    surname: 'Haddad',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Lebanon', code: 'lb' },
    languages: {
      native: [{ code: 'ar' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['entrepreneurship', 'travel', 'food', 'culture'],
    bio: 'Lebanese entrepreneur living in Milan 🇱🇧 I use Italian daily for business and want to refine my communication skills even more.',
    location: {
      type: 'Point',
      coordinates: [45.47816, 9.17384],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 29,
    name: 'Sophie',
    surname: 'Van Dijk',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Netherlands', code: 'nl' },
    languages: {
      native: [{ code: 'nl' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['design', 'travel', 'books', 'coffee'],
    bio: 'Dutch living in Bologna 🇳🇱 I’m improving Italian for work in design and starting Spanish for a future move to Madrid.',
    location: {
      type: 'Point',
      coordinates: [44.50638, 11.33074],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 30,
    name: 'Diego',
    surname: 'Álvarez',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Colombia', code: 'co' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['music', 'travel', 'sports', 'food'],
    bio: 'Colombian living in Palermo 🇨🇴 I’m learning Italian because I recently moved here and want to build real friendships locally.',
    location: {
      type: 'Point',
      coordinates: [38.12947, 13.34382],
      city: 'Palermo',
      country: 'Italy'
    }
  },
  {
    id: 31,
    name: 'Nora',
    surname: 'Horváth',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Hungary', code: 'hu' },
    languages: {
      native: [{ code: 'hu' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['travel', 'psychology', 'books', 'culture'],
    bio: 'Hungarian living in Rome 🇭🇺 I’m improving my Italian because I’m completing my psychology internship here and need more confidence with clients.',
    location: {
      type: 'Point',
      coordinates: [41.88742, 12.50593],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 32,
    name: 'Ahmed',
    surname: 'El-Sayed',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Egypt', code: 'eg' },
    languages: {
      native: [{ code: 'ar' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['history', 'travel', 'food', 'entrepreneurship'],
    bio: 'Egyptian based in Milan 🇪🇬 I use Italian daily for my small business and want to sound more natural in negotiations and networking.',
    location: {
      type: 'Point',
      coordinates: [45.48173, 9.16728],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 33,
    name: 'Katarzyna',
    surname: 'Wójcik',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Poland', code: 'pl' },
    languages: {
      native: [{ code: 'pl' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['fashion', 'travel', 'yoga', 'photography'],
    bio: 'Polish living in Florence 🇵🇱 I’m learning Italian for my fashion career and starting French because I’d like to work in Paris one day.',
    location: {
      type: 'Point',
      coordinates: [43.75684, 11.27263],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 34,
    name: 'Alejandro',
    surname: 'Torres',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Peru', code: 'pe' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['football', 'music', 'travel', 'food'],
    bio: 'Peruvian living in Bologna 🇵🇪 I recently moved here and I’m focusing on improving Italian to find better job opportunities.',
    location: {
      type: 'Point',
      coordinates: [44.50317, 11.32954],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 35,
    name: 'Maja',
    surname: 'Jovanović',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Serbia', code: 'rs' },
    languages: {
      native: [{ code: 'sr' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['art', 'reading', 'travel', 'cinema'],
    bio: 'Serbian based in Turin 🇷🇸 I studied Italian literature and want to keep practicing advanced conversation and cultural topics.',
    location: {
      type: 'Point',
      coordinates: [45.08921, 7.66438],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 36,
    name: 'Liam',
    surname: 'O’Connor',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Ireland', code: 'ie' },
    languages: {
      native: [{ code: 'en' }],
      spoken: [{ code: 'it', level: 'B2' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['music', 'travel', 'hiking', 'pub culture'],
    bio: 'Irish living in Naples 🇮🇪 I’m improving my Italian because I work remotely from here and want to integrate more locally.',
    location: {
      type: 'Point',
      coordinates: [40.83974, 14.28263],
      city: 'Napoli',
      country: 'Italy'
    }
  },
  {
    id: 37,
    name: 'Anastasia',
    surname: 'Georgiou',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Greece', code: 'gr' },
    languages: {
      native: [{ code: 'el' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['travel', 'food', 'culture', 'photography'],
    bio: 'Greek living in Venice 🇬🇷 I’m learning Italian because I work in tourism and want to communicate more naturally with clients.',
    location: {
      type: 'Point',
      coordinates: [45.43518, 12.30374],
      city: 'Venezia',
      country: 'Italy'
    }
  },
  {
    id: 38,
    name: 'Noah',
    surname: 'Levi',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Israel', code: 'il' },
    languages: {
      native: [{ code: 'he' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['startups', 'tech', 'travel', 'fitness'],
    bio: 'Israeli living in Milan 🇮🇱 I’m improving Italian because I joined a startup here and need better communication with local partners.',
    location: {
      type: 'Point',
      coordinates: [45.44892, 9.21457],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 39,
    name: 'Beatriz',
    surname: 'Costa',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Brazil', code: 'br' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['dance', 'travel', 'music', 'fashion'],
    bio: 'Brazilian living in Rome 🇧🇷 I learned Italian for my studies and now I’m starting French because I want to work in the luxury industry.',
    location: {
      type: 'Point',
      coordinates: [41.91376, 12.47925],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 40,
    name: 'Victor',
    surname: 'Ionescu',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Romania', code: 'ro' },
    languages: {
      native: [{ code: 'ro' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['travel', 'history', 'food', 'culture'],
    bio: 'Romanian living in Palermo 🇷🇴 I’ve been in Italy for years and I’m focusing on refining my Italian for professional growth.',
    location: {
      type: 'Point',
      coordinates: [38.13264, 13.34987],
      city: 'Palermo',
      country: 'Italy'
    }
  },
  {
    id: 41,
    name: 'Fatima',
    surname: 'Benali',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Morocco', code: 'ma' },
    languages: {
      native: [{ code: 'ar' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'fr', level: 'B2' }],
      learning: []
    },
    interests: ['travel', 'cooking', 'culture', 'books'],
    bio: 'Moroccan living in Turin 🇲🇦 I use Italian every day for work and I’d like to improve my fluency in professional conversations.',
    location: {
      type: 'Point',
      coordinates: [45.07891, 7.68123],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 42,
    name: 'Ethan',
    surname: 'Williams',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Canada', code: 'ca' },
    languages: {
      native: [{ code: 'en' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'fr', level: 'B2' }],
      learning: []
    },
    interests: ['travel', 'hiking', 'photography', 'coffee'],
    bio: 'Canadian living in Florence 🇨🇦 I’m improving my Italian because I work remotely from here and want deeper local connections.',
    location: {
      type: 'Point',
      coordinates: [43.77234, 11.26218],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 43,
    name: 'María',
    surname: 'Ortega',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Spain', code: 'es' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: [{ code: 'de', level: 'A2' }]
    },
    interests: ['art', 'travel', 'cinema', 'music'],
    bio: 'Spanish living in Milan 🇪🇸 I learned Italian for my master’s degree and now I’m starting German for future work opportunities in Berlin.',
    location: {
      type: 'Point',
      coordinates: [45.47021, 9.12567],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 44,
    name: 'Dimitris',
    surname: 'Papadopoulos',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Greece', code: 'gr' },
    languages: {
      native: [{ code: 'el' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['history', 'travel', 'food', 'philosophy'],
    bio: 'Greek based in Rome 🇬🇷 I’m improving my Italian because I collaborate with local universities on research projects.',
    location: {
      type: 'Point',
      coordinates: [41.89512, 12.50347],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 45,
    name: 'Camille',
    surname: 'Moreau',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'France', code: 'fr' },
    languages: {
      native: [{ code: 'fr' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['fashion', 'travel', 'design', 'art'],
    bio: 'French living in Bologna 🇫🇷 I’m improving Italian because I work in fashion and collaborate with Italian brands.',
    location: {
      type: 'Point',
      coordinates: [44.50013, 11.34879],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 46,
    name: 'Rafael',
    surname: 'Souza',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Brazil', code: 'br' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'B2' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['music', 'travel', 'fitness', 'food'],
    bio: 'Brazilian living in Verona 🇧🇷 I’m improving Italian because I plan to stay long-term and build my career here.',
    location: {
      type: 'Point',
      coordinates: [45.44122, 10.98567],
      city: 'Verona',
      country: 'Italy'
    }
  },
  {
    id: 47,
    name: 'Anja',
    surname: 'Kovač',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Croatia', code: 'hr' },
    languages: {
      native: [{ code: 'hr' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['travel', 'reading', 'culture', 'nature'],
    bio: 'Croatian based in Trieste 🇭🇷 I use Italian daily for work and want to refine my speaking skills even more.',
    location: {
      type: 'Point',
      coordinates: [45.65284, 13.78211],
      city: 'Trieste',
      country: 'Italy'
    }
  },
  {
    id: 48,
    name: 'Sebastián',
    surname: 'Castillo',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Argentina', code: 'ar' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['football', 'travel', 'food', 'music'],
    bio: 'Argentinian living in Naples 🇦🇷 I’m learning Italian to apply for citizenship and feel fully integrated here.',
    location: {
      type: 'Point',
      coordinates: [40.85812, 14.27548],
      city: 'Napoli',
      country: 'Italy'
    }
  },
  {
    id: 49,
    name: 'Laura',
    surname: 'Schmidt',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Germany', code: 'de' },
    languages: {
      native: [{ code: 'de' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['travel', 'books', 'art', 'yoga'],
    bio: 'German living in Milan 🇩🇪 I’m refining my Italian for professional reasons and starting French for future relocation plans.',
    location: {
      type: 'Point',
      coordinates: [45.46832, 9.19574],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 50,
    name: 'Nikola',
    surname: 'Petrović',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Serbia', code: 'rs' },
    languages: {
      native: [{ code: 'sr' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['tech', 'travel', 'gaming', 'fitness'],
    bio: 'Serbian living in Bologna 🇷🇸 I’m improving Italian because I work in tech and collaborate closely with Italian teams.',
    location: {
      type: 'Point',
      coordinates: [44.49857, 11.33792],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 51,
    name: 'Olga',
    surname: 'Ivanova',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Russia', code: 'ru' },
    languages: {
      native: [{ code: 'ru' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: [{ code: 'de', level: 'A2' }]
    },
    interests: ['literature', 'travel', 'theatre', 'culture'],
    bio: 'Russian living in Rome 🇷🇺 I studied Italian literature and now I’m learning German for academic collaborations in Austria.',
    location: {
      type: 'Point',
      coordinates: [41.90021, 12.50112],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 52,
    name: 'Miguel',
    surname: 'Herrera',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Spain', code: 'es' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['food', 'travel', 'football', 'music'],
    bio: 'Spanish living in Palermo 🇪🇸 I’m improving my Italian because I work in the restaurant industry and interact with locals daily.',
    location: {
      type: 'Point',
      coordinates: [38.11689, 13.36422],
      city: 'Palermo',
      country: 'Italy'
    }
  },
  {
    id: 53,
    name: 'Zuzana',
    surname: 'Kováčová',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Slovakia', code: 'sk' },
    languages: {
      native: [{ code: 'sk' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['travel', 'photography', 'nature', 'books'],
    bio: 'Slovak living in Florence 🇸🇰 I’m learning Italian because I’m working in tourism and want more confidence with clients.',
    location: {
      type: 'Point',
      coordinates: [43.77241, 11.26097],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 54,
    name: 'Pedro',
    surname: 'Mendes',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Portugal', code: 'pt' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['travel', 'music', 'food', 'culture'],
    bio: 'Portuguese based in Milan 🇵🇹 I use Italian at work and want to perfect my pronunciation. I’m also starting French for future opportunities.',
    location: {
      type: 'Point',
      coordinates: [45.46678, 9.18245],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 55,
    name: 'Leyla',
    surname: 'Yılmaz',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Turkey', code: 'tr' },
    languages: {
      native: [{ code: 'tr' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['travel', 'design', 'food', 'culture'],
    bio: 'Turkish living in Rome 🇹🇷 I’m improving my Italian because I collaborate with Italian designers and need more fluent communication.',
    location: {
      type: 'Point',
      coordinates: [41.90512, 12.49078],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 56,
    name: 'Samuel',
    surname: 'Okoro',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Nigeria', code: 'ng' },
    languages: {
      native: [{ code: 'en' }],
      spoken: [{ code: 'it', level: 'B1' }],
      learning: []
    },
    interests: ['tech', 'travel', 'music', 'entrepreneurship'],
    bio: 'Nigerian living in Bologna 🇳🇬 I’m improving Italian because I recently relocated for work and want to build stronger local connections.',
    location: {
      type: 'Point',
      coordinates: [44.49721, 11.34789],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 57,
    name: 'Helena',
    surname: 'Andersson',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Sweden', code: 'se' },
    languages: {
      native: [{ code: 'sv' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['travel', 'yoga', 'books', 'nature'],
    bio: 'Swedish living in Verona 🇸🇪 I’m improving my Italian because I plan to stay here long-term and integrate fully into the community.',
    location: {
      type: 'Point',
      coordinates: [45.44099, 10.98432],
      city: 'Verona',
      country: 'Italy'
    }
  },
  {
    id: 58,
    name: 'Ricardo',
    surname: 'Morales',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Chile', code: 'cl' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'C1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['travel', 'photography', 'food', 'culture'],
    bio: 'Chilean based in Milan 🇨🇱 I’m refining my Italian because I work with Italian clients daily and want to sound completely natural.',
    location: {
      type: 'Point',
      coordinates: [45.46567, 9.17891],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 59,
    name: 'Amina',
    surname: 'Khan',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Pakistan', code: 'pk' },
    languages: {
      native: [{ code: 'ur' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['travel', 'books', 'culture', 'food'],
    bio: 'Pakistani living in Florence 🇵🇰 I’m improving my Italian because I’m completing my postgraduate studies here.',
    location: {
      type: 'Point',
      coordinates: [43.77321, 11.25876],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 60,
    name: 'Tomáš',
    surname: 'Dvořák',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Czech Republic', code: 'cz' },
    languages: {
      native: [{ code: 'cs' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['history', 'travel', 'music', 'books'],
    bio: 'Czech living in Turin 🇨🇿 I’m improving my Italian for professional growth and starting Spanish for future travel plans.',
    location: {
      type: 'Point',
      coordinates: [45.07189, 7.69012],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 61,
    name: 'Sofia',
    surname: 'Petrova',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Bulgaria', code: 'bg' },
    languages: {
      native: [{ code: 'bg' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A1' }]
    },
    interests: ['photography', 'travel', 'music', 'culture'],
    bio: 'Bulgarian living in Venice 🇧🇬 I’m learning Italian to help with my art exhibitions and starting French for upcoming workshops in Paris.',
    location: {
      type: 'Point',
      coordinates: [45.44075, 12.31552],
      city: 'Venezia',
      country: 'Italy'
    }
  },
  {
    id: 62,
    name: 'Lucas',
    surname: 'Martinez',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Argentina', code: 'ar' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['football', 'travel', 'music', 'cooking'],
    bio: 'Argentinian living in Rome 🇦🇷 I’m improving Italian because I want to coach local youth teams and communicate better with families.',
    location: {
      type: 'Point',
      coordinates: [41.90277, 12.49642],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 63,
    name: 'Aya',
    surname: 'Tanaka',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Japan', code: 'jp' },
    languages: {
      native: [{ code: 'ja' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['travel', 'culture', 'art', 'music'],
    bio: 'Japanese living in Florence 🇯🇵 I’m learning Italian for my art history research and starting French to expand my cultural projects.',
    location: {
      type: 'Point',
      coordinates: [43.76964, 11.25578],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 64,
    name: 'Marta',
    surname: 'Rossi',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }, { code: 'es', level: 'B2' }],
      learning: [{ code: 'de', level: 'A2' }]
    },
    interests: ['travel', 'books', 'cooking', 'language learning'],
    bio: 'Italian living in Naples 🇮🇹 I love learning languages and am currently improving my German to travel through Europe next summer.',
    location: {
      type: 'Point',
      coordinates: [40.85181, 14.26808],
      city: 'Napoli',
      country: 'Italy'
    }
  },
  {
    id: 65,
    name: 'David',
    surname: 'Nguyen',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Vietnam', code: 'vn' },
    languages: {
      native: [{ code: 'vi' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['tech', 'music', 'travel', 'food'],
    bio: 'Vietnamese living in Turin 🇻🇳 I’m improving Italian to better collaborate with my colleagues in the tech industry.',
    location: {
      type: 'Point',
      coordinates: [45.07035, 7.68692],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 66,
    name: 'Elena',
    surname: 'Kowalska',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Poland', code: 'pl' },
    languages: {
      native: [{ code: 'pl' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['travel', 'yoga', 'photography', 'books'],
    bio: 'Polish living in Milan 🇵🇱 I’m learning Italian because I work in fashion and need to communicate effectively with clients and designers.',
    location: {
      type: 'Point',
      coordinates: [45.46421, 9.11902],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 67,
    name: 'Mateo',
    surname: 'Silva',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Brazil', code: 'br' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'B2' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['football', 'travel', 'music', 'food'],
    bio: 'Brazilian living in Rome 🇧🇷 I’m learning Italian to connect with local friends and starting Spanish for upcoming travels to South America.',
    location: {
      type: 'Point',
      coordinates: [41.90279, 12.49643],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 68,
    name: 'Chiara',
    surname: 'Bianchi',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }, { code: 'fr', level: 'B2' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['art', 'travel', 'cooking', 'language learning'],
    bio: 'Italian living in Florence 🇮🇹 I love traveling and learning languages; now I’m brushing up on Spanish to communicate better on trips.',
    location: {
      type: 'Point',
      coordinates: [43.76963, 11.25582],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 69,
    name: 'Ahmed',
    surname: 'Hassan',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Egypt', code: 'eg' },
    languages: {
      native: [{ code: 'ar' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['history', 'travel', 'culture', 'food'],
    bio: 'Egyptian living in Naples 🇪🇬 I’m improving Italian because I study Mediterranean history and collaborate with local universities.',
    location: {
      type: 'Point',
      coordinates: [40.85179, 14.26810],
      city: 'Napoli',
      country: 'Italy'
    }
  },
  {
    id: 70,
    name: 'Isabel',
    surname: 'Gómez',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Mexico', code: 'mx' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['travel', 'music', 'cooking', 'culture'],
    bio: 'Mexican living in Bologna 🇲🇽 I’m improving Italian for work and daily life, interacting with locals and enjoying the food scene.',
    location: {
      type: 'Point',
      coordinates: [44.49492, 11.34263],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 71,
    name: 'Lars',
    surname: 'Jensen',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Denmark', code: 'dk' },
    languages: {
      native: [{ code: 'da' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A1' }]
    },
    interests: ['cycling', 'travel', 'photography', 'music'],
    bio: 'Danish living in Milan 🇩🇰 I’m learning Italian for work in the design industry and starting French to connect with colleagues in Paris.',
    location: {
      type: 'Point',
      coordinates: [45.46421, 9.12902],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 72,
    name: 'Giulia',
    surname: 'Esposito',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }, { code: 'de', level: 'B2' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['cooking', 'travel', 'books', 'yoga'],
    bio: 'Italian living in Turin 🇮🇹 I’m learning Spanish to connect with international students at my university and explore new cultures.',
    location: {
      type: 'Point',
      coordinates: [45.07031, 7.68692],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 73,
    name: 'Nina',
    surname: 'Kumar',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'India', code: 'in' },
    languages: {
      native: [{ code: 'hi' }],
      spoken: [{ code: 'en', level: 'C1' }, { code: 'it', level: 'B2' }],
      learning: []
    },
    interests: ['tech', 'books', 'yoga', 'travel'],
    bio: 'Indian living in Rome 🇮🇳 I’m improving my Italian to better interact with local colleagues and immerse myself in Italian culture.',
    location: {
      type: 'Point',
      coordinates: [41.90281, 12.49641],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 74,
    name: 'Oscar',
    surname: 'López',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Spain', code: 'es' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'B2' }],
      learning: []
    },
    interests: ['football', 'music', 'travel', 'cooking'],
    bio: 'Spanish living in Venice 🇪🇸 I’m improving Italian to communicate with locals and enjoy my travels across Italy.',
    location: {
      type: 'Point',
      coordinates: [45.44082, 12.31552],
      city: 'Venezia',
      country: 'Italy'
    }
  },
  {
    id: 75,
    name: 'Chiwoo',
    surname: 'Park',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'South Korea', code: 'kr' },
    languages: {
      native: [{ code: 'ko' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['gaming', 'travel', 'photography', 'music'],
    bio: 'Korean living in Florence 🇰🇷 I’m learning Italian for university research in Renaissance art and French to collaborate with Parisian peers.',
    location: {
      type: 'Point',
      coordinates: [43.76961, 11.25582],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 76,
    name: 'Martina',
    surname: 'Ricci',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }, { code: 'pt', level: 'B2' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['travel', 'yoga', 'cooking', 'language learning'],
    bio: 'Italian living in Bologna 🇮🇹 I’m learning French to study abroad in Lyon next year and practice Portuguese to stay in touch with Brazilian friends.',
    location: {
      type: 'Point',
      coordinates: [44.49491, 11.34261],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 77,
    name: 'Andrei',
    surname: 'Popescu',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Romania', code: 'ro' },
    languages: {
      native: [{ code: 'ro' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['history', 'travel', 'culture', 'books'],
    bio: 'Romanian living in Milan 🇷🇴 I’m improving Italian to better teach history tours and communicate with students visiting Italy.',
    location: {
      type: 'Point',
      coordinates: [45.46422, 9.19118],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 78,
    name: 'Elisa',
    surname: 'Ferrari',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }, { code: 'de', level: 'B2' }],
      learning: [{ code: 'es', level: 'A2' }]
    },
    interests: ['art', 'travel', 'music', 'language learning'],
    bio: 'Italian living in Venice 🇮🇹 I’m learning Spanish to connect with international art students and German to prepare for my cultural exchange program.',
    location: {
      type: 'Point',
      coordinates: [45.44081, 12.31553],
      city: 'Venezia',
      country: 'Italy'
    }
  },
  {
    id: 79,
    name: 'Nikolai',
    surname: 'Ivanov',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Russia', code: 'ru' },
    languages: {
      native: [{ code: 'ru' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['history', 'travel', 'books', 'music'],
    bio: 'Russian living in Florence 🇷🇺 I’m learning Italian for research on Renaissance art and French to participate in international conferences.',
    location: {
      type: 'Point',
      coordinates: [43.76963, 11.25583],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 80,
    name: 'Sofia',
    surname: 'Carvalho',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Portugal', code: 'pt' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['cooking', 'travel', 'yoga', 'books'],
    bio: 'Portuguese living in Rome 🇵🇹 I’m improving Italian to work in tourism and help Portuguese-speaking visitors enjoy Italy.',
    location: {
      type: 'Point',
      coordinates: [41.90282, 12.49643],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 81,
    name: 'Beatriz',
    surname: 'Mendez',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Mexico', code: 'mx' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['photography', 'travel', 'cooking', 'history'],
    bio: 'Mexican living in Bologna 🇲🇽 I’m learning Italian to connect with the Italian cultural scene and practice my English with tourists.',
    location: {
      type: 'Point',
      coordinates: [44.4950, 11.3430],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 82,
    name: 'Timo',
    surname: 'Schneider',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Germany', code: 'de' },
    languages: {
      native: [{ code: 'de' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['sports', 'travel', 'cooking', 'reading'],
    bio: 'German living in Rome 🇩🇪 I’m learning Italian for work and also practicing French for my upcoming exchange program in Paris.',
    location: {
      type: 'Point',
      coordinates: [41.9030, 12.4966],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 83,
    name: 'Gabriela',
    surname: 'Rodrigues',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Brazil', code: 'br' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['literature', 'travel', 'fashion', 'music'],
    bio: 'Brazilian living in Milan 🇧🇷 I’m improving my Italian to better interact with locals and preparing for my studies in Paris with French.',
    location: {
      type: 'Point',
      coordinates: [45.4643, 9.1934],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 84,
    name: 'Lucia',
    surname: 'Martínez',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Spain', code: 'es' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['travel', 'history', 'art', 'photography'],
    bio: 'Spanish living in Naples 🇪🇸 I’m practicing Italian to better explore the history of Southern Italy and connect with locals during my travels.',
    location: {
      type: 'Point',
      coordinates: [40.8523, 14.2683],
      city: 'Napoli',
      country: 'Italy'
    }
  },
  {
    id: 85,
    name: 'Arianna',
    surname: 'Zhang',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'China', code: 'cn' },
    languages: {
      native: [{ code: 'zh' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['cooking', 'travel', 'fashion', 'history'],
    bio: 'Chinese living in Florence 🇨🇳 I’m learning Italian to explore the art history of Italy and practice my English with international visitors.',
    location: {
      type: 'Point',
      coordinates: [43.7697, 11.2559],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 86,
    name: 'Thomas',
    surname: 'Dupont',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'France', code: 'fr' },
    languages: {
      native: [{ code: 'fr' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['music', 'culture', 'literature', 'travel'],
    bio: 'French living in Milan 🇫🇷 I’m learning Italian to connect with Italian musicians and study opera in Italy.',
    location: {
      type: 'Point',
      coordinates: [45.46535, 9.19335],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 87,
    name: 'Sofia',
    surname: 'Giordano',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }, { code: 'de', level: 'B1' }],
      learning: []
    },
    interests: ['music', 'languages', 'travel', 'photography'],
    bio: 'Italian living in Florence 🇮🇹 I’m learning German to work with German-speaking tourists in the cultural sector.',
    location: {
      type: 'Point',
      coordinates: [43.76965, 11.25585],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 88,
    name: 'Yuki',
    surname: 'Tanaka',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Japan', code: 'jp' },
    languages: {
      native: [{ code: 'ja' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: [{ code: 'fr', level: 'A2' }]
    },
    interests: ['cooking', 'travel', 'history', 'art'],
    bio: 'Japanese living in Venice 🇯🇵 I’m learning Italian to study art history in Italy and preparing for my studies in Paris with French.',
    location: {
      type: 'Point',
      coordinates: [45.44085, 12.31555],
      city: 'Venezia',
      country: 'Italy'
    }
  },
  {
    id: 89,
    name: 'Jorge',
    surname: 'Pérez',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Spain', code: 'es' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['photography', 'travel', 'literature', 'history'],
    bio: 'Spanish living in Rome 🇪🇸 I’m learning Italian to explore the history and culture of Italy, and practicing English for work.',
    location: {
      type: 'Point',
      coordinates: [41.90295, 12.49645],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 90,
    name: 'Luca',
    surname: 'Ferrer',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Spain', code: 'es' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['sports', 'travel', 'history', 'music'],
    bio: 'Spanish living in Turin 🇪🇸 I’m improving my Italian to explore the cultural heritage of Northern Italy and practice English with tourists.',
    location: {
      type: 'Point',
      coordinates: [45.07035, 7.68695],
      city: 'Torino',
      country: 'Italy'
    }
  },
  {
    id: 91,
    name: 'Nina',
    surname: 'Jansen',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Netherlands', code: 'nl' },
    languages: {
      native: [{ code: 'nl' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['cycling', 'travel', 'history', 'photography'],
    bio: 'Dutch living in Milan 🇳🇱 I’m learning Italian for my work in the fashion industry and improving my English to connect with international colleagues.',
    location: {
      type: 'Point',
      coordinates: [45.46725, 9.19345],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 92,
    name: 'Katrina',
    surname: 'Popova',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Russia', code: 'ru' },
    languages: {
      native: [{ code: 'ru' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['history', 'art', 'travel', 'reading'],
    bio: 'Russian living in Florence 🇷🇺 I’m learning Italian to experience the Renaissance history and culture, and also working on my English for academic purposes.',
    location: {
      type: 'Point',
      coordinates: [43.76965, 11.25585],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 93,
    name: 'Mateo',
    surname: 'González',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Argentina', code: 'ar' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['sports', 'music', 'photography', 'travel'],
    bio: 'Argentine living in Rome 🇦🇷 I’m learning Italian for professional opportunities and improving my English to connect with international clients.',
    location: {
      type: 'Point',
      coordinates: [41.90285, 12.49645],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 94,
    name: 'Emily',
    surname: 'Johnson',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'USA', code: 'us' },
    languages: {
      native: [{ code: 'en' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'es', level: 'A2' }],
      learning: []
    },
    interests: ['cooking', 'travel', 'music', 'sports'],
    bio: 'American living in Bologna 🇺🇸 I’m learning Italian for work in the food industry and also improving my Spanish to work with Latin American clients.',
    location: {
      type: 'Point',
      coordinates: [44.4950, 11.3427],
      city: 'Bologna',
      country: 'Italy'
    }
  },
  {
    id: 95,
    name: 'Leandro',
    surname: 'Costa',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Brazil', code: 'br' },
    languages: {
      native: [{ code: 'pt' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['sports', 'travel', 'reading', 'photography'],
    bio: 'Brazilian living in Florence 🇧🇷 I’m learning Italian to connect with locals and improve my English to engage with international tourists.',
    location: {
      type: 'Point',
      coordinates: [43.7697, 11.2559],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 96,
    name: 'Carlos',
    surname: 'Ramírez',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Mexico', code: 'mx' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B1' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['technology', 'sports', 'cooking', 'photography'],
    bio: 'Mexican living in Rome 🇲🇽 I’m learning Italian to expand my career in the tech industry and improve my English for global networking.',
    location: {
      type: 'Point',
      coordinates: [41.9029, 12.4965],
      city: 'Roma',
      country: 'Italy'
    }
  },
  {
    id: 97,
    name: 'Giulia',
    surname: 'Bianchi',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }, { code: 'fr', level: 'B1' }],
      learning: []
    },
    interests: ['fashion', 'music', 'history', 'travel'],
    bio: 'Italian living in Milan 🇮🇹 I’m learning French to expand my opportunities in the fashion world and improve my English for international collaborations.',
    location: {
      type: 'Point',
      coordinates: [45.4643, 9.2001],
      city: 'Milano',
      country: 'Italy'
    }
  },
  {
    id: 98,
    name: 'Luca',
    surname: 'Ricci',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Italy', code: 'it' },
    languages: {
      native: [{ code: 'it' }],
      spoken: [{ code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['sports', 'history', 'literature', 'travel'],
    bio: 'Italian living in Naples 🇮🇹 I’m practicing English to work in international tourism and better understand foreign visitors to Naples.',
    location: {
      type: 'Point',
      coordinates: [40.85225, 14.26815],
      city: 'Napoli',
      country: 'Italy'
    }
  },
  {
    id: 99,
    name: 'Ana',
    surname: 'Mendoza',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Mexico', code: 'mx' },
    languages: {
      native: [{ code: 'es' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['history', 'art', 'travel', 'photography'],
    bio: 'Mexican living in Florence 🇲🇽 I’m learning Italian to explore art galleries in Italy and improving my English to work with international clients.',
    location: {
      type: 'Point',
      coordinates: [43.76975, 11.25595],
      city: 'Firenze',
      country: 'Italy'
    }
  },
  {
    id: 100,
    name: 'Olga',
    surname: 'Kovalenko',
    avatar: 'https://picsum.photos/200',
    isTutor: true,
    nationality: { country: 'Ukraine', code: 'ua' },
    languages: {
      native: [{ code: 'uk' }],
      spoken: [{ code: 'it', level: 'B2' }, { code: 'en', level: 'C1' }],
      learning: []
    },
    interests: ['literature', 'art', 'travel', 'cooking'],
    bio: 'Ukrainian living in Venice 🇺🇦 I’m learning Italian for my studies in art history and improving my English to communicate with tourists.',
    location: {
      type: 'Point',
      coordinates: [45.44085, 12.31565],
      city: 'Venezia',
      country: 'Italy'
    }
  }
];


[
  {
    "name": "Giulia",
    "surname": "Rinaldi",
    "email": "giulia.rinaldi@example.com",
    "password": "$2b$10$EixZA6VK664F9rD6vXbOuepXvXzV8B7M4ZfXm7pW.GvYv8m5R2e2.",
    "dob": "1995-05-15",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "Italy", "code": "it" },
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [{ "code": "en", "level": "C1" }, { "code": "es", "level": "B2" }],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "interests": ["travel", "books", "yoga", "culture"],
    "bio": "I’m Italian and I’d love to improve my French because I’m planning to move to Lyon next year for work.",
    "location": { "type": "Point", "coordinates": [9.21345, 45.46512], "city": "Milano", "country": "Italy", "address": "Milano, MI, Italia" }
  },
  {
    "name": "Lorenzo",
    "surname": "Bianchi",
    "email": "lorenzo.bianchi@example.com",
    "password": "$2b$10$kP6D7hF7T8yG9pL0mN2e5uO8jR9qS4tV6wX8zY1aB3cD5eFgHiJkL",
    "dob": "1992-08-22",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "Italy", "code": "it" },
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [{ "code": "en", "level": "C1" }],
      "learning": [{ "code": "de", "level": "B1" }]
    },
    "interests": ["tech", "startups", "fitness", "travel"],
    "bio": "Italian software developer learning German because my company is opening an office in Berlin.",
    "location": { "type": "Point", "coordinates": [7.68231, 45.07245], "city": "Torino", "country": "Italy", "address": "Torino, TO, Italia" }
  },
  {
    "name": "Martina",
    "surname": "Greco",
    "email": "martina.greco@example.com",
    "password": "$2b$10$mR1sT3vU5wX7yZ9aB2c4e6G8hJ0kL2mN4oP6qR8sT0uV2wX4yZ6aB",
    "dob": "1998-11-03",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "Italy", "code": "it" },
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [{ "code": "fr", "level": "C1" }, { "code": "en", "level": "B2" }],
      "learning": []
    },
    "interests": ["art", "cinema", "travel", "photography"],
    "bio": "From Rome 🇮🇹 I speak fluent French but I want to practice it more because my partner is French.",
    "location": { "type": "Point", "coordinates": [12.50321, 41.89987], "city": "Roma", "country": "Italy", "address": "Roma, RM, Italia" }
  },
  {
    "name": "Alessandro",
    "surname": "Conti",
    "email": "alessandro.conti@example.com",
    "password": "$2b$10$vW9xY1zB3cD5eF7gH9iJ1kL3mN5oP7qR9sT1uV3wX5yZ7aB9c1e3G",
    "dob": "1990-03-12",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "Italy", "code": "it" },
    "languages": {
      "native": [{ "code": "it" }],
      "spoken": [{ "code": "es", "level": "B2" }],
      "learning": [{ "code": "pt", "level": "A2" }]
    },
    "interests": ["sports", "music", "travel", "culture"],
    "bio": "Italian from Florence. I’m learning Portuguese because I’d like to spend some months in Brazil.",
    "location": { "type": "Point", "coordinates": [11.25874, 43.77521], "city": "Firenze", "country": "Italy", "address": "Firenze, FI, Italia" }
  },
  {
    "name": "Sofía",
    "surname": "Martínez",
    "email": "sofia.martinez@example.com",
    "password": "$2b$10$H2jK4lM6nO8pQ0rS2tU4vW6xY8zA0bC2dE4fG6hI8jK0lM2nO4pQ6",
    "dob": "1996-07-25",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "Spain", "code": "es" },
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [{ "code": "it", "level": "C1" }, { "code": "en", "level": "B2" }],
      "learning": []
    },
    "interests": ["travel", "music", "food", "culture"],
    "bio": "Spanish living in Bologna 🇪🇸 I learned Italian for my master’s degree and now I want to keep improving it.",
    "location": { "type": "Point", "coordinates": [11.33987, 44.49812], "city": "Bologna", "country": "Italy", "address": "Bologna, BO, Italia" }
  },
  {
    "name": "Lucas",
    "surname": "Fernández",
    "email": "lucas.fernandez@example.com",
    "password": "$2b$10$rS2tU4vW6xY8zA0bC2dE4fG6hI8jK0lM2nO4pQ6rS2tU4vW6xY8zA",
    "dob": "1993-01-30",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "Argentina", "code": "ar" },
    "languages": {
      "native": [{ "code": "es" }],
      "spoken": [{ "code": "it", "level": "B2" }, { "code": "en", "level": "B2" }],
      "learning": []
    },
    "interests": ["football", "travel", "history", "food"],
    "bio": "Argentinian based in Milan 🇦🇷 I’m improving my Italian because I’d like to apply for citizenship.",
    "location": { "type": "Point", "coordinates": [9.19632, 45.45974], "city": "Milano", "country": "Italy", "address": "Milano, MI, Italia" }
  },
  {
    "name": "Hannah",
    "surname": "Schneider",
    "email": "hannah.schneider@example.com",
    "password": "$2b$10$B3cD5eF7gH9iJ1kL3mN5oP7qR9sT1uV3wX5yZ7aB9c1e3G5hI7jK9",
    "dob": "1997-09-14",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "Germany", "code": "de" },
    "languages": {
      "native": [{ "code": "de" }],
      "spoken": [{ "code": "it", "level": "B2" }, { "code": "en", "level": "C1" }],
      "learning": []
    },
    "interests": ["reading", "hiking", "travel", "culture"],
    "bio": "German living in Florence 🇩🇪 I started learning Italian because I fell in love with Tuscany.",
    "location": { "type": "Point", "coordinates": [11.27218, 43.76854], "city": "Firenze", "country": "Italy", "address": "Firenze, FI, Italia" }
  },
  {
    "name": "Emily",
    "surname": "Johnson",
    "email": "emily.johnson@example.com",
    "password": "$2b$10$L2mN4oP6qR8sT0uV2wX4yZ6aB8c0dE2fG4hI6jK8lM0nO2pQ4rS6t",
    "dob": "1994-12-05",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "United States", "code": "us" },
    "languages": {
      "native": [{ "code": "en" }],
      "spoken": [{ "code": "it", "level": "C1" }],
      "learning": [{ "code": "fr", "level": "A2" }]
    },
    "interests": ["travel", "photography", "coffee", "books"],
    "bio": "American expat in Rome 🇺🇸 I learned Italian for work in tourism.",
    "location": { "type": "Point", "coordinates": [12.48874, 41.91021], "city": "Roma", "country": "Italy", "address": "Roma, RM, Italia" }
  },
  {
    "name": "João",
    "surname": "Silva",
    "email": "joao.silva@example.com",
    "password": "$2b$10$oP7qR9sT1uV3wX5yZ7aB9c1e3G5hI7jK9lM1nO3pQ5rS7tU9vW1xY",
    "dob": "1991-06-18",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "Brazil", "code": "br" },
    "languages": {
      "native": [{ "code": "pt" }],
      "spoken": [{ "code": "it", "level": "C1" }, { "code": "en", "level": "B2" }],
      "learning": []
    },
    "interests": ["music", "travel", "fitness", "food"],
    "bio": "Brazilian living in Naples 🇧🇷 I moved here for love and I’m working on sounding more natural in Italian.",
    "location": { "type": "Point", "coordinates": [14.27145, 40.84792], "city": "Napoli", "country": "Italy", "address": "Napoli, NA, Italia" }
  },
  {
    "name": "Claire",
    "surname": "Dubois",
    "email": "claire.dubois@example.com",
    "password": "$2b$10$U3vW5xY7zA9bC1dE3fG5hI7jK9lM1nO3pQ5rS7tU9vW1xY3zA5bC",
    "dob": "1993-04-27",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "France", "code": "fr" },
    "languages": {
      "native": [{ "code": "fr" }],
      "spoken": [{ "code": "it", "level": "B2" }, { "code": "en", "level": "C1" }],
      "learning": []
    },
    "interests": ["art", "cinema", "travel", "wine"],
    "bio": "French in Turin 🇫🇷 I’m improving my Italian because I work in the wine industry.",
    "location": { "type": "Point", "coordinates": [7.70123, 45.06782], "city": "Torino", "country": "Italy", "address": "Torino, TO, Italia" }
  },
  {
    "name": "Mateusz",
    "surname": "Kowalski",
    "email": "mateusz.kowalski@example.com",
    "password": "$2b$10$yZ7aB9c1e3G5hI7jK9lM1nO3pQ5rS7tU9vW1xY3zA5bC7dE9fG1hI",
    "dob": "1989-10-11",
    "avatar": "https://picsum.photos/200",
    "isTutor": true,
    "nationality": { "name": "Poland", "code": "pl" },
    "languages": {
      "native": [{ "code": "pl" }],
      "spoken": [{ "code": "it", "level": "B2" }, { "code": "en", "level": "C1" }],
      "learning": []
    },
    "interests": ["tech", "gaming", "travel", "history"],
    "bio": "Polish living in Milan 🇵🇱 I moved here for work in IT and I want to feel more confident.",
    "location": { "type": "Point", "coordinates": [9.19632, 45.45974], "city": "Milano", "country": "Italy", "address": "Milano, MI, Italia" }
  }
]


