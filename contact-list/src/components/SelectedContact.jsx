import { useState, useEffect } from "react"
export default function SelectedContact({ setSelectedContactId,selectedContactId }) {
    const [contact, setContact] = useState(null)

    //get the single contact
    useEffect(() => {
        async function fetchSingleContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json()
                console.log(result)
                //save contact in the state variable below
                setContact(result)
            } catch (err) {
                console.error("oh no")
            }
        } fetchSingleContact()
    }, [])

    return (
        <>

            <p>selected contact</p>
            {contact ? 
            <div>
                <p>name: {contact.name}</p>
                <p>email: {contact.email}</p>
                <p>phone: {contact.phone}</p>
                <button onClick={()=> setSelectedContactId(null)}>back</button>
            </div> :
                null}

        </>
    )
}