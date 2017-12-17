import Mock from 'mockjs'
const list = Mock.mock({
  'list|10': [
    {
      'src|1': [
        'src/assets/images/imgs/imgs_05.jpg',
        'src/assets/images/imgs/imgs_04.png',
        'src/assets/images/imgs/imgs_07.jpg',
        'src/assets/images/imgs/imgs_06.jpg',
        'src/assets/images/imgs/imgs_08.jpg'
      ],
      'title|1': [
        '香山公园',
        '颐和园',
        '故宫',
        '798艺术区',
        '长城',
        '十渡',
        '天安门',
        '圆明园'
      ],
      name: '@ctitle(3, 5)',
      'infor|1': [
        '[王府井/东单]1斤鱼头券3选1'
      ],
      'price': 29.9,
      menprice: 109,
      bought: 270,
      'id|1-100': 100
    }
  ]
})
export default list
