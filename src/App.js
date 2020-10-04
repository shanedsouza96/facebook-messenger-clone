import React, { useState, useEffect } from 'react'
import './App.css'
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from '@material-ui/core'
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'

function App() {
  const [input, setInput] = useState('')
  //console.log(input)
  const [messages, setMessages] = useState([])
  //console.log(messages)
  const [username, setUsername] = useState('')

  //useEffect runs code on a condition

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        )
      })
  }, [])

  useEffect(() => {
    //run code here
    //const name = prompt("Please enter your name")
    setUsername(prompt('Please enter your name'))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    //all the logic to send a message goes here
    setInput('')
  }

  return (
    <div className='App'>
      <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100' />
      <h1>Redd's Messenger</h1>
      <h2>Welcome {username}</h2>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input
            className='app__input'
            placeholder='Enter a message...'
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className='app__iconButton'
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {/* messages themselves */}
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} /> //if no key it re render whole list and breaks
          //<p>{message}</p>
        ))}
      </FlipMove>
    </div>
  )
}

export default App
