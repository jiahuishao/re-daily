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

