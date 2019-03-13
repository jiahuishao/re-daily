//笔记本数据集
export var notebook = [
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
]

//购物车数据集
export var shopCar = [
    {
        name:'330ml红罐可乐',
        price:3.0,
        stock:100,
        id:'000001',
        inCar:0,
        allP:0,
        addNum:1,
        img:require('../../image/timg-pxz02.jpeg')
    },
    {
        name:'芝士蛋糕',
        price:28.0,
        stock:50,
        id:'000002',
        inCar:0,
        allP:0,
        addNum:1,
        img:require('../../image/timg-pxz02.jpeg')
    },
    {
        name:'大理石面包',
        price:10.0,
        stock:200,
        id:'000003',
        inCar:0,
        allP:0,
        addNum:1,
        img:require('../../image/timg-pxz02.jpeg')
    },
    {
        name:'macbook Pro',
        price:18888.0,
        stock:5,
        id:'000004',
        inCar:0,
        allP:0,
        addNum:1,
        img:require('../../image/timg-pxz02.jpeg')
    },
    {
        name:'猪肉脯',
        price:5.0,
        stock:500,
        id:'000005',
        inCar:0,
        allP:0,
        addNum:1,
        img:require('../../image/timg-pxz02.jpeg')
    },
    {
        name:'餐巾纸',
        price:2.0,
        stock:2000,
        id:'000006',
        inCar:0,
        allP:0,
        addNum:1,
        img:require('../../image/timg-pxz02.jpeg')
    },
]

//选择答案数据集
export var questionAndAnswer = [
    {
        knowledge:['javaScript'],
        questionId:1,
        questionType:'single',
        question:'关于javascript的原始类型（primitive type），错误的是',
        answer:[
            'A.有5种primitive type，分别是Undefined、Null、Boolean、Number 和 String',
            'B.var sTemp = "test string";alert (typeof sTemp);结果为string',
            'C.var oTemp;alert(oTemp == undefined)为true',
            'D.alert(null == undefined);结果为false',
        ],
        right:[3],
        userChoose:[4]
    },
    {
        knowledge:['javaScript'],
        questionId:1,
        questionType:'mul',
        question:'关于javascript的原始类型（primitive type），错误的是',
        answer:[
            'A.有5种primitive type，分别是Undefined、Null、Boolean、Number 和 String',
            'B.var sTemp = "test string";alert (typeof sTemp);结果为string',
            'C.var oTemp;alert(oTemp == undefined)为true',
            'D.alert(null == undefined);结果为false',
        ],
        right:[1,2,3],
        userChoose:[1,2,3]
    },
    {
        knowledge:['javaScript'],
        questionId:1,
        questionType:'single',
        question:'关于javascript的原始类型（primitive type），错误的是',
        answer:[
            'A.有5种primitive type，分别是Undefined、Null、Boolean、Number 和 String',
            'B.var sTemp = "test string";alert (typeof sTemp);结果为string',
            'C.var oTemp;alert(oTemp == undefined)为true',
            'D.alert(null == undefined);结果为false',
        ],
        right:[3],
        userChoose:[4]
    },
    {
        knowledge:['javaScript'],
        questionId:1,
        questionType:'mul',
        question:'关于javascript的原始类型（primitive type），错误的是',
        answer:[
            'A.有5种primitive type，分别是Undefined、Null、Boolean、Number 和 String',
            'B.var sTemp = "test string";alert (typeof sTemp);结果为string',
            'C.var oTemp;alert(oTemp == undefined)为true',
            'D.alert(null == undefined);结果为false',
        ],
        right:[1,2,3],
        userChoose:[1,2,3]
    },
]

//文章按标签筛选数据集
export var articleFilter = [
    {
        articleName:'建御雷神',
        articleContent:'建御雷神（タケミカヅチ）是日本神话中的一位神祇，被奉为雷神、刀剑之神、弓术之神、武神和军神。在《古事记》里写作建御雷之男神、建御雷神，在《日本书纪》里写作武瓮槌、武瓮雷男神。别名建布都神、丰布都神，在鹿岛神宫的祭祀中则以鹿岛神的名字出现。',
        articleLabel:[1],
        show:true, //是否显示
        scroll:true, //是否展开
    },
    {
        articleName:'建御雷神',
        articleContent:'建御雷神（《日本书纪》）或称天照大御神（《古事记》）、天照皇大神、皇大御神、天照坐皇大御神、大日孁贵、大日女尊、大日灵，天照是日本神话里三贵子之一、高天原的统治者与太阳的神格化。她被奉为日本天皇的始祖（皇祖神），也是神道教最高神。 [1] ',
        articleLabel:[2],
        show:true, //是否显示
        scroll:true, //是否展开
    },
    {
        articleName:'月读',
        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
        articleLabel:[1,2],
        show:true, //是否显示
        scroll:true, //是否展开
    },
    {
        articleName:'建御雷神',
        articleContent:'建御雷神（タケミカヅチ）是日本神话中的一位神祇，被奉为雷神、刀剑之神、弓术之神、武神和军神。在《古事记》里写作建御雷之男神、建御雷神，在《日本书纪》里写作武瓮槌、武瓮雷男神。别名建布都神、丰布都神，在鹿岛神宫的祭祀中则以鹿岛神的名字出现。',
        articleLabel:[1],
        show:true, //是否显示
        scroll:true, //是否展开
    },
    {
        articleName:'建御雷神',
        articleContent:'建御雷神（《日本书纪》）或称天照大御神（《古事记》）、天照皇大神、皇大御神、天照坐皇大御神、大日孁贵、大日女尊、大日灵，天照是日本神话里三贵子之一、高天原的统治者与太阳的神格化。她被奉为日本天皇的始祖（皇祖神），也是神道教最高神。 [1] ',
        articleLabel:[2],
        show:true, //是否显示
        scroll:true, //是否展开
    },
    {
        articleName:'月读',
        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
        articleLabel:[1,2],
        show:true, //是否显示
        scroll:true, //是否展开
    },
    {
        articleName:'月读',
        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
        articleLabel:[1,2],
        show:true, //是否显示
        scroll:true, //是否展开
    },
    {
        articleName:'建御雷神',
        articleContent:'建御雷神（《日本书纪》）或称天照大御神（《古事记》）、天照皇大神、皇大御神、天照坐皇大御神、大日孁贵、大日女尊、大日灵，天照是日本神话里三贵子之一、高天原的统治者与太阳的神格化。她被奉为日本天皇的始祖（皇祖神），也是神道教最高神。 [1] ',
        articleLabel:[2],
        show:true, //是否显示
        scroll:true, //是否展开
    },
    {
        articleName:'月读',
        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
        articleLabel:[1,2],
        show:true, //是否显示
        scroll:true, //是否展开
    },
    {
        articleName:'月读',
        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
        articleLabel:[1,2],
        show:true, //是否显示
        scroll:true, //是否展开
    },
]

