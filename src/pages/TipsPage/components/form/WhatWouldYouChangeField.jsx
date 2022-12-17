const WhatWouldYouChangeField = (props) => {
  return (
    <>
      <p className='font-bold text-[1.3rem] text-dark-100 w-[33rem] mt-[2.5rem]'>
        რას ფიქრობ არსებულ გარემოზე:
      </p>
      <p className='font-bold text-[1.3rem] text-dark-100 w-[33rem]'>
        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
      </p>
      <textarea
        rows='4'
        {...props.register('WhatWouldYouChangeField')}
        id='what-would-you-change'
        className='block w-full mt-[1.5rem]
         text-dark-100 font-normal text-[1rem] bg-soft-brown w-[38rem] h-[11.5rem] outline-none border-2 border-border-gray pl-[1.5rem] pt-[1rem]
         resize-none
        '
      ></textarea>
    </>
  );
};

export default WhatWouldYouChangeField;
