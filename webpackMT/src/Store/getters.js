export default {
  cityFilter: (state, getters) => {
    console.log(getters)
    return state.cityArr.filter(v => {
      if (v.id > 10) {
        return v
      }
    })
  },
  defaultCity: state => {
    return state.cityArr
  }
}
