
import Vue from 'vue';
import {notebook as nb} from '../dataSave/dataSave.js'
var lastSit = 'left';

//记事本
var notebook = new Vue({
    el:'#notebook',
    data:{
        article:nb,
        storageName:'',
        storageContent:'',
        leftColNum:0,
        rightColNum:0,
    },
    methods:{
        addArticle:function () {
            var saveBlock = {},articleName,articleContent;
            articleName = this.storageName;
            articleContent = this.storageContent;

            var year,mouth,date,hour,min;
            year = new Date().getFullYear();
            mouth = new Date().getMonth();
            date = new Date().getDate();
            hour = new Date().getHours();
            min = new Date().getMinutes();

            var strDate = year + '年' + mouth + '月' + date + '号' + hour + '点' + min + '分'

            saveBlock['name']=articleName;
            saveBlock['content']=articleContent;
            saveBlock['time']=strDate;
            saveBlock['show']=false
            if(lastSit == 'right'){
                saveBlock['sit'] = 'left';
                lastSit = 'left';
            }else if(lastSit == 'left'){
                saveBlock['sit'] = 'right';
                lastSit = 'right';
            }

            this.article = this.article.concat(saveBlock);
        },
        fontNum:function () {
            return 200-this.storageContent.length;
        }
    }
});