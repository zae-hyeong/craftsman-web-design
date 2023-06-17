//menu
const $menus = document.querySelectorAll('#menu > li');
const $subMenus = document.querySelectorAll('.sub-menu');

for (let i = 0; i < $menus.length; i++) {
    $menus[i].addEventListener('mouseover', () => {
        $subMenus[i].classList.add('active');
    });
}

for (let i = 0; i < $menus.length; i++) {
    $menus[i].addEventListener('mouseleave', () => {
        $subMenus[i].classList.remove('active');
    });
}

//banner
const $banners = document.querySelectorAll('#banner > figure');

let currentBanner = 0;
let nextBanner = 1;

setInterval(() => {
    $banners[nextBanner].classList.replace('prev', 'current');
    $banners[currentBanner].classList.replace('current', 'old');

    currentBanner = nextBanner;
    nextBanner++;
    if (nextBanner >= $banners.length) nextBanner = 0;
    $banners[nextBanner].classList.replace('old', 'prev');
}, 3000);

//tab
const $tabHead = document.querySelectorAll('#tab-head > li');
const $tabBody = document.querySelectorAll('#tab-head .tab-body');

$tabHead[0].addEventListener('click', () => {
    $tabHead[0].classList.add('active');
    $tabHead[1].classList.remove('active');

    $tabBody[1].style.display = 'none';
    $tabBody[0].style.display = 'block';
});

$tabHead[1].addEventListener('click', () => {
    $tabHead[0].classList.remove('active');
    $tabHead[1].classList.add('active');

    $tabBody[0].style.display = 'none';
    $tabBody[1].style.display = 'flex';
});

//layer-pop-up
const $popUpTarget = document.querySelector('.tab-body.notice > li > a:first-child');
const $popUp = document.querySelector('#layer-pop-up');
const $popUpCloseBtn = document.querySelector('#layer-pop-up > input');

$popUpTarget.addEventListener('click', () => {
    $popUp.style.display = 'block';
});

$popUpCloseBtn.addEventListener('click', () => {
    $popUp.style.display = 'none';
});