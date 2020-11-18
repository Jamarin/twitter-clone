const state = () => ({
    username: '',
    email: '',
    role: '',
    id: '',
    image: '',
    isAuth: false,
    token: '',
    following: [],
    follower: []
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
    getToken: (state) => {
        return state.token
    },
    getFollowing: (state) => {
        return state.following
    },
    getFollower: (state) => {
        return state.follower
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
            state.id = userData.id
            state.image = userData.image
            state.token = userData.token
            state.following = userData.following
            state.follower = userData.follower
        } else {
            state.username = ''
            state.email = ''
            state.role = ''
            state.isAuth = false
            state.id = ''
            state.image = ''
            state.token = ''
            state.following = []
            state.follower = []
        }
    },
    setFollowing(state, following) {
        state.following = following
    },
    setFollower(state, follower) {
        state.follower = follower
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}