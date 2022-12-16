import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-red-100 w-[40rem] h-[20rem]'>
      <h1 className={''}>some text</h1>
      <h1></h1>

      <h1></h1>
    </div>
  );
}

export default App;
