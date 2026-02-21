const commentData = [
  {
    postTitle: "The Neuroscience of Bilingualism and Cognitive Reserve",
    content: "This is a game-changer! I always thought I was too old to start learning German, but the concept of cognitive reserve gives me so much hope.",
    rating: 5
  },
  {
    postTitle: "The Neuroscience of Bilingualism and Cognitive Reserve",
    content: "Fascinating insights into gray matter density. It's incredible how our brains physically adapt to new linguistic codes.",
    rating: 5
  },
  {
    postTitle: "The Neuroscience of Bilingualism and Cognitive Reserve",
    content: "I wonder if these benefits apply equally to sign languages? The multitasking aspect seems very similar.",
    rating: 4
  },
  {
    postTitle: "The Neuroscience of Bilingualism and Cognitive Reserve",
    content: "A bit technical, but very well explained. Investing in brain health through languages is a brilliant perspective.",
    rating: 5
  },
  {
    postTitle: "The Neuroscience of Bilingualism and Cognitive Reserve",
    content: "The part about filtering out irrelevant information explains why I feel more focused after my morning Duolingo session!",
    rating: 4
  },

  {
    postTitle: "Total Immersion Techniques in Domestic Environments",
    content: "I've turned my kitchen into a Spanish zone with sticky notes. My roommates think I'm crazy, but I finally know the word for 'whisk'!",
    rating: 5
  },
  {
    postTitle: "Total Immersion Techniques in Domestic Environments",
    content: "Self-talk is the ultimate hack. I've been describing my cooking process in French and it really highlights my vocabulary gaps.",
    rating: 5
  },
  {
    postTitle: "Total Immersion Techniques in Domestic Environments",
    content: "Passive listening is great, but does it really help with grammar or just phonemes?",
    rating: 3
  },
  {
    postTitle: "Total Immersion Techniques in Domestic Environments",
    content: "Comprehensible Input changed my life. Stop struggling with difficult novels and start with stuff you actually understand!",
    rating: 5
  },

  {
    postTitle: "The Myth of Natural Talent and the Psychology of Learning",
    content: "Finally someone says it! Consistency beats talent every single time. The 'language gene' is such a damaging myth.",
    rating: 5
  },
  {
    postTitle: "The Myth of Natural Talent and the Psychology of Learning",
    content: "The Affective Filter theory explains exactly why I freeze up when I try to speak in public. Very relatable.",
    rating: 4
  },
  {
    postTitle: "The Myth of Natural Talent and the Psychology of Learning",
    content: "Tolerance for ambiguity is my biggest struggle. I hate not knowing every single word in a sentence.",
    rating: 3
  },
  {
    postTitle: "The Myth of Natural Talent and the Psychology of Learning",
    content: "Using cinema and cooking to learn makes the process so much more enjoyable. It doesn't feel like 'studying' anymore.",
    rating: 5
  },
  {
    postTitle: "The Myth of Natural Talent and the Psychology of Learning",
    content: "Loci method for irregular verbs? I need to try that immediately!",
    rating: 4
  },
  {
    postTitle: "The Myth of Natural Talent and the Psychology of Learning",
    content: "Emotional connection is key. I learned more Italian in three months of dating a Roman than in three years of school.",
    rating: 5
  },

  {
    postTitle: "The Evolution of Language in the Social Media Era",
    content: "Linguistic 'decadence' is such a snobbish concept. Language is evolving to meet our needs, and emojis are a big part of that.",
    rating: 4
  },
  {
    postTitle: "The Evolution of Language in the Social Media Era",
    content: "The point about 'written orality' is spot on. I catch myself writing emails that sound exactly like a casual conversation.",
    rating: 5
  },
  {
    postTitle: "The Evolution of Language in the Social Media Era",
    content: "Navigating formal vs informal registers on social media is a nightmare for us learners. Great article.",
    rating: 4
  },
  {
    postTitle: "The Evolution of Language in the Social Media Era",
    content: "Is internet slang making us all speak the same version of English? I worry about local nuances disappearing.",
    rating: 3
  },

  {
    postTitle: "The Reverse-Learning Technique for Advanced Students",
    content: "The linguistic plateau is real and it's soul-crushing. Reverse translation sounds like exactly what I need to break through.",
    rating: 5
  },
  {
    postTitle: "The Reverse-Learning Technique for Advanced Students",
    content: "Mock teaching is so powerful. Explaining a grammar rule to an imaginary class really shows if you actually get it.",
    rating: 5
  },
  {
    postTitle: "The Reverse-Learning Technique for Advanced Students",
    content: "Recording yourself is painful but so necessary. I didn't realize how many filler words I was using until I heard it back.",
    rating: 4
  },
  {
    postTitle: "The Reverse-Learning Technique for Advanced Students",
    content: "This requires way more energy than just watching Netflix, but the results seem worth it.",
    rating: 4
  },
  {
    postTitle: "AI and Language Learning: From Translation to Co-Creation",
    content: "I use AI everyday to simulate job interviews in Swedish. It's incredible how it helps build confidence without the fear of judgment!",
    rating: 5
  },
  {
    postTitle: "AI and Language Learning: From Translation to Co-Creation",
    content: "I'm worried AI will make us lazy. Why learn a language if a device can translate everything instantly?",
    rating: 3
  },
  {
    postTitle: "AI and Language Learning: From Translation to Co-Creation",
    content: "The trick is 'prompt engineering'. Asking the AI to explain the grammar behind its corrections is where the real learning happens.",
    rating: 5
  },
  {
    postTitle: "AI and Language Learning: From Translation to Co-Creation",
    content: "AI is great for syntax, but it still feels a bit 'robotic' when it comes to humor and local slang.",
    rating: 4
  },

  {
    postTitle: "The Logic of the East: Understanding High-Context Communication",
    content: "Studying Japanese made me realize how direct and almost aggressive Western communication can be. 'Reading the air' is a superpower.",
    rating: 5
  },
  {
    postTitle: "The Logic of the East: Understanding High-Context Communication",
    content: "The concept of Keigo is so intimidating. I'm always afraid of being accidentally rude!",
    rating: 4
  },
  {
    postTitle: "The Logic of the East: Understanding High-Context Communication",
    content: "It's frustrating when there's no subject in the sentence, but you start to develop an intuition for it after a while.",
    rating: 4
  },
  {
    postTitle: "The Logic of the East: Understanding High-Context Communication",
    content: "Would you recommend learning the culture first or diving straight into the grammar for high-context languages?",
    rating: 5
  },
  {
    postTitle: "The Logic of the East: Understanding High-Context Communication",
    content: "High-context vs Low-context is the single most important lesson for anyone moving to East Asia.",
    rating: 5
  },

  {
    postTitle: "Dialects and Identity: Why 'Standard' Language is a Myth",
    content: "Exactly! In Italy, if you only speak 'Standard Italian', you sound like a news anchor. Dialects are where the soul is.",
    rating: 5
  },
  {
    postTitle: "Dialects and Identity: Why 'Standard' Language is a Myth",
    content: "I lived in Liverpool and realized my school English was useless for understanding locals at the pub!",
    rating: 4
  },
  {
    postTitle: "Dialects and Identity: Why 'Standard' Language is a Myth",
    content: "Linguistic treasure hunt is a beautiful way to describe it. Regionalisms tell such deep historical stories.",
    rating: 5
  },
  {
    postTitle: "Dialects and Identity: Why 'Standard' Language is a Myth",
    content: "I'm worried that learning a dialect might confuse my 'standard' grammar though. Any tips?",
    rating: 3
  },

  {
    postTitle: "Language Anxiety: Overcoming the Fear of Being Seen",
    content: "I totally relate to the 'language persona' concept. I feel much more extroverted when I speak English than in my native tongue.",
    rating: 5
  },
  {
    postTitle: "Language Anxiety: Overcoming the Fear of Being Seen",
    content: "Performance anxiety is my biggest wall. Accepting that feeling 'child-like' is part of the process is so hard.",
    rating: 4
  },
  {
    postTitle: "Language Anxiety: Overcoming the Fear of Being Seen",
    content: "'Perfect is the enemy of fluent' - I need to print this and put it on my desk. Thank you.",
    rating: 5
  },
  {
    postTitle: "Language Anxiety: Overcoming the Fear of Being Seen",
    content: "I found that recording myself and listening back helps desensitize me to my own 'foreign' voice.",
    rating: 4
  },
  {
    postTitle: "Language Anxiety: Overcoming the Fear of Being Seen",
    content: "This article is a must-read. Most people quit not because they lack ability, but because of this psychological block.",
    rating: 5
  },
  {
    postTitle: "Language Anxiety: Overcoming the Fear of Being Seen",
    content: "Does the persona thing actually work or is it just a placebo effect for confidence?",
    rating: 3
  },

  {
    postTitle: "The Power of Bimodal Input: Reading and Listening Simultaneously",
    content: "I use this technique with Audible and Kindle. My retention has doubled since I started doing both at the same time.",
    rating: 5
  },
  {
    postTitle: "The Power of Bimodal Input: Reading and Listening Simultaneously",
    content: "For French, this is essential because half the letters are silent! It's the only way to link sound to spelling.",
    rating: 5
  },
  {
    postTitle: "The Power of Bimodal Input: Reading and Listening Simultaneously",
    content: "Does it work with subtitles too, or is a physical book better for the brain?",
    rating: 4
  },
  {
    postTitle: "The Power of Bimodal Input: Reading and Listening Simultaneously",
    content: "Great hack for visual learners who struggle with listening comprehension. Definitely trying this today.",
    rating: 4
  },
  {
    postTitle: "The Sapir-Whorf Hypothesis: Does Language Shape Your Reality?",
    content: "The example of the Guugu Yimithirr people is mind-blowing. It really proves how much we are limited by our mental categories.",
    rating: 5
  },
  {
    postTitle: "The Sapir-Whorf Hypothesis: Does Language Shape Your Reality?",
    content: "Learning German definitely made me see the world in a more 'structured' way. Language is truly a pair of glasses for the soul.",
    rating: 5
  },
  {
    postTitle: "The Sapir-Whorf Hypothesis: Does Language Shape Your Reality?",
    content: "There are emotions I feel in one language that I simply cannot translate into my mother tongue. Sapir and Whorf were onto something!",
    rating: 4
  },
  {
    postTitle: "The Sapir-Whorf Hypothesis: Does Language Shape Your Reality?",
    content: "I recommend the movie 'Arrival' for anyone who wants to see a sci-fi take on this linguistic hypothesis.",
    rating: 5
  },
  {
    postTitle: "The Sapir-Whorf Hypothesis: Does Language Shape Your Reality?",
    content: "A very complex topic explained with disarming clarity. Kudos to the author.",
    rating: 4
  },

  {
    postTitle: "The Economic Value of Multilingualism in the Global Market",
    content: "I work in HR and I can confirm: given equal technical skills, the bilingual candidate wins every single time.",
    rating: 5
  },
  {
    postTitle: "The Economic Value of Multilingualism in the Global Market",
    content: "The point about the 'yes' in Tokyo is spot on. Intercultural negotiation is a skill you don't learn in grammar books.",
    rating: 4
  },
  {
    postTitle: "The Economic Value of Multilingualism in the Global Market",
    content: "Speaking Mandarin has opened doors I never thought possible in international trade. It's worth every hour of study.",
    rating: 5
  },
  {
    postTitle: "The Economic Value of Multilingualism in the Global Market",
    content: "A 20% salary bonus seems a bit optimistic, but it's true that opportunities double once you go global.",
    rating: 3
  },

  {
    postTitle: "Mastering the Accent: The Physicality of Sound Production",
    content: "I never thought of my tongue as a muscle to train at the gym. This completely changes my perspective on pronunciation!",
    rating: 5
  },
  {
    postTitle: "Mastering the Accent: The Physicality of Sound Production",
    content: "The advice on anatomical diagrams is gold. For the French 'R', it's the only way to understand where to place the tongue.",
    rating: 5
  },
  {
    postTitle: "Mastering the Accent: The Physicality of Sound Production",
    content: "Shadowing is exhausting but it's the only method that actually works for the rhythm of the sentence.",
    rating: 4
  },
  {
    postTitle: "Mastering the Accent: The Physicality of Sound Production",
    content: "In my opinion, a slight accent is charming. You don't necessarily have to sound like a 100% native speaker.",
    rating: 4
  },
  {
    postTitle: "Mastering the Accent: The Physicality of Sound Production",
    content: "Any specific tips for the English 'th' sound? I find it physically impossible to reproduce.",
    rating: 3
  },

  {
    postTitle: "The Plateau Effect: Why You Stop Progressing and How to Fix It",
    content: "I've been stuck at B2 for a lifetime. Reading this made me realize I need to stop using textbooks and start living the language.",
    rating: 5
  },
  {
    postTitle: "The Plateau Effect: Why You Stop Progressing and How to Fix It",
    content: "Desirable difficulties... a hard concept to accept but so true. If it doesn't hurt a bit, you're not growing.",
    rating: 5
  },
  {
    postTitle: "The Plateau Effect: Why You Stop Progressing and How to Fix It",
    content: "I recommend philosophy podcasts in the target language for anyone wanting to break the plateau. Guaranteed vocabulary boost!",
    rating: 4
  },
  {
    postTitle: "The Plateau Effect: Why You Stop Progressing and How to Fix It",
    content: "Sometimes the plateau is just mental fatigue. For me, taking a one-week break and coming back fresh helps a lot.",
    rating: 4
  },
  {
    postTitle: "The Plateau Effect: Why You Stop Progressing and How to Fix It",
    content: "What do you mean by writing essays? What length should they be to see actual progress?",
    rating: 4
  },
  {
    postTitle: "The Plateau Effect: Why You Stop Progressing and How to Fix It",
    content: "Finally some honesty: moving from B2 to C1 requires a massive effort compared to the beginner levels.",
    rating: 5
  },
  {
    postTitle: "Lost in Translation: The Beauty of Untranslatable Concepts",
    content: "I finally have a name for my book hoarding habit: Tsundoku! I feel so much better now.",
    rating: 5
  },
  {
    postTitle: "Lost in Translation: The Beauty of Untranslatable Concepts",
    content: "Saudade is such a powerful word. It captures a feeling that 'nostalgia' just can't reach.",
    rating: 5
  },
  {
    postTitle: "Lost in Translation: The Beauty of Untranslatable Concepts",
    content: "The concept of Gezelligheid makes me want to learn Dutch just to experience it.",
    rating: 4
  },
  {
    postTitle: "Lost in Translation: The Beauty of Untranslatable Concepts",
    content: "Language really does expand your emotional repertoire. This was a beautiful read.",
    rating: 5
  },
  {
    postTitle: "Lost in Translation: The Beauty of Untranslatable Concepts",
    content: "Are there any equivalent words in English that other languages find hard to translate?",
    rating: 3
  },

  {
    postTitle: "Raising Bilingual Children: Myths, Realities, and Strategies",
    content: "We use the OPOL method at home (English/Italian) and it works wonders. Our kids are thriving!",
    rating: 5
  },
  {
    postTitle: "Raising Bilingual Children: Myths, Realities, and Strategies",
    content: "The part about code-mixing is so reassuring. I used to worry when my son mixed languages.",
    rating: 4
  },
  {
    postTitle: "Raising Bilingual Children: Myths, Realities, and Strategies",
    content: "Cognitive flexibility is the best gift we can give our children in today's global world.",
    rating: 5
  },
  {
    postTitle: "Raising Bilingual Children: Myths, Realities, and Strategies",
    content: "Any advice for parents where both speak the same language but live in a foreign country?",
    rating: 4
  },
  {
    postTitle: "Raising Bilingual Children: Myths, Realities, and Strategies",
    content: "Great article for debunking the 'speech delay' myth once and for all.",
    rating: 5
  },

  {
    postTitle: "The Genealogy of Words: How History is Written in Our Vocabulary",
    content: "The cow vs beef distinction is mind-blowing! I never realized my dinner menu was a history lesson.",
    rating: 5
  },
  {
    postTitle: "The Genealogy of Words: How History is Written in Our Vocabulary",
    content: "Etymology makes memorizing vocabulary so much more logical. It’s like connecting the dots.",
    rating: 5
  },
  {
    postTitle: "The Genealogy of Words: How History is Written in Our Vocabulary",
    content: "The Arabic influence on science and philosophy terms is a fascinating chapter of history.",
    rating: 4
  },
  {
    postTitle: "The Genealogy of Words: How History is Written in Our Vocabulary",
    content: "Seeing the 'hidden grid' between Romance languages makes learning them feel less intimidating.",
    rating: 5
  },

  {
    postTitle: "Politeness and Power: The Unwritten Rules of Social Interaction",
    content: "The British 'I hear what you say' example is hilarious and so accurate. Pragmatics is key!",
    rating: 5
  },
  {
    postTitle: "Politeness and Power: The Unwritten Rules of Social Interaction",
    content: "This is the hardest part of a language to master. Textbooks never teach you the social cues.",
    rating: 4
  },
  {
    postTitle: "Politeness and Power: The Unwritten Rules of Social Interaction",
    content: "Politeness is not universal. What’s honest in one culture is rude in another. Great analysis.",
    rating: 5
  },
  {
    postTitle: "Politeness and Power: The Unwritten Rules of Social Interaction",
    content: "Are there any specific handbooks for business pragmatics in different countries?",
    rating: 3
  },
  {
    postTitle: "Politeness and Power: The Unwritten Rules of Social Interaction",
    content: "Mastering the 'unspoken rules' is what truly separates a tourist from a resident.",
    rating: 5
  },
  {
    postTitle: "Learning Through Lyrics: Why Music is the Ultimate Language Hack",
    content: "I learned most of my English vocabulary through Queen and The Beatles. Music sticks in your head like nothing else!",
    rating: 5
  },
  {
    postTitle: "Learning Through Lyrics: Why Music is the Ultimate Language Hack",
    content: "Singing along really does help with the flow. It’s like a workout for your mouth muscles.",
    rating: 5
  },
  {
    postTitle: "Learning Through Lyrics: Why Music is the Ultimate Language Hack",
    content: "The only problem is that song slang can be a bit too casual for the office. Use with caution!",
    rating: 4
  },
  {
    postTitle: "Learning Through Lyrics: Why Music is the Ultimate Language Hack",
    content: "LyricsTraining is a great site for this. Music makes the chore of studying feel like a hobby.",
    rating: 5
  },
  {
    postTitle: "Learning Through Lyrics: Why Music is the Ultimate Language Hack",
    content: "Does this work as well for character-based languages like Chinese?",
    rating: 3
  },

  {
    postTitle: "The Future of English: Global Lingua Franca or Fragmented Dialects?",
    content: "Singlish is fascinating! It proves that a language can be perfectly functional even when it deviates from the 'standard'.",
    rating: 5
  },
  {
    postTitle: "The Future of English: Global Lingua Franca or Fragmented Dialects?",
    content: "The idea of English following Latin’s path is scary but very realistic. Will we study 2024 English as a dead language one day?",
    rating: 4
  },
  {
    postTitle: "The Future of English: Global Lingua Franca or Fragmented Dialects?",
    content: "International English is a much more practical goal for business than trying to sound like a BBC announcer.",
    rating: 5
  },
  {
    postTitle: "The Future of English: Global Lingua Franca or Fragmented Dialects?",
    content: "Great point about English not being 'owned' by native speakers anymore. It’s a global tool now.",
    rating: 5
  },

  {
    postTitle: "Celestial Origins: The Etymology Behind the Days of the Week",
    content: "I never connected Thursday with Thor! Now I'll look at the calendar as a mythology book.",
    rating: 5
  },
  {
    postTitle: "Celestial Origins: The Etymology Behind the Days of the Week",
    content: "It’s amazing how Germanic languages 'translated' Roman gods into their own Norse counterparts.",
    rating: 5
  },
  {
    postTitle: "Celestial Origins: The Etymology Behind the Days of the Week",
    content: "Wednesday as Woden’s day... seeking wisdom in the middle of the week. I love that philosophy.",
    rating: 4
  },
  {
    postTitle: "Celestial Origins: The Etymology Behind the Days of the Week",
    content: "Short, dense, and full of curiosity. Perfect read for history buffs.",
    rating: 5
  },

  {
    postTitle: "Beyond Words: The Subtle Art of Cultural Body Language",
    content: "The 7% rule is terrifying. We spend years on grammar only to ruin a deal with one wrong gesture!",
    rating: 5
  },
  {
    postTitle: "Beyond Words: The Subtle Art of Cultural Body Language",
    content: "I lived in Japan and the personal space thing is sacred. Westerners often seem way too 'physical' there.",
    rating: 4
  },
  {
    postTitle: "Beyond Words: The Subtle Art of Cultural Body Language",
    content: "Eye contact is such a minefield. In some cultures, staring at an elder is a sign of aggression, not honesty.",
    rating: 5
  },
  {
    postTitle: "Beyond Words: The Subtle Art of Cultural Body Language",
    content: "This article should be mandatory for anyone traveling for work. Politeness is not universal.",
    rating: 5
  },
  {
    postTitle: "Beyond Words: The Subtle Art of Cultural Body Language",
    content: "Are there any specific courses for intercultural body language?",
    rating: 3
  },
  {
    postTitle: "ConLangs: From Esperanto to the Masterpieces of Tolkien",
    content: "Tolkien was a genius. Building a world to give a language a home is the ultimate commitment to linguistics.",
    rating: 5
  },
  {
    postTitle: "ConLangs: From Esperanto to the Masterpieces of Tolkien",
    content: "I tried studying Esperanto. It's incredibly logical, but I missed the 'historical messiness' of natural languages.",
    rating: 4
  },
  {
    postTitle: "ConLangs: From Esperanto to the Masterpieces of Tolkien",
    content: "ConLangs like Dothraki prove that language is not just a tool, but a high form of art. Great read!",
    rating: 5
  },
  {
    postTitle: "ConLangs: From Esperanto to the Masterpieces of Tolkien",
    content: "Does learning a ConLang actually help with learning natural languages, or is it just a hobby?",
    rating: 3
  },

  {
    postTitle: "The Invisible Translator: The Struggle for Literary Accuracy",
    content: "'Traduttore, traditore'. It’s a sad truth, but without them, we’d be stuck in our own linguistic bubbles.",
    rating: 5
  },
  {
    postTitle: "The Invisible Translator: The Struggle for Literary Accuracy",
    content: "I've read Murakami in both English and my native tongue, and they feel like different books. Translators are co-authors.",
    rating: 5
  },
  {
    postTitle: "The Invisible Translator: The Struggle for Literary Accuracy",
    content: "Translating puns and humor must be the hardest job in the world. Much respect to these unsung heroes.",
    rating: 5
  },
  {
    postTitle: "The Invisible Translator: The Struggle for Literary Accuracy",
    content: "This article finally gives credit to a profession that is often completely overlooked by readers.",
    rating: 4
  },
  {
    postTitle: "The Invisible Translator: The Struggle for Literary Accuracy",
    content: "How does AI translation affect the work of literary translators today?",
    rating: 4
  },

  {
    postTitle: "The Fossilization Trap: Why We Stop Improving After a Certain Point",
    content: "This hit close to home. I've realized I've stopped learning new words because 'people understand me anyway'. Time to change!",
    rating: 5
  },
  {
    postTitle: "The Fossilization Trap: Why We Stop Improving After a Certain Point",
    content: "Communicative need vs grammatical accuracy. Once the first is met, the brain really does get lazy.",
    rating: 4
  },
  {
    postTitle: "The Fossilization Trap: Why We Stop Improving After a Certain Point",
    content: "Recording yourself is painful but so necessary. You can't fix what you can't hear.",
    rating: 5
  },
  {
    postTitle: "The Fossilization Trap: Why We Stop Improving After a Certain Point",
    content: "One of the best articles on why long-term expats still make basic mistakes. Very insightful.",
    rating: 5
  },

  {
    postTitle: "The Death of the Sentence? How Texting is Changing Syntax",
    content: "The part about the period at the end of a text is so true! It feels so aggressive for no reason.",
    rating: 5
  },
  {
    postTitle: "The Death of the Sentence? How Texting is Changing Syntax",
    content: "'Fingered speech' is a brilliant term. We are witnessing a whole new branch of linguistics.",
    rating: 5
  },
  {
    postTitle: "The Death of the Sentence? How Texting is Changing Syntax",
    content: "For a learner, digital pragmatics is a nightmare. School teaches you one way, the internet another.",
    rating: 4
  },
  {
    postTitle: "The Death of the Sentence? How Texting is Changing Syntax",
    content: "Are emojis actually becoming a new universal grammar?",
    rating: 3
  },

  {
    postTitle: "Linguistic Fingerprints: How Words Can Solve Crimes",
    content: "I had no idea idiolects were that specific. Forensic linguistics sounds like a fascinating career.",
    rating: 5
  },
  {
    postTitle: "Linguistic Fingerprints: How Words Can Solve Crimes",
    content: "The Unabomber case is the perfect example of how our style betrays us. We can't hide how we think.",
    rating: 5
  },
  {
    postTitle: "Linguistic Fingerprints: How Words Can Solve Crimes",
    content: "Choice of words is never random. This article is as gripping as a Netflix crime doc.",
    rating: 5
  },
  {
    postTitle: "Linguistic Fingerprints: How Words Can Solve Crimes",
    content: "Could AI be used to forge someone else's linguistic fingerprint and frame them?",
    rating: 4
  },
  {
    postTitle: "The Virtual Immersion: Learning Languages Through Video Games",
    content: "I learned more English playing World of Warcraft than I did in five years of high school! MMOs are the ultimate immersion tool.",
    rating: 5
  },
  {
    postTitle: "The Virtual Immersion: Learning Languages Through Video Games",
    content: "The concept of the 'Affective Filter' is so true. When you're trying to win a quest, you forget to be afraid of making mistakes.",
    rating: 5
  },
  {
    postTitle: "The Virtual Immersion: Learning Languages Through Video Games",
    content: "RPG dialogues are great for learning narrative structures. Any specific game recommendations for someone studying Spanish?",
    rating: 4
  },
  {
    postTitle: "The Virtual Immersion: Learning Languages Through Video Games",
    content: "It's the perfect example of accidental learning. You're having fun, but your brain is actually working overtime.",
    rating: 5
  },

  {
    postTitle: "Linguistic Loans: Why No Language is an Island",
    content: "False friends are my nightmare. I once told a colleague I was 'constipated' in Spanish when I meant I had a cold!",
    rating: 5
  },
  {
    postTitle: "Linguistic Loans: Why No Language is an Island",
    content: "The idea of English being a 'thief' of words is exactly why it’s so rich and flexible. No language is a pure island.",
    rating: 4
  },
  {
    postTitle: "Linguistic Loans: Why No Language is an Island",
    content: "Japanese Gairaigo is so interesting. It's like a map of modern history written directly into the vocabulary.",
    rating: 5
  },
  {
    postTitle: "Linguistic Loans: Why No Language is an Island",
    content: "Languages are bridges, not walls. This article beautifully illustrates our shared human experience.",
    rating: 5
  },
  {
    postTitle: "Linguistic Loans: Why No Language is an Island",
    content: "Does borrowing too many words from English threaten the identity of smaller languages over time?",
    rating: 3
  },

  {
    postTitle: "The Sound of Silence: How Different Cultures Interpret the Pause",
    content: "In my culture, silence is awkward. But after reading this, I'll try to 'read the air' more when speaking with my Japanese clients.",
    rating: 5
  },
  {
    postTitle: "The Sound of Silence: How Different Cultures Interpret the Pause",
    content: "Mastering the silence is just as important as mastering the verbs. This is such an overlooked aspect of fluency.",
    rating: 5
  },
  {
    postTitle: "The Sound of Silence: How Different Cultures Interpret the Pause",
    content: "I lived in Finland and the silence was intimidating at first. Now I find it incredibly respectful and peaceful.",
    rating: 4
  },
  {
    postTitle: "The Sound of Silence: How Different Cultures Interpret the Pause",
    content: "Great point about 'turn-taking'. Rushing to speak can really ruin the harmony of a professional meeting.",
    rating: 5
  },
  {
    postTitle: "The Sound of Silence: How Different Cultures Interpret the Pause",
    content: "This is pragmatics at its finest. Words are only half the story.",
    rating: 5
  }
];

module.exports = commentData;
