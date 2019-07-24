import React, { useState } from 'react';

import './App.css';

import HelloWorld from '../../components/HelloWorld/HelloWorld'

export default () => {

  const [names, setNames] = useState(["Donny", "Ben", "Kendra"])

  return (
    <div>
      {names.map(name => <HelloWorld name={name} />)}
      <button onClick={() => setNames(names.concat("Charles"))}>Change names!</button>
    </div>
  )
}
