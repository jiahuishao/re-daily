
import Vue from 'vue';

var lastSit = 'left';

//记事本
var notebook = new Vue({
    el:'#notebook',
    data:{
        article:[
            {
                name:'这里是笔记名称',
                content:'这是里笔记内容',
                time:'0000年0月0号0点00分',
                sit:'left',
                show:false,
            },{
                name:'万叶集',
                content:'鸣神の少しとよみてさし昙り雨も降らんか君を留めん 鸣神の少しとよみて降らずとも我は止まらん妹し留めば',
                time:"0000年0月0号0点00分",
                sit:'right',
                show:false,
            }
        ],
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