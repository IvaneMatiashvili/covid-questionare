import InputRadioAndLabel from '@/components/form/InputRadioAndLabel';

const HaveCovid = () => {
  return (
    <>
      <div className='mt-[2.6rem]'>
        <p className='font-arial font-bold text-[1.3rem] text-dark-100'>
          გაქვს გადატანილი Covid-19?*
        </p>
        <div className='flex flex-col'>
          <InputRadioAndLabel
            name='have_covid'
            key='covid-yes'
            id='covid-yes'
            value='yes'
            labelContent='კი'
          />
          <InputRadioAndLabel
            name='have_covid'
            key='covid-no'
            id='covid-no'
            value='no'
            labelContent='არა'
          />
          <InputRadioAndLabel
            name='have_covid'
            key='covid-now'
            id='covid-now'
            value='now'
            labelContent='ახლა მაქვს'
          />
        </div>
      </div>
    </>
  );
};

export default HaveCovid;
