export default {
  ADD (state) {
    state.count ++
  },
  UPDATATEL (state, tel) {
    state.tel = tel
  },
  ACCOUNTUPDATA (state, data) {
    state.tel = data.tel
    state.pwd = data.pwd
  },
  CITYSHOW (state) {
    state.isShow = !state.isShow
  },
  UPDATACITY (state, cityname) {
    state.cityName = cityname
  },
  UPDATASHOP (state, data) {
    state.viewlist = data
  }
}
