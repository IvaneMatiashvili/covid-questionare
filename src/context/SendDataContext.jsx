import React, { useState } from 'react'

const SendDataContext = React.createContext({
  identity: {
    name: '',
    setName: (prev) => {},
    lastName: '',
    setLastName: (prev) => {},
    email: '',
    setEmail: (prev) => {},
  },
  covidQuestionnaire: {
    haveCovid: '',
    setHaveCovid: (prev) => {},
    haveAntibodies: '',
    setHaveAntibodies: (prev) => {},
    covidSicknessDate: '',
    setCovidSicknessDate: (prev) => {},
    antibodiesQuantity: '',
    setAntibodiesQuantity: (prev) => {},
    testDate: '',
    setTestDate: (prev) => {},
  },
  vaccination: {
    haveVaccination: '',
    setHaveVaccination: (prev) => {},
    stage: '',
    setStage: (prev) => {},
    whatAreYouWaitingFor: '',
    setWhatAreYouWaitingFor: (prev) => {},
  },
  tips: {
    meetingField: '',
    setMeetingField: (prev) => {},
    workInOfficeField: '',
    setWorkInOfficeField: (prev) => {},
    physicalMeetingsField: '',
    setPhysicalMeetingsField: (prev) => {},
    whatWouldYouChangeField: '',
    setWhatWouldYouChangeField: (prev) => {},
  },
})

export const SendDataContextProvider = (props) => {
  const [name, setName] = useState(localStorage.getItem('name'))
  const [lastName, setLastName] = useState(localStorage.getItem('lastName'))
  const [email, setEmail] = useState(localStorage.getItem('email'))

  const [haveCovid, setHaveCovid] = useState(localStorage.getItem('haveCovid'))
  const [haveAntibodies, setHaveAntibodies] = useState(
    localStorage.getItem('haveAntibodies')
  )
  const [covidSicknessDate, setCovidSicknessDate] = useState(
    localStorage.getItem('covidSicknessDate')
  )
  const [antibodiesQuantity, setAntibodiesQuantity] = useState(
    localStorage.getItem('antibodiesQuantity')
  )
  const [testDate, setTestDate] = useState(localStorage.getItem('testDate'))

  const [haveVaccination, setHaveVaccination] = useState(
    localStorage.getItem('haveVaccination')
  )
  const [stage, setStage] = useState(localStorage.getItem('stage'))
  const [whatAreYouWaitingFor, setWhatAreYouWaitingFor] = useState(
    localStorage.getItem('whatAreYouWaitingFor')
  )

  const [meetingField, setMeetingField] = useState(
    localStorage.getItem('meetingField')
  )
  const [workInOfficeField, setWorkInOfficeField] = useState(
    localStorage.getItem('workInOfficeField')
  )
  const [physicalMeetingsField, setPhysicalMeetingsField] = useState(
    localStorage.getItem('physicalMeetingsField')
  )
  const [whatWouldYouChangeField, setWhatWouldYouChangeField] = useState(
    localStorage.getItem('whatWouldYouChangeField')
  )

  return (
    <SendDataContext.Provider
      value={{
        identity: {
          name: name,
          setName: setName,
          lastName: lastName,
          setLastName: setLastName,
          email: email,
          setEmail: setEmail,
        },
        covidQuestionnaire: {
          haveCovid: haveCovid,
          setHaveCovid: setHaveCovid,
          haveAntibodies: haveAntibodies,
          setHaveAntibodies: setHaveAntibodies,
          covidSicknessDate: covidSicknessDate,
          setCovidSicknessDate: setCovidSicknessDate,
          antibodiesQuantity: antibodiesQuantity,
          setAntibodiesQuantity: setAntibodiesQuantity,
          testDate: testDate,
          setTestDate: setTestDate,
        },
        vaccination: {
          haveVaccination: haveVaccination,
          setHaveVaccination: setHaveVaccination,
          stage: stage,
          setStage: setStage,
          whatAreYouWaitingFor: whatAreYouWaitingFor,
          setWhatAreYouWaitingFor: setWhatAreYouWaitingFor,
        },
        tips: {
          meetingField: meetingField,
          setMeetingField: setMeetingField,
          workInOfficeField: workInOfficeField,
          setWorkInOfficeField: setWorkInOfficeField,
          physicalMeetingsField: physicalMeetingsField,
          setPhysicalMeetingsField: setPhysicalMeetingsField,
          whatWouldYouChangeField: whatWouldYouChangeField,
          setWhatWouldYouChangeField: setWhatWouldYouChangeField,
        },
      }}
    >
      {props.children}
    </SendDataContext.Provider>
  )
}

export default SendDataContext
