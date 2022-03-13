const initialState = {
    contacts: []
};

export const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CONTACTS': {
            return {
                ...state,
                contacts: action.payload
            }
        }
        case 'DELETE_CONTACT': {
            return {
                ...state,
                contacts: state.contacts.filter(c => c.id !== action.payload)
            }
        }
        default: {
            return state;
        }
    }
}