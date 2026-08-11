const child_process = require('child_process')
const http = require('http')
const fs = require('fs')
const execR = cmd =>  child_process.execSync(cmd).toString().trim()

const list = [{ id:81720,name:'夜猫'}, { id:81721,name:'睡不着'}, { id:81722,name:'失忆'}, { id:81802,name:'改名'}, { id:81803,name:'末日'}, { id:81804,name:'吃饭'}, { id:81825,name:'刷微博'}, { id:81830,name:'晚安'}, { id:81831,name:'好朋友'}, { id:81915,name:'看书'}, { id:81917,name:'晚睡'}, { id:81918,name:'雪糕'}, { id:81919,name:'防震泡沫'}, { id:81920,name:'脚抽筋'}, { id:81921,name:'梦中梦'}, { id:82040,name:'喷了'}, { id:82041,name:'懒人'}, { id:82042,name:'买东西'}, { id:82043,name:'喵星人'}, { id:82044,name:'玩游戏'}, { id:82170,name:'脸盲'}, { id:82171,name:'镜子'}, { id:82172,name:'放假生病，生病放假'}, { id:82324,name:'听歌'}, { id:82419,name:'不能集中鸟'}, { id:82508,name:'耳机线'}, { id:82510,name:'吃饭'}, { id:82732,name:'找东西'}, { id:82734,name:'地方'}, { id:82809,name:'洗衣机'}, { id:82909,name:'开电脑'}, { id:82913,name:'冷场'}, { id:83154,name:'锻炼'}, { id:83156,name:'中二'}, { id:83443,name:'开东西'}, { id:83505,name:'十二点'}, { id:83739,name:'小丑'}, { id:83742,name:'晒被子'}, { id:84182,name:'周末'}, { id:84442,name:'手机控'}, { id:85234,name:'五月病'}, { id:85340,name:'闹别扭（六一特别篇）'}, { id:85458,name:'找东西'}, { id:86029,name:'传文件'}, { id:86030,name:'中二病'}, { id:86677,name:'半途而废'}, { id:87173,name:'吃西瓜'}, { id:88821,name:'挑西瓜'}, { id:88822,name:'困困困困'}, { id:88981,name:'日常的四种状态'}, { id:89096,name:'断网'}, { id:90602,name:'四大悲剧'}, { id:95008,name:'三大幻觉'}, { id:95680,name:'三人行'}, { id:95880,name:'看恐怖电影'}, { id:96363,name:'看恐怖电影后'}, { id:99334,name:'开学周'}, { id:100079,name:'隔壁家的'}, { id:100230,name:'月饼'}, { id:102366,name:'假期后综合症'}, { id:104780,name:'夜尿'}, { id:104834,name:'忘曲'}, { id:104932,name:'选择题'}, { id:105927,name:'取暖'}, { id:189926,name:'闹不醒'}, { id:189927,name:'暖手'}, { id:189928,name:'寒冰掌'}, { id:189929,name:'拖延症'}, { id:189930,name:'忍者'}, { id:189931,name:'冬天吃雪糕'}, { id:189934,name:'新年问候'}, { id:191170,name:'假前假后'}, { id:195158,name:'夜食症'}, { id:199913,name:'减肥'}, { id:202799,name:'睡眠拖延症'}, { id:203540,name:'交作业'}, { id:214967,name:'情人节'}, { id:224348,name:'找人'}, { id:224365,name:'选择困难症'}] 

const mirror = []
const target = 'http://img.manhua.weibo.com/comic/15/48215/manhuaid/001_manhuaid_big.jpg'


const url = id => 'http://img.manhua.weibo.com/comic/15/48215/'+id+'/001_'+id+'_big.jpg'

const done = 0
list.forEach((o,i) => {
    http.get(url(o.id), res => {
    let imgData = '';
    res.setEncoding('binary')
    res.on('data', chunk => {
        imgData += chunk
    })
    res.on('end', _ => {
        fs.writeFile(`./${i}${o.name}.jpg`,imgData,'binary', err => {
            if (err) {
                return console.log(i+ ' is failed')
            } else {
                mirror[i]= o.name
                console.log(i+' success -> '+ o.name)
            }
        })
    })
})

})

setTimeout( _ => {
console.log('check list')
    mirror.forEach((o,i) => {
        console.log(o, i)
    })
    process.exit(0)
}, 6000)


