/**
 * Created by zhouxiong on 16/12/5.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    show: 'hot',




    News:
        {
            title: '精选新闻',
            hotTop:{
              title: '新项目投产',
              pic: 'static/img/hotTopNews.jpg',
              summary: '创新大厦是高新区积极实施“创新驱动发展”战略，推进产城融合发展、加快国家新型城镇化综合试点建设的一个重要项目，建成后将成为新地标，也为高新区招商引资提供了良好平台。',
              date:'2018-12-10'
            },


            subNews:[
              {title:'园区环境整治',  pic:'static/img/news-sub-1.JPEG',date:'2018-12-12'},
              {title:'美国客人前来访问，对园区进行考察',  pic:'static/img/news-sub-2.jpeg',date:'2018-12-20'},
              {title:'避开交通阻塞，上下班路线调整',  pic:'static/img/news-sub-3.jpeg',date:'2018-12-23'},
              ] ,

            other: '更多新闻',

        },
  Hots:
        {
            title: '热点动态',
            hots:[ '工业园区开展开放创新综合试验',
            '打造全开放式生态体育公园',
            '产业园区落户首家投资上亿企业',
            '产业园PPP项目签约打造产业一体化',
             '2018，中国铁路进入“复兴号”时代',
              ],

          other: '更多热点',

        },
  Tasks:
        {
            title: '工单任务',
            taskList: [{
              title: '工单任务1',
              content: '1号楼管道维修',
              status: false,
            },
              {
                title: '工单任务2',
                content: '2号楼照明系统检查',
                status: false,
              },
              ],

          other: '更多任务',

        },
  Messages:
        {
            title: '待办消息',
            msgList: [{
            title: '今天的待办消息之一',
            status: false,
          },
            {
              title: '今天的待办消息之二',
              status: false,
            },
            {
              title: '今天的待办消息之三',
              status: false,
            }, {
              title: '今天的待办消息之四',
              status: false,
            },
            {
              title: '今天的待办消息之五',
              status: true,
            },
            {
              title: '今天的待办消息之六',
              status: true,
            }
          ],

             other: '更多消息',

        },


}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
