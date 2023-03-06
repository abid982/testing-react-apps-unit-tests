import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {/* {!changedText && <p>It's good to see you!</p>} */}
      {/* <p>It's good to see you!</p> */}
      {/* {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>} */}
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
