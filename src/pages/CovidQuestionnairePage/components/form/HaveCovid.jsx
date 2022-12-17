const HaveCovid = (props) => {
  return (
    <>
      <div className='mt-[2.6rem]'>
        <p className='font-bold text-[1.3rem] text-dark-100'>
          გაქვს გადატანილი Covid-19?*
        </p>
        <div className='flex flex-col'>
          <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
            <input
              id='covid-yes'
              type='radio'
              value='yes'
              {...props.register('HaveCovid')}
              className='w-[1.3rem] h-[1.3rem]'
            />
            <label
              htmlFor='covid-yes'
              className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
            >
              კი
            </label>
          </div>
          <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
            <input
              id='covid-no'
              type='radio'
              value='no'
              {...props.register('HaveCovid')}
              className='w-[1.3rem] h-[1.3rem]'
            />
            <label
              htmlFor='covid-no'
              className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
            >
              არა
            </label>
          </div>
          <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
            <input
              id='covid-now'
              type='radio'
              value='now'
              {...props.register('HaveCovid', {
                required: 'გთხოვთ მონიშნეთ პასუხი',
              })}
              className='w-[1.3rem] h-[1.3rem]'
            />
            <label
              htmlFor='covid-now'
              className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
            >
              ახლა მაქვს
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default HaveCovid;