//好友列表数据
export let firends = [
    {
        name:'jiahui shao',
        phone:18758580501,
        sex:true
    },
    {
        name:'fuyu',
        phone:13276800787,
        sex:false
    }
]

//文章数据
export let article = [
    {
        name:'我是猫',
        remark:'夏目漱石著长篇小说',
        content:'小说围绕金田小姐的婚事引起的风波，有力地揭露了资产阶级，批判了社会拜金主义风气。金田老爷是靠高利贷起家的、“穷凶极恶，又贪又狠”的大资本家，拥有大量的财产。他的“堂皇富丽的公馆”，与苦沙弥的“暗黑的洞窟”恰成鲜明对比。他发财致富的“秘诀”是“要精通三缺”，即缺义理、缺人情、缺廉耻。“把鼻子、眼睛都盯在钞票上”，“只要能赚钱，什么事也干得出来”，把金钱看得比生命还重要。金田依仗自己的财势，成为社会上赫赫有名的人物。他财大气粗，仗势压人。主人公苦沙弥安贫、正直，教书十年与他素不相识，只是慢待了他的老婆，他便兴师动众三番四次进行打击，致使苦沙弥的身心受到严重摧残。买通的落云馆的顽童搞得苦沙弥坐卧不宁，他却得意洋洋地说：“……这个家伙……不久将来，总会投降的呢。”一副奸诈、凶狠可憎的面目暴露无遗了。所以，连“猫”也觉得金田是“最坏的人类”。',
    },
    {
        name:'心',
        remark:'夏目漱石1914年创作的长篇小说',
        content:'《心》讲述的是“先生”结识并爱上了房东家的小姐，同时也赢得了房东太太的好感，但却因年少时曾受到叔父的欺诈而对他人时存戒心，迟迟不能表白自己的心意。后来，“先生”的好友K住进了房东家里，也爱上了小姐，直率的K向好友“先生"表白了自己的心事，“先生”在表面上批评K“不求上进”，背地里却偷偷地向房东太太提出要和小姐结婚。知道了这一切真相之后的K在绝望中自杀了，同时K的死也留给“先生”一生的不安和自责，婚后的“先生”一直无法忘却K，他的内心无比的寂寞，终于也走上了自杀的道路。',
    },
    {
        name:'人间失格',
        remark:'太宰治创作中篇小说',
        content:'全书由作者的序言、后记，以及主角大庭叶藏的三个手札组成，描写主角从青少年到中年，为了逃避现实而不断沉沦，经历自我放逐、酗酒、自杀、用药物麻痹自己，终于一步步走向自我毁灭的悲剧，在自我否定的过程中，抒发自己内心深处的苦闷，以及渴望被爱的情愫…… 透过主角叶藏的人生遭遇，可以说太宰治巧妙地将自己一生的经历与思想表达出来，并藉此提出身为人最真切的痛苦问题。从滞涩的文中更可体会其内心深切的苦楚，在完成本篇作品之后，太宰治终归还是选择了投水的方式，为他自己划下最后的句点。因此，《人间失格》算是太宰治半自传性作品。'
    },
    {
        name:'斜阳',
        remark:'日本作家太宰治所著中篇小说',
        content:'故事通过和子的第一人称叙述和弟弟直治的日记与遗书的形式展开。主要讲的是与丈夫离婚六年的和子在伊豆山中的别墅和母亲同住，母亲又患上了肺结核。应征服役的弟弟下落不明，终于弟弟复员归来，但他生活放荡不羁还沾染上毒品。和子恋上了已婚的不良作家上原，并梦想生下上原的孩子。最后母亲病亡，弟弟直治留下遗书自杀，和子表示即使会被遗弃也要生下并抚养上原的私生子，实现道德革命。',
    }
]