const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null

    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      if (parsed.rw_user) {
        try {
          user = JSON.parse(parsed.rw_user)
        } catch (err) {
          console.log(err)
        }
      }

      commit('setUser', user)
    }
  }
}