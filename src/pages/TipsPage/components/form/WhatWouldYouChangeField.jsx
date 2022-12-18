import Textarea from '@/components/form/Textarea';

const WhatWouldYouChangeField = (props) => {
  return (
    <>
      <p className='font-bold text-[1.3rem] text-dark-100 w-[33rem] mt-[2.5rem]'>
        რას ფიქრობ არსებულ გარემოზე:
      </p>
      <p className='font-bold text-[1.3rem] text-dark-100 w-[33rem]'>
        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
      </p>
      <Textarea
        key='what-would-you-change'
        id='what-would-you-change'
        register={props.register('whatWouldYouChangeField')}
      ></Textarea>
    </>
  );
};

export default WhatWouldYouChangeField;
