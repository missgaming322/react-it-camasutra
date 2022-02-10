import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            // {id: 1, message: 'Hello', number: 33},
            // {id: 2, message: 'Moy previ trek', number: 4},
            // {id: 3, message: 'Avtor ymer', number: 12},
            // {id: 4, message: 'Tvou mat', number: 44},
            // {id: 5, message: 'Bla Bla', number: 1},

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
}

export let addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        number: 0,
    };

    console.log(state.profilePage.newPostText.trim())
    if (state.profilePage.newPostText.trim() === '') {
        return
    }else{
        state.profilePage.posts.push(newPost);
        rerenderEntireTree(state)
        textareaChanger('')
    }
};
export let deletePost = (deleteId) => {
    state.profilePage.posts.splice( deleteId -1, 1)
    rerenderEntireTree(state)

};
export let textareaChanger = (textareaValue)=> {
    state.profilePage.newPostText = textareaValue
    rerenderEntireTree(state)
};


export default state;