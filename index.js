// --------------------------- progress bar ---------------------------
window.onscroll = function () {
    updateProgressBar();
};

function updateProgressBar() {
    const progressBar = document.querySelector(".progressbar");
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight - 800;
    const scrollPosition = window.scrollY || window.pageYOffset;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    progressBar.style.width = scrollPercentage + "%";
    console.log(scrollPosition);

    if (scrollPercentage >= 99.9) {
        progressBar.style.opacity = '0';
    } else {
        progressBar.style.opacity = '1';
    }
}

// --------------------------- index-header ---------------------------
const header = document.querySelector('.index-header');
let y = 0;
let prevScrollPos = window.pageYOffset; // 上一个滚动位置
const skillset_part = document.querySelector('.skillset');

window.addEventListener('scroll', function () {
    y = this.window.scrollY;
    let currentScrollPos = window.pageYOffset; // 当前滚动位置

    if (currentScrollPos > prevScrollPos /*|| this.window.scrollY < 600*/) {
        // 用户向下滚动，header上移
        header.style.transition = "transform .3s"; // 添加过渡效果
        header.style.transform = "translate(0, -72px)"; // 上移72px
    } else {
        // 用户向上滚动，header恢复原位
        header.style.transition = "transform .5s"; // 添加过渡效果
        header.style.transform = "translate(0, 0)";
    }

    prevScrollPos = currentScrollPos; // 更新上一个滚动位置
});



// --------------------------- Portfolio ---------------------------
document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.querySelector('.portfolio-tabs ul');

    const personals = document.querySelectorAll('.personal-project');
    const groups = document.querySelectorAll('.group-project');
    const hobbies = document.querySelectorAll('.hobby-project');

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
                showPersonalProject();
            } else if (tabId === '2') {
                showGroupProject();
            } else if (tabId === '3') {
                showHobbyProject();
            }
        }
    });

    // Function to show all projects and assignments
    function showAll() {
        personals.forEach(personal => {
            personal.style.display = 'flex'; // 使用 flex 保持布局
        });
        groups.forEach(group => {
            group.style.display = 'flex'; // 使用 flex 保持布局
        });
        hobbies.forEach(hobby => {
            hobby.style.display = 'flex';
        });
    }

    // Function to show only projects
    function showPersonalProject() {
        personals.forEach(personal => {
            personal.style.display = 'flex'; // 使用 flex 保持布局
        });
        groups.forEach(group => {
            group.style.display = 'none';
        });
        hobbies.forEach(hobby => {
            hobby.style.display = 'none';
        });
    }

    // Function to show only assignments
    function showGroupProject() {
        personals.forEach(personal => {
            personal.style.display = 'none';
        });
        groups.forEach(group => {
            group.style.display = 'flex'; // 使用 flex 保持布局
        });
        hobbies.forEach(hobby => {
            hobby.style.display = 'none';
        });
    }

    //
    function showHobbyProject() {
        personals.forEach(personal => {
            personal.style.display = 'none'; // 使用 flex 保持布局
        });
        groups.forEach(group => {
            group.style.display = 'none';
        });
        hobbies.forEach(hobby => {
            hobby.style.display = 'flex';
        });
    }



});




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


