export const getters = {
    authintacted (state) {
        return state.loggedIn;
    },
    user(state){
        return state.user;
    }
}   