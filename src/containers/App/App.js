import React, { useEffect, useState } from 'react';

import './App.css';

import HelloWorld from '../../components/HelloWorld/HelloWorld'
import ClassComponent from '../../components/ClassComponent/ClassComponent'

const App = () => {

  const [names, setNames] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetchAllAuthors()
  }, []);

  function addNameToNamesList() {
    const responseNames = inputValue.split(' ')
    const firstName = responseNames[0]
    const lastName = responseNames[1]
    const currentNames = names
    const newNamesList = currentNames.concat({ firstName, lastName })
    setNames(newNamesList)
  }

  function fetchAllAuthors() {
    console.log('fetchAllAuthors called')
    fetch('http://localhost:8080/api/authors')
      .then(res => res.json())
      .then(authors => setNames(authors))
  }

  function updateInputValue(event) {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <ClassComponent />
      <input value={inputValue} onChange={updateInputValue} type="text" />
      <button onClick={() => addNameToNamesList()}>Change names!</button>
      {names.map((author, index) => <HelloWorld key={index} name={`${author.firstName} ${author.lastName}`} />)}
    </div>
  )
}

export default App