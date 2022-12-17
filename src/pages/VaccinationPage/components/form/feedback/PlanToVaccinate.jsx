const PlanToVaccinate = () => {
  return (
    <div>
      <p className='font-medium text-[1.25rem] ml-[4rem] mt-[2.5rem] text-dark-100'>
        ახალი პროტოკოლით კოვიდის გადატანიდან 1
      </p>
      <p className='font-medium text-[1.25rem] ml-[4rem] text-dark-100'>
        თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
      </p>
      <p className='font-medium text-[1.25rem] ml-[4rem] mt-[2.5rem] text-dark-100'>
        👉 რეგისტრაციის ბმული
      </p>
      <a
        href='https://booking.moh.gov.ge/'
        className='font-medium text-[1.25rem] ml-[4rem] text-dark-100 text-link-bg'
      >
        https://booking.moh.gov.ge/
      </a>
    </div>
  );
};

export default PlanToVaccinate;
