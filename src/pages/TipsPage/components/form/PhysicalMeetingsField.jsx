import Textarea from '@/components/form/Textarea';

const PhysicalMeetingsField = (props) => {
  return (
    <>
      <p className='font-bold text-[1.3rem] text-dark-100 w-[33rem] mt-[2.5rem]'>
        რას ფიქრობ ფიზიკურ შეკრებებზე?
      </p>
      <Textarea
        key='physical-meetings'
        id='physical-meetings'
        register={props.register('physicalMeetingsField')}
      ></Textarea>
    </>
  );
};

export default PhysicalMeetingsField;
