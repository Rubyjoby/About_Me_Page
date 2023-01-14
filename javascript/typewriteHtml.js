/*import ZingTouch from './zingtouch';
const zt = new ZingTouch.Region(document.getElementById('intro'));*/

// variables
const wholeContainer = document.getElementById('flex-container');
let intros = [
    document.getElementById('intro'),
    document.getElementById('intro1'),
    document.getElementById('intro2'),
    document.getElementById('intro3'),
    document.getElementById('intro4')
];
let [
        firstIntro,
        secondIntro,
        thirdIntro,
        fourthIntro,
        fifthZero
    ] = intros;
const subT = document.querySelector('.subTitles');
const subTAll = document.getElementsByClassName('.subTitles');
let [
        secondDot,
        thirdDot,
        fourthDot,
        fifthDot
    ] = [
    document.querySelector('.dot2'),
    document.querySelector('.dot3'),
    document.querySelector('.dot4'),
    document.querySelector('.dot5')
];
let [
        Optimize,
        Optimize2,
        Optimize3,
        Optimize4,
        Optimize5
    ] = [
    document.querySelector('.opt'),
    document.querySelector('.opt1'),
    document.querySelector('.opt2'),
    document.querySelector('.opt3'),
    document.querySelector('.opt4'),
    document.querySelector('.opt5')
];
let Sfx = new Audio('assets/sfx/potion1.m4a');
let webScrollContain;
let forestSfx = new Audio('assets/music/Forest - Ambient Sound Effects (192K).mp3');
let forestBg = 'url(assets/gifs/UncomfortableWelllitDrever-size_restricted.gif)';
let fireSfx = new Audio('assets/sfx/fire.mp3');
////////////////

// load the browser
window.addEventListener('load', startTheTouch);


