const Textarea = ({ register, id }) => {
  return (
    <textarea
      rows='4'
      {...register}
      id='physical-meetings'
      className='block w-full mt-[1.5rem]
         text-dark-100 font-normal text-[1rem] bg-soft-brown w-[38rem] h-[11.5rem] outline-none border-2 border-border-gray pl-[1.5rem] pt-[1rem]
         resize-none
        '
    ></textarea>
  );
};

export default Textarea;
