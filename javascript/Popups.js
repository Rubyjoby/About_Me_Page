// for the popUp box
const popUp2 = document.querySelector('.popup-box2');
setTimeout(() => {
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

let minimizeBtn = document.querySelector('.popup-box2 #minimizer');
minimizeBtn.addEventListener('click', hidePop, true);
// effects of invisibility
function hidePop() {
    // Setup the block element
    let magicBlock = document.createElement('div');
    [
        magicBlock.id, magicBlock.style.backgroundColor,
        magicBlock.style.padding, [
            magicBlock.style.height, magicBlock.style.width
        ], magicBlock.style.position, magicBlock.style.top,
        magicBlock.style.right
    ] = [
        'povId', 'violet',
        '5px', [
            50, 50
        ], 'relative', 0,
        0
    ];
    let modHeight = parseInt([magicBlock.style.width].toString());
    console.warn(modHeight);

    // watches for error
    try {
        // activate the effects
        let time = 0;
        let finishedLoop;
        let direction = parseInt(magicBlock.style.right);
        if (popUp2.querySelector('#minimizer') !== null) {
            document.querySelector('#flex-container').appendChild(magicBlock);
            
            // loop the time
            for (let c = 1; c < (modHeight + 1); c++) {
                time += c;
                finishedLoop = time;
                //magicBlock.style.left += c;
                console.warn(`Yes looped! ${c} times :)`);
            }
            let moveBlock = setInterval(() => {
                magicBlock.style.zIndex = parseInt(window.getComputedStyle(popUp2).getPropertyValue('z-index')) + 2;
                
                // Check if each time
                if (time > 0) {
                    direction++;
                    magicBlock.style.right = direction;
                    if (time >= 10) {
                        magicBlock.style.backgroundColor = 'orange';
                        if (time == 50) {
                            magicBlock.style.backgroundColor = 'lightgreen';
                            alert('destination arrived');
                            return clearInterval(moveBlock);
                        }
                    }
                }
            });
            setTimeout(() => {
                finishedLoop = time;
                console.log(finishedLoop);
            }, 2000);
        } else {
            return;//document.querySelector('#flex-container').appendChild(magicBlock);
        }
    } catch (emsg) {
        console.log('the conditions are broken and the reason why is: ' + emsg.message);
    }
};
/////////////

////////////////// About Cookie PopUp !!! /////////////
let cookiePopUp = document.querySelector('.cookiePop');
const cookieList = ['unli daily notifs', 'brightness and contrast', 'profile', 'new feature: 2 lives!'];
let tags = [document.createElement('div'), document.createElement('cour'), document.createElement('a')];

// add and loop some elements and ids
tags[0].id = 'cookie-list';
document.querySelector('.cookiePop details script').before(tags[0]);
for (var f in cookieList) {
    tags[1].id = 'link_' + f;
    tags[1].innerHTML = `<a href='#' style='text-decoration: none;'>> ${cookieList[f]}</a>`;
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
let xhr = new XMLHttpRequest();
let collectV = new Audio('assets/vc/collected.m4a');
//import {Howl, Howler} from './howler';
/*let collectV = new Howl({
    src: ['assets/vc/collected.m4a']
});*/
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
        // Text when cookie is collected
        let TxtPop = document.querySelector('.textPop');
        if (TxtPop) {
            console.log('hehe me');
            setTimeout(() => {
                TxtPop.style.animation = '1 0.8s txtPopUp ease-in';
                TxtPop.style.top = 345;
                setTimeout(() => {
                    if (parseInt(window.getComputedStyle(TxtPop).getPropertyValue('top')) == 345) {
                        TxtPop.style.animation = '1 0.8s txtPopUpRev ease-in';
                        collectV.play();
                        TxtPop.style.top = 800;
                    }
                }, 2000);
            }, 1543);
        }
        
        // exit out animation
        document.querySelector('.cookiePop').style.animation = 'scaledThree 0.8s ease-in-out';
        return document.querySelector('.cookiePop').style.transform = 'scale(0, 0)';
    }
}
/////////////////////////////////////////////////