// when the window loads, activate the scroll effects
function startTheTouch() {
    const firstDash = document.querySelector('.opt3');
    let effectTimeout;
    let functionClass = {
        Assets: {
            Animations: {
                animation: '1 introRun 0.6s linear',
                animation01: '1 introRunBack 0.6s linear',
                changeAnimation: false
            },
            listeners: [
                'touchstart', 'touchmove', 'touchend', 'touchcancel',
                'scroll'
            ],
            hrElem: {
                Ids: {
                    firstId: {
                        id: document.getElementById('dash')
                    },
                    secondId: {
                        id: document.getElementById('dash1')
                    }
                },
                Border: {
                    borderColors: {
                        c1: 'white',
                        c2: 'black'
                    },
                    borderType: {
                        normal: 'solid'
                    },
                    num: 2
                }
            }
        },
        Extra: {
            values: [0, '430px', null],
            colorVal: null
        },
        change: true
    };
    if (functionClass.Assets.Animations.changeAnimation === false) {
        Object.freeze(functionClass.Assets.Animations);
    }

    // Check if an intro is on a certain position
    const linked = function (nums, intArr, propVal) {
        if (document.querySelector('div #menu div details').hasAttribute('open')) {
            // put the words in an array
            let slicedArr = [];
            slicedArr.push(intArr.slice(0, 2));
            let linkedwords = [];
            
            // loop through the array
            for (var f in (intArr)) {
                linkedwords.push(intArr[f]);
            }
            
            // if the
            if (propVal != nums[0]) {
                document.querySelector('.list-bg [href="#intro"]').innerHTML = '';
            } else if (propVal == nums[0]) {
                document.querySelector('.list-bg [href="#intro"]').innerHTML = 'Me'; //linkedwords.splice(0, 1);
                console.log(linkedwords);
            }
            return;// linkedwords[(1 + 1)];
        } else {
            /*setTimeout(() => {
                return linked([functionClass.Extra.values[0], 1], intros);
            }, 2000);*/
            console.log('yes');
        }
        return;
    };
    // call the function
    linked([functionClass.Extra.values[0], 1], intros, parseInt(window.getComputedStyle(firstIntro).getPropertyValue('left')));
    
    // keep track of the scroll
    window.addEventListener((functionClass.Assets.listeners[4]), (event) => {
        webScrollContain = this.scrollY;
        console.info('%s %c', ('You have scrolled at: ' + webScrollContain), 'background-color: steelblue;');
        if (webScrollContain++) {
            let pleaseRemoveThisTimeout = setTimeout(function() {
                for (let z = functionClass.Extra.values[0]; z < Math.sqrt(Math.sqrt(15 + 1 / 4)); z++) {
                    console.log('yes');
                }
            }, ((Math.random()*500)+100));
            return pleaseRemoveThisTimeout;
        }
    });
    
    //starts the touch
    wholeContainer.addEventListener((functionClass.Assets.listeners[0]), (event) => {
        firstIntro.style.animation = functionClass.Assets.Animations.animation;
        firstIntro.style.left = functionClass.Extra.values[0];
        fireSfx.play();
        /*effectTimeout = setTimeout(() => {
            // when touched, an img appears
            [...event.changedTouches].forEach((touch) => {
                let touchIcn = document.querySelector('.touch');
                let fireImg = document.createElement('img');
                fireImg.src = 'assets/gifs/elmoFire.gif';
                fireImg.classList.add('fire');
                fireImg.id = touch.identifier;
                fireImg.style.top = `${touch.pageY}px`;
                fireImg.style.left = `${touch.pageX}px`;
                touchIcn.appendChild(fireImg);
                wholeContainer.appendChild(touchIcn);
            });
        });
        // ends the touch
        wholeContainer.addEventListener((functionClass.Assets.listeners[2]), (event) => {
            [...event.changedTouches].forEach((touch) => {
                const icn = document.getElementById(touch.identifier);
                setTimeout(() => {
                    icn.remove();
                }, 500);
            });
        });*/
    });
    
    //activate effects
    if (!wholeContainer.hasAttribute('onscroll')) {
        wholeContainer.addEventListener((functionClass.Assets.listeners[1]), (event) => {
            let Card = document.getElementById('card-background');
            let divvedBar = document.querySelector('.barGroup');
            /*[...event.changedTouches].forEach((touch) => {
                let touchIcn = document.querySelector('.touch');
                let fireImg = document.createElement('img');
                fireImg.src = 'assets/gifs/elmoFire.gif';
                fireImg.classList.add('fire');
                fireImg.id = touch.identifier;
                fireImg.style.top = `${touch.pageY}px`;
                fireImg.style.left = `${touch.pageX}px`;
                touchIcn.appendChild(fireImg);
                wholeContainer.append(touchIcn.cloneNode(true));
            });
            //ends the touch
            wholeContainer.addEventListener((functionClass.Assets.listeners[2]), (event) => {
                [...event.changedTouches].forEach((touch) => {
                    const icn = document.getElementById(touch.identifier);
                    setTimeout(() => {
                        icn.remove();
                    });
                });
            });*/
            if (parseInt(window.getComputedStyle(firstIntro).getPropertyValue('left')) == functionClass.Extra.values[0]) {
                subT.style.animation = functionClass.Assets.Animations.animation;
                subT.style.left = functionClass.Extra.values[0];
                if (parseInt(window.getComputedStyle(subT).getPropertyValue('left')) == functionClass.Extra.values[0]) {
                    divvedBar.style.animation = functionClass.Assets.Animations.animation;
                    divvedBar.style.left = functionClass.Extra.values[0];
                    if (webScrollContain > 64.5) {
                        secondDot.style.animation = functionClass.Assets.Animations.animation;
                        secondDot.style.left = functionClass.Extra.values[0];
                        if (webScrollContain > 65.7 && (parseInt(window.getComputedStyle(secondDot).getPropertyValue('left'))) == functionClass.Extra.values[0]) {
                            document.querySelector('#flex-container .second').style.animation = functionClass.Assets.Animations.animation;
                            document.querySelector('#flex-container .second').style.left = functionClass.Extra.values[0];
                            if (webScrollContain > 163 && (parseInt(window.getComputedStyle(document.querySelector('#flex-container .second')).getPropertyValue('left'))) == functionClass.Extra.values[0]) {
                                Card.style.animation = functionClass.Assets.Animations.animation;
                                Card.style.left = functionClass.Extra.values[0];
                                if (webScrollContain > 178 && (parseInt(window.getComputedStyle(Card).getPropertyValue('left'))) == functionClass.Extra.values[0]) {
                                    thirdDot.style.animation = functionClass.Assets.Animations.animation;
                                    thirdDot.style.left = functionClass.Extra.values[0];
                                    if (webScrollContain > 239.5) {
                                        document.querySelector('#card-background cour').style.color = 'white';
                                        wholeContainer.style.animation = '1 0.6s changeFrame ease-in';
                                        wholeContainer.style.backgroundColor = functionClass.Extra.values[2];
                                        wholeContainer.style.backgroundImage = forestBg;
                                        wholeContainer.style.color = functionClass.Assets.hrElem.Border.borderColors.c1;
                                        secondIntro.style.animation = functionClass.Assets.Animations.animation;
                                        secondIntro.style.left = functionClass.Extra.values[0];
                                        firstIntro.style.border = `${functionClass.Assets.hrElem.Border.num}.3px ${functionClass.Assets.hrElem.Border.borderType.normal} ${functionClass.Assets.hrElem.Border.borderColors.c1}`;
                                        secondIntro.style.border = `${functionClass.Assets.hrElem.Border.num}.3px ${functionClass.Assets.hrElem.Border.borderType.normal} ${functionClass.Assets.hrElem.Border.borderColors.c1}`;
                                        (functionClass.Assets.hrElem.Ids.firstId.id).style.border = `${functionClass.Assets.hrElem.Border.num}px dashed ${functionClass.Assets.hrElem.Border.borderColors.c1}` //'2px solid white';
                                        document.querySelector('#card-background > cour').style.color = `${(functionClass.Extra.colorVal = 'black')}`; //'black';
                                        wholeContainer.removeEventListener((functionClass.Assets.listeners[2]), () => {}, 500);
                                        //forestSfx.play();
                                        
                                        if (webScrollContain > 245 && (parseInt(window.getComputedStyle(secondIntro).getPropertyValue('left'))) == 0) {
                                            document.querySelector('.et').style.animation = functionClass.Assets.Animations.animation;
                                            document.querySelector('.et').style.left = functionClass.Extra.values[0];
                                            if (webScrollContain > 218 && parseInt(window.getComputedStyle(document.querySelector('.et')).getPropertyValue('left')) == functionClass.Extra.values[0]) {
                                                Optimize2.style.animation = functionClass.Assets.Animations.animation;
                                                Optimize2.style.left = functionClass.Extra.values[0];
                                                if (webScrollContain > 255.6 && parseInt(window.getComputedStyle(Optimize2).getPropertyValue('left')) == functionClass.Extra.values[0]) {
                                                    Optimize3.style.animation = functionClass.Assets.Animations.animation;
                                                    Optimize3.style.left = functionClass.Extra.values[0];
                                                    if (webScrollContain > 298.9 && parseInt(window.getComputedStyle(Optimize3).getPropertyValue('left')) == functionClass.Extra.values[0]) {
                                                        firstDash.style.animation = functionClass.Assets.Animations.animation;
                                                        firstDash.style.left = functionClass.Extra.values[0];
                                                        firstDash.style.border = `2px dashed ${functionClass.Assets.hrElem.Border.borderColors.c1}`;
                                                        if (webScrollContain > 308.5) {
                                                            Optimize4.style.animation = functionClass.Assets.Animations.animation;
                                                            Optimize4.style.left = functionClass.Extra.values[0];
                                                        } else {
                                                            Optimize4.style.animation = functionClass.Assets.Animations.animation01;
                                                            Optimize4.style.left = functionClass.Extra.values[1]
                                                        }
                                                    } else {
                                                        firstDash.style.animation = functionClass.Assets.Animations.animation01;
                                                        firstDash.style.left = functionClass.Extra.values[1];
                                                    }
                                                } else {
                                                    Optimize3.style.animation = functionClass.Assets.Animations.animation01;
                                                    Optimize3.style.left = functionClass.Extra.values[1];
                                                }
                                            } else {
                                                Optimize2.style.animation  = functionClass.Assets.Animations.animation01;
                                                Optimize2.style.left = functionClass.Extra.values[1];
                                            }
                                        } else {
                                            document.querySelector('.et').style.animation = functionClass.Assets.Animations.animation01;
                                            document.querySelector('.et').style.left = functionClass.Extra.values[1];
                                        }
                                        
                                        if (webScrollContain > 317.5) {
                                            firstIntro.style.animation = functionClass.Assets.Animations.animation01;
                                            firstIntro.style.left = functionClass.Extra.values[1];
                                            if (webScrollContain > 345) {
                                                subT.style.animation = functionClass.Assets.Animations.animation01;
                                                subT.style.left = functionClass.Extra.values[1];
                                            } else {
                                                subT.style.animation = functionClass.Assets.Animations.animation;
                                                subT.style.left = functionClass.Extra.values[0];
                                            }
                                        } else {
                                            firstIntro.style.animation = functionClass.Assets.Animations.animation;
                                            firstIntro.style.left = functionClass.Extra.values[0];
                                        }
                                        
                                    } else {
                                        if (window.getComputedStyle(secondIntro).getPropertyValue('animation') != null) {
                                            document.querySelector('#card-background cour').style.color = 'black';
                                            secondIntro.style.animation = functionClass.Assets.Animations.animation01;
                                            //wholeContainer.style.animation = functionClass.Extra.values[2];
                                            forestSfx.pause();
                                            (functionClass.Assets.hrElem.Ids.firstId.id).style.border = '2px dashed black';
                                            secondIntro.style.left = functionClass.Extra.values[1];
                                            wholeContainer.style.backgroundColor = (functionClass.Extra.colorVal = 'white');
                                            wholeContainer.style.backgroundImage = functionClass.Extra.values[2];
                                            wholeContainer.style.backgroundSize = functionClass.Extra.values[2];
                                            firstIntro.style.border = '2.3px solid black';
                                            wholeContainer.style.color = 'initial';
                                        }
                                        wholeContainer.addEventListener((functionClass.Assets.listeners[2]), () => {
                                            return secondIntro.style.animationPlayState = 'paused';
                                        }, 500);
                                    }
                                } else {
                                    thirdDot.style.animation = functionClass.Assets.Animations.animation01;
                                    thirdDot.style.left = functionClass.Extra.values[1];
                                }
                            } else {
                                Card.style.animation = functionClass.Assets.Animations.animation01;
                                Card.style.left = functionClass.Extra.values[1]; 
                            }
                        } else {
                            document.querySelector('#flex-container .second').style.animation = functionClass.Assets.Animations.animation01;
                            document.querySelector('#flex-container .second').style.left = functionClass.Extra.values[1];
                        }
                    } else {
                        secondDot.style.animation = functionClass.Assets.Animations.animation01;
                        secondDot.style.left = functionClass.Extra.values[1];
                    }
                } else {
                    divvedBar.style.animation = functionClass.Assets.Animations.animation01;
                    divvedBar.style.left = functionClass.Extra.values[1];
                }
            }
        });
    } else {
        wholeContainer.removeEventListener((functionClass.Assets.listeners[1]), (event) => {});
    }
    console.error('wow');
}