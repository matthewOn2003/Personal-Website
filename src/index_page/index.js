// --------------------------- index-header ---------------------------
const header = document.querySelector('.index-header');
let y = 0;
let prevScrollPos = window.pageYOffset; // 上一个滚动位置
const cv = document.querySelector('.cv');
const skillset_part = document.querySelector('.skillset');

window.addEventListener('scroll', function () {
    y = this.window.scrollY;
    let currentScrollPos = window.pageYOffset; // 当前滚动位置

    if (currentScrollPos > prevScrollPos || this.window.scrollY < 600) {
        // 用户向下滚动，header上移
        header.style.transition = "transform .3s"; // 添加过渡效果
        header.style.transform = "translate(0, -72px)"; // 上移72px
    } else {
        // 用户向上滚动，header恢复原位
        header.style.transition = "transform .5s"; // 添加过渡效果
        header.style.transform = "translate(0, 0)";
    }

    prevScrollPos = currentScrollPos; // 更新上一个滚动位置

    // cv
    if (this.window.scrollY > 300 && this.window.scrollY < 5400) {
        cv.style.transform = "translate(0, 0)";
    } else {
        cv.style.transform = "translate(300px, 0)";
    }

    // skillset
    // if (y > 1200 && y < 2200) {
    //     skillset_part.style.opacity = '1';
    // } else {
    //     skillset_part.style.opacity = '0';
    // }


});


// --------------------------- cv ---------------------------




// --------------------------- skillset ---------------------------
// const skillset_h2 = document.querySelectorAll('.skillset h2');
// skillset_h2.addEventListener('click', function () {
//     skillset_h2.clasList.add = "animate__flipInX"

// })



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
// const audio = document.querySelector('.index-header .profile audio')
// let rotationDegree = 0
// let img = ""

// audio.parentElement.addEventListener('click', function () {
//     if (audio.paused) {
//         audio.play()
//         audio.parentElement.style.animation = "rotate 5s linear infinite"
//     } else {
//         audio.pause()
//         rotationDegree = getCurrentRotationDegree()
//         audio.parentElement.style.transform = `rotate(${rotationDegree}deg)`
//         audio.parentElement.style.animation = "none"
//     }
// })

// function getCurrentRotationDegree() {
//     const transformValue = window.getComputedStyle(audio.parentElement, null).getPropertyValue('transform')
//     const matrix = transformValue.split('(')[1].split(')')[0].split(',')
//     const a = matrix[0]
//     const b = matrix[1]
//     const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI))
//     return angle
// }

// const ad = audio.nextElementSibling
// ad.addEventListener('click', function () {
//     ad.style.display = "none"

// })



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




// --------------------------- Portfolio ---------------------------
document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.querySelector('.portfolio-tabs ul');
    const projects = document.querySelectorAll('.portfolio_project');
    const assignments = document.querySelectorAll('.portfolio_assignment');

    tabsContainer.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            const tabId = e.target.dataset.id;

            // Remove 'active' class from all tabs
            document.querySelectorAll('.portfolio-tabs ul li a.active').forEach(item => {
                item.classList.remove('active');
            });

            // Add 'active' class to the clicked tab
            e.target.classList.add('active');

            // Show or hide projects and assignments based on the selected tab
            if (tabId === '0') {
                showAll();
            } else if (tabId === '1') {
                showProjects();
            } else if (tabId === '2') {
                showAssignments();
            }
        }
    });

    // Function to show all projects and assignments
    function showAll() {
        projects.forEach(project => {
            project.style.display = 'flex'; // 使用 flex 保持布局
        });
        assignments.forEach(assignment => {
            assignment.style.display = 'flex'; // 使用 flex 保持布局
        });
    }

    // Function to show only projects
    function showProjects() {
        projects.forEach(project => {
            project.style.display = 'flex'; // 使用 flex 保持布局
        });
        assignments.forEach(assignment => {
            assignment.style.display = 'none';
        });
    }

    // Function to show only assignments
    function showAssignments() {
        projects.forEach(project => {
            project.style.display = 'none';
        });
        assignments.forEach(assignment => {
            assignment.style.display = 'flex'; // 使用 flex 保持布局
        });
    }
});


//



//
const readmores = document.querySelectorAll('.portfolio .container li .right .readmore');

readmores.forEach(readmore => {
    readmore.addEventListener('click', function (e) {
        // 获取点击的 readmore 的上一个兄弟元素（即 p 标签）
        const project_description = readmore.previousElementSibling;

        if (project_description.style.height === '70px') {
            project_description.style.height = 'max-content';
            readmore.innerHTML = `read less &#8593;`;
        } else {
            project_description.style.height = '70px';
            readmore.innerHTML = 'read more &#8595;';
        }
    });
});
// const Portfolio_button = document.querySelectorAll('.portfolio .buttons a');
// Portfolio_button[0].addEventListener('click', function () {
//     alert(123);
// })

// Portfolio_button[1].addEventListener('click', function () {
//     alert(321);
// })

// Portfolio_button[2].addEventListener('click', function () {
//     alert(1123);
// })




// --------------------------- Contact ---------------------------
// let userName = document.getElementById('name').value;
// let phone = document.getElementById('phone').value;
// let email = document.getElementById('email').value;

// let messageBody = userName + "</br>" + phone + "</br>" + email;

// function emailSend() {
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "wuxu0319@gmail.com",
//         Password: "659C119C6154EA0374E41A30947EC082EAB9",
//         To: 'onwuxu@gmail.com',
//         From: "wuxu0319@gmail.com",
//         Subject: "subject",
//         Body: messageBody
//     }).then(
//         message => alert(message)
//     );
// }


