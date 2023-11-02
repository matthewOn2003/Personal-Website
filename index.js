// --------------------------- index-header ---------------------------
const header = document.querySelector('.index-header');
let prevScrollPos = window.pageYOffset; // 上一个滚动位置

window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset; // 当前滚动位置

    if (currentScrollPos > prevScrollPos) {
        // 用户向下滚动，header上移
        header.style.transition = "transform .3s"; // 添加过渡效果
        header.style.transform = "translate(0, -72px)"; // 上移72px
    } else {
        // 用户向上滚动，header恢复原位
        header.style.transition = "transform .3s"; // 添加过渡效果
        header.style.transform = "translate(0, 0)";
    }

    prevScrollPos = currentScrollPos; // 更新上一个滚动位置
});







// --search
// const img_search = document.querySelector('.index-header .search img')
// const input_area = document.querySelector('.index-header .search input[type="text"]')
// const search_div = document.querySelector('.index-header .search')

// let isExpanded = false;
// img_search.addEventListener('click', function () {
//     if (isExpanded) {
//         input_area.style.display = "none"
//         search_div.style.width = "62px"
//         search_div.style.backgroundColor = "transparent"
//         img_search.src = "images/ic_search_white.png"
//     } else {
//         img_search.display = "images/ic_search.png"
//         input_area.style.display = "block"
//         search_div.style.width = "200px"
//         search_div.style.backgroundColor = "white"

//         // img_search.src = "images/ic_search.png"
//     }

//     isExpanded = !isExpanded;
// })



// --profile
const audio = document.querySelector('.index-header .profile audio')
let rotationDegree = 0
let img = ""

audio.parentElement.addEventListener('click', function () {
    if (audio.paused) {
        audio.play()
        audio.parentElement.style.animation = "rotate 5s linear infinite"
    } else {
        audio.pause()
        rotationDegree = getCurrentRotationDegree()
        audio.parentElement.style.transform = `rotate(${rotationDegree}deg)`
        audio.parentElement.style.animation = "none"
    }
})

function getCurrentRotationDegree() {
    const transformValue = window.getComputedStyle(audio.parentElement, null).getPropertyValue('transform')
    const matrix = transformValue.split('(')[1].split(')')[0].split(',')
    const a = matrix[0]
    const b = matrix[1]
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI))
    return angle
}

const ad = audio.nextElementSibling
ad.addEventListener('click', function () {
    ad.style.display = "none"

})



// --------------------------- section-intro ---------------------------
// --right
// const right = document.querySelector('.section-intro .right')
// const prev = document.querySelector('.section-intro .right .prev')
// const next = document.querySelector('.section-intro .right .next')
// const p = document.querySelector('.section-intro .right p')

// right.addEventListener('mouseenter', function () {
//     prev.style.display = "block"
//     next.style.display = "block"
//     p.focus()
// })

// right.addEventListener('mouseleave', function () {
//     prev.style.display = "none"
//     next.style.display = "none"
//     p.blur()
// })



// ---------------------------  ---------------------------