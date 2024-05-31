export default function ContactRow({contact, setSelectedContactId}){
    const {id,name, email, phone}= contact
    return(
        <tr onClick={()=>setSelectedContactId(id)}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
    </tr>
    )
}