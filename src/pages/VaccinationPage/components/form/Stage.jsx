import InputRadioAndLabel from '@/components/form/InputRadioAndLabel';

const Stage = (props) => {
  return (
    <div className='mt-[2.6rem]'>
      <p className='font-bold text-[1.3rem] text-dark-100'>
        აირჩიე რა ეტაპზე ხარ*
      </p>
      <div className='flex flex-col'>
        <InputRadioAndLabel
          key='stage-first'
          id='stage-first'
          value='first'
          register={props.register('stage')}
          labelContent='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
        />
        <InputRadioAndLabel
          key='Stage-full'
          id='Stage-full'
          value='full'
          register={props.register('stage', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          labelContent='სრულად აცრილი ვარ'
        />
        <InputRadioAndLabel
          key='second-not'
          id='second-not'
          value='secondNot'
          register={props.register('stage', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          labelContent='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
        />
      </div>
    </div>
  );
};

export default Stage;
