import React, { useState } from 'react';
import Typist from 'react-typist';

function Terminal(props) {
  const [showSuccess, setShowSuccess] = useState(false);

  const onTypingDone = async () => {
    window.setTimeout(function() {
      setShowSuccess(true);
    }, 2000);
    window.setTimeout(function() {
      props.history.push('/about');
    }, 3000);
  };

  return (
    <div fluid className="terminal bg-dark">
      <h1 className="text-secondary display-5 display-md-4">
        <p><span>&#x203A;</span></p>
        <span>
          <Typist
            avgTypingDelay={150}
            stdTypingDelay={50}
            onTypingDone={onTypingDone}
            startDelay={50}
            cursor={{
              blink: true,
              hideWhenDone: false
            }}
          >
            <p><span>&#x203A;</span></p>
            <Typist.Delay ms={100}></Typist.Delay>
            <p><span>&#x203A;</span></p>
            <Typist.Delay ms={50}></Typist.Delay>
            <span className="pr-2 pr-md-4">&#x203A;</span>
            <span className="text-light">iAmZakStamps();</span>
          </Typist>
        </span>
        {showSuccess && 
          <p className="text-success mt-3">Loading...</p>
        }
      </h1>
    </div>
  )
}

export default Terminal;