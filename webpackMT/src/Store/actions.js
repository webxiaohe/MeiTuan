export default {
  add ({commit}) {
    commit('ADD')
  },
  updatatel ({commit}, tel) {
    commit('UPDATATEL', tel)
  },
  accountupdata ({commit}, data) {
    commit('ACCOUNTUPDATA', data)
  },
  cityshow ({commit}) {
    commit('CITYSHOW')
  },
  updatacity ({commit}, cityname) {
    commit('UPDATACITY', cityname)
  },
  updatashop ({commit}, data) {
    commit('UPDATASHOP', data)
  }
}
