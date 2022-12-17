const Stage = (props) => {
  return (
    <div className='mt-[2.6rem]'>
      <p className='font-bold text-[1.3rem] text-dark-100'>
        აირჩიე რა ეტაპზე ხარ*
      </p>
      <div className='flex flex-col'>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='stage-first'
            type='radio'
            value='first'
            {...props.register('Stage')}
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='stage-first'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='Stage-full'
            type='radio'
            value='full'
            {...props.register('Stage', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='Stage-full'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            სრულად აცრილი ვარ
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='second-not'
            type='radio'
            value='secondNot'
            {...props.register('Stage', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='second-not'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
          </label>
        </div>
      </div>
    </div>
  );
};

export default Stage;
