import InputRadioAndLabel from '@/components/form/InputRadioAndLabel';

const HaveAntibodies = (props) => {
  return (
    <>
      <div className='mt-[2.6rem]'>
        <p className='font-bold text-[1.3rem] text-dark-100'>
          ანტისხეულების ტესტი გაქვს გაკეთებული?*
        </p>
        <div className='flex flex-col'>
          <InputRadioAndLabel
            key='antibodies-yes'
            id='antibodies-yes'
            value='yes'
            register={props.register('haveAntibodies')}
            labelContent='კი'
          />
          <InputRadioAndLabel
            kay='antibodies-no'
            id='antibodies-no'
            value='no'
            register={props.register('haveAntibodies', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            labelContent='არა'
          />
        </div>
      </div>
    </>
  );
};

export default HaveAntibodies;
