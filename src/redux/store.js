import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', number: 33},
                {id: 2, message: 'Moy previ trek', number: 4},
                {id: 3, message: 'Avtor ymer', number: 12},
                {id: 4, message: 'Tvou mat', number: 44},
                {id: 5, message: 'Bla Bla', number: 1},

            ],
            newPostText: '',
        },

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
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch: function (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._callSubscriber(this)
    }


}
export const updateNewPostTextActionCreator = (textareaValue) => {
    return {
        type: "UPDATE-NEW-POST-TEXT", textareaValue: textareaValue
    }
}
export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}
export const deletePostActionCreator = (deleteId) => {
    return {
        type: "DELETE-POST", deleteId: deleteId
    }
}
// ИЗМЕНЯЕТ TEXTAREA В UI
export const updateNewMessageTextActionCreator = (messageValue) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT", messageValue: messageValue
    }
}
// добавляет новое сообщение
export const sendNewMessageActionCreator = () => {
    return {
        type: "SEND-NEW-MESSAGE"
    }
}
export default store;
window.store = store;