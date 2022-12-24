import { InputRadioAndLabel } from '@/components'

const WhatAreYouWaitingFor = () => {
  return (
    <div className='mt-[2.6rem]'>
      <p className='font-arial font-bold text-[1.3rem] text-dark-100'>
        რას ელოდები?*
      </p>
      <div className='flex flex-col'>
        <InputRadioAndLabel
          key='registration-yes'
          id='registration-yes'
          value='registered_and_waiting'
          name='what_are_you_waiting_for'
          labelContent='დარეგისტრირებული ვარ და ველოდები რიცხვს'
        />
        <InputRadioAndLabel
          key='do-not-plan'
          id='do-not-plan'
          value='not_planning'
          name='what_are_you_waiting_for'
          labelContent='არ ვგეგმავ'
        />
        <InputRadioAndLabel
          key='have-covid'
          id='have-covid'
          value='had_covid_and_planning_to_be_vaccinated'
          name='what_are_you_waiting_for'
          labelContent='გადატანილი მაქვს და ვგეგმავ აცრას'
        />
      </div>
    </div>
  )
}

export default WhatAreYouWaitingFor
