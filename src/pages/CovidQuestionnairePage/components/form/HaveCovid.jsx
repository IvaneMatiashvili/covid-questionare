import InputRadioAndLabel from '@/components/form/InputRadioAndLabel';

const HaveCovid = (props) => {
  return (
    <>
      <div className='mt-[2.6rem]'>
        <p className='font-arial font-bold text-[1.3rem] text-dark-100'>
          გაქვს გადატანილი Covid-19?*
        </p>
        <div className='flex flex-col'>
          <InputRadioAndLabel
            key='covid-yes'
            id='covid-yes'
            value='yes'
            register={props.register('haveCovid')}
            labelContent='კი'
          />
          <InputRadioAndLabel
            key='covid-no'
            id='covid-no'
            value='no'
            register={props.register('haveCovid')}
            labelContent='არა'
          />
          <InputRadioAndLabel
            key='covid-now'
            id='covid-now'
            value='now'
            register={props.register('haveCovid', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            labelContent='ახლა მაქვს'
          />
        </div>
      </div>
    </>
  );
};

export default HaveCovid;
