import Mock from 'mockjs'
import api from './global/api'
import loginData from './mock/json/login.json'

Mock.setup({
  timeout: '350-600',
})

Mock.mock(new RegExp(api.user.login, 'i'), 'post', loginData)

export default Mock
