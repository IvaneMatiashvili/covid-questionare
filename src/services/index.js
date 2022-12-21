import axios from 'axios';
import moment from 'moment';

const getRegisterRequest = async (enteredValues) => {
  const data = {};
  data['first_name'] = enteredValues.name;
  data['last_name'] = enteredValues.lastName;
  data['email'] = enteredValues.email;
  data['had_covid'] = enteredValues.haveCovid;
  if (enteredValues.haveCovid === 'yes') {
    if (enteredValues.haveAntibodies === 'no') {
      data['had_antibody_test'] = false;
      let date = moment(new Date(enteredValues.covidSicknessDate)).format(
        'DD/MM/YYYY'
      );
      data['covid_sickness_date'] = date;
    } else {
      data['had_antibody_test'] = true;
      const antibodies = {
        test_date: new Date(enteredValues.testDate).toISOString(),
        number: enteredValues.antibodiesQuantity,
      };
      data['antibodies'] = antibodies;
    }
  }

  if (enteredValues.haveVaccination === 'yes') {
    data['had_vaccine'] = true;
    data['vaccination_stage'] = enteredValues.stage;
  } else {
    data['had_vaccine'] = false;
    data['i_am_waiting'] = enteredValues.whatAreYouWaitingFor;
  }
  data['non_formal_meetings'] = enteredValues.meetingField;
  data['number_of_days_from_office'] = enteredValues.workInOfficeField;
  if (enteredValues.physicalMeetingsField.trim().length === 0) {
    data['what_about_meetings_in_live'] = '0';
  } else {
    data['what_about_meetings_in_live'] = enteredValues.physicalMeetingsField;
  }
  if (enteredValues.whatWouldYouChangeField.trim().length === 0) {
    data['tell_us_your_opinion_about_us'] = '0';
  } else {
    data['tell_us_your_opinion_about_us'] =
      enteredValues.whatWouldYouChangeField;
  }
  const res = await axios({
    method: 'post',
    url: 'https://covid19.devtest.ge/api/create',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  });
  console.log(res);
};

export default getRegisterRequest;
