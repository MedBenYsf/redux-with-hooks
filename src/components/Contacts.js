import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts, deleteContact } from '../actions/contactActions';

export default function Contacts() {
    const contacts = useSelector((state)=> state.contacts.contacts);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getContacts());
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    }

  return (
    <div>
        <h2>Contacts list</h2>
        {contacts.map(c => (
            <div key={c.id}>
                <p>name: {c.name}, email: {c.email}</p>
                <button className='btn btn-danger' onClick={() => handleDelete(c.id)}>Supprimer</button>
                <hr />
            </div>

        ))}
    </div>
  )
}
