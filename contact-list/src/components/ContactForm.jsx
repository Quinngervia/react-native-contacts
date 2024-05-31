import { useState } from "react"

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    async function createContact(event) {
        event.preventDefault()
        //fetch request to send data to api
        //consolelog the result
        let response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let result = await response.json()
        console.log(result)
    }

    return (
        <>
            <h1>Add a Contact</h1>
            <form onSubmit={createContact}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)}></input>

                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>

                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)}></input>

                <input type="submit" value="submit"></input>
            </form>
        </>
    )
}