const languageNames = new Intl.DisplayNames(['en'], {
  type: 'language'
})

export const getLanguageName = (code) => {
  return languageNames.of(code)
}