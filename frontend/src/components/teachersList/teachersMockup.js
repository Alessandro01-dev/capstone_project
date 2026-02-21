export const teachers = [
  {
    id: 1,
    name: "Marco",
    surname: "Rossi",
    avatar: "https://picsum.photos/200",
    nationality: {
      country: "Italy",
      code: "it"
    },
    isTutor: true,
    languages: {
      native: [{ code: "it" }],
      spoken: [
        { code: "en", level: "C1" },
        { code: "es", level: "B2" }
      ],
      learning: [{ code: "fr", level: "A2" }]
    },
    location: {
      type: "Point",
      coordinates: [12.4964, 41.9028],
      city: "Rome",
      country: "Italy"
    },
    bio: `Ciao! I’m Marco, a passionate Italian tutor with over 5 years of experience teaching Italian to students from all over the world. My approach is focused on practical conversation and real-life grammar use, because I believe that speaking the language confidently is the key to mastering it.

I help students learn how to communicate effectively in everyday situations, from ordering coffee to discussing complex topics in Italian. Whether you're learning Italian for travel, work, or personal enrichment, I’ll make sure you enjoy every step of your journey.

My method blends structured lessons with conversational practice, so you’ll be speaking Italian naturally in no time!`,
    languagesTaught: [
      { code: "it", level: "Native" },
      { code: "en", level: "C1" }
    ],
    experience: 5,
    certifications: [
      { name: "DITALS", institution: "University of Siena", isVerified: true }
    ],
    hourlyRate: 20,
    availability: "Weekdays 9:00 - 18:00 CET",
    rating: 4.8,
    isVerified: true
  },
  {
    id: 2,
    name: "Sophie",
    surname: "Dubois",
    avatar: "https://picsum.photos/200",
    nationality: {
      country: "France",
      code: "fr"
    },
    isTutor: true,
    languages: {
      native: [{ code: "fr" }],
      spoken: [{ code: "en", level: "C2" }],
      learning: [{ code: "it", level: "B1" }]
    },
    location: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
      city: "Paris",
      country: "France"
    },
    bio: `Bonjour! I’m Sophie, a certified French teacher with a deep passion for helping students pass the DELF and DALF exams. With over 8 years of experience, I tailor each lesson to your individual needs, whether you are preparing for an exam or just want to improve your fluency in French.

I use a variety of interactive methods—listening exercises, reading comprehension, and speaking drills—so that you’re ready for real-life French conversations.

Expect to improve not only your grammar but also your confidence in speaking, all while preparing for the exams that will open new doors to your French journey.`,
    languagesTaught: [{ code: "fr", level: "Native" }],
    experience: 8,
    certifications: [
      { name: "DALF C2", institution: "France Education", isVerified: true }
    ],
    hourlyRate: 28,
    availability: "Flexible evenings and weekends",
    rating: 4.9,
    isVerified: true
  },
  {
    id: 3,
    name: "Carlos",
    surname: "Gomez",
    avatar: "https://picsum.photos/200",
    nationality: {
      country: "Spain",
      code: "es"
    },
    isTutor: true,
    languages: {
      native: [{ code: "es" }],
      spoken: [{ code: "en", level: "C1" }],
      learning: [{ code: "de", level: "A1" }]
    },
    location: {
      type: "Point",
      coordinates: [-3.7038, 40.4168],
      city: "Madrid",
      country: "Spain"
    },
    bio: `Hola! I’m Carlos, a dedicated Spanish tutor with over 6 years of experience. My specialty is helping students prepare for DELE exams and mastering business Spanish for professional environments. I’ve worked with many professionals who need to learn Spanish to boost their careers.

With a focus on tailored lessons that match your level and goals, I can help you tackle complex vocabulary, business communication, and cultural nuances, all while ensuring that you are fully prepared for the DELE exams.

My teaching style combines structured lessons with engaging, practical exercises that reflect real-world scenarios.`,
    languagesTaught: [{ code: "es", level: "Native" }],
    experience: 6,
    certifications: [
      { name: "ELE Certification", institution: "Instituto Cervantes", isVerified: true }
    ],
    hourlyRate: 22,
    availability: "Mon-Fri afternoons",
    rating: 4.7,
    isVerified: true
  },
  {
    id: 4,
    name: "Anna",
    surname: "Schmidt",
    avatar: "https://picsum.photos/200",
    nationality: {
      country: "Germany",
      code: "de"
    },
    isTutor: true,
    languages: {
      native: [{ code: "de" }],
      spoken: [{ code: "en", level: "C2" }],
      learning: [{ code: "es", level: "B1" }]
    },
    location: {
      type: "Point",
      coordinates: [13.405, 52.52],
      city: "Berlin",
      country: "Germany"
    },
    bio: `Hallo! I’m Anna, a native German teacher with a passion for breaking down complex grammar rules and making them easy to understand. Whether you're preparing for the Goethe Zertifikat or simply looking to improve your fluency, I have the experience and tools to guide you to success.

My lessons are interactive, engaging, and tailored to your individual needs. I specialize in explaining tricky grammar concepts and helping students gain the confidence to speak with clarity and accuracy.

Expect a structured yet flexible approach where you can progress at your own pace while mastering German grammar.`,
    languagesTaught: [{ code: "de", level: "Native" }],
    experience: 10,
    certifications: [
      { name: "Goethe Zertifikat Trainer", institution: "Goethe Institut", isVerified: true }
    ],
    hourlyRate: 30,
    availability: "Flexible schedule",
    rating: 5,
    isVerified: true
  },
  {
    id: 5,
    name: "Emily",
    surname: "Johnson",
    avatar: "https://picsum.photos/200",
    nationality: {
      country: "United Kingdom",
      code: "gb"
    },
    isTutor: true,
    languages: {
      native: [{ code: "en" }],
      spoken: [{ code: "it", level: "B2" }],
      learning: [{ code: "ja", level: "A1" }]
    },
    location: {
      type: "Point",
      coordinates: [-0.1276, 51.5072],
      city: "London",
      country: "UK"
    },
    bio: `Hi there! I’m Emily, a native English teacher with over 7 years of experience helping students from all over the world. I specialize in improving fluency and pronunciation, so you can communicate confidently in any situation.

From improving your conversational skills to perfecting your accent, I use a variety of methods, including listening exercises and conversation practice, to help you speak more naturally. My lessons are engaging and fun, and I ensure that you get the most out of every session.

Whether you're preparing for a presentation, job interview, or just want to sound more like a native speaker, I’m here to help!`,
    languagesTaught: [{ code: "en", level: "Native" }],
    experience: 7,
    certifications: [
      { name: "TEFL", institution: "International TEFL Academy", isVerified: true }
    ],
    hourlyRate: 25,
    availability: "Weekends + weekday evenings",
    rating: 4.6,
    isVerified: true
  },
  {
    id: 6,
    name: "Yuki",
    surname: "Tanaka",
    avatar: "https://picsum.photos/200",
    nationality: { country: "Japan", code: "jp" },
    isTutor: true,
    languages: {
      native: [{ code: "ja" }],
      spoken: [{ code: "en", level: "C1" }],
      learning: [{ code: "it", level: "A2" }]
    },
    location: { type: "Point", coordinates: [139.6917, 35.6895], city: "Tokyo", country: "Japan" },
    bio: `こんにちは! I’m Yuki, a Japanese tutor with 4 years of experience, here to help you master the Japanese language. My lessons are designed for learners at all levels, whether you're preparing for the JLPT exams or simply want to engage in daily conversations.

I focus on practical Japanese that you can use immediately, including both formal and casual speech. We will cover grammar, vocabulary, and pronunciation, so you can start speaking like a native!

With a deep understanding of Japanese culture and language structure, I’ll guide you through each step to fluency.`,
    languagesTaught: [{ code: "ja", level: "Native" }],
    experience: 4,
    certifications: [{ name: "Japanese Language Teaching Competency", institution: "Japan Foundation", isVerified: true }],
    hourlyRate: 24,
    availability: "Morning JST",
    rating: 4.8,
    isVerified: true
  },
  {
    id: 7,
    name: "Lucas",
    surname: "Silva",
    avatar: "https://picsum.photos/200",
    nationality: { country: "Brazil", code: "br" },
    isTutor: true,
    languages: {
      native: [{ code: "pt" }],
      spoken: [{ code: "en", level: "B2" }],
      learning: [{ code: "es", level: "B1" }]
    },
    location: { type: "Point", coordinates: [-46.6333, -23.5505], city: "São Paulo", country: "Brazil" },
    bio: `Olá! I’m Lucas, a native Brazilian Portuguese tutor with a passion for teaching pronunciation and cultural immersion. With over 5 years of experience, I work with students who want to speak Portuguese confidently, whether for travel, work, or cultural understanding.

We’ll cover the essentials of the language, including grammar, vocabulary, and speaking skills. But most importantly, I’ll guide you through the culture behind the language, so you’ll not only speak Portuguese, but understand its unique rhythm and tone.

Let’s dive into the language and culture together!`,
    languagesTaught: [{ code: "pt", level: "Native" }],
    experience: 5,
    certifications: [{ name: "Portuguese Teaching Certificate", institution: "USP", isVerified: false }],
    hourlyRate: 18,
    availability: "Flexible mornings",
    rating: 4.5,
    isVerified: false
  },
  {
    id: 8,
    name: "Elena",
    surname: "Petrova",
    avatar: "https://picsum.photos/200",
    nationality: { country: "Russia", code: "ru" },
    isTutor: true,
    languages: {
      native: [{ code: "ru" }],
      spoken: [{ code: "en", level: "C1" }],
      learning: [{ code: "de", level: "A2" }]
    },
    location: { type: "Point", coordinates: [37.6173, 55.7558], city: "Moscow", country: "Russia" },
    bio: `Здравствуйте! I’m Elena, a Russian tutor with over 9 years of experience helping students master Russian grammar and pronunciation. Russian can be a challenging language, but with the right guidance, you can learn to speak it confidently and fluently.

My approach is built on clear explanations and practical exercises that will help you tackle even the most difficult aspects of Russian grammar. Whether you're learning for travel, work, or personal enrichment, I’ll make sure every lesson is engaging and effective.

We will focus on building your conversational skills while ensuring you understand the language's structure deeply.`,
    languagesTaught: [{ code: "ru", level: "Native" }],
    experience: 9,
    certifications: [{ name: "Philology Degree", institution: "Moscow State University", isVerified: true }],
    hourlyRate: 21,
    availability: "Weekdays mornings",
    rating: 4.7,
    isVerified: true
  },
  {
    id: 9,
    name: "Ahmed",
    surname: "Hassan",
    avatar: "https://picsum.photos/200",
    nationality: { country: "Egypt", code: "eg" },
    isTutor: true,
    languages: {
      native: [{ code: "ar" }],
      spoken: [{ code: "en", level: "C2" }],
      learning: [{ code: "fr", level: "B1" }]
    },
    location: { type: "Point", coordinates: [31.2357, 30.0444], city: "Cairo", country: "Egypt" },
    bio: `مرحباً! I’m Ahmed, a native Arabic tutor with over 6 years of experience teaching Modern Standard Arabic and various dialects. I help students of all levels master both the language and its cultural context.

My lessons focus on practical Arabic, helping you with everything from casual conversations to formal writing and dialects. I also specialize in Arabic for professional settings, making sure you can communicate confidently in the workplace.

Let’s break down the language together, focusing on grammar, speaking practice, and understanding Arabic culture.`,
    languagesTaught: [{ code: "ar", level: "Native" }],
    experience: 6,
    certifications: [{ name: "Arabic Linguistics", institution: "Cairo University", isVerified: true }],
    hourlyRate: 19,
    availability: "Flexible",
    rating: 4.6,
    isVerified: true
  },
  {
    id: 10,
    name: "Li",
    surname: "Wei",
    avatar: "https://picsum.photos/200",
    nationality: { country: "China", code: "cn" },
    isTutor: true,
    languages: {
      native: [{ code: "zh" }],
      spoken: [{ code: "en", level: "C1" }],
      learning: [{ code: "it", level: "A1" }]
    },
    location: { type: "Point", coordinates: [116.4074, 39.9042], city: "Beijing", country: "China" },
    bio: `你好! I’m Li, a Mandarin tutor with over 7 years of experience helping students prepare for the HSK exams and learn business Chinese. Whether you're learning Chinese for travel, work, or personal growth, I’ll guide you through every step of the process.

We’ll focus on mastering pronunciation, grammar, and vocabulary, and I’ll introduce you to Chinese culture and business etiquette. My lessons are tailored to your level, so we can take things at your pace.

With a focus on practical language, I’ll help you achieve fluency while preparing for the HSK exams.`,
    languagesTaught: [{ code: "zh", level: "Native" }],
    experience: 7,
    certifications: [{ name: "HSK Examiner", institution: "Confucius Institute", isVerified: true }],
    hourlyRate: 23,
    availability: "Evenings CST",
    rating: 4.9,
    isVerified: true
  }
]