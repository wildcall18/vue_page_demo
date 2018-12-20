<template>
  <div class="page-container">
    <div class="page-header">
      <span class="blue">&nbsp;&nbsp;白俄园区财务平台</span>
      <i>&nbsp;·&nbsp;</i>
      <span>首页&nbsp;&nbsp;</span>
    </div>
    <ul class="text-list">
      <li  >
        <div >
          <div class="line"></div>
          <a class="mask" href="#">
            <div class="button">查看详情></div>
          </a>
          <div class="news-text">
            <div class="news-text-title">{{News.title}}</div>

            <el-row :gutter="20">
              <el-col :span="12">
                <div class="news-text-pic">
                  <img src="static/img/news.jpg" class="img" alt="">
                </div>
              </el-col>
              <el-col :span="12">

                <div class="news-text-content">
                  {{News.content_1}}<br>
                  {{News.content_2}}<br>
                  {{News.content_3}}<br>
                  {{News.content_4}}<br>
                  {{News.content_5}}<br>

                </div>
              </el-col>
            </el-row>
          </div>
          <div class="other">{{News.other}}</div>
        </div>
      </li>
      <li  >
        <div class="line"></div>
        <div >

          <a class="mask" href="#">
            <div class="button">查看详情></div>
          </a>

          <div class="news-text">


            <div class="news-text-title">{{Hots.title}}</div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="news-text-pic">
                  <img src="static/img/hots.jpg" class="img"  alt="">
                </div>
              </el-col>
              <el-col :span="12">

                <div class="news-text-content">
                  {{Hots.content_1}}<br>
                  {{Hots.content_2}}<br>
                  {{Hots.content_3}}<br>
                  {{Hots.content_4}}<br>
                  {{Hots.content_5}}<br>

                </div>
              </el-col>
            </el-row>
          </div>
          <div class="other">{{Hots.other}}</div>
        </div>
      </li>
      <li  >
        <div class="line"></div>
        <div >

          <a class="mask" href="#">
            <div class="button">查看详情></div>
          </a>

          <div class="news-text">


            <div class="news-text-title">{{Tasks.title}}</div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="news-text-pic">
                  <img src="static/img/tasks.jpg" class="img"  alt="">
                </div>
              </el-col>
              <el-col :span="12">

                <div class="news-text-content">
                  {{Tasks.content_1}}<br>
                  {{Tasks.content_2}}<br>
                  {{Tasks.content_3}}<br>
                  {{Tasks.content_4}}<br>
                  {{Tasks.content_5}}<br>

                </div>
              </el-col>
            </el-row>
          </div>
          <div class="other">{{Tasks.other}}</div>
        </div>
      </li>
      <li  >
        <div class="line"></div>
        <div >

          <a class="mask" href="#">
            <div class="button">查看详情></div>
          </a>

          <div class="news-text">


            <div class="news-text-title">{{Messages.title}}</div>
            <el-row :gutter="20">
              <el-col :span="12">

              </el-col>
              <el-col :span="12">

                <div class="news-text-content">
                  {{Messages.content_1}}<br>
                  {{Messages.content_2}}<br>
                  {{Messages.content_3}}<br>
                  {{Messages.content_4}}<br>
                  {{Messages.content_5}}<br>

                </div>
              </el-col>
            </el-row>
          </div>
          <div class="other">{{Messages.other}}</div>
        </div>
      </li>
    </ul>



  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      News: 'getNews',
      Hots: 'getHots',
      Tasks: 'getTasks',
      Messages: 'getMessages',
    }),
    mounted () {

    }
  }

</script>

<style>

  .page-container {
    position: absolute;
    top: 0;
    width: calc(100% - 200px);
    z-index: 5;
    background-color: #f3f3f3;
    height: 200%;
  }

  @media screen and (max-width: 1300px) {
    .bonus-container {
      width: 1110px;
      transform: translateX(60px);
    }
  }

  @media screen and (max-width: 1600px) {
    .rightbar {
      width: 0;
    }

    .rightbar nav {
      width: 100px;
      height: 100px;
      right: 100%;
      position: absolute;
    }
  }

  .bonus-header i {
    font-size: 36px;
  }

  .page-header:before {
    display: inline-block;
    content: '';
    position: relative;
    top: -12px;
    width: 50px;
    height: 2px;
    background-color: #d5d5d5;
  }

  .page-header:after {
    display: inline-block;
    content: '';
    position: relative;
    top: -12px;
    width: 50px;
    height: 2px;
    background-color: #d5d5d5;
  }

  .line {
    position: relative;
    display: inline-block;

    width: 100%;
    height: 2px;
    background-color: #d5d5d5;
  }
  .img{
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
  }
  .page-header {
    width: 800px;
    margin: 30px auto;
  }



  .bonus-header span {
    font-size: 36px;
  }

  .blue {
    font-size: 40px;
    color: #259dfb;
  }

  .text-list {

    margin: 20px auto;
  }

  .text-list li {
    position: relative;
    display: inline-block;
    width: 45%;
    height: 45%;
    margin: 10px 10px;
    box-shadow: 5px 5px 10px #d5d5d5;
  }

  .mask {
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 16;
    background-color: #efefef;
    width: 90%;
    height: 90%;
    color: #ffffff;
  }

  .mask:hover {
    opacity: 0.8;
  }

  .button {
    margin: 300px auto;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    background-color: #19a9f5;
  }

  .news-text {
    text-align: center;
    margin-top: 16px;
  }

  .news-text-title {
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }
  .news-text-pic {

    width:400px;
    height:300px;
    margin-top: 30px;
    z-index:-10;

    border-radius: 50%;
  }

  .news-text-content {
    line-height: 30px;
    margin-top: 30px;
    margin-right: 20px;
    font-size: 16px;
  }



</style>
