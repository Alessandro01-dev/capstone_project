import LanguagesSection from "./languagesSection/LanguagesSection";


const LanguagesSettings = () => {

  return (
    <div
      className='d-flex flex-column gap-5'
    >
      <LanguagesSection
        title='Native Languages'
        isNative={true}
      />
      <LanguagesSection
        title='Spoken Languages'
        isNative={false}
      />
      <LanguagesSection
        title='Learning Languages'
        isNative={false}
      />
    </div>
  );
};

export default LanguagesSettings;
