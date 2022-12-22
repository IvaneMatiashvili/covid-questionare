import InputRadioAndLabel from '@/components/form/InputRadioAndLabel';

const HaveVaccination = () => {
  return (
    <div className='mt-[2.6rem]'>
      <p className='font-arial font-bold text-[1.3rem] text-dark-100'>
        უკვე აცრილი ხარ?*
      </p>
      <div className='flex flex-col'>
        <InputRadioAndLabel
          key='vaccination-yes'
          id='vaccination-yes'
          value='yes'
          name='have_vaccination'
          labelContent='კი'
        />
        <InputRadioAndLabel
          key='vaccination-no'
          id='vaccination-no'
          value='no'
          name='have_vaccination'
          labelContent='არა'
        />
      </div>
    </div>
  );
};

export default HaveVaccination;
