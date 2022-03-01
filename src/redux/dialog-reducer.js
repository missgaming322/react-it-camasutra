const updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT"
const sendNewMessage = "SEND-NEW-MESSAGE"

let initialState = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andreq'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi Hi'},
            {id: 3, message: 'Aloha'},
        ],
        newMessageText: '',
    },
}

const dialogReducer = (state = initialState, action) => {
    if (action.type === updateNewMessageText) {
        state.dialogsPage.newMessageText = action.messageValue
    } else if (action.type === sendNewMessage) {
        if (state.dialogsPage.newMessageText.trim() === '') return
        let newMessage = {
            id: state.dialogsPage.messages.length + 1,
            message: state.dialogsPage.newMessageText,
        }
        state.dialogsPage.messages.push(newMessage)
        state.dialogsPage.newMessageText = ''
    }
    return state
}
export default dialogReducer;