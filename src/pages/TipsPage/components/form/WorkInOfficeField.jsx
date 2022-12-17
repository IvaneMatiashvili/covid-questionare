const WorkInOfficeField = (props) => {
  return (
    <>
      <p className='font-bold text-[1.3rem] text-dark-100 w-[33rem] mt-[2.5rem]'>
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </p>
      <div className='flex flex-col'>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='zero'
            type='radio'
            {...props.register('WorkInOfficeField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='0'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='zero'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            0
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='one'
            type='radio'
            {...props.register('WorkInOfficeField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='1'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='one'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            1
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='two'
            type='radio'
            {...props.register('WorkInOfficeField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='2'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='two'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            2
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='three'
            type='radio'
            {...props.register('WorkInOfficeField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='3'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='three'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            3
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='four'
            type='radio'
            {...props.register('WorkInOfficeField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='4'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='four'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            4
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='five'
            type='radio'
            {...props.register('WorkInOfficeField', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            value='5'
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='five'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            5
          </label>
        </div>
      </div>
    </>
  );
};

export default WorkInOfficeField;
