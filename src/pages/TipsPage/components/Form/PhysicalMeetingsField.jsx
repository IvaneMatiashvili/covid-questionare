import { Textarea } from '@/components';

const PhysicalMeetingsField = () => {
  return (
    <>
      <p className=' font-arial font-bold text-[1.3rem] text-dark-100 w-[33rem] mt-[2.5rem]'>
        რას ფიქრობ ფიზიკურ შეკრებებზე?
      </p>
      <Textarea
        key='physical-meetings'
        id='physical-meetings'
        name='physical_meetings_field'
      ></Textarea>
    </>
  );
};

export default PhysicalMeetingsField;
