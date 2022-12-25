import React, { useReducer } from 'react'

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

  const reducer = (state, action) => {
    switch (action.type) {
      case 'identity': {
        return {
          ...state,
          identity: {
            name: action.value.name,
            last_name: action.value.last_name,
            email: action.value.email,
          },
        }
      }

      case 'covid': {
        return {
          ...state,
          covid: {
            have_covid: action.value.have_covid,
            have_antibodies: action.value.have_antibodies,
            covid_sickness_date: action.value.covid_sickness_date,
            antibodies_quantity: action.value.antibodies_quantity,
            test_date: action.value.test_date,
          },
        }
      }
      case 'vaccination': {
        return {
          ...state,
          vaccination: {
            have_vaccination: action.value.have_vaccination,
            stage: action.value.stage,
            what_are_you_waiting_for: action.value.what_are_you_waiting_for,
          },
        }
      }
      case 'tips': {
        return {
          ...state,
          tips: {
            meeting_field: action.value.meeting_field,
            work_in_office_field: action.value.work_in_office_field,
            physical_meetings_field: action.value.physical_meetings_field,
            what_would_you_change_field:
              action.value.what_would_you_change_field,
          },
        }
      }

      default:
        return state
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
