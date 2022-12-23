import { InputRadioAndLabel } from '@/components';

const MeetingField = () => {
  return (
    <>
      <p className='font-arial font-bold text-[1.3rem] text-dark-100 w-[33rem]'>
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </p>
      <div className='flex flex-col'>
        <InputRadioAndLabel
          key='twice-a-week'
          id='twice-a-week'
          name='meeting_field'
          value='twice_a_week'
          labelContent='კვირაში ორჯერ'
        />
        <InputRadioAndLabel
          key='once-a-week'
          id='once-a-week'
          name='meeting_field'
          value='once_a_week'
          labelContent='კვირაში ერთხელ'
        />
        <InputRadioAndLabel
          key='once-a-two-week'
          id='once-a-two-week'
          name='meeting_field'
          value='once_in_a_two_weeks'
          labelContent='ორ კვირაში ერთხელ'
        />
        <InputRadioAndLabel
          key='once-a-month'
          id='once-a-month'
          name='meeting_field'
          value='once_in_a_month'
          labelContent='თვეში ერთხელ'
        />
      </div>
    </>
  );
};

export default MeetingField;
