export const languagesMock = [
  { value: 'gb', label: 'English (UK)' },
  { value: 'us', label: 'English (US)' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'jp', label: 'Japanese' },
  { value: 'cn', label: 'Chinese (Mandarin)' },
  { value: 'ru', label: 'Russian' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'br', label: 'Portuguese (Brazil)' },
  { value: 'kr', label: 'Korean' },
  { value: 'sa', label: 'Arabic' },
  { value: 'in', label: 'Hindi' },
  { value: 'tr', label: 'Turkish' },
  { value: 'nl', label: 'Dutch' },
  { value: 'se', label: 'Swedish' },
  { value: 'no', label: 'Norwegian' },
  { value: 'dk', label: 'Danish' },
  { value: 'fi', label: 'Finnish' },
  { value: 'pl', label: 'Polish' },
  { value: 'gr', label: 'Greek' },
  { value: 'vn', label: 'Vietnamese' },
  { value: 'th', label: 'Thai' },
  { value: 'id', label: 'Indonesian' },
  { value: 'ir', label: 'Persian' },
  { value: 'il', label: 'Hebrew' },
  { value: 'pk', label: 'Urdu' },
  { value: 'cz', label: 'Czech' },
  { value: 'ro', label: 'Romanian' },
  { value: 'hu', label: 'Hungarian' },
  { value: 'ua', label: 'Ukrainian' },
  { value: 'ie', label: 'Irish' },
  { value: 'tw', label: 'Chinese (Traditional)' },
  { value: 'mx', label: 'Spanish (Mexico)' },
  { value: 'ca', label: 'French (Canada)' },
  { value: 'za', label: 'Afrikaans' },
  { value: 'al', label: 'Albanian' },
  { value: 'am', label: 'Armenian' },
  { value: 'az', label: 'Azerbaijani' },
  { value: 'bd', label: 'Bengali' },
  { value: 'ba', label: 'Bosnian' },
  { value: 'bg', label: 'Bulgarian' },
  { value: 'mm', label: 'Burmese' },
  { value: 'hr', label: 'Croatian' },
  { value: 'ee', label: 'Estonian' },
  { value: 'ge', label: 'Georgian' },
  { value: 'is', label: 'Icelandic' },
  { value: 'kz', label: 'Kazakh' },
  { value: 'kh', label: 'Khmer' },
  { value: 'la', label: 'Lao' },
  { value: 'lv', label: 'Latvian' },
  { value: 'lt', label: 'Lithuanian' },
  { value: 'lu', label: 'Luxembourgish' },
  { value: 'mk', label: 'Macedonian' },
  { value: 'mg', label: 'Malagasy' },
  { value: 'my', label: 'Malay' },
  { value: 'mt', label: 'Maltese' },
  { value: 'mn', label: 'Mongolian' },
  { value: 'np', label: 'Nepali' },
  { value: 'ph', label: 'Filipino' },
  { value: 'sk', label: 'Slovak' },
  { value: 'si', label: 'Slovenian' },
  { value: 'so', label: 'Somali' },
  { value: 'tz', label: 'Swahili' },
  { value: 'tw', label: 'Taiwanese' },
  { value: 'tj', label: 'Tajik' },
  { value: 'lk', label: 'Sinhala' },
  { value: 'uz', label: 'Uzbek' },
  { value: 'cy', label: 'Welsh' },
  { value: 'ng', label: 'Yoruba' },
  { value: 'et', label: 'Amharic' },
  { value: 'py', label: 'Guarani' },
  { value: 'af', label: 'Pashto' },
  { value: 'pk', label: 'Punjabi' },
  { value: 'sn', label: 'Wolof' },
  { value: 'gh', label: 'Akan' },
  { value: 'be', label: 'Flemish' },
  { value: 'cl', label: 'Spanish (Chile)' }
];

export const languageLevels = [
  { 
    value: "A1", 
    label: "A1 - Beginner", 
    description: "Can understand and use familiar everyday expressions and basic phrases to meet concrete needs, such as introducing themselves or asking simple questions." 
  },
  { 
    value: "A2", 
    label: "A2 - Elementary", 
    description: "Can communicate in simple, routine tasks requiring direct exchange of information on familiar topics, and describe their background and immediate environment." 
  },
  { 
    value: "B1", 
    label: "B1 - Intermediate", 
    description: "Can handle most situations while traveling, produce simple connected text on familiar topics, and describe experiences, events, dreams, and ambitions." 
  },
  { 
    value: "B2", 
    label: "B2 - Upper Intermediate", 
    description: "Can understand complex ideas, converse with native speakers with spontaneity, and produce detailed text on a wide range of subjects." 
  },
  { 
    value: "C1", 
    label: "C1 - Advanced", 
    description: "Can express themselves fluently and spontaneously, using language flexibly for social, academic, and professional purposes." 
  },
  { 
    value: "C2", 
    label: "C2 - Mastery", 
    description: "Can understand with ease virtually everything heard or read, reconstructing information into a coherent presentation, and expressing themselves precisely and spontaneously." 
  }
];

export const languageTaughtLevels = languageLevels.filter(level => 
  ["B1", "B2", "C1", "C2"].includes(level.value)
);
