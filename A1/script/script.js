//menu
const $menus = document.querySelectorAll('.menu-item');
const $subMenus = document.querySelectorAll('.sub-menus');

for (let i = 0; i < $menus.length; i++) {
    $menus[i].addEventListener('mouseover', () => {
        for(let j = 0; j < $subMenus.length; j++) {
            $subMenus[j].style.height = '164px';
            $subMenus[j].style.opacity ='1';
        }
    });
}

for (let i = 0; i < $menus.length; i++) {
    $menus[i].addEventListener('mouseleave', () => {
        for(let j = 0; j < $subMenus.length; j++) {
            $subMenus[j].style.height = '0px';
            $subMenus[j].style.opacity ='0';
        }
    });
}

//banner
const $banners = document.querySelectorAll('.banner-layout');
let currentBannerIdx = 0;
let nextBannerIdx = 1;

setInterval(() => {
    $banners[nextBannerIdx].style.opacity = '1';
    $banners[currentBannerIdx].style.top = '100%';
    $banners[nextBannerIdx].style.top = '0%';

    currentBannerIdx = nextBannerIdx;
    nextBannerIdx++;
    if (nextBannerIdx >= 3) nextBannerIdx = 0;

    $banners[nextBannerIdx].style.opacity = '0';
    $banners[nextBannerIdx].style.top = '-100%';
}, 3000);

//tab-menu
const $tabMenus = document.querySelectorAll('#contents #tab-menu li');
const $tabContents = document.querySelectorAll('.tab-contents');
$tabMenus[1].style.backgroundColor = 'rgb(172, 172, 172)';

$tabMenus[0].addEventListener('click', () => {
    $tabContents[0].style.display = 'block';
    $tabMenus[0].style.backgroundColor = '#ffffff';
    $tabContents[1].style.display = 'none';
    $tabMenus[1].style.backgroundColor = 'rgb(172, 172, 172)';
});

$tabMenus[1].addEventListener('click', () => {
    $tabContents[0].style.display = 'none';
    $tabMenus[0].style.backgroundColor = 'rgb(172, 172, 172)';
    $tabContents[1].style.display = 'flex';
    $tabMenus[1].style.backgroundColor = '#ffffff';
});

//popup-layer
const $clickTarget = document.querySelectorAll('#contents #tab-menu #notice .notice-item')[0];
const $popUpLayer = document.querySelector('#pop-up-layer');
const $layerCloseBtn = document.querySelector('#pop-up-layer #close-btn');

$clickTarget.addEventListener('click', () => { $popUpLayer.style.display = 'block' });
$layerCloseBtn.addEventListener('click', () => { $popUpLayer.style.display = 'none' });
