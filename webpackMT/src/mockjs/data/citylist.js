import Mock from 'mockjs'
let cityList = Mock.mock({
  'list|20': [
    {
      province: '@province()',
      'citylist|10': [
        {
          city: '@city()'
        }
      ]
    }
  ]
})
export default cityList
