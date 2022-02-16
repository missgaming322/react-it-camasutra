const addPost = "ADD-POST"
const updateNewPostText = "UPDATE-NEW-POST-TEXT"
const deletePost = "DELETE-POST"

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

            ]
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



    dispatch(action) {
        if (action.type === addPost) {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                number: 0,
            };

            if (this._state.profilePage.newPostText.trim() === '') {
                return
            } else {
                this._state.profilePage.posts.push(newPost);
                this._callSubscriber(this._state)
                this._state.profilePage.newPostText = ('')
            }
        } else if (action.type === updateNewPostText) {
            this._state.profilePage.newPostText = action.textareaValue
            this._callSubscriber(this._state)
        } else if (action.type === deletePost) {
            this._state.profilePage.posts.splice(action.deleteId - 1, 1)
            this._callSubscriber(this._state)

        }
    }


}
export const deletePostActionCreator = (deleteId) => {
    return {
        type: "DELETE-POST", deleteId: deleteId
    }
}
export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}
export const updateNewPostTextActionCreator = (textareaValue) => {
    return {
        type: "UPDATE-NEW-POST-TEXT", textareaValue: textareaValue
    }
}
export default store;
window.store = store;