import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';

export const Route = createFileRoute('/hello')({
  component: Hello,
})

function Hello () {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
