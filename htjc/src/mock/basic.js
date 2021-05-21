// 进行模拟数据的文件
import Mock from "mockjs"
// console.log(Mock);
const data = Mock.mock({
    'string|4': '哎呦!'
})

//生成文本  c开头中文  不c开头英文
//1.生成随机字符串，传参数
// 数字3: 会生成三个字符
// 3,10: 生成3-10个
const a = Mock.mock({
    string: '@cword(3)'
})
//2.生成标题和句子
const t = Mock.mock({
    title: "@ctitle",
    sentence: "@csentence"
})
//3.生成段落,参数代表生成几句
const p = Mock.mock({
    content:"@cparagraph()"
})
//4.生成数字
const n = Mock.mock({
    // number : 10   指定数字
    'number|1-100' : 10 //生成1-100的数字
})
//5.生成增量id
const up = Mock.mock({
    id: '@increment(1)'
})
//6.生成名字,地址,身份证号
//加true 有省级
const person = Mock.mock({
    name:'@cname()',
    idCard:'@id()',
    address: '@city(true)'
})
//7.生成图片
//参数: 图片大小,图片背景色,图片前景色,图片格式,图片文字
const img = Mock.mock({
    img_url: "@image('250*250','#FFA07A','#FFBBFF','png','坤坤')"
})
//8.生成时间
const date = Mock.mock({
    date: '@date(yyy-MM-dd hh:mm:ss)'
})
//9.生成数组
const arr = Mock.mock({
    'list|50-99': [
        {
            name: '@cname()',
            address: '@city(true)',
            id: '@increment(1)'
        }
    ]
})

// console.log(data);
// console.log(a);
// console.log(t);
// console.log(p);
// console.log(n);
// console.log(up);
// console.log(person);
// console.log(img);
// console.log(date);
// console.log(arr);

//(定义get请求)
Mock.mock('/api/news', 'get', {
    status: 200,
    msg: '获取数据成功get'
})
//定义post请求
// Mock.mock('/api/post/news', 'post', {
//     status: 200,
//     msg: '获取数据成功post'
// })

//还可以这样写
Mock.mock('/api/post/news', 'post', ()=>{
    return {
        status: 200,
        msg: '获取数据成功post2'
    }
})

