import { InputRadioAndLabel } from '@/components';

const HaveAntibodies = () => {
  return (
    <>
      <div className='mt-[2.6rem]'>
        <p className='font-arial font-bold text-[1.3rem] text-dark-100'>
          ანტისხეულების ტესტი გაქვს გაკეთებული?*
        </p>
        <div className='flex flex-col'>
          <InputRadioAndLabel
            name='have_antibodies'
            key='antibodies-yes'
            id='antibodies-yes'
            value='yes'
            labelContent='კი'
          />
          <InputRadioAndLabel
            name='have_antibodies'
            kay='antibodies-no'
            id='antibodies-no'
            value='no'
            labelContent='არა'
          />
        </div>
      </div>
    </>
  );
};

export default HaveAntibodies;
