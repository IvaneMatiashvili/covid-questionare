const inputTypeText = ({ id, register, placeholder, labelContent }) => {
  return (
    <>
      <label
        htmlFor='name'
        className='block text-[1.4rem] font-arial font-bold text-dark-100 mt-[2.5rem]'
      >
        {labelContent}
      </label>
      <input
        {...register}
        id={id}
        placeholder={placeholder}
        className='placeholder-gray-500 placeholder-4 placeholder-base font-arial text-dark-100 font-normal text-[1rem] bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-[0.5rem] border-2 border-border-gray pl-[24px]'
      />
    </>
  );
};

export default inputTypeText;
