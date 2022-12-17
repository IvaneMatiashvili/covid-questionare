const MeetingField = (props) => {
  return (
    <>
      <p className='font-bold text-[1.3rem] text-dark-100 w-[33rem]'>
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </p>
      <div className='flex flex-col'>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='twice-a-week'
            type='radio'
            {...props.register('MeetingField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='twice-a-week'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='twiceAWeek'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            კვირაში ორჯერ
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='once-a-week'
            type='radio'
            {...props.register('MeetingField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='onceAWeek'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='once-a-week'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            კვირაში ერთხელ
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='once-a-two-week'
            type='radio'
            {...props.register('MeetingField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='onceInTwoWeeks'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='once-a-two-week'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            ორ კვირაში ერთხელ
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='once-a-month'
            type='radio'
            {...props.register('MeetingField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='onceAMonth'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='once-a-month'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            თვეში ერთხელ
          </label>
        </div>
      </div>
    </>
  );
};

export default MeetingField;
