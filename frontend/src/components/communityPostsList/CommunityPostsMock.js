export const communityPostsMock = [
  {
    _id: "65cb8f12a3b4c5d6e7f89012",
    category: "Methodology",
    title: "The Shadowing Technique: Speak Like a Native",
    cover: "https://picsum.photos/200",
    readTime: { value: 18, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f80",
      name: "Mario",
      surname: "Rossi",
      avatar: "https://picsum.photos/200",
      nationality: { code: "it" },
      isTutor: true
    },
    comments: [
      {
        user: { name: "Giulia", surname: "Bianchi", avatar: "https://picsum.photos/200", nationality: { code: "it" }, isTutor: true },
        content: "Shadowing completely revolutionized my English pronunciation. It's tough at first, but the results are incredible!",
        rating: 5
      },
      {
        user: { name: "John", surname: "Doe", avatar: "https://picsum.photos/200", nationality: { code: "us" }, isTutor: true },
        content: "Very accurate! As a native speaker, I can definitely hear the difference when students use this method.",
        rating: 5
      }
    ],
    content: `Shadowing is an advanced language learning technique that involves repeating audio immediately after hearing it, almost like a shadow.

### Why does it work?
Unlike simple repetition, shadowing forces you to connect your hearing directly with your speech organs without mental translation. This trains your mouth muscles to produce sounds that don't exist in your native language.

### How to get started
1. Pick a 1-2 minute audio clip with a transcript.
2. Listen once to understand the context.
3. Play and repeat with a delay of just half a second.
4. Record yourself and compare your voice to the original.

Practicing this for 15 minutes a day can drastically improve your intonation and rhythm (prosody) in less than a month.`,
    createdAt: "2026-02-15T22:45:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89015",
    category: "Japanese",
    title: "Mnemonics and Kanji: How to Never Forget Characters",
    cover: "https://picsum.photos/200",
    readTime: { value: 22, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f85",
      name: "Kenji",
      surname: "Sato",
      avatar: "https://picsum.photos/200",
      nationality: { code: "jp" },
      isTutor: false
    },
    comments: [
      {
        user: { name: "Alice", surname: "Wonder", avatar: "https://picsum.photos/200", nationality: { code: "gb" }, isTutor: true },
        content: "Radicals were my lifesaver. Before this, I only saw random strokes everywhere!",
        rating: 5
      },
      {
        user: { name: "Paolo", surname: "Neri", avatar: "https://picsum.photos/200", nationality: { code: "it" }, isTutor: true },
        content: "Do you recommend the Heisig method or a more vocabulary-based approach?",
        rating: 4
      }
    ],
    content: `Learning Kanji is often seen as the final boss for Japanese learners. However, the secret isn't endless repetition—it's storytelling.

### The Power of Radicals
Every complex Kanji is made of smaller pieces called radicals. For example, the character for 'Rest' (休) consists of the 'Person' radical (人) next to 'Tree' (木). Imagining a person resting under a tree makes the memory stick forever.

### Spaced Repetition Systems (SRS)
Tools like Anki or Wanikani use algorithms to show you a character exactly when your brain is about to forget it. This maximizes study efficiency, allowing you to learn up to 2000 Kanji in a single year if you stay consistent.`,
    createdAt: "2026-02-14T15:20:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89016",
    category: "Curiosities",
    title: "Untranslatable: Words That Only Exist in One Language",
    cover: "https://picsum.photos/200",
    readTime: { value: 12, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f86",
      name: "Clara",
      surname: "Mende",
      avatar: "https://picsum.photos/200",
      nationality: { code: "de" },
      isTutor: true
    },
    comments: [
      {
        user: { name: "Sven", surname: "Larsson", avatar: "https://picsum.photos/200", nationality: { code: "se" }, isTutor: true },
        content: "You should have added 'Lagom'! It's the absolute essence of our Swedish culture.",
        rating: 4
      },
      {
        user: { name: "Sofia", surname: "Rossi", avatar: "https://picsum.photos/200", nationality: { code: "it" }, isTutor: true },
        content: "Beautiful article, it really shows how language shapes our way of thinking.",
        rating: 5
      }
    ],
    content: `Languages are not just sets of words; they are worldviews. There are concepts so specific that one culture felt the need to give them a name, while others did not.

### Fascinating Examples:
- **Waldeinsamkeit (German):** The feeling of being alone in the woods and feeling connected to nature.
- **Komorebi (Japanese):** Sunlight filtering through the leaves of trees.
- **Sobremesa (Spanish):** The time spent chatting at the table after finishing a meal.
- **Hyggelig (Danish):** Something cozy, intimate, and pleasant.

Studying these words allows us to experience emotions we didn't even know we had before.`,
    createdAt: "2026-02-13T09:00:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89017",
    category: "Polyglots",
    title: "How to Manage Studying Two Languages Simultaneously",
    cover: "https://picsum.photos/200",
    readTime: { value: 30, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f87",
      name: "Luca",
      surname: "Bernardi",
      avatar: "https://picsum.photos/200",
      nationality: { code: "it" },
      isTutor: true
    },
    comments: [
      {
        user: { name: "Amélie", surname: "Dubois", avatar: "https://picsum.photos/200", nationality: { code: "fr" }, isTutor: true },
        content: "I'm studying Spanish and Portuguese together... the confusion is real! I'll definitely follow your tips.",
        rating: 3
      }
    ],
    content: `Many enthusiasts dream of speaking 5 or 6 languages, but the most common trap is starting to study two similar ones at the same time. Here is how to avoid 'brain fog'.

### The Rule of Diversity
If you want to study two languages, choose them from different language families. Studying French and Spanish together will inevitably lead to mixing up vocabulary. Instead, studying German and Chinese stimulates different areas of the brain, making the distinction much clearer.

### Priorities and Levels
Never start two languages from scratch on the same day. Ideally, you should have an "anchor" language (level B2 or higher) and a "challenge" language (beginner level). This way, the stronger language acts as a solid foundation.

### The Context Switching Trick
Use different materials for different languages. Read physical books for Russian and use apps for Swedish. This helps the brain create 'watertight compartments' for each idiom.`,
    createdAt: "2026-02-12T18:00:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89018",
    category: "Russian",
    title: "The Cyrillic Alphabet and Phonetics: Beyond False Friends",
    cover: "https://picsum.photos/200",
    readTime: { value: 20, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f88",
      name: "Svetlana",
      surname: "Kuznetsova",
      avatar: "https://picsum.photos/200",
      nationality: { code: "ru" },
      isTutor: true
    },
    comments: [
      {
        user: { name: "Marco", surname: "Rossi", avatar: "https://picsum.photos/200", nationality: { code: "it" }, isTutor: true },
        content: "The 'ы' sound has been my nightmare for months. Thanks for the pencil-between-the-teeth trick!",
        rating: 5
      }
    ],
    content: `Many students hesitate when faced with Cyrillic, thinking it's an insurmountable obstacle. In reality, the alphabet can be learned in an afternoon; the real challenge is Russian phonetics.

### The Vowel Reduction Phenomenon
In Russian, the letter 'O' is pronounced like an 'A' if it is unstressed. This transforms words like 'Moloko' (milk) into something that sounds more like 'Malakò'. Ignoring this aspect will make you sound like a robot.

### Hard and Soft Consonants
The 'soft sign' (ь) is fundamental. It has no sound of its own but changes the nature of the preceding consonant. It’s the difference between saying 'to be' and 'to eat'. Mastering it requires active listening and plenty of mirroring practice with a native tutor.`,
    createdAt: "2026-02-11T14:30:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89019",
    category: "Entertainment",
    title: "Smart Binge-Watching: Learning Languages with Netflix",
    cover: "https://picsum.photos/200",
    readTime: { value: 15, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f89",
      name: "James",
      surname: "Wilson",
      avatar: "https://picsum.photos/200",
      nationality: { code: "gb" },
      isTutor: false
    },
    comments: [
      {
        user: { name: "Chloe", surname: "Martin", avatar: "https://picsum.photos/200", nationality: { code: "fr" }, isTutor: true },
        content: "The Language Reactor extension saved my life. Seeing dual subtitles is crucial.",
        rating: 5
      },
      {
        user: { name: "Luca", surname: "Esposito", avatar: "https://picsum.photos/200", nationality: { code: "it" }, isTutor: true},
        content: "I watch 'Money Heist' to improve my Spanish, but they talk so fast!",
        rating: 3
      }
    ],
    content: `Watching TV series in their original language is the most fun way to absorb slang and idiomatic expressions, but there is a right and a wrong way to do it.

### Subtitles: Yes or No?
- **A1-A2 Level:** Original audio + Subtitles in your native language. The goal is to get used to the sounds.
- **B1-B2 Level:** Original audio + Subtitles in the original language. This is where you start linking graphemes and phonemes.
- **C1+ Level:** No subtitles. It's time to swim without a life jacket.

### The Replay Technique
When you hear an expression you don't know but that sounds common, stop. Go back 10 seconds. Repeat it out loud, mimicking the actor's emphasis. If you don't write it down, you'll forget it in 5 minutes. Use a dedicated notebook or a flashcard app to jot down these gems of colloquial language.`,
    createdAt: "2026-02-10T20:15:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89020",
    category: "History",
    title: "Latin and Romance Languages: A Journey into Etymology",
    cover: "https://picsum.photos/200",
    readTime: { value: 25, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f90",
      name: "Alessandra",
      surname: "Vieri",
      avatar: "https://picsum.photos/200",
      nationality: { code: "it" },
      isTutor: true
    },
    comments: [
      {
        user: { name: "Carmen", surname: "Ortiz", avatar: "https://picsum.photos/200", nationality: { code: "es" }, isTutor: true },
        content: "It's incredible how close Spanish and Italian still are after almost 2,000 years.",
        rating: 5
      }
    ],
    content: `Why do we say 'Maison' in French but 'Casa' in Italian and Spanish? The answer lies in the transition from Vulgar Latin to modern languages.

### The Importance of Vulgar Latin
Romance languages do not derive from the Latin of Cicero, but from the one spoken by soldiers and merchants. Studying etymology is not just an academic exercise: it allows you to guess the meaning of thousands of words in languages you have never even studied.

### Systematic Phonetic Changes
Take the Latin word 'Nocte'. In Italian, it became 'Notte' (assimilation), in Spanish 'Noche' (palatalization), in French 'Nuit', and in Portuguese 'Noite'. Once you understand these patterns, learning a second or third Romance language becomes child's play. It’s like having a master key for half of Europe's vocabulary.`,
    createdAt: "2026-02-09T11:00:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89021",
    category: "Chinese",
    title: "Surviving the 4 Tones of Mandarin: A Beginner's Guide",
    cover: "https://picsum.photos/200",
    readTime: { value: 28, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f91",
      name: "Li",
      surname: "Wei",
      avatar: "https://picsum.photos/200",
      nationality: { code: "cn" },
      isTutor: true
    },
    comments: [
      {
        user: { name: "Robert", surname: "Chen", avatar: "https://picsum.photos/200", nationality: { code: "us" }, isTutor: true },
        content: "The difference between 'mother' and 'horse' is tiny; I've made some epic blunders in China!",
        rating: 4
      },
      {
        user: { name: "Marta", surname: "Gatti", avatar: "https://picsum.photos/200", nationality: { code: "it" }, isTutor: true },
        content: "The tone charts in the post are so clear, I finally understood the third tone (the one that goes down and then up).",
        rating: 5
      }
    ],
    content: `In Mandarin Chinese, it's not just *what* you say, but *how* you say it musically. A single syllable like 'ma' can mean mother, hemp, horse, or a scolding, depending on the tone.

### The Four Main Tones
1. **First Tone (Flat):** High and steady, like a long musical note.
2. **Second Tone (Rising):** Like when you ask a question ("Huh?").
3. **Third Tone (Falling-Rising):** The voice dips and then rises; it's often the hardest for Westerners.
4. **Fourth Tone (Falling):** Sharp and decisive, as if you were giving an order.

### The Secret: The Neutral Tone
There is also a fifth tone, which is light and brief. Mastering these contrasts is what distinguishes a beginner from someone who truly speaks the language. My top tip? Listen to Chinese nursery rhymes: the musicality is emphasized and helps with the muscle memory of your vocal cords.`,
    createdAt: "2026-02-08T16:20:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89022",
    category: "Scandinavia",
    title: "Swedish, Norwegian, and Danish: Are They Really the Same Language?",
    cover: "https://picsum.photos/200",
    readTime: { value: 14, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f92",
      name: "Astrid",
      surname: "Larsen",
      avatar: "https://picsum.photos/200",
      nationality: { code: "no" },
      isTutor: true
    },
    comments: [
      {
        user: { name: "Erik", surname: "Svensson", avatar: "https://picsum.photos/200", nationality: { code: "se" }, isTutor: true },
        content: "We Swedes understand Norwegians well, but Danes speak as if they have a hot potato in their mouth!",
        rating: 5
      }
    ],
    content: `It is often said that Swedish, Norwegian, and Danish are "dialects with an army." In linguistic terms, we talk about **mutual intelligibility**.

### Norwegian: The Bridge Between the Three
Norwegian often sits in a central position: it shares much of its written vocabulary with Danish, but its phonetics are much closer to Swedish. If you learn Norwegian well, you've almost "bought three languages for the price of one."

### The Challenge of Danish
Danish is known for its complex phonetics and the "swallowing" of final consonants. While a Swede can read a Danish newspaper without much trouble, they might struggle to understand a barista in Copenhagen. Studying these languages opens the doors to an integrated Scandinavian culture where everyone speaks their own language and everyone (almost) understands each other.`,
    createdAt: "2026-02-07T12:00:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89023",
    category: "Arabic",
    title: "Dialect vs Modern Standard Arabic (Fusha): What to Study?",
    cover: "https://picsum.photos/200",
    readTime: { value: 24, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f93",
      name: "Ahmed",
      surname: "Mansour",
      avatar: "https://picsum.photos/200",
      nationality: { code: "eg" },
      isTutor: false
    },
    comments: [
      {
        user: { name: "Fatima", surname: "Zahra", avatar: "https://picsum.photos/200", nationality: { code: "ma" }, isTutor: true },
        content: "Moroccan dialect (Darija) is practically a different language compared to Gulf Arabic!",
        rating: 4
      }
    ],
    content: `Arabic is characterized by **diglossia**: the coexistence of a formal written language and a myriad of spoken dialects that vary from country to country.

### Modern Standard Arabic (MSA)
This is the language of news broadcasts, books, and official speeches. If your goal is to read literature or work in embassies, MSA is essential. However, no one uses it to buy bread at the market.

### Which dialect to choose?
- **Egyptian:** The most widely understood in the Arab world thanks to cinema and music.
- **Levantine (Syria, Lebanon):** Very melodic and useful for daily life.
- **Maghrebi:** Heavily influenced by French and Berber, often difficult for those studying classical Arabic.

The golden tip? Start with the basics of MSA to understand the logic of triliteral roots (the three base consonants that form every word) and then dive into the dialect of the country that fascinates you most.`,
    createdAt: "2026-02-06T09:45:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89024",
    category: "Portuguese",
    title: "Portuguese: Lisbon or São Paulo? The Differences That Matter",
    cover: "https://picsum.photos/200",
    readTime: { value: 16, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f94",
      name: "Ricardo",
      surname: "Oliveira",
      avatar: "https://picsum.photos/200",
      nationality: { code: "br" },
      isTutor: true
    },
    comments: [
      {
        user: { name: "Tiago", surname: "Ferreira", avatar: "https://picsum.photos/200", nationality: { code: "pt" }, isTutor: true },
        content: "We in Portugal 'eat' the vowels, while Brazilians 'sing' them. That is the real difference!",
        rating: 5
      }
    ],
    content: `Studying Portuguese means choosing between two opposite sonic worlds. Although the grammar is almost identical, the melody changes radically between the two sides of the Atlantic.

### Open vs. Closed Phonetics
Brazilian Portuguese (PT-BR) is characterized by open vowels and a musical cadence that makes it quite similar to Italian in some ways. In contrast, European Portuguese (PT-PT) is much more closed, with vowels that often disappear completely in fast speech, giving the language an almost Slavic sound.

### 'Tu' or 'Você'?
In Brazil, 'Tu' has almost vanished from common speech (except in some Southern regions), replaced by 'Você'. In Portugal, however, the formal distinction is still very much alive. Learning these nuances will prevent you from sounding too formal at a beach in Rio or too casual in an office in Lisbon.`,
    createdAt: "2026-02-05T14:20:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89025",
    category: "Korean",
    title: "Hangul: Why It's the Most Logical Alphabet in the World",
    cover: "https://picsum.photos/200",
    readTime: { value: 21, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f95",
      name: "Min-jun",
      surname: "Kim",
      avatar: "https://picsum.photos/200",
      nationality: { code: "kr" },
      isTutor: false
    },
    comments: [
      {
        user: { name: "Sara", surname: "Lee", avatar: "https://picsum.photos/200", nationality: { code: "us" }, isTutor: true },
        content: "I learned to read in just two hours. It's incredible how intuitive it is compared to Japanese Kanji.",
        rating: 5
      }
    ],
    content: `Created by King Sejong the Great in 1443, Hangul was not born through natural evolution but was scientifically designed to combat illiteracy.

### The Shape of Sounds
Korean consonants are designed to mimic the shape of the mouth and tongue while pronouncing that sound. For example, the letter 'ㄴ' (n) represents the tongue touching the upper palate. It is a visual and logical language.

### Syllabic Blocks
Unlike the Latin alphabet, where letters follow one another linearly, Hangul groups letters into blocks that represent a syllable. This makes reading extremely fast once the eye adjusts to the structure. If you love symmetry and logic, Korean is the perfect language for you.`,
    createdAt: "2026-02-04T10:00:00.000Z"
  },
  {
    _id: "65cb8f12a3b4c5d6e7f89026",
    category: "English",
    title: "Academic English 'False Friends': Don't Fall Into the Trap",
    cover: "https://picsum.photos/200",
    readTime: { value: 12, unit: "minutes" },
    user: {
      _id: "65cb7a1e1f2a3b4c5d6e7f96",
      name: "Emily",
      surname: "Brown",
      avatar: "https://picsum.photos/200",
      nationality: { code: "gb" },
      isTutor: true
    },
    comments: [
      {
        user: { name: "Filippo", surname: "Galli", avatar: "https://picsum.photos/200", nationality: { code: "it" }, isTutor: true },
        content: "I thought 'Eventually' meant 'Eventually' in the Italian sense (eventualmente). I almost ruined my thesis!",
        rating: 4
      }
    ],
    content: `There are words that seem reassuring because they resemble your native language, but in an academic context, they can turn into real saboteurs of your credibility.

### Critical Examples
- **Actually:** Does not mean 'Currently' (which is *Currently*), but 'In fact' or 'Really'.
- **Library:** Is not a 'Bookstore' (which is *Bookstore*), but a place where you borrow books.
- **Comprehensive:** Does not mean 'Understanding' (as in empathetic, which is *Sympathetic*), but 'Exhaustive' or 'Complete'.

Mastering these distinctions is essential for anyone writing essays or participating in international conferences. My advice is to always doubt words that are too similar to your mother tongue when the register becomes formal.`,
    createdAt: "2026-02-03T18:30:00.000Z"
  }
];
