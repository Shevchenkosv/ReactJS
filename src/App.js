import React, { useState, useEffect } from "react";
import Message from "./Message";
import './App.css';
function App() {
  const [messageList, SetMessageList] = useState([]);
  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'robot') {
      SetMessageList(
        (prev) => {
          let newMessageList = [...prev]
          newMessageList.push({ author: 'robot', text: 'Привет!' })
          return newMessageList
        }
      )
    }
  }, [messageList])
  return (
    <div className="App">
      {messageList.map((value, index) => {
        return (
          <Message author={value.author} text={value.text} key={index} />
        )
      })}
      <form className="send-form" action="#" onSubmit={(event) => {
        event.preventDefault();
        SetMessageList(prev => {
          let newMessageList = [...prev]
          newMessageList.push({ author, text })
          return newMessageList;
        });
      }}>
        <input type="text" placeholder="Name" onChange={(event) => {
          author = event.target.value;
        }} />
        <textarea
          rows="6"
          placeholder="Message" onChange={(event) => {
            text = event.target.value;
          }}></textarea>
        <button type="submit">Send</button>
      </form>
    </div >
  );
}

export default App;
