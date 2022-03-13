import axios from "axios";

export const getContacts = () =>async (dispatch) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch ({
        type: 'GET_CONTACTS',
        payload: res.data
    })
}

export const deleteContact = (id) =>async (dispatch) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch ({
        type: 'DELETE_CONTACT',
        payload: id
    })
}