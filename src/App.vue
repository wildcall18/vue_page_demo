<template>
  <div class="container-main">
    <div class="sidebar">
      <ul class="dropdown">
        <li :class="{active: show === 'home'}" @click="show = 'home'">
          <router-link to="/">
            <i class="fa fa-home"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li :class="{active: show === 'news'}" @click="show = 'news'" >
          <router-link to="/news">
            <i class="fa fa-th"></i>
            <span>新闻</span>
          </router-link>
        </li>
        <li :class="{active: show === 'hots'}" @click="show = 'hots'" >
          <router-link to="/hot">
            <i class="fa fa-mobile"></i>
            <span>热点</span>
          </router-link>
        </li>
        <li :class="{active: show === 'tasks'}" class="indent" @click="show = 'tasks'">
          <router-link to="/tasks">
            <i class="fa fa-pencil"></i>
            <span>工单任务</span>
          </router-link>
        </li>
      </ul>
      <ul class="nav-user">
        <li>
          <a href="#">
            <i class="fa fa-font"></i>
            <span>显示模式</span>
          </a>
        </li>
        <li>
          <router-link to="/login">
            <i class="fa fa-sign-in"></i>
            <span>登录</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="home">
      <transition name="display" node="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .display-enter-active,
  .display-leave-active {
    transition: opacity 0.5s ease;
  }
  .display-enter, .display-leave-active {
    opacity: 0;
  }
  .container-main{
    height: 100%;
  }
  .dropdown .active{
    background-color: #e78170;
  }
  .dropdown .active a{
    color: #ffffff;
  }
  .dropdown .indent a{
    padding-left: 13px;
  }
  .nav-ul{
    display: flex;
  }
  .nav-ul li:first-child {
    margin-right: 5px;
  }
  .sidebar .fa {
    font-size: 20px;
  }
  .sidebar .fa-mobile {
    font-size: 30px;
  }
  .navbar-user .avatar{
    position: relative;
    float: right;
    width: 38px;
    height: 38px;
    display: inline-block;
    padding-right: 10px;
    margin-top: 5px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
  }
  .avatar{
    border-radius: 50%;
  }
  .avatar img{
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 50%;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1300px){
    .home{
      margin-left: 40px;
    }
    .nav-user li{
      width: 40px;
      height: 30px;
      overflow: hidden;
    }
    .sidebar{
      transition: all 0.5s;
      width: 40px;
      overflow: hidden;
    }
    .sidebar li a{
      padding: 0 auto;
      margin:0 auto;
    }
    .sidebar i{
      font-size: 30px;
    }
    .sidebar .fa{
      margin-right: 15px;
      font-size: 20px;
    }
    .sidebar .fa-mobile{
      margin-left: 4px;
      margin-right: 15px;
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1100px){
    .home{
      margin-right: 0;
    }
  }
</style>
