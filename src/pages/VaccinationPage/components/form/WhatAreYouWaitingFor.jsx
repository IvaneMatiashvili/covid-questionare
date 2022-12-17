const WhatAreYouWaitingFor = (props) => {
  return (
    <div className='mt-[2.6rem]'>
      <p className='font-bold text-[1.3rem] text-dark-100'>რას ელოდები?*</p>
      <div className='flex flex-col'>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='registration-yes'
            type='radio'
            value='RegistrationYes'
            {...props.register('WhatAreYouWaitingFor')}
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='vaccination-yes'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            დარეგისტრირებული ვარ და ველოდები რიცხვს
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='do-not-plan'
            type='radio'
            value='doNotPlan'
            {...props.register('WhatAreYouWaitingFor', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='do-not-plan'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            არ ვგეგმავ
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='have-covid'
            type='radio'
            value='HaveCovid'
            {...props.register('WhatAreYouWaitingFor', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='have-covid'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            გადატანილი მაქვს და ვგეგმავ აცრას
          </label>
        </div>
      </div>
    </div>
  );
};

export default WhatAreYouWaitingFor;
