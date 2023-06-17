//menu
const menuOpen = function() {
    const $menus = document.querySelectorAll('#menus>li');
    const $subMenus = document.querySelectorAll('#menus .sub-menus');

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
}
menuOpen();

//banner
const bannerSlide = function() {
    const $banners = document.querySelectorAll('#banner>a');

    let currentBanner = 0;
    let nextBanner = 1;

    setInterval(() => {
        $banners[currentBanner].classList.replace('current', 'old');
        $banners[nextBanner].classList.replace('next', 'current');

        currentBanner = nextBanner;
        nextBanner++;
        if (nextBanner >= $banners.length) nextBanner = 0;
        $banners[nextBanner].classList.replace('old', 'next');
    }, 3000);
}
bannerSlide();

//layer-pop-up
const layerPopUp = function() {
    const $popUpTarget = document.querySelector('#notice>ul>li:first-child');
    const $popUp = document.querySelector('#pop-up');
    const $popUpCloseBtn = document.querySelector('#pop-up>button');

    $popUpTarget.addEventListener('click', () => {
        $popUp.style.display = 'block';
    });

    $popUpCloseBtn.addEventListener('click', () => {
        $popUp.style.display = 'none';
    });
}
layerPopUp();