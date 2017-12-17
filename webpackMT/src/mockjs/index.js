import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import array from './data/slide'
import list from './data/list'
import infor from './data/infor'
import citylist from './data/citylist'
export default {
  bootStrap () {
    const mock = new MockAdapter(axios)
    mock.onGet('/slideList').reply((config) => {
      // let keys = config.params.keys
      return new Promise((resolve, reject) => {
        resolve([200, array])
      })
    })
    mock.onGet('/getList').reply((config) => {
      // console.log(config.params.key
      let key = config.params.key
      let listView = []
      listView = list.list.filter((v) => {
        v.name = key
        return v
      })
      return new Promise((resolve, reject) => {
        resolve([200, listView])
      })
    })
    mock.onGet('/getInfor').reply((config) => {
      let id = config.params.id
      console.log(config)
      let newDate = infor.inforList.filter((v) => {
        if (v.id === Number(id)) {
          return v
        }
      })
      return new Promise((resolve, reject) => {
        resolve([200, newDate])
      })
    })
    mock.onGet('/getCitylist').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, citylist.list])
      })
    })
    mock.onGet('/newList').reply((config) => {
      let title = config.params.title
      let listView = []
      if (title) {
        list.list.filter((v) => {
          if (v.title.indexOf(title) !== -1) {
            listView.push(v)
          }
        })
      }
      return new Promise((resolve, reject) => {
        resolve([200, listView])
      })
    })
    // mock.onGet('/AccountLogin').reply((config) => {
    //   let flag = false
    //   if (config.params.tel === ' 18911080746' && config.params.pwd === '123456') {
    //     flag = true
    //   }
    //   return new Promise((resolve, reject) => {
    //     resolve([200, flag])
    //   })
    // })
    mock.onPost('/AccountLogin').reply((config) => {
      let tel = JSON.parse(config.data).tel
      let pwd = JSON.parse(config.data).pwd
      let code = 1
      if (tel === '18900000000' && pwd === '123456') {
        code = 0
      }
      return new Promise((resolve, reject) => {
        resolve([200, {code: code, tel: tel, pwd: pwd}])
      })
    })
    mock.onPost('/meituanLogin').reply((config) => {
      let tel = JSON.parse(config.data).tel
      let code = 1
      if (tel === '18900000000') {
        code = 0
      }
      return new Promise((resolve, reject) => {
        resolve([200, {code: code, tel: tel}])
      })
    })
  }
}
