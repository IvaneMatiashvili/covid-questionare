import { InputRadioAndLabel } from '@/components';

const WorkInOfficeField = () => {
  return (
    <>
      <p className='font-arial font-bold text-[1.3rem] text-dark-100 w-[33rem] mt-[2.5rem]'>
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </p>
      <div className='flex flex-col'>
        <InputRadioAndLabel
          key='zero'
          id='zero'
          name='work_in_office_field'
          value='0'
          labelContent='0'
        />
        <InputRadioAndLabel
          key='one'
          id='one'
          name='work_in_office_field'
          value='1'
          labelContent='1'
        />
        <InputRadioAndLabel
          key='two'
          id='two'
          name='work_in_office_field'
          value='2'
          labelContent='2'
        />
        <InputRadioAndLabel
          key='three'
          id='three'
          name='work_in_office_field'
          value='3'
          labelContent='3'
        />
        <InputRadioAndLabel
          key='four'
          id='four'
          name='work_in_office_field'
          value='4'
          labelContent='4'
        />
        <InputRadioAndLabel
          key='five'
          id='five'
          name='work_in_office_field'
          value='5'
          labelContent='5'
        />
      </div>
    </>
  );
};

export default WorkInOfficeField;
