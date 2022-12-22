const Error = ({ message }) => {
  return (
    <p className='absolute mt-2 font-arial ml-4 font-normal text-base text-text-error'>
      {message}
    </p>
  );
};

export default Error;
