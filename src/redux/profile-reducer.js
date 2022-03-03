const addPost = "ADD-POST"
const updateNewPostText = "UPDATE-NEW-POST-TEXT"
const deletePost = "DELETE-POST"

let initialState = {
        posts: [
            {id: 1, message: 'Hello', number: 33},
            {id: 2, message: 'Moy previ trek', number: 4},
            {id: 3, message: 'Avtor ymer', number: 12},
            {id: 4, message: 'Tvou mat', number: 44},
            {id: 5, message: 'Bla Bla', number: 1},

        ],
        newPostText: ''
    }

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case addPost: {
            debugger
            if (state.newPostText.trim() === '') return state
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                number: 0,
            }
            stateCopy = {...state, posts: [...state.posts, newPost], newPostText: ''}
            return stateCopy
        }
        case updateNewPostText: {
            stateCopy = {...state, newPostText: action.textareaValue}
            return stateCopy
        }
        // case deletePost:
        //     state.posts.splice(action.deleteId - 1, 1)
        //     break;
        default :
            return state
    }

}
export default profileReducer;