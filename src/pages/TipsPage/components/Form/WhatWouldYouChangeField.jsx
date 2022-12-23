import { Textarea } from '@/components';

const WhatWouldYouChangeField = () => {
  return (
    <>
      <p className='font-arial font-bold text-[1.3rem] text-dark-100 w-[33rem] mt-10'>
        რას ფიქრობ არსებულ გარემოზე:
      </p>
      <p className='font-arial font-bold text-[1.3rem] text-dark-100 w-[33rem]'>
        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
      </p>
      <Textarea
        key='what-would-you-change'
        id='what-would-you-change'
        name='what_would_you_change_field'
      ></Textarea>
    </>
  );
};

export default WhatWouldYouChangeField;
