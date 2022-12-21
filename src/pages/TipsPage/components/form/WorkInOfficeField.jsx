import InputRadioAndLabel from '@/components/form/InputRadioAndLabel';

const WorkInOfficeField = (props) => {
  return (
    <>
      <p className='font-arial font-bold text-[1.3rem] text-dark-100 w-[33rem] mt-[2.5rem]'>
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </p>
      <div className='flex flex-col'>
        <InputRadioAndLabel
          key='zero'
          id='zero'
          register={props.register('workInOfficeField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='0'
          labelContent='0'
        />
        <InputRadioAndLabel
          key='one'
          id='one'
          register={props.register('workInOfficeField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='1'
          labelContent='1'
        />
        <InputRadioAndLabel
          key='two'
          id='two'
          register={props.register('workInOfficeField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='2'
          labelContent='2'
        />
        <InputRadioAndLabel
          key='three'
          id='three'
          register={props.register('workInOfficeField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='3'
          labelContent='3'
        />
        <InputRadioAndLabel
          key='four'
          id='four'
          register={props.register('workInOfficeField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='4'
          labelContent='4'
        />
        <InputRadioAndLabel
          key='five'
          id='five'
          register={props.register('workInOfficeField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='5'
          labelContent='5'
        />
      </div>
    </>
  );
};

export default WorkInOfficeField;
