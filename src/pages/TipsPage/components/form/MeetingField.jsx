import InputRadioAndLabel from '@/components/form/InputRadioAndLabel';

const MeetingField = (props) => {
  return (
    <>
      <p className='font-bold text-[1.3rem] text-dark-100 w-[33rem]'>
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </p>
      <div className='flex flex-col'>
        <InputRadioAndLabel
          key='twice-a-week'
          id='twice-a-week'
          register={props.register('meetingField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='twice-a-week'
          labelContent='კვირაში ორჯერ'
        />
        <InputRadioAndLabel
          key='once-a-week'
          id='once-a-week'
          register={props.register('meetingField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='onceAWeek'
          labelContent='კვირაში ერთხელ'
        />
        <InputRadioAndLabel
          key='once-a-two-week'
          id='once-a-two-week'
          register={props.register('meetingField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='onceInTwoWeeks'
          labelContent='ორ კვირაში ერთხელ'
        />
        <InputRadioAndLabel
          key='once-a-month'
          id='once-a-month'
          register={props.register('meetingField', {
            required: 'გთხოვთ მონიშნეთ პასუხი',
          })}
          value='onceAMonth'
          labelContent='თვეში ერთხელ'
        />
      </div>
    </>
  );
};

export default MeetingField;
