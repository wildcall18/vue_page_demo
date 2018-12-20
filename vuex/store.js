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


    hotTopicArticles: [{
        img: '../../static/images/topic_1.jpg',
        title: '游戏',
        par: '玩转简书的第一步，从这个专题开始。' +
             '想上首页热门榜么？好内容想被更多人看到么？来投稿吧！' +
             '如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。' +
             '投稿必须原创。如果发现有非...',
        number: '97233',
        concern: '121.7',
        keys: '故事、连载',
        time: '20160620'
    }, {
        img: '../../static/images/topic_3.jpg',
        title: '诗',
        par: '诗，让你感受自己的心灵。' +
             '专题主编：苏锦年 投稿须知：' +
             '本专题收录古诗、词、现代诗以及诗词点评及指导。' +
             '2.内容必须为原创，切勿用其他诗人的诗句。' +
             '3.文章排版整洁，注意...',
        number: '35420',
        concern: '146.6',
        keys: '诗',
        time: '20160630'
    }],

    News:
        {
            title: '新闻',
            content_1: '新项目投产',
            content_2: '园区环境整治，',
            content_3: '美国美女前来访问。',
            content_4: '上下班路线调整，',
            content_5: '为什么网络比爬还要缓慢?',

            other: '更多新闻',
            bg: 'url(../static/images/bonus_1.jpg)'
        },
  Hots:
        {
            title: '热点',
            content_1: '清洁工把地打扫干干净净',
            content_2: '归还给一个陌不相识的人',
            content_3: '有人拼车吗',
            content_4: '今年的雪太大',
            content_5: '食堂饭菜好吃',

          other: '更多热点',
            bg: 'url(../static/images/bonus_2.jpg)'
        },
  Tasks:
        {
            title: '工单任务',
            content_1: '工单任务——1',
            content_2: '工单任务——2',
            content_3: '工单任务——3',
            content_4: '工单任务——4',
            content_5: '工单任务——5',

          other: '更多任务',
            bg: 'url(../static/images/bonus_3.jpg)'
        },
  Messages:
        {
            title: '消息',
            content_1: '',
            content_2: '',
            content_3: '',
            content_4: '',
            content_5: '',

             other: '更多消息',
            bg: 'url(../../static/images/bonus_4.jpg)'
        },


}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
