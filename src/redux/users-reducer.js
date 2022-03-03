const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

let initialState = {
    usersPage: {
        users: [
            {
                id: 1,
                folowwed: true,
                fullName: 'Ilya',
                status: 'TechnoPunk',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                folowwed: true,
                fullName: 'Petro',
                status: 'TechnoPunk',
                location: {city: 'Moscow1', country: 'Russiaaaaasosi'}
            },
            {
                id: 3,
                folowwed: false,
                fullName: 'Dragos',
                status: 'TechnoPunk',
                location: {city: 'Moscow2', country: 'Russiansha'}
            },
            {
                id: 4,
                folowwed: false,
                fullName: 'Amirus',
                status: 'TechnoPunk',
                location: {city: 'Moscow3', country: 'Russiska'}
            }

        ]
    }
}

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                usersPage: {...state.usersPage},
                users: [...state.usersPage.users]
            }
        }
        case UNFOLLOW : {
        }
        default :
            return
    }

}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = () => ({type: UNFOLLOW})
export default UsersReducer