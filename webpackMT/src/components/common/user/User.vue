<template>
 <div class="user">
    <header class="navbar">
      <div class="navbar-wrap-left navbar-aside" @click="toIndex">
        <i class="fa fa-angle-left"></i>
      </div>
      <h1>美团网</h1>
      <div class="navbar-wrap-right navbar-aside">
        <i class="fa fa-reorder"></i>
      </div>
    </header>
    <div class="login-wrap">
      <ul class="list" @click="accountLogin()">
        <li :class="{active: cname}"><a>美团账号登录</a></li>
        <li :class="{active: cName}"><a>手机账号登录</a></li>
      </ul>
      <div class="user-infor">
        <p>
          <input type="text" class="ipt" name="name" v-model="tel" @focus="getFocus" placeholder="账号名/手机号/Email">
          <input type="button" class="code-btn" v-show="cName" v-model="getcode" @click="getAccount($event)">
        </p>
        <p>
          <input type="text" class="ipt" name="pwd" v-show='cName' placeholder="请输入验证码" v-model="code">
          <input type="password" class="ipt" v-model="pwd" name="pwd" :class="{on: cName}" v-show="cname"  placeholder="请输入您的密码">
        </p>
      </div>
      <div class="login-btn">
        <button @click="toLogin">登录</button>
      </div>
      <div class="change-list">
        <ul>
          <li>立即注册</li>
          <li>找回密码</li>
        </ul>
      </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'user',
  data () {
    return {
      cname: true,
      cName: false,
      tel: '',
      code: '',
      pwd: '',
      getcode: '获取验证码'
    }
  },
  methods: {
    toIndex () {
      this.$router.push('/')
      location.reload()
    },
    accountLogin () {
      this.cname = !this.cname
      this.cName = !this.cName
      if (this.cName) {
        this.tel = '请输入手机号'
      }
      if (this.cname) {
        this.tel = ''
      }
    },
    getAccount (event) {
      let time = 60
      let that = this
      let reg = /^1[3578]\d{9}$/
      let timer = setInterval(function () {
        time--
        if (time < 0) {
          that.getcode = '获取验证码失败'
          clearInterval(timer)
        } else {
          if (reg.test(that.tel.trim())) {
            that.getcode = that.getRandom()
            clearInterval(timer)
          }
        }
      }, 1000)
    },
    getRandom () {
      let str = []
      for (let i = 0; str.length < 4; i++) {
        let random = Number.parseInt(Math.random() * 10)
        if (str.indexOf(random) === -1) {
          str.push(random)
        }
      }
      return str.join('')
    },
    getFocus () {
      this.tel = ' '
    },
    toLogin () {
      if (this.cname) {
        // axios.get('/AccountLogin', {
        //   params: {
        //     tel: this.tel,
        //     pwd: this.pwd
        //   }
        // }).then(res => {
        //   if (res.data) {
        //     this.$router.push('/my')
        //   }
        // })
        axios.post('/AccountLogin', {
          tel: this.tel.trim(),
          pwd: this.pwd.trim()
        }).then(res => {
          if (res.data.code === 0) {
            this.$store.dispatch('accountupdata', res.data)
            this.$router.push('/my')
          }
        })
      } else if (this.cName) {
        if (this.getcode === this.code) {
          axios.post('/meituanLogin', {
            tel: this.tel.trim()
          }).then(res => {
            if (res.data.code === 0) {
              this.$store.dispatch('updatatel', res.data.tel)
              this.$router.push('/my')
            }
          })
        }
      }
    }
  }
}
</script>

<style scoped>
  @import './user.css'
</style>