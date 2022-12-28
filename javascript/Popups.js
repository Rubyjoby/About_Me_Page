// for the popUp box
setTimeout(() => {
    const popUp2 = document.querySelector('.popup-box2');
    popUp2.style.opacity = 1;
    popUp2.style.animation = 'scaledTwo 1 0.8s ease-in-out';
    popUp2.style.transform = 'scale(1, 1)';
    let okBtn = document.querySelector('.popup-box2  .continueTxt');
    okBtn.addEventListener('mouseover', () => {
        okBtn.style.animation = 'wut 0.2s ease-in-out 1';
        okBtn.style.left = 0;
        if (parseInt(window.getComputedStyle(okBtn).getPropertyValue('left')) == 0) {
            okBtn.addEventListener('click', () => {
                popUp2.style.animation = 'scaledThree 1 0.8s ease-in-out';
                popUp2.style.transform = 'scale(0, 0)';
            }, false);
        }
    });
}, 567);

////////////////// About Cookie PopUp !!! /////////////
let cookiePopUp = document.querySelector('.cookiePop');
const cookieList = ['daily notifs', 'brightness and contrast', 'profile', 'new feature: 2 lives!'];
let tags = [document.createElement('div'), document.createElement('cour'), document.createElement('a')];

// add and loop some elements and ids
tags[0].id = 'cookie-list';
document.querySelector('.cookiePop details').appendChild(tags[0]);
for (var f in cookieList) {
    tags[1].id = 'link_' + f;
    tags[1].innerHTML = `<a href='#' style='text-decoration: none; color: rgb(1${f}${f}, 5${f}, 23${f});'>> ${cookieList[f]}</a>`;
    tags[0].append(tags[1].cloneNode(true));
}
// check if a certain tag[0] has any children
if (tags[0].hasChildNodes()) {
    for (let add = 0; add < cookieList.length; add++) {
        document.querySelector('.cookiePop details #cookie-list #link_' + add).after(document.createElement('br'));
    }
}

// configuration for the continue txt
let cookieTxt = document.querySelector('.cookiePop #Txt-Tap');
const prev = cookieTxt.innerHTML;
if (cookieTxt.innerHTML == cookieTxt.innerHTML) {
    cookieTxt.addEventListener('click', exitPopUp);
    cookieTxt.addEventListener('mouseover', coolAnimation);
    // Extra text effects when hovered
    function coolAnimation() {
        setTimeout(() => {
            if (cookieTxt.innerHTML == cookieTxt.innerHTML) {
                cookieTxt.innerHTML = `>${cookieTxt.innerHTML}`;
                setTimeout(() => {
                    if (cookieTxt.innerHTML == `>${cookieTxt.innerHTML}`) {
                        cookieTxt.innerHTML = `>>${cookieTxt.innerHTML}`;
                        setTimeout(() => {
                            if (cookieTxt.innerHTML == `>>${cookieTxt.innerHTML}`) {
                                cookieTxt.innerHTML = `>>>${cookieTxt.innerHTML}`;
                            }
                        }, 2300);
                    }
                }, 2300);
            }
        }, 2300);
    }
    // exits the pop-up
    function exitPopUp() {
        if (cookieTxt.onmouseover != null) {
            cookieTxt.removeEventListener('mouseover', coolAnimation);
        }
        document.querySelector('.cookiePop').style.animation = 'scaledThree 0.8s ease-in-out';
        return document.querySelector('.cookiePop').style.transform = 'scale(0, 0)';
        //return cookiePopUp.remove();
    }
}
/////////////////////////////////////////////////