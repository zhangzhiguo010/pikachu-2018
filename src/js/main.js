import $ from 'jquery'

var duration  = 40
$('.actions').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch(speed){
        case 'slow':
            duration = 80
            break
        case 'normal':
            duration = 40
            break
        case 'fast':
            duration = 5
            break
        default:
            duration = 40
            break
    }
})

function writeCode(code,fn){
    let container = document.querySelector('#code')         // 显示代码
    let styleTag = document.querySelector('#styleTag')      // 显示皮卡丘

    let n=0
    setTimeout(function run(){
        n+=1
        container.innerHTML = code.substring(0,n)       // 向代码标签中写入代码，目的是单纯展示
        styleTag.innerHTML = code.substring(0,n)        // 向内部样式块中写入代码，目的是单纯执行
        container.scrollTop = container.scrollHeight    // 代码标签自动下移，目的是总是显示最新代码
        n<code.length ? setTimeout(run,duration) : fn && fn.call()  // 如果代码浏览完毕，就结束并执行传入的回调函数
    },duration)
}
export default writeCode