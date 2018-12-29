<template>
  <div class="page-container">
    <div class="page-header">
      <span class="blue">&nbsp;&nbsp;管理平台演示</span>
      <i>&nbsp;·&nbsp;</i>
      <span>首页&nbsp;&nbsp;</span>
    </div>

      <el-row :gutter="20">
        <el-col :span="16">
        <div >


          <div class="news-list" shadow="hover">
            <div class="triangleTit"><span>{{News.title}}<em></em><i></i></span></div>
            <div class="News-other">{{News.other}}</div>
            <div class="line"></div>
            <ul class="news-tophot">
              <li  >
                <div>
                  <img v-bind:src= "hotTopPic" class="imgHot" alt="">

                </div>
              </li  >
              <li  >
                <div class="news-tophot-title">
                  {{News.hotTop.title}}

                </div>
                <div class="news-tophot-summary">
                  {{News.hotTop.summary}}
                </div>

              </li  >
            </ul>
            <ul class="news-sub-list">
              <li v-for="subnewsItem in News.subNews" >
                <div>
                  <img  v-bind:src= "subnewsItem.pic" class="imgHot" alt="">
                </div>
                <div class="newssub-title">
                  {{subnewsItem.title}}
                </div>
                <div class="newssub-date">
                  {{subnewsItem.date}}
                </div>
              </li  >

            </ul>



          </div>

        </div>
          <el-card shadow="hover" style="height:230px;margin: 10px;clear:both ">
            <div slot="header" class="clearfix">
              <span>{{Tasks.title}}</span>

            </div>

            <div  style="float:left ">
              <el-table :data="Tasks.taskList" :show-header="false" height="140" style="font-size:14px;">

                <el-table-column width="100">
                  <template slot-scope="scope">
                    <div class="todo-item" >{{scope.row.title}}</div>
                  </template>
                </el-table-column>
                <el-table-column width="400">
                  <template slot-scope="scope">
                    <div class="todo-item" >{{scope.row.content}}</div>
                  </template>
                </el-table-column>
                <el-table-column width="60">
                  <template slot-scope="scope">
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-delete"></i>
                  </template>
                </el-table-column>
                <el-table-column >

                </el-table-column>
              </el-table>

            </div>

          </el-card>
        </el-col>
          <el-col :span="8">
             <div class="hots-contain" shadow="hover">
               <div class="hots-list-title">{{Hots.title}}</div>
               <div class="line"></div>
                 <ul class="hots-list">
                   <li  v-for="hotItem in Hots.hots" >

                   <div class="hots-icon">
                     <img  src= "static/icon/hot.png">
                    </div>
                     <div class="hots-title">
                  {{hotItem}}<br>
                </div>
              </li  >
              <div class="hots-other">{{Hots.other}}</div>
            </ul>


            </div>


            <el-card shadow="hover" style="height:430px;margin: 10px">
              <div slot="header" class="clearfix">
                <span>{{Messages.title}}</span>

              </div>
              <el-table :data="Messages.msgList" :show-header="false" height="310" style="width: 100%;font-size:14px;">
                <el-table-column width="40">
                  <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.status"></el-checkbox>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot-scope="scope">
                    <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
                  </template>
                </el-table-column>
                <el-table-column width="60">
                  <template slot-scope="scope">
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-delete"></i>
                  </template>
                </el-table-column>
              </el-table>
              <div class="hots-other">{{Messages.other}}</div>
            </el-card>
          </el-col>

        </el-row>








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

      this.hotTopPic = this.News.hotTop.pic;

    },

    data () {
      return {
       hotTopPic:'',

      }
    },
  }

</script>

<style>

  .page-container {
    position: absolute;
    top: 0;
    width: calc(100% - 200px);
    z-index: 5;
    background-color: #ebebeb;
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
    font-size: 30px;
    color: #259dfb;
  }





  .news-list {
    text-align: center;
    margin-top: 16px;
    display: block;
    height: 660px;
    margin: 10px 10px;
    box-shadow: 10px 10px 10px #cdcdcd;
    background-color: white;
  }


  .news-tophot {
    font-size: 18px;
    margin: 20px auto;
  }

  .news-tophot li {
  float:left;
    position: relative;
    display: inline-block;
    width: 45%;


  }
  .news-tophot li:hover {
    margin-top: 2px;
  }
   .news-tophot-title {
    font-size: 16px;
    display: block;
     margin: 15px ;
     padding-top:30px;
  }
  .news-tophot-summary {
    font-size: 14px;
    height: 150px;
    line-height: 30px;
    display: inline-block;
    margin:  5px ;
    padding-bottom:5px;
    padding-top:15px;
  }
  .news-tophot-date {
    font-size: 14px;

    padding-right:5px;
   color: red;
  }
  .imgHot{
    width:280px;
    height:200px;
    margin-top: 15px;
    margin-left: 15px;

  }
  .imgHot:hover {
    margin-top: 2px;
  }
  .news-sub-list li {
    float:left;
    position: relative;
    display: inline-block;
    width: 32%;


  }
  .newssub-title {
    font-size: 16px;

    margin: 10px ;
  }
  .newssub-date {
    font-size: 14px;

    margin-right: 10px ;
    margin-bottom: 30px ;
    color:blue;
  }
  .imgNewsSub{
    width:auto;
    height:auto;
    margin-top: 15px;
    margin-left: 15px;
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
  .hots-contain {

    margin-top: 5px;
    display: block;
    height: 460px;
    margin: 10px;

    background-color: white;
  }
  .hots-list-title {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    text-align: left;
  }
  .hots-list {
    text-align: left;
    margin-top: 0px;
    display: block;

    overflow:hidden
  }
  .hots-icon {
    float: left;
    height: 40px;

    width:25px;

  }
  .hots-icon img{
    width: 20px;
    margin: 10px ;
    border: 1px solid green;
  }
  .hots-title {
    font-size: 16px;
    line-height: 40px;
    margin: 20px ;
    width: auto;
    text-align: left;
    padding-left:45px;

  }
  .hots-other {
    text-align: left;
    margin-left: 16px;

    margin-bottom: 16px;
    font-size: 16px;
    color: #1D71B7 ;
  }
  .News-other {
    text-align: right;
    margin-right: 5px;
    margin-bottom: 5px;
    padding-bottom: 30px;
    font-size: 16px;
    color: #1D71B7 ;
    background-color: white;


  }
  .tasks-other {
    text-align: left;
    margin-left: 16px;

    margin-bottom: 16px;
    claer:both;
    display:block;
    font-size: 16px;
    color: #1D71B7 ;
  }
  .triangleTit { background:white; overflow:hidden; clear:both; padding:10px 10px 10px 0;float:left }
  .triangleTit span, .triangleTit a { display: block; font:20px/50px "Microsoft YaHei","微软雅黑";}
  .triangleTit span { float:left; position: relative; box-shadow: 12px 12px 0 #9ABCD8; padding: 0 50px 0 60px; color: #FFF; background:#1D71B7  20px -20px no-repeat;}
  .triangleTit em,.triangleTit i  { position: absolute; width: 0; height: 0; bottom:0;}
  .triangleTit em { right: -10px; border-left:10px solid #1D71B7; border-top:50px solid transparent; }
  .triangleTit i { right: -20px; border-left:8px solid #9ABCD8; border-top:40px solid transparent; }
  .triangleTit a { float: right; font:28px/50px "宋体"; color:#1D71B7;}

  .todo-item {
    font-size: 14px;
  }

  .todo-item-del {
    text-decoration: line-through;
    color: #999;
  }
</style>
