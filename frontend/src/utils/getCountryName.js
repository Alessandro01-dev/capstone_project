const regionNames = new Intl.DisplayNames(['en'], {
  type: 'region'
})

export const getCountryName = (code) => {

  return regionNames.of(code.toUpperCase())
}
