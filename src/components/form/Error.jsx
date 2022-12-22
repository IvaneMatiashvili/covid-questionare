import { ErrorMessage } from '@hookform/error-message';

const Error = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className='absolute mt-2 font-arial ml-4 font-normal text-base text-text-error'>
          {message}
        </p>
      )}
    />
  );
};

export default Error;
