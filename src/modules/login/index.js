import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, message, Checkbox } from 'antd'
import loginName from 'images/login/user.png'
import passWord from 'images/login/password.png'
import logo from 'images/login/logo.png'
import qiu from 'images/login/qiu.png'
import dianshang from 'images/login/dianshang.png'
import style from './index.less'
import { userLoginAct } from './reduck'
import storage from '../../utils/storage'
import * as urls from '../../global/routepath'

class Login extends Component {
  state = {
    loginType: 2,
    userName: '',
    password: ''
  }

  componentWillMount() {
    const userInfo = storage.get('user')
    if (userInfo && userInfo.accessToken) {
      this.props.history.replace(urls.HOME)
    }
  }

  getUerName = e => {
    this.setState({ userName: e.target.value })
  }

  getPwd = e => {
    this.setState({ password: e.target.value })
  }

  login = () => {
    let userName = this.state.userName
    let password = this.state.password
    if (userName === '') {
      message.error('请输入账号')
      return
    }

    if (password === '') {
      message.error('请输入密码')
      return
    }

    this.props.dispatch(userLoginAct({ userName, password }))
      .then(res => {
        if (res && res.code === 0) {
          this.props.history.replace(urls.HOME)
        }
      })
  }

  render() {
    return (
      <div className={style['wrapper']}>
        <div className={style['wrap']}>
          <img className={style['img-qiu']} src={qiu} />
          <div className={style['logo-title-wrap']}>
            <img className={style['logo']} src={logo} />
            <div className={style['title']}>管理后台模版</div>
          </div>
          <div className={style['login-flex-wrap']}>
            <img className={style['img-dianshang']} src={dianshang} />
            <div className={style['user-login-wrap']}>
              <div className={style['input-row']}>
                <div className={style['icon']}>
                  <img src={loginName} />
                </div>
                <Input type='text' className={style['input']} onChange={this.getUerName} />
              </div>
              <div className={style['input-row']}>
                <div className={style['icon']}>
                  <img src={passWord} />
                </div>
                <Input type='password' className={style['input']} onChange={this.getPwd} />
              </div>
              <Checkbox className={style['rember-password']}>记住密码</Checkbox>
              <Button type='primary' className={style['btn-login']} onClick={this.login}>
                登&nbsp;&nbsp;录
              </Button>
            </div>
          </div>
          <div className={style['bottom-img']} />
          <div className={style['trapezoid']} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userLogin
  }
}

export default connect(mapStateToProps)(Login)
