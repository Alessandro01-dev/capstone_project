const tutorData = [
  {
    email: "giulia.rinaldi@example.com",
    bio: "As a dedicated language educator based in Milan, I specialize in creating immersive Italian learning experiences. With a background in cultural studies and years of experience in language exchange, I focus on helping students achieve natural fluency. My lessons are tailored to your specific needs, whether you are preparing for a move to Italy or looking to master professional communication. I integrate grammar within real-world conversational contexts to ensure you feel confident in any social setting.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [
        { code: "en", level: "C1" },
        { code: "es", level: "B2" }
      ]
    },
    experience: 4,
    certifications: [
      {
        name: "DITALS I - Teaching Italian to Foreigners",
        institution: "Università per Stranieri di Siena",
        year: 2019,
        file: "cert_ditals_giulia.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Tuesdays and Thursdays, 18:00 - 20:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "lorenzo.bianchi@example.com",
    bio: "Passionate about the intersection of technology and language, I offer a unique approach to learning Italian. As a software developer, I help professionals master the technical and business vocabulary needed in the modern Italian workplace. My methodology is structured and goal-oriented, focusing on clear pronunciation, effective email writing, and confident public speaking. I aim to provide my students with the tools to navigate both formal corporate environments and casual office culture.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [{ code: "en", level: "C1" }]
    },
    experience: 3,
    certifications: [
      {
        name: "C1 Advanced English Certificate",
        institution: "Cambridge Assessment English",
        year: 2018,
        file: "cambridge_c1_lorenzo.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Monday to Friday, early morning or late evening",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "martina.greco@example.com",
    bio: "Bring the beauty of Italian art and cinema into your language journey. Based in the heart of Rome, I provide an enrichment-led teaching style that uses authentic cultural materials to build your fluency. My lessons explore Italian history and contemporary culture, making grammar points stick through engaging discussions about films and masterpieces. I am committed to helping French and English speakers find their unique voice in Italian while deepening their appreciation for my country's heritage.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [
        { code: "fr", level: "C1" },
        { code: "en", level: "B2" }
      ]
    },
    experience: 5,
    certifications: [
      {
        name: "Master in Italian Language and Culture",
        institution: "Università La Sapienza di Roma",
        year: 2020,
        file: "master_it_martina.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Flexible weekdays, 10:00 - 16:00",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "alessandro.conti@example.com",
    bio: "Learn the vibrant and authentic Italian spoken on the streets of Florence. I specialize in conversational Italian, focusing on the idioms, slang, and cultural nuances that you won't find in textbooks. My approach is relaxed yet effective, perfect for travelers or those moving to Italy who want to connect with locals immediately. We will focus on practical scenarios, from ordering at a 'trattoria' to discussing sports and music, ensuring your transition to Italian life is smooth and fun.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [{ code: "es", level: "B2" }]
    },
    experience: 2,
    certifications: [
      {
        name: "CEDILS - Certification in Teaching Italian",
        institution: "Università Ca' Foscari",
        year: 2022,
        file: "cedils_alessandro.pdf",
        isVerified: false
      }
    ],
    hourlyRate: 18,
    availability: "Weekends and Wednesday evenings",
    rating: 4.5,
    isVerified: false
  },
  {
    email: "sofia.martinez@example.com",
    bio: "Experienced Spanish native tutor living in Italy, offering a bridge between these two beautiful Mediterranean cultures. Having mastered Italian to a C1 level, I have a deep understanding of the common pitfalls and linguistic similarities that Italian students face when learning Spanish. My lessons are highly interactive, focusing on building a strong grammatical foundation while encouraging constant speaking practice to build muscle memory and confidence.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [
        { code: "it", level: "C1" },
        { code: "en", level: "B2" }
      ]
    },
    experience: 6,
    certifications: [
      {
        name: "DELE C2 - Spanish Mastery",
        institution: "Instituto Cervantes",
        year: 2017,
        file: "dele_c2_sofia.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Daily from 14:00 - 19:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "lucas.fernandez@example.com",
    bio: "Native Spanish speaker from Argentina with a passion for history and football. I provide dynamic language sessions that focus on the 'Rioplatense' dialect and broader Latin American Spanish. My goal is to make you comfortable in any Spanish-speaking country by working on your listening skills and adaptability. Whether you are learning for business in South America or for personal travel, I customize every session to reflect the vocabulary and cultural context you need most.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [
        { code: "it", level: "B2" },
        { code: "en", level: "B2" }
      ]
    },
    experience: 4,
    certifications: [
      {
        name: "Teaching Spanish as a Second Language",
        institution: "University of Buenos Aires",
        year: 2018,
        file: "tutor_esp_lucas.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 21,
    availability: "Monday to Thursday, late nights",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "hannah.schneider@example.com",
    bio: "German native tutor based in Tuscany, offering structured and result-oriented German lessons. I specialize in helping Italian speakers overcome the challenges of German syntax and cases through a logical, step-by-step methodology. My lessons are balanced between rigorous grammar training and free-flowing conversation, designed to help you reach your professional or academic goals in German-speaking countries. I pride myself on creating a patient and supportive learning environment.",
    languagesTaught: {
      natives: [{ code: "de" }],
      others: [
        { code: "it", level: "B2" },
        { code: "en", level: "C1" }
      ]
    },
    experience: 7,
    certifications: [
      {
        name: "DaF - Teaching German as a Foreign Language",
        institution: "Goethe-Institut",
        year: 2015,
        file: "daf_cert_hannah.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 32,
    availability: "Mornings from 08:00 - 12:00",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "joao.silva@example.com",
    bio: "Bringing the warmth of Brazil to Naples, I offer immersive Portuguese lessons that focus on rhythmic pronunciation and natural flow. With a strong background in fitness and music, my teaching style is high-energy and interactive. I specialize in helping Italian speakers bridge the phonetic gap between the two languages, ensuring you sound authentic whether you're traveling to Rio or Lisbon.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Portuguese as a Foreign Language Certificate",
        institution: "Universidade de São Paulo",
        year: 2016,
        file: "pt_cert_joao.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Late afternoons and weekends",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "claire.dubois@example.com",
    bio: "As a French professional in the wine industry, I provide specialized language training for the luxury and culinary sectors. My lessons in Turin are designed for those who want to master 'Professional French' with a focus on etiquette, wine terminology, and business negotiation. I combine academic grammar with the cultural nuances of the French lifestyle to offer a truly sophisticated learning experience.",
    languagesTaught: {
      natives: [{ code: "fr" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Business French Diploma",
        institution: "CCI Paris Île-de-France",
        year: 2018,
        file: "business_fr_claire.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Mondays and Wednesdays, 17:00 - 21:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "mateusz.kowalski@example.com",
    bio: "Bridging the gap between IT and linguistics, I offer structured Polish and English lessons for tech professionals in Milan. My methodology is logical and efficient, focusing on clear communication and technical terminology. I help my students navigate international work environments by improving their syntax and professional vocabulary through goal-oriented sessions.",
    languagesTaught: {
      natives: [{ code: "pl" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "TESOL Certification",
        institution: "Arizona State University",
        year: 2019,
        file: "tesol_mateusz.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Remote sessions only, Tuesday and Thursday evenings",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "isabelle.lefevre@example.com",
    bio: "Architecture and design meet language in my specialized French courses in Genoa. I help students and professionals in the creative industries master French through the study of architectural history and technical drawing terminology. My lessons are highly visual and structured, perfect for anyone looking to work with French firms or expand their cultural horizons through the lens of art and design.",
    languagesTaught: {
      natives: [{ code: "fr" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 6,
    certifications: [
      {
        name: "DAEFLE - Teaching French",
        institution: "Alliance Française",
        year: 2015,
        file: "daefle_isabelle.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Flexible schedule during office hours",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "camila.santos@example.com",
    bio: "Join me in Rome for a journey into the vibrant world of Brazilian Portuguese, with a special focus on the fashion and arts industry. I provide creative and engaging lessons that use dance and music as a vehicle for language acquisition. My goal is to make you feel comfortable with the slang and 'ginga' of Brazilian culture while building a solid foundation in grammar and conversation.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "B2" }]
    },
    experience: 2,
    certifications: [
      {
        name: "Portuguese Cultural Ambassador Certificate",
        institution: "Ministry of Culture Brazil",
        year: 2021,
        file: "culture_cert_camila.pdf",
        isVerified: false
      }
    ],
    hourlyRate: 18,
    availability: "Weekends 10:00 - 15:00",
    rating: 4.6,
    isVerified: false
  },
  {
    email: "jan.novak@example.com",
    bio: "Academic and research-focused Czech and English tutor in Florence. As a researcher, I specialize in teaching formal writing, reading comprehension, and academic presentation skills. My lessons are ideal for students and academics who need to master the Czech language for historical or scientific research, providing a disciplined and detailed approach to complex linguistic structures.",
    languagesTaught: {
      natives: [{ code: "cs" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Master of Arts in Linguistics",
        institution: "Charles University Prague",
        year: 2014,
        file: "ma_jan_novak.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 24,
    availability: "Mornings only, Monday to Friday",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "lucia.garcia@example.com",
    bio: "Professional Spanish tutor with a passion for cinema and visual arts. Based in Naples, I offer dynamic lessons that use film scripts and photography as primary learning materials. I help students develop a natural Spanish accent and a deep understanding of Hispanic cultural nuances, preparing them for both casual travel and professional opportunities in the creative arts.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "DELE Spanish Level C2",
        institution: "Instituto Cervantes",
        year: 2017,
        file: "dele_c2_lucia.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Daily 16:00 - 20:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "maximilian.weber@example.com",
    bio: "Executive German coach for entrepreneurs and business leaders in Milan. I specialize in high-stakes communication, negotiation tactics, and business networking in German. My sessions are intensive and results-driven, designed to give you a competitive edge in the German-speaking market while fitting into a busy corporate schedule.",
    languagesTaught: {
      natives: [{ code: "de" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 8,
    certifications: [
      {
        name: "Business German Instruction Certificate",
        institution: "Goethe-Institut",
        year: 2013,
        file: "biz_de_max.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 45,
    availability: "Early mornings 07:00 - 09:00 or late nights",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "agnieszka.nowak@example.com",
    bio: "Native Polish speaker with a deep love for linguistics and cultural exchange. Based in Turin, I offer personalized Polish lessons that focus on practical conversation and the nuances of Slavic grammar. Having integrated into Italian life myself, I specialize in helping Italian speakers overcome the initial hurdles of the Polish language through a patient, step-by-step approach that emphasizes real-world usage and cultural context.",
    languagesTaught: {
      natives: [{ code: "pl" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "Certificate in Teaching Polish as a Foreign Language",
        institution: "Jagiellonian University",
        year: 2017,
        file: "pl_teach_agnieszka.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Tuesday and Thursday afternoons",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "ines.pereira@example.com",
    bio: "Passionate Portuguese tutor located in Verona, dedicated to sharing the beauty of my native tongue and Lusophone culture. My teaching philosophy centers on immersive communication; I use music, contemporary literature, and news to build your vocabulary and confidence. Whether you are learning for business in Brazil or a holiday in Portugal, I tailor each session to your personal goals and learning style.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "CAP - Pedagogical Competence Certificate",
        institution: "IEFP Portugal",
        year: 2019,
        file: "cap_ines_pereira.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Mondays and Wednesdays, 18:00 - 20:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "andrei.popescu@example.com",
    bio: "Specialized Romanian instructor for professionals and students. With a strong background in tech and business, I help my students master Romanian for specific purposes, focusing on formal writing, professional presentations, and technical terminology. My lessons in Bologna are highly structured, efficient, and designed to produce measurable results in fluency and grammatical accuracy.",
    languagesTaught: {
      natives: [{ code: "ro" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Romanian Language Proficiency Certificate",
        institution: "University of Bucharest",
        year: 2015,
        file: "ro_prof_andrei.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Flexible schedule, including early mornings",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "sara.lindstrom@example.com",
    bio: "Design-led Swedish language coaching in the heart of Milan. As a professional designer, I offer a unique curriculum that blends Swedish language learning with insights into Scandinavian design principles and aesthetics. My lessons are ideal for creative professionals looking to expand their network in Sweden or for anyone captivated by the 'Lagom' lifestyle and the clarity of the Swedish language.",
    languagesTaught: {
      natives: [{ code: "sv" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 2,
    certifications: [
      {
        name: "TISUS - Test in Swedish for University Studies",
        institution: "Stockholm University",
        year: 2016,
        file: "tisus_sara_l.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 35,
    availability: "Fridays and Saturday mornings",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "carlos.ramirez@example.com",
    bio: "Vibrant Spanish tutor from Mexico, bringing the richness of Latin American culture to Rome. With extensive experience in the hospitality industry, I specialize in teaching 'Spanish for Travel and Service'. My lessons are fun, fast-paced, and focused on essential conversational skills. I help you master the authentic accent and idiomatic expressions that will make you stand out in any Spanish-speaking country.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "B2" }]
    },
    experience: 6,
    certifications: [
      {
        name: "Spanish as a Second Language Instructor",
        institution: "UNAM Mexico",
        year: 2014,
        file: "unam_carlos_r.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Daily, 15:00 - 19:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "elena.petrova@example.com",
    bio: "Russian language and Art History expert based in Florence. I offer a sophisticated approach to the Russian language, utilizing classical literature, theatre scripts, and art criticism to deepen your understanding. My lessons are designed for advanced students and culture enthusiasts who wish to achieve a high level of literary and conversational proficiency while exploring the vast Russian cultural heritage.",
    languagesTaught: {
      natives: [{ code: "ru" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 7,
    certifications: [
      {
        name: "TRKI - Test of Russian as a Foreign Language (Level C2)",
        institution: "Saint Petersburg State University",
        year: 2013,
        file: "trki_c2_elena.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Weekdays, 10:00 - 14:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "thomas.muller@example.com",
    bio: "Technical German coaching for engineers and industrial professionals in Verona. As a working engineer, I understand the precise language required for the German manufacturing and tech sectors. My methodology focuses on technical terminology, safety protocols, and professional reporting, ensuring that you can operate effectively and confidently in a German-speaking professional environment.",
    languagesTaught: {
      natives: [{ code: "de" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 8,
    certifications: [
      {
        name: "Goethe-Zertifikat C2: GDS",
        institution: "Goethe-Institut",
        year: 2012,
        file: "goethe_c2_thomas.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 40,
    availability: "Tuesday evenings and Saturday afternoons",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "valentina.gonzalez@example.com",
    bio: "Empathetic and engaging Spanish tutor from Chile, now based in Turin. My lessons focus on building oral confidence through photography and nature-based discussions. I believe in a holistic approach to language learning where student interests lead the curriculum. I specialize in Chilean Spanish and general South American dialects, helping students prepare for both long-term relocation and casual travel.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "Diploma in Spanish Language Pedagogy",
        institution: "Universidad de Chile",
        year: 2020,
        file: "pedagogy_val_g.pdf",
        isVerified: false
      }
    ],
    hourlyRate: 19,
    availability: "Flexible weekdays, 16:00 - 21:00",
    rating: 4.7,
    isVerified: false
  },
  {
    email: "omar.haddad@example.com",
    bio: "As a Lebanese entrepreneur based in Milan, I offer a unique perspective on the Arabic language, focusing on Modern Standard Arabic and the Levantine dialect. My lessons are designed for professionals and fellow entrepreneurs who wish to expand their business horizons in the Middle East. I combine linguistic training with essential cultural etiquette and negotiation strategies to ensure you are fully prepared for the Arab business world.",
    languagesTaught: {
      natives: [{ code: "ar" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "C1" }]
    },
    experience: 6,
    certifications: [
      {
        name: "Arabic Language for Business Professionals",
        institution: "American University of Beirut",
        year: 2014,
        file: "ar_biz_omar.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 35,
    availability: "Evenings and lunch breaks during the week",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "sophie.vandijk@example.com",
    bio: "Bring the efficiency and directness of the Dutch language into your skill set. Based in Bologna and working in the design industry, I provide Dutch lessons that are practical, visual, and highly interactive. I specialize in helping Italian design students and professionals prepare for opportunities in the Netherlands, focusing on industry-specific vocabulary and daily conversational fluency.",
    languagesTaught: {
      natives: [{ code: "nl" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "CNaVT - Certificate in Dutch as a Foreign Language",
        institution: "University of Amsterdam",
        year: 2018,
        file: "cnavt_sophie_v.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Mondays, Wednesdays and Fridays 17:00-20:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "diego.alvarez@example.com",
    bio: "Experience the passion of Colombian Spanish right here in Palermo! My lessons are high-energy and centered around music, sports, and daily life. I believe that the best way to learn a language is through emotional connection and constant practice. Whether you want to master the clear Colombian accent or just want to feel more confident speaking during your next trip to Latin America, I am here to help.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "en", level: "B2" }, { code: "it", level: "B1" }]
    },
    experience: 2,
    certifications: [
      {
        name: "ELE - Teaching Spanish as a Foreign Language",
        institution: "Universidad Nacional de Colombia",
        year: 2021,
        file: "ele_diego_a.pdf",
        isVerified: false
      }
    ],
    hourlyRate: 18,
    availability: "Weekends and Tuesday evenings",
    rating: 4.7,
    isVerified: false
  },
  {
    email: "nora.horvath@example.com",
    bio: "Hungarian is often cited as one of the most challenging languages, but with my psychologically-informed teaching method, I make it accessible and logical. Based in Rome, I offer Hungarian lessons that focus on cognitive memory techniques and conversational confidence. My background in psychology allows me to tailor the learning process to your specific mental blocks, ensuring a supportive and efficient path to fluency.",
    languagesTaught: {
      natives: [{ code: "hu" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "ECL Hungarian Language Exam C2",
        institution: "University of Pécs",
        year: 2015,
        file: "ecl_nora_h.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Flexible weekdays, 10:00 - 15:00",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "ahmed.elsayed@example.com",
    bio: "Native Arabic speaker from Egypt with a focus on Modern Standard Arabic and the Egyptian dialect, the most widely understood in the Arab world. As a small business owner in Milan, I specialize in teaching Arabic for trade and negotiation. I provide my students with the linguistic tools to navigate commercial environments and the cultural insights necessary to build lasting professional relationships in the MENA region.",
    languagesTaught: {
      natives: [{ code: "ar" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 7,
    certifications: [
      {
        name: "Teaching Arabic as a Foreign Language (TAFL)",
        institution: "The American University in Cairo",
        year: 2012,
        file: "tafl_ahmed_e.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Early mornings or late evenings",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "katarzyna.wojcik@example.com",
    bio: "Join me in Florence to discover the logical structure and poetic beauty of the Polish language. As a fashion professional, I offer a curriculum that balances rigorous grammar with creative vocabulary. My lessons are designed for students who appreciate detail and want to achieve a high level of accuracy in their speech and writing, all while exploring the rich cultural links between Poland and Italy.",
    languagesTaught: {
      natives: [{ code: "pl" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "Certificate of Proficiency in Polish",
        institution: "University of Warsaw",
        year: 2017,
        file: "pl_prof_kat.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Saturday mornings and Wednesday nights",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "alejandro.torres@example.com",
    bio: "Native Spanish tutor from Peru offering a journey through the flavors and sounds of Andean culture. I focus on oral fluency and practical Spanish that you can use immediately. My teaching style is patient and encouraging, perfect for beginners or those who have a 'passive' knowledge of the language and want to start speaking with confidence for work or travel.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "en", level: "B2" }, { code: "it", level: "B1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Spanish Language Instruction Diploma",
        institution: "PUCP Peru",
        year: 2016,
        file: "pucp_ale_t.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Daily from 16:00 to 19:00",
    rating: 4.6,
    isVerified: true
  },
  {
    email: "maja.jovanovic@example.com",
    bio: "Deepen your understanding of Slavic culture through the Serbian language. Based in Turin with a background in Italian literature, I offer a sophisticated approach to language learning. We will explore Serbian history, art, and literature together, building your fluency through deep analysis and advanced conversation. My lessons are ideal for university students and culture lovers who want a comprehensive linguistic experience.",
    languagesTaught: {
      natives: [{ code: "sr" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Serbian for Foreigners Teaching Certificate",
        institution: "University of Belgrade",
        year: 2014,
        file: "sr_teach_maja.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Tuesdays and Thursdays, all day",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "liam.oconnor@example.com",
    bio: "Master the global language with an Irish touch! I provide English lessons in Naples that focus on natural phrasing, idioms, and the confidence to speak in any social or professional setting. My methodology is based on 'task-based learning'—we learn by doing. Whether it's preparing for a presentation or navigating a pub conversation, I'll help you sound more like a native and less like a textbook.",
    languagesTaught: {
      natives: [{ code: "en" }],
      others: [{ code: "it", level: "B2" }]
    },
    experience: 5,
    certifications: [
      {
        name: "CELTA Certificate",
        institution: "University of Cambridge",
        year: 2016,
        file: "celta_liam_o.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Monday to Thursday, 17:00 - 21:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "anastasia.georgiou@example.com",
    bio: "Certified Greek instructor based in the historic heart of Venice. With a background in high-end tourism, I offer specialized Greek language courses that focus on conversational fluency and cultural etiquette. My lessons are designed for travelers, history buffs, and professionals who want to master the Greek language through an immersive and engaging methodology that brings the Mediterranean spirit into every session.",
    languagesTaught: {
      natives: [{ code: "el" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Certificate of Attainment in Greek",
        institution: "Aristotle University of Thessaloniki",
        year: 2017,
        file: "greek_cert_anastasia.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Weekdays after 5 PM and Saturday mornings",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "noah.levi@example.com",
    bio: "Unlock the beauty of the Hebrew language with a tech-focused approach. Based in Milan's startup hub, I provide modern Hebrew lessons tailored for business professionals and technology enthusiasts. My teaching style is efficient and results-oriented, focusing on contemporary usage, professional networking vocabulary, and the cultural nuances of the Israeli business ecosystem. Perfect for those looking to build strong professional ties with Israel.",
    languagesTaught: {
      natives: [{ code: "he" }],
      others: [{ code: "en", level: "C1" }]
    },
    experience: 3,
    certifications: [
      {
        name: "Hebrew Teaching Specialization",
        institution: "Hebrew University of Jerusalem",
        year: 2019,
        file: "hebrew_teach_noah.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Remote only, flexible hours",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "beatriz.costa@example.com",
    bio: "Portuguese language specialist with a focus on the luxury and fashion industries. Living in Rome and coming from a background in dance and cultural studies, I offer rhythmic and creative Portuguese lessons. I help students master the melodic Brazilian accent while building a sophisticated vocabulary suitable for the international fashion and arts sectors. My goal is to make your learning journey as elegant and inspiring as the language itself.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 5,
    certifications: [
      {
        name: "CELPE-Bras Proficiency Certificate",
        institution: "Ministry of Education Brazil",
        year: 2016,
        file: "celpe_beatriz.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Tuesdays and Thursdays, all day",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "victor.ionescu@example.com",
    bio: "Experienced Romanian tutor based in Palermo, offering structured and academic-focused language training. With years of experience living in Italy, I specialize in comparative linguistics, helping Italian speakers grasp Romanian grammar through logical parallels. My lessons are ideal for university students, researchers, and professionals seeking a high level of accuracy and professional growth in the Romanian language.",
    languagesTaught: {
      natives: [{ code: "ro" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 7,
    certifications: [
      {
        name: "Romanian Language Educator Diploma",
        institution: "University of Bucharest",
        year: 2014,
        file: "ro_edu_victor.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Mornings from 09:00 - 13:00",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "fatima.benali@example.com",
    bio: "Native Arabic and French speaker providing professional language coaching in Turin. I specialize in Modern Standard Arabic and Maghrebi dialects, with a strong emphasis on business communication and cultural diplomacy. My methodology is designed for professionals working in international trade or social services, focusing on linguistic precision and the cross-cultural skills necessary for successful interactions in the Arab-speaking world.",
    languagesTaught: {
      natives: [{ code: "ar" }],
      others: [{ code: "it", level: "C1" }, { code: "fr", level: "B2" }]
    },
    experience: 6,
    certifications: [
      {
        name: "Arabic for Non-Native Speakers Certification",
        institution: "Qasid Institute",
        year: 2015,
        file: "ar_cert_fatima.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Monday to Wednesday, late afternoons",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "ethan.williams@example.com",
    bio: "Native English instructor from Canada, currently based in Florence. I offer a modern and communicative approach to English learning, specializing in conversational fluency and 'North American' business English. As a remote professional myself, I tailor my lessons to help students gain the confidence needed for international remote work, digital networking, and building authentic connections in an English-speaking global market.",
    languagesTaught: {
      natives: [{ code: "en" }],
      others: [{ code: "it", level: "B2" }, { code: "fr", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "CELTA Certification",
        institution: "University of Cambridge",
        year: 2018,
        file: "celta_ethan.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Daily 14:00 - 18:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "maria.ortega@example.com",
    bio: "Academic Spanish tutor in Milan with a focus on university preparation and advanced linguistics. Having completed my master's degree in Italy, I possess a deep understanding of the academic requirements for international students. I provide rigorous Spanish lessons that cover advanced grammar, essay writing, and public speaking, ensuring you are fully prepared for academic or high-level professional success in Spanish-speaking environments.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "DELE Spanish Diploma Level C2",
        institution: "Instituto Cervantes",
        year: 2020,
        file: "dele_c2_maria.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Monday and Friday, all day",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "dimitris.papadopoulos@example.com",
    bio: "History and philosophy-led Greek language coaching in Rome. As an academic researcher, I offer a deep dive into the Greek language through the study of its historical evolution and philosophical contributions. My lessons are ideal for scholars, researchers, and students who want more than just conversational skills—providing a comprehensive understanding of Greek syntax, etymology, and its profound influence on Western thought.",
    languagesTaught: {
      natives: [{ code: "el" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 8,
    certifications: [
      {
        name: "PhD in Classical Philology",
        institution: "National and Kapodistrian University of Athens",
        year: 2013,
        file: "phd_greek_dimitris.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 35,
    availability: "Evenings and weekend mornings",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "camille.moreau@example.com",
    bio: "Professional French instructor specializing in the fashion and design sectors. Based in Bologna, I collaborate with Italian brands and offer French lessons that bridge the gap between creative design and professional communication. My curriculum focuses on industry-specific terminology, trend analysis discussions, and business etiquette, preparing my students to work seamlessly with the world's most prestigious French fashion houses.",
    languagesTaught: {
      natives: [{ code: "fr" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "DAEFLE - Teaching French as a Foreign Language",
        institution: "Alliance Française",
        year: 2017,
        file: "daefle_camille.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Flexible schedule during weekdays",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "rafael.souza@example.com",
    bio: "Bringing the vibrant energy of Brazil to Verona, I offer Portuguese lessons that focus on rhythmic fluency and conversational confidence. With a background in fitness and music, my methodology is active and engaging, designed to help you master the Brazilian accent while exploring the cultural depth of South America. Whether you are learning for travel or personal growth, I tailor every session to your interests and pace.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "Certificate in Teaching Portuguese as a Foreign Language",
        institution: "Universidade Federal de Minas Gerais",
        year: 2019,
        file: "pt_cert_rafael.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Tuesday and Thursday evenings",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "anja.kovac@example.com",
    bio: "As a native Croatian speaker based in Trieste, I specialize in helping Italian speakers bridge the gap between Romance and Slavic languages. My approach is structured and logical, focusing on grammar fundamentals and practical business communication. I provide my students with the tools to navigate both formal and informal Croatian contexts, enriched with insights into the history and nature of the Adriatic region.",
    languagesTaught: {
      natives: [{ code: "hr" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 5,
    certifications: [
      {
        name: "C2 Croatian Language Proficiency",
        institution: "University of Zagreb",
        year: 2014,
        file: "hr_prof_anja.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Flexible weekdays, 10:00 - 16:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "sebastian.castillo@example.com",
    bio: "Passionate Spanish tutor from Argentina with a focus on 'Rioplatense' dialect and South American football culture. Based in Naples, I offer dynamic lessons that prioritize oral communication and confidence. My goal is to make you sound like a native through the use of authentic materials, from sports news to contemporary music, ensuring you are ready for any social or professional interaction in the Spanish-speaking world.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Spanish Language Pedagogy Diploma",
        institution: "University of Buenos Aires",
        year: 2017,
        file: "es_pedagogy_sebastian.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Mondays and Wednesdays, late afternoons",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "laura.schmidt@example.com",
    bio: "Expert German instructor for business and professional development in Milan. I provide highly structured German lessons that focus on linguistic precision, professional writing, and corporate etiquette. My methodology is designed for high-achieving professionals and students who need to master German for academic or career advancement, delivering measurable results through a disciplined yet supportive approach.",
    languagesTaught: {
      natives: [{ code: "de" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "C1" }]
    },
    experience: 6,
    certifications: [
      {
        name: "Goethe-Zertifikat C2: GDS",
        institution: "Goethe-Institut",
        year: 2015,
        file: "goethe_c2_laura.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 35,
    availability: "Early mornings or lunch breaks",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "nikola.petrovic@example.com",
    bio: "Tech-oriented Serbian language coaching for professionals and enthusiasts. Based in Bologna's innovation hub, I offer a modern approach to the Serbian language, focusing on practical terminology and effective communication. My lessons are ideal for IT professionals collaborating with Balkan teams or anyone looking to discover the logical beauty of the Serbian language through a results-driven methodology.",
    languagesTaught: {
      natives: [{ code: "sr" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "Serbian for Non-Native Speakers Certificate",
        institution: "University of Belgrade",
        year: 2018,
        file: "sr_tech_nikola.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Tuesday and Thursday nights",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "olga.ivanova@example.com",
    bio: "Dive into the depth of Russian literature and theatre while mastering the language. Based in Rome, I offer an academic and cultural approach to Russian, focusing on etymology, advanced syntax, and literary analysis. My lessons are designed for students and researchers who want to achieve a sophisticated level of fluency and a profound understanding of Russia's vast intellectual heritage.",
    languagesTaught: {
      natives: [{ code: "ru" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 7,
    certifications: [
      {
        name: "PhD in Slavic Philology",
        institution: "Moscow State University",
        year: 2016,
        file: "phd_slavic_olga.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Monday to Friday, mornings only",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "miguel.herrera@example.com",
    bio: "Practical and conversational Spanish lessons from a native speaker based in Palermo. Coming from the restaurant industry, I specialize in teaching 'Real-World Spanish'—focusing on the language of hospitality, social interaction, and daily life. My lessons are fun, fast-paced, and designed to get you speaking with confidence from day one, whether for work or travel.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 2,
    certifications: [
      {
        name: "Spanish for Specific Purposes Certificate",
        institution: "Universidad de Salamanca",
        year: 2021,
        file: "es_hospitality_miguel.pdf",
        isVerified: false
      }
    ],
    hourlyRate: 19,
    availability: "Daily after 4 PM",
    rating: 4.6,
    isVerified: false
  },
  {
    email: "zuzana.kovacova@example.com",
    bio: "Discover the beauty of the Slovak language through the lens of tourism and culture. Based in Florence, I provide engaging Slovak lessons that focus on practical conversation and cultural nuances. My teaching style is patient and visual, utilizing photography and travel stories to build your vocabulary and confidence. Ideal for travelers or those looking to connect with the Slovak heritage.",
    languagesTaught: {
      natives: [{ code: "sk" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "State Language Exam in Slovak (C2)",
        institution: "Comenius University in Bratislava",
        year: 2017,
        file: "sk_cert_zuzana.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 24,
    availability: "Weekends and Wednesday evenings",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "pedro.mendes@example.com",
    bio: "As a Portuguese professional based in Milan, I offer a modern and communicative approach to learning European Portuguese. My lessons focus on practical conversation and business etiquette, ideal for those looking to expand their professional network in Portugal. I specialize in helping Italian speakers master the complex phonetics of Portuguese, ensuring you achieve a natural and confident accent for any corporate or social setting.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 5,
    certifications: [
      {
        name: "C2 Proficiency in Portuguese",
        institution: "University of Lisbon",
        year: 2016,
        file: "pt_cert_pedro.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Monday to Thursday after 18:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "leyla.yilmaz@example.com",
    bio: "Discover the richness of the Turkish language and culture through the lens of design. Based in Rome, I provide engaging Turkish lessons that go beyond grammar, incorporating contemporary Turkish art, architecture, and design trends. My methodology is perfect for creative professionals and travelers who want to acquire a sophisticated vocabulary while exploring the historical and modern influences of Turkey.",
    languagesTaught: {
      natives: [{ code: "tr" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Turkish Language Instruction Diploma",
        institution: "Istanbul University",
        year: 2018,
        file: "tr_edu_leyla.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Flexible weekdays and Saturday mornings",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "samuel.okoro@example.com",
    bio: "Native English speaker with an entrepreneurial background, offering results-driven English coaching in Bologna. I specialize in Business English, helping my students master the art of networking, pitching, and professional communication. My lessons are designed to be high-impact, focusing on the specific linguistic tools you need to succeed in the international tech and startup scene.",
    languagesTaught: {
      natives: [{ code: "en" }],
      others: [{ code: "it", level: "B1" }]
    },
    experience: 6,
    certifications: [
      {
        name: "TEFL Certification",
        institution: "International TEFL Academy",
        year: 2015,
        file: "tefl_samuel.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Weekdays 08:00 - 10:00 and late evenings",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "helena.andersson@example.com",
    bio: "Experience the logical and beautiful Swedish language through a holistic approach. Based in Verona, I provide Swedish lessons that combine linguistic training with insights into the 'Lagom' lifestyle and Scandinavian culture. Whether you are learning for relocation, work, or personal interest, my patient and structured teaching style will help you build a solid foundation and achieve conversational fluency in a relaxed environment.",
    languagesTaught: {
      natives: [{ code: "sv" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 3,
    certifications: [
      {
        name: "TISUS - Swedish for University Studies",
        institution: "Stockholm University",
        year: 2017,
        file: "tisus_helena.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Tuesday and Thursday mornings",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "ricardo.morales@example.com",
    bio: "Chilean Spanish specialist based in Milan, focusing on advanced conversation and phonetic refinement. Having worked extensively with Italian clients, I understand the nuances of cross-cultural communication. I help students achieve a 'native-like' fluency in Spanish by focusing on the specific idioms, speed, and pronunciation of Latin American Spanish, preparing you for high-level social and professional interactions.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 7,
    certifications: [
      {
        name: "Spanish for Professional Purposes",
        institution: "Universidad de Chile",
        year: 2014,
        file: "es_biz_ricardo.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 24,
    availability: "Lunch hours and weekends",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "amina.khan@example.com",
    bio: "Learn Urdu with a focus on its poetic heritage and contemporary usage. Based in Florence, I offer specialized Urdu lessons that cater to postgraduate students and cultural enthusiasts. My lessons are designed to build a deep understanding of the script, syntax, and cultural context of the language, providing you with the tools to explore the rich history and literature of Pakistan and South Asia.",
    languagesTaught: {
      natives: [{ code: "ur" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 2,
    certifications: [
      {
        name: "Urdu Literature and Language Certificate",
        institution: "University of the Punjab",
        year: 2020,
        file: "ur_cert_amina.pdf",
        isVerified: false
      }
    ],
    hourlyRate: 20,
    availability: "Wednesday and Friday afternoons",
    rating: 4.6,
    isVerified: false
  },
  {
    email: "tomas.dvorak@example.com",
    bio: "Academic and professional Czech tutor in Turin, offering a disciplined and results-oriented approach to one of Europe's most unique languages. I specialize in helping students navigate the complexities of Czech grammar and cases through a logical methodology developed for adult learners. My lessons are ideal for professionals moving to the Czech Republic or students pursuing Slavic studies.",
    languagesTaught: {
      natives: [{ code: "cs" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "State Exam in Czech as a Foreign Language",
        institution: "Charles University",
        year: 2018,
        file: "cs_exam_tomas.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Mondays and Fridays, 17:00 - 21:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "sofia.petrova@example.com",
    bio: "Dive into the Slavic soul with an artist's perspective on the Bulgarian language. Based in Venice, I offer Bulgarian lessons that focus on the intersection of language, art, and history. My methodology uses visual aids and cultural materials to make learning intuitive and engaging. I help you master the Cyrillic script and conversational Bulgarian, preparing you for artistic workshops, travel, or cultural research.",
    languagesTaught: {
      natives: [{ code: "bg" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 3,
    certifications: [
      {
        name: "Bulgarian Cultural Heritage Certificate",
        institution: "Sofia University",
        year: 2019,
        file: "bg_art_sofia.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Weekends and Tuesday nights",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "lars.jensen@example.com",
    bio: "Danish language coaching for design professionals and innovators in Milan. As a professional in the design industry, I help my students master Danish with a focus on technical vocabulary, business negotiation, and the specific communication style of the Danish workplace. My lessons are efficient, visual, and highly practical, designed to prepare you for career growth in the world-leading Danish design sector.",
    languagesTaught: {
      natives: [{ code: "da" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Prøve i Dansk 3 (Danish Proficiency)",
        institution: "Copenhagen Language Center",
        year: 2015,
        file: "da_prof_lars.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 35,
    availability: "Early mornings 07:30 - 09:00",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "giulia.esposito@example.com",
    bio: "Certified Italian language specialist based in Turin. My teaching approach focuses on practical communication and cultural integration. I specialize in helping international students and professionals master the nuances of the Italian language, blending grammar essentials with real-world conversational practice to ensure my students feel confident and fluent in any social or academic setting.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [{ code: "en", level: "C1" }, { code: "de", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "DITALS I - Teaching Italian to Foreigners",
        institution: "Università per Stranieri di Siena",
        year: 2021,
        file: "cert_ditals_giulia_e.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Weekdays after 5 PM",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "nina.kumar@example.com",
    bio: "Experienced Hindi and English instructor with a passion for cross-cultural communication. Based in Rome, I offer structured lessons designed for professionals and students alike. I focus on building a strong grammatical foundation while encouraging immediate speaking practice. My sessions integrate cultural insights and practical vocabulary, helping you navigate both social and professional environments with ease.",
    languagesTaught: {
      natives: [{ code: "hi" }],
      others: [{ code: "en", level: "C1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "TEFL Certification",
        institution: "International TEFL Academy",
        year: 2018,
        file: "tefl_nina_kumar.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Flexible mornings and lunch breaks",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "oscar.lopez@example.com",
    bio: "Native Spanish tutor from Spain living in Venice. I provide dynamic and interactive Spanish lessons that prioritize oral fluency. Having learned Italian myself, I understand the challenges of mastering a new language and tailor my methodology to the specific needs of each student. Whether you are learning for travel, work, or personal enrichment, I will help you sound natural and confident.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "en", level: "B2" }, { code: "it", level: "B1" }]
    },
    experience: 3,
    certifications: [
      {
        name: "ELE - Teaching Spanish as a Foreign Language",
        institution: "Instituto Cervantes",
        year: 2019,
        file: "cert_ele_oscar.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Monday to Thursday, 17:00 - 20:00",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "chiwoo.park@example.com",
    bio: "Academic Korean instructor specializing in high-level linguistic training. Based in Florence and with a background in Art History, I offer a unique curriculum that blends language acquisition with cultural depth. My lessons are ideal for university students and researchers who require precision in grammar and formal speech, as well as for K-culture enthusiasts looking for a structured learning path.",
    languagesTaught: {
      natives: [{ code: "ko" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Korean Language Teacher's License",
        institution: "Ministry of Education, South Korea",
        year: 2016,
        file: "kr_license_chiwoo.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Remote only, flexible hours",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "martina.ricci@example.com",
    bio: "Passionate Italian tutor in Bologna with extensive experience in international student exchange. I help foreign speakers achieve fluency through an immersive and communicative method. My lessons focus on everyday Italian, academic preparation, and professional communication. I take pride in creating a supportive and engaging environment that makes language learning an enjoyable cultural journey.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [{ code: "en", level: "C1" }, { code: "pt", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "CEDILS - Certification in Teaching Italian",
        institution: "Università Ca' Foscari Venezia",
        year: 2022,
        file: "cedils_martina_ricci.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 18,
    availability: "Evenings and weekends",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "elisa.ferrari@example.com",
    bio: "Native Italian language coach based in Venice, specializing in Italian for the arts and cultural tourism. My methodology is highly visual and interactive, perfect for students who want to learn the language while discovering the rich artistic heritage of Italy. I provide customized lessons that range from basic grammar to advanced discussion on history and culture, ensuring a comprehensive learning experience.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [{ code: "en", level: "C1" }, { code: "de", level: "B2" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Master in Promotion of Italian Language and Culture",
        institution: "Università Ca' Foscari Venezia",
        year: 2017,
        file: "master_elisa_ferrari.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Mornings, 09:00 - 13:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "nikolai.ivanov@example.com",
    bio: "Dedicated Russian instructor with an academic focus on history and linguistics. Currently based in Florence, I offer structured Russian lessons for all levels. My approach emphasizes grammatical accuracy and the development of strong reading and writing skills, particularly for students interested in Slavic literature or academic research. I provide all necessary materials to help you achieve your linguistic goals.",
    languagesTaught: {
      natives: [{ code: "ru" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 6,
    certifications: [
      {
        name: "TRKI - Test of Russian as a Foreign Language (Level C2)",
        institution: "Saint Petersburg State University",
        year: 2014,
        file: "trki_c2_nikolai.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Tuesday and Thursday evenings",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "sofia.carvalho@example.com",
    bio: "Native Portuguese tutor in Rome with specialized experience in the tourism sector. I help students master the Portuguese language through a practical and situational approach. My lessons are ideal for travelers and professionals who wish to communicate effectively and naturally. I focus on pronunciation, essential vocabulary, and cultural etiquette to ensure you feel at home in any Portuguese-speaking country.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Teaching Portuguese as a Foreign Language",
        institution: "University of Lisbon",
        year: 2018,
        file: "pt_cert_sofia_c.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 24,
    availability: "Daily, 14:00 - 18:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "beatriz.mendez@example.com",
    bio: "Spanish language instructor from Mexico living in Bologna. I provide immersive Spanish lessons that celebrate the diversity of the Hispanic world. My method combines traditional grammar study with creative activities like photography and history-based discussions. I specialize in conversational Spanish, helping my students build the confidence to speak fluently and understand various dialects and cultural contexts.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "ELE Certification",
        institution: "UNAM - Universidad Nacional Autónoma de México",
        year: 2019,
        file: "cert_ele_beatriz_m.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Wednesday and Friday afternoons",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "timo.schneider@example.com",
    bio: "Native German professional based in Rome, offering structured and result-oriented language coaching. I specialize in Business German and technical communication, helping students and professionals navigate the German-speaking corporate world. My methodology combines rigorous grammar training with practical conversation, ensuring you achieve the precision and confidence needed for your career or exchange programs.",
    languagesTaught: {
      natives: [{ code: "de" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Goethe-Zertifikat C2: GDS",
        institution: "Goethe-Institut",
        year: 2018,
        file: "goethe_c2_timo.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Mondays and Wednesdays after 6 PM",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "gabriela.rodrigues@example.com",
    bio: "Passionate Portuguese instructor from Brazil living in Milan. I provide dynamic and immersive language lessons that celebrate the energy and culture of Brazil. Whether you are preparing for a move, studies abroad, or simply want to master the melodic sounds of Portuguese, my lessons are tailored to your pace. I focus on oral fluency, contemporary vocabulary, and the cultural nuances of the Lusophone world.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 3,
    certifications: [
      {
        name: "CELPE-Bras Proficiency Certificate",
        institution: "Ministry of Education (Brazil)",
        year: 2020,
        file: "celpe_bras_gabriela.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Flexible weekdays and Saturday mornings",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "lucia.martinez@example.com",
    bio: "Native Spanish tutor based in Naples with a background in Art History. I offer a unique learning experience that blends Spanish language acquisition with an exploration of Mediterranean history and art. My lessons are ideal for travelers and culture enthusiasts who want to develop natural conversational skills while deepening their understanding of the historical links between Spain and Italy.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "ELE - Teaching Spanish as a Foreign Language",
        institution: "Instituto Cervantes",
        year: 2017,
        file: "cert_ele_lucia.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Tuesdays and Thursdays, 17:00 - 20:00",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "arianna.zhang@example.com",
    bio: "Mandarin Chinese instructor in Florence specializing in communicative and cultural-based learning. I help my students master the tones and characters of Mandarin through a logical and engaging methodology. My lessons cover everything from essential travel phrases to professional business etiquette, providing you with a comprehensive understanding of both the language and the modern Chinese cultural landscape.",
    languagesTaught: {
      natives: [{ code: "zh" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 2,
    certifications: [
      {
        name: "CTCSOL - Certificate for Teachers of Chinese to Speakers of Other Languages",
        institution: "Confucius Institute Headquarters",
        year: 2021,
        file: "ctcsol_arianna.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Remote only, flexible evening hours",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "thomas.dupont@example.com",
    bio: "French native and musician offering specialized language coaching for the arts and culture sector in Milan. I provide French lessons that focus on the elegance of the language, utilizing literature, opera, and contemporary music as learning tools. My approach is perfect for artists, students, and culture lovers who wish to achieve a high level of expressive fluency and cultural sophistication.",
    languagesTaught: {
      natives: [{ code: "fr" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "DAEFLE - Teaching French as a Foreign Language",
        institution: "Alliance Française",
        year: 2016,
        file: "daefle_thomas_d.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Mornings 10:00 - 14:00",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "sofia.giordano@example.com",
    bio: "Certified Italian tutor in Florence with extensive experience in the tourism and cultural sector. I help international visitors and students master the Italian language through a practical and immersive method. My lessons focus on everyday conversation, travel essentials, and cultural etiquette, ensuring you can connect with locals and enjoy the authentic Italian lifestyle with confidence.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [{ code: "en", level: "C1" }, { code: "de", level: "B1" }]
    },
    experience: 3,
    certifications: [
      {
        name: "CEDILS - Certification in Teaching Italian",
        institution: "Università Ca' Foscari Venezia",
        year: 2022,
        file: "cedils_sofia_g.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 18,
    availability: "Weekends and Wednesday evenings",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "yuki.tanaka@example.com",
    bio: "Japanese language and culture specialist based in Venice. I offer a structured approach to learning Japanese, focusing on the three writing systems, polite speech (Keigo), and the cultural mindset of Japan. Whether you are interested in Anime, traditional arts, or academic research, my lessons provide the linguistic foundation and cultural depth needed for a meaningful connection with Japan.",
    languagesTaught: {
      natives: [{ code: "ja" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Japanese Language Teaching Competency Test",
        institution: "JEES Japan",
        year: 2019,
        file: "japanese_teach_yuki.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Daily from 15:00 - 19:00",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "jorge.perez@example.com",
    bio: "Native Spanish instructor living in Rome with a passion for photography and literature. I offer dynamic Spanish lessons that go beyond the textbook, using authentic visual and literary materials to build your fluency. My methodology focuses on situational conversation and natural pronunciation, helping you communicate effectively in social, cultural, and professional contexts throughout the Spanish-speaking world.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 6,
    certifications: [
      {
        name: "DELE Spanish Diploma Level C2",
        institution: "Instituto Cervantes",
        year: 2015,
        file: "dele_c2_jorge.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 24,
    availability: "Lunch sessions and late nights",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "luca.ferrer@example.com",
    bio: "As a native Spanish instructor based in Turin, I offer a communicative and engaging approach to language learning. My lessons are designed for students who want to achieve natural fluency while exploring the historical and cultural links between Spain and Italy. I specialize in conversational Spanish, helping you build the confidence to interact with native speakers in both social and professional contexts.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 3,
    certifications: [
      {
        name: "ELE - Spanish as a Foreign Language Certification",
        institution: "Universidad de Salamanca",
        year: 2020,
        file: "cert_ele_luca.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Weekdays after 6 PM",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "nina.jansen@example.com",
    bio: "Native Dutch professional working in the Milanese fashion industry. I provide specialized Dutch language coaching for professionals and students, focusing on business communication and industry-specific terminology. My methodology is practical and efficient, designed to help you navigate the Dutch corporate world with the same precision and style found in the world of fashion.",
    languagesTaught: {
      natives: [{ code: "nl" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "CNaVT - Certificate in Dutch for Business",
        institution: "University of Amsterdam",
        year: 2018,
        file: "cnavt_nina_j.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Flexible mornings and lunch breaks",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "katrina.popova@example.com",
    bio: "Russian language specialist with an academic background in history and the arts. Based in Florence, I offer structured Russian lessons that delve deep into the linguistic and cultural heart of Russia. Whether you are interested in academic research, classical literature, or professional growth, I provide a comprehensive and disciplined approach to mastering Russian syntax and conversation.",
    languagesTaught: {
      natives: [{ code: "ru" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "TRKI - Russian as a Foreign Language (Level C2)",
        institution: "Saint Petersburg State University",
        year: 2015,
        file: "trki_c2_katrina.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Monday to Thursday, 17:00 - 20:00",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "mateo.gonzalez@example.com",
    bio: "Dynamic Spanish tutor from Argentina, specializing in business communication and professional integration. Living in Rome, I help my students bridge the gap between academic learning and real-world application. My lessons focus on the Rioplatense dialect and general Latin American Spanish, preparing you for successful social and professional interactions across the globe.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Spanish for Professional Purposes",
        institution: "Universidad de Buenos Aires",
        year: 2019,
        file: "es_biz_mateo.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Tuesdays and Thursdays, all day",
    rating: 4.7,
    isVerified: true
  },
  {
    email: "emily.johnson@example.com",
    bio: "Native English instructor from the USA, currently exploring the culinary heart of Bologna. I offer English coaching with a focus on the food and hospitality industries. My lessons are highly conversational and practical, designed to help professionals and foodies alike communicate with confidence in international environments. Let's work on your fluency while sharing a passion for global culture and cuisine.",
    languagesTaught: {
      natives: [{ code: "en" }],
      others: [{ code: "it", level: "B1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "TEFL Certification",
        institution: "International TEFL Academy",
        year: 2017,
        file: "tefl_emily_j.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Daily, 14:00 - 18:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "leandro.costa@example.com",
    bio: "Experience the rhythm and energy of Brazilian Portuguese with a native instructor in Florence. I provide communicative lessons that focus on everyday life, travel, and cultural integration. My methodology prioritizes oral confidence and contemporary vocabulary, ensuring you are ready to connect with the vibrant Lusophone community whether for personal growth or future travels.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B2" }]
    },
    experience: 3,
    certifications: [
      {
        name: "Portuguese Language Proficiency Certificate",
        institution: "Universidade de São Paulo",
        year: 2021,
        file: "pt_prof_leandro.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 18,
    availability: "Weekends and Wednesday nights",
    rating: 4.6,
    isVerified: true
  },
  {
    email: "giulia.bianchi.97@example.com",
    bio: "Certified Italian tutor based in Milan, specializing in language coaching for the fashion and design sectors. I help international students and professionals master Italian grammar and situational conversation within creative environments. My approach is structured yet flexible, designed to provide the linguistic tools necessary for successful collaborations in the global fashion hub.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [{ code: "en", level: "C1" }, { code: "fr", level: "B1" }]
    },
    experience: 2,
    certifications: [
      {
        name: "DITALS I - Certification in Teaching Italian",
        institution: "Università per Stranieri di Siena",
        year: 2022,
        file: "ditals_giulia_b.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Monday, Wednesday, Friday afternoons",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "luca.ricci.98@example.com",
    bio: "As a native Italian speaker born and raised in the vibrant city of Naples, I offer a unique perspective on the Italian language and local culture. My teaching methodology focuses on practical communication for the tourism and hospitality sectors. I help students master natural conversation, idiomatic expressions, and the specific vocabulary needed to interact with the millions of visitors who flock to Southern Italy every year. Whether you're a professional in the travel industry or a curious enthusiast, I provide the tools to speak Italian with confidence and Neapolitan flair.",
    languagesTaught: {
      natives: [{ code: "it" }],
      others: [{ code: "en", level: "C1" }]
    },
    experience: 3,
    certifications: [
      {
        name: "Italian for Tourism Communication",
        institution: "Università degli Studi di Napoli Federico II",
        year: 2021,
        file: "tourism_it_luca.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Flexible weekdays, available for late night sessions",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "ana.mendoza@example.com",
    bio: "Native Spanish tutor from Mexico, currently based in the artistic heart of Florence. I specialize in teaching Spanish through the lens of art and photography, providing an immersive experience that goes beyond traditional grammar books. Having integrated into the Italian academic scene, I am particularly skilled at helping Italian and English speakers navigate the complexities of Spanish syntax while exploring shared cultural heritages. My goal is to help you achieve a high level of fluency while discovering the richness of the Hispanic art world.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "DELE Spanish C1 Certification",
        institution: "Instituto Cervantes",
        year: 2019,
        file: "dele_c1_ana_m.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Mondays, Wednesdays, and Fridays, 10:00 - 16:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "olga.kovalenko@example.com",
    bio: "Passionate Ukrainian language specialist living in Venice. My teaching approach is deeply rooted in my background in Art History, blending linguistic precision with cultural storytelling. I offer tailored Ukrainian and Russian lessons that focus on literary analysis and conversational fluency. Whether you are interested in exploring Slavic literature or need to communicate effectively in a professional or academic environment, I provide structured lessons that ensure measurable progress and cultural depth.",
    languagesTaught: {
      natives: [{ code: "uk" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Ukrainian Philology and Teaching Degree",
        institution: "Taras Shevchenko National University of Kyiv",
        year: 2014,
        file: "ukr_degree_olga.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 24,
    availability: "Tuesdays and Thursdays, all day",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "klaus.hof@example.com",
    bio: "Retired German educator with over 30 years of teaching experience, now residing in Merano. I specialize in Academic German, philosophy, and classical literature. My lessons are ideal for university students, researchers, or advanced learners who wish to master the nuances of the German language at a professional or literary level. I offer a highly disciplined yet supportive environment, focusing on complex syntax, formal writing, and the deep etymological roots of the German language.",
    languagesTaught: {
      natives: [{ code: "de" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "C1" }]
    },
    experience: 30,
    certifications: [
      {
        name: "State Certification for Advanced German Instruction",
        institution: "Bavarian Ministry of Education",
        year: 1985,
        file: "state_cert_klaus.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 40,
    availability: "Mornings only, Monday to Friday",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "arjun.m@example.com",
    bio: "Native Hindi speaker and Robotics researcher based in Pisa. I provide a unique, logic-based approach to learning Hindi, designed for students, academics, and tech professionals. Having navigated the challenges of living and working abroad, I specialize in practical communication and cultural integration strategies. My lessons bridge the gap between traditional grammar and contemporary usage, ensuring that you can connect with the Hindi-speaking world in both everyday and professional contexts.",
    languagesTaught: {
      natives: [{ code: "hi" }],
      others: [{ code: "en", level: "C2" }]
    },
    experience: 2,
    certifications: [
      {
        name: "Proficiency in Hindi Literature",
        institution: "University of Mumbai",
        year: 2013,
        file: "hindi_prof_arjun.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Weekends and late nights",
    rating: 4.7,
    isVerified: false
  },
  {
    email: "saskia.dj@example.com",
    bio: "Dutch Restoration specialist based in the historic city of Urbino. I offer Dutch language courses with a particular focus on technical vocabulary for the arts, history, and restoration sectors. My lessons are designed for professionals and students who wish to achieve a high level of precision in their speech and writing. I utilize my professional background to provide real-world scenarios, helping you master Dutch for specific purposes while appreciating the cultural ties between the Netherlands and Italy.",
    languagesTaught: {
      natives: [{ code: "nl" }],
      others: [{ code: "en", level: "C1" }, { code: "it", level: "B1" }]
    },
    experience: 4,
    certifications: [
      {
        name: "CNaVT - Certificate in Dutch as a Foreign Language",
        institution: "University of Leuven",
        year: 2018,
        file: "cnavt_saskia.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Tuesdays and Fridays, after 17:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "youssef.m@example.com",
    bio: "Experienced Arabic tutor from Egypt, currently based in Catania and specializing in Business Arabic and Import-Export terminology. I help professionals and entrepreneurs master the Arabic language for trade, negotiation, and international networking. My lessons focus on both Modern Standard Arabic for formal documentation and the Egyptian dialect for everyday business communication. I provide the cultural insights and linguistic tools necessary to build successful partnerships in the MENA region.",
    languagesTaught: {
      natives: [{ code: "ar" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "B2" }]
    },
    experience: 7,
    certifications: [
      {
        name: "Teaching Arabic as a Foreign Language (TAFL)",
        institution: "American University in Cairo",
        year: 2016,
        file: "tafl_youssef.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Weekdays, flexible schedule",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "marta.poland@example.com",
    bio: "Certified Polish language instructor and professional tour guide based in Ravenna. I offer a unique approach to learning Polish, integrating history, art, and cultural insights into every lesson. Whether you are interested in Slavic heritage or need to master Polish for professional reasons, I provide structured yet engaging sessions that focus on natural fluency and grammatical accuracy. My background in tourism allows me to offer practical conversational practice tailored to real-world scenarios.",
    languagesTaught: {
      natives: [{ code: "pl" }],
      others: [{ code: "it", level: "C1" }, { code: "en", level: "B2" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Polish Language and Culture Teaching Certificate",
        institution: "Jagiellonian University",
        year: 2017,
        file: "pl_cert_marta.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Mondays, Wednesdays and Fridays after 17:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "ingrid.nor@example.com",
    bio: "Native Norwegian instructor and professional ski coach living in the Aosta Valley. I specialize in teaching Norwegian for beginners and intermediate learners, with a focus on practical vocabulary for nature enthusiasts and outdoor professionals. My methodology is dynamic and communicative, designed to build your confidence in speaking and listening through active participation. I help my students master the nuances of Norwegian pronunciation while sharing the cultural values of the Nordic lifestyle.",
    languagesTaught: {
      natives: [{ code: "no" }],
      others: [{ code: "en", level: "C2" }]
    },
    experience: 4,
    certifications: [
      {
        name: "Norwegian Language Proficiency Certificate (C2)",
        institution: "University of Oslo",
        year: 2016,
        file: "no_prof_ingrid.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Flexible schedule, morning sessions available",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "santi.mex@example.com",
    bio: "Experienced Spanish educator from Mexico, now sharing my native tongue in Southern Italy. I offer high-energy Spanish lessons that focus on Latin American dialects, contemporary vocabulary, and practical conversation. My teaching style is immersive and tailored to each student's goals, whether you are preparing for a trip, work, or academic exams. I specialize in helping Italian speakers overcome common phonetic hurdles to achieve a truly authentic and natural Spanish accent.",
    languagesTaught: {
      natives: [{ code: "es" }],
      others: [{ code: "it", level: "B2" }, { code: "en", level: "B2" }]
    },
    experience: 8,
    certifications: [
      {
        name: "Spanish as a Foreign Language Instruction Diploma",
        institution: "UNAM Mexico",
        year: 2013,
        file: "es_edu_santiago.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 20,
    availability: "Daily from 16:00 to 20:00",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "finn.oslo@example.com",
    bio: "Native Norwegian mountaineering instructor offering specialized language coaching for outdoor professionals and alpine enthusiasts in Courmayeur. I provide Norwegian lessons that focus on technical terminology for mountain sports, safety protocols, and professional guiding. My sessions are designed to give you the linguistic tools needed to lead groups or work in Nordic environments, combining rigorous grammar with real-world situational practice in a supportive atmosphere.",
    languagesTaught: {
      natives: [{ code: "no" }],
      others: [{ code: "en", level: "C2" }]
    },
    experience: 6,
    certifications: [
      {
        name: "Advanced Norwegian Pedagogy Certificate",
        institution: "Bergen University",
        year: 2015,
        file: "no_mount_finn.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 35,
    availability: "Weekends and Tuesday evenings",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "amira.cairo@example.com",
    bio: "Egyptian archaeologist and Arabic language tutor based in Syracuse. I offer a sophisticated approach to Modern Standard Arabic and the Egyptian dialect, utilizing historical texts and cultural heritage as primary learning materials. My lessons are ideal for students, researchers, and history lovers who want more than just conversational skills. I provide a deep dive into Arabic syntax, etymology, and its profound historical influence on the Mediterranean world.",
    languagesTaught: {
      natives: [{ code: "ar" }],
      others: [{ code: "en", level: "B2" }, { code: "it", level: "B1" }]
    },
    experience: 5,
    certifications: [
      {
        name: "Teaching Arabic as a Foreign Language (TAFL) Diploma",
        institution: "The American University in Cairo",
        year: 2018,
        file: "tafl_cert_amira.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Flexible schedule during weekdays",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "gabi.lisboa@example.com",
    bio: "As a professional graphic designer based in Mantova, I offer a unique approach to learning Portuguese that bridges the gap between creativity and communication. My lessons are designed for students who want to master European Portuguese through the lens of art and design. I focus on practical conversation and professional vocabulary, helping you achieve the confidence to work in creative environments or travel through the historic streets of Lisbon and Porto.",
    languagesTaught: {
      natives: [{ code: "pt" }],
      others: [
        { code: "en", level: "C1" },
        { code: "es", level: "B2" }
      ]
    },
    experience: 4,
    certifications: [
      {
        name: "Certificate of Proficiency in Portuguese (CAPLE)",
        institution: "University of Lisbon",
        year: 2018,
        file: "caple_pt_gabi.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 25,
    availability: "Tuesdays and Thursdays, 18:00 - 20:00",
    rating: 4.8,
    isVerified: true
  },
  {
    email: "oliver.london@example.com",
    bio: "Combine your love for language with the art of wine. Based in Orvieto, I provide English coaching specifically tailored for the hospitality and oenology sectors. As a professional sommelier, I help my students master business English, focusing on technical terminology used in wine tasting, international trade, and luxury tourism. My methodology is immersive and conversational, perfect for professionals looking to expand their global reach.",
    languagesTaught: {
      natives: [{ code: "en" }],
      others: [{ code: "fr", level: "B2" }]
    },
    experience: 6,
    certifications: [
      {
        name: "CELTA - Teaching English to Adults",
        institution: "Cambridge Assessment English",
        year: 2015,
        file: "celta_oliver_smith.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 30,
    availability: "Flexible mornings and Saturday afternoons",
    rating: 5.0,
    isVerified: true
  },
  {
    email: "kenji.kyoto@example.com",
    bio: "Discover the meditative art of Japanese language and crafts. Based in Ascoli Piceno, I offer a holistic approach to learning Japanese, integrating the ancient art of Origami and traditional paper-making into our sessions. My lessons focus on the logical structure of the language, polite speech (Keigo), and the cultural philosophy of Japan. Ideal for students who want a deep, manual, and intellectual connection with Japanese heritage.",
    languagesTaught: {
      natives: [{ code: "ja" }],
      others: [{ code: "en", level: "B1" }]
    },
    experience: 7,
    certifications: [
      {
        name: "Japanese Language Teaching Competency Test",
        institution: "Japan Educational Exchanges and Services",
        year: 2012,
        file: "ja_teach_kenji.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 28,
    availability: "Monday to Wednesday, 16:00 - 19:00",
    rating: 4.9,
    isVerified: true
  },
  {
    email: "bahiya.rabat@example.com",
    bio: "Master the Arabic language through the study of Mediterranean heritage. Based in Agrigento and specializing in cultural conservation, I provide Arabic and French lessons that focus on historical context and contemporary usage. I specialize in Modern Standard Arabic and the Maghrebi dialect, offering a structured curriculum for researchers, students, and culture enthusiasts who wish to explore the profound links between North Africa and Italy.",
    languagesTaught: {
      natives: [{ code: "ar" }],
      others: [
        { code: "fr", level: "C1" },
        { code: "it", level: "B1" }
      ]
    },
    experience: 3,
    certifications: [
      {
        name: "C2 French Language Diploma (DALF)",
        institution: "Alliance Française",
        year: 2017,
        file: "dalf_c2_bahiya.pdf",
        isVerified: true
      }
    ],
    hourlyRate: 22,
    availability: "Weekends and Friday afternoons",
    rating: 4.7,
    isVerified: true
  }
]

module.exports = tutorData