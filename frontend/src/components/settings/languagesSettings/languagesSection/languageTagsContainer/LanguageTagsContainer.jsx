import classes from './LanguageTagsContainer.module.css'

const LanguageTagsContainer = ({ isNative, confirmedLanguages, setConfirmedLanguages }) => {
  return (
    <div className={classes['confirmed-languages-container']}>
      {confirmedLanguages.length === 0 && (
        <p className={classes['no-languages-paragraph']}>No languages added yet...</p>
      )}

      {confirmedLanguages.map((language) => (
        <div key={language.code} className={classes['single-language-tag']}>
          <div className='d-flex align-items-center gap-2'>
            <p
              className='m-0'
            >{language.label}</p>
            {!isNative && (
              <p className={`${classes['single-language-tag-level']} m-0`}
              >
                {language.level}
              </p>
            )}
          </div>
          <p
            onClick={() => setConfirmedLanguages(confirmedLanguages.filter(lang => lang.code !== language.code))}
            className={`${classes['remove-tag-close-button']} m-0`}
          >
            ×
          </p>
        </div>
      ))}
    </div>
  )
}

export default LanguageTagsContainer