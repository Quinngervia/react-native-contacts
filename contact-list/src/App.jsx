import { useState } from 'react'
import ContactList from './components/ContactList'
import './App.css'
import SelectedContact from './components/SelectedContact'
import ContactForm from './components/ContactForm'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {/* use a ternary to conditionally render contactList or selectedContact */}
      {selectedContactId ?

        <SelectedContact
          setSelectedContactId={setSelectedContactId}
          selectedContactId={selectedContactId} /> :

        <div>
          <ContactForm />
          <ContactList
            setSelectedContactId={setSelectedContactId} />
        </div>}
        
      // {/* //if we are showing all, render ContactList */}
      // {/* <ContactList /> */}
      // {/* //otherwise, if we click on contact, render selectedContact */}
      // {/* //<SingleContact/> */}
    </>
  )
}

export default App
