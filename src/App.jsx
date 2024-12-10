import { useState } from "react";
import { Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from "./components/NavBar";
import MailboxDetails from "./components/MailboxDetails"
import MailboxForm from "./components/MailboxForm"
import MailboxList from "./components/MailboxList"

const initialState = [{
  _id: 0,
  boxSize: "",
  boxHolder: "",
}]

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState)

  const addBox = (newMailBox) => {
    newMailBox._id = mailboxes[mailboxes.length - 1]._id + 1
    setMailboxes([...mailboxes, newMailBox])
  }

  return (
    <>
    <NavBar />
    <h1>Mailbox List</h1>
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
      <Route path="/new-mailbox" element={<MailboxForm  addBox={addBox}  />} />
      <Route path="/mailboxes/:id" element={<MailboxDetails mailboxData={mailboxes}/>} />      
    </Routes>
  </>
  )
};

export default App;
