document.querySelector('.navbar-burger').addEventListener('click', function (event) {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
    event.target.classList.toggle('is-active');
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({behavior: 'smooth', block: 'start'});
    });
});

let dropDownBtn = document.querySelector('.dropdown-btn')
if (dropDownBtn) {
    dropDownBtn.addEventListener('click', function (event) {
        document.querySelector('.dropdown').classList.toggle('is-active');
        event.target.classList.toggle('is-active');
    });
}

let historyBtn = document.querySelector('.history-button')
let historyContent = document.querySelector('.history-content')

if (historyBtn && historyContent) {
    historyBtn.addEventListener('click', function (event) {
        historyContent.classList.toggle('is-hidden');
    });
}

let status = false

function showHideDown(id) {
    let showHideContent = document.getElementById(id)
    let textColor = document.querySelector('.text')
    if (status === true) {
        showHideContent.classList.toggle('is-hidden')
        textColor.style.cssText = 'background: linear-gradient(to top, rgba(0, 0, 0, 0.1),  rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));-webkit-text-fill-color: transparent;-webkit-background-clip: text;'
        return status = false
    } else {
        showHideContent.classList.toggle('is-hidden')
        textColor.style.cssText = 'background: linear-gradient(to top, rgba(0, 0, 0, 1),  rgba(0, 0, 0, 1));-webkit-text-fill-color: transparent;-webkit-background-clip: text;'
        return status = true
    }
}


let problem = document.getElementById('problem').innerHTML
if (problem) {
    localStorage.setItem("problem", problem);
}
