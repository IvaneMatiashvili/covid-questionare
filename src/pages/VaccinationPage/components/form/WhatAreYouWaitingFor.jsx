import InputRadioAndLabel from '@/components/form/InputRadioAndLabel';

const WhatAreYouWaitingFor = (props) => {
  return (
    <div className='mt-[2.6rem]'>
      <p className='font-bold text-[1.3rem] text-dark-100'>რას ელოდები?*</p>
      <div className='flex flex-col'>
        <InputRadioAndLabel
          key='registration-yes'
          id='registration-yes'
          value='RegistrationYes'
          register={props.register('whatAreYouWaitingFor')}
          labelContent='დარეგისტრირებული ვარ და ველოდები რიცხვს'
        />
        <InputRadioAndLabel
          key='do-not-plan'
          id='do-not-plan'
          value='doNotPlan'
          register={props.register('whatAreYouWaitingFor', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          labelContent='არ ვგეგმავ'
        />
        <InputRadioAndLabel
          key='have-covid'
          id='have-covid'
          value='HaveCovid'
          register={props.register('whatAreYouWaitingFor', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          labelContent='გადატანილი მაქვს და ვგეგმავ აცრას'
        />
      </div>
    </div>
  );
};

export default WhatAreYouWaitingFor;
