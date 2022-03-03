const updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT"
const sendNewMessage = "SEND-NEW-MESSAGE"

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andreq'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi Hi'},
            {id: 3, message: 'Aloha'}
        ],
        newMessageText: '',
    }

const dialogReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case updateNewMessageText: {
            stateCopy = {...state, newMessageText: action.messageValue}
            return stateCopy
        }
        case sendNewMessage: {
            if (state.newMessageText.trim() === '') return state
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            }
            debugger
            stateCopy = {...state, messages: [...state.messages, newMessage], newMessageText: ''}
            return stateCopy
        }
        default :
            return state
    }
}
export default dialogReducer;