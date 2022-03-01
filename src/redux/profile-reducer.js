const addPost = "ADD-POST"
const updateNewPostText = "UPDATE-NEW-POST-TEXT"
const deletePost = "DELETE-POST"

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    if (action.type === addPost) {
        if (state.profilePage.newPostText.trim() === '') return
        let newPost = {
            id: state.profilePage.posts.length + 1,
            message: state.profilePage.newPostText,
            number: 0,
        }
        state.profilePage.posts.push(newPost)
        state.profilePage.newPostText = ('')

    } else if (action.type === updateNewPostText) {
        state.profilePage.newPostText = action.textareaValue
    } else if (action.type === deletePost) {
        state.profilePage.posts.splice(action.deleteId - 1, 1)
    }
    return state
}
export default profileReducer;