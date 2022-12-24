import React, { useState, useReducer } from 'react'

const SendDataContext = React.createContext({
  reducerState: {},
  dispatch: () => {},
})

export const SendDataContextProvider = (props) => {
  const initialState = {
    identity: {
      name: localStorage.getItem('name'),
      last_name: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
    },
    covid: {
      have_covid: localStorage.getItem('haveCovid'),
      have_antibodies: localStorage.getItem('haveAntibodies'),
      covid_sickness_date: localStorage.getItem('covidSicknessDate'),
      antibodies_quantity: localStorage.getItem('antibodiesQuantity'),
      test_date: localStorage.getItem('testDate'),
    },
    vaccination: {
      have_vaccination: localStorage.getItem('haveVaccination'),

      stage: localStorage.getItem('stage'),
      what_are_you_waiting_for: localStorage.getItem('whatAreYouWaitingFor'),
    },
    tips: {
      meeting_field: localStorage.getItem('meetingField'),
      work_in_office_field: localStorage.getItem('workInOfficeField'),
      physical_meetings_field: localStorage.getItem('physicalMeetingsField'),
      what_would_you_change_field: localStorage.getItem(
        'whatWouldYouChangeField'
      ),
    },
  }

  function reducer(state, action) {
    return {
      ...state,
      [action.key]: action.value,
    }
  }

  const [reducerState, dispatch] = useReducer(reducer, initialState)

  return (
    <SendDataContext.Provider
      value={{
        reducerState,
        dispatch,
      }}
    >
      {props.children}
    </SendDataContext.Provider>
  )
}

export default SendDataContext
