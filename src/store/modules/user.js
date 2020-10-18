const state = () => ({
    username: '',
    email: '',
    role: '',
    isAuth: false
})

const getters = {
    isAuth: (state) => {
        return state.isAuth
    },
    getUsername: (state) => {
        return state.username
    }
}

const actions = {
    login ({ commit }, user) {
        commit('setUserData', user)
    },

    logout ({ commit }) {
        commit('setUserData', null)
    }
}

const mutations = {
    setUserData(state, userData) {
        if(userData !== null) {
            state.username = userData.username
            state.email = userData.email
            state.role = userData.role
            state.isAuth = true
        } else {
            state.username = ''
            state.email = ''
            state.role = ''
            state.isAuth = false
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}