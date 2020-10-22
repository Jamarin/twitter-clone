const state = () => ({
    username: '',
    email: '',
    role: '',
    id: '',
    image: '',
    isAuth: false
})

const getters = {
    isAuth: (state) => {
        return state.isAuth
    },
    getId: (state) => {
        return state.id
    },
    getUsername: (state) => {
        return state.username
    },
    getAvatar: (state) => {
        return state.image
    },
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
            state.id = userData.id
            state.image = userData.image
        } else {
            state.username = ''
            state.email = ''
            state.role = ''
            state.isAuth = false
            state.id = ''
            state.image = ''
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