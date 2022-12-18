const wholeContainer = document.getElementById('flex-container');
let intros = [
    document.getElementById('intro'),
    document.getElementById('intro1'),
    document.getElementById('intro2'),
    document.getElementById('intro3'),
    document.getElementById('intro4')
];
let [firstIntro,secondIntro,thirdIntro,fourthIntro,fifthZero] = intros;
const subT = document.querySelector('.subTitles');
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
let forestBg = 'url(/storage/emulated/0/MT2/apks/assets/gifs/UncomfortableWelllitDrever-size_restricted.gif)';
let dropWaterSfx = new Audio('assets/sfx/justADrop.mp3');
window.addEventListener('load', startTheTouch);

// when the window loads, activate the scroll effects
function startTheTouch() {
    const firstDash = document.querySelector('.opt3');
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
            if (parseInt(window.getComputedStyle(okBtn).getPropertyValue('left'))  == 0) {
                okBtn.addEventListener('click', () => {
                    popUp2.style.animation = 'scaledThree 1 0.8s ease-in-out';
                    popUp2.style.transform = 'scale(0, 0)';
                    if (parseInt(window.getComputedStyle(popUp2).getPropertyValue('scale')) == 'scale(0, 0)') {
                        return popUp2.remove();
                    }
                }, false);
            }
        });
        /*setTimeout(() => {
            if (window.getComputedStyle(document.querySelector('.popup-box')).getPropertyValue('transform') != 'scale(') {
                
            }
        }, 800);*/
    }, 567);
    
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
        dropWaterSfx.play();
        /*[...event.changedTouches].forEach((touch) => {
            let fireImg = document.createElement('div');
            fireImg.src = 'images/';
            let aCirc = document.createElement('div');
            aCirc.classList.add('bigCirc');
            aCirc.id = touch.identifier;
            let nestedBigCirc = document.createElement('div');
            nestedBigCirc.id = 'smallCirc';
            let evenNestCirc = document.createElement('div');
            evenNestCirc.id = 'evenSmallerCirc';
            let text = document.createElement('cour');
            text.innerHtml = 'click';
            aCirc.style.top = `${touch.pageY}px`;
            aCirc.style.left = `${touch.pageX}px`;
            wholeContainer.appendChild(aCirc);
            aCirc.append(nestedBigCirc, evenNestCirc, text);
        });*/
    });
    
    //activate effects
    if (!wholeContainer.hasAttribute('onscroll')) {
        wholeContainer.addEventListener((functionClass.Assets.listeners[1]), (event) => {
            //document.getElementById('menu').classList.remove('shinyObject');
            if (parseInt(window.getComputedStyle(firstIntro).getPropertyValue('left')) == functionClass.Extra.values[0]) {
                subT.style.animation = functionClass.Assets.Animations.animation;
                subT.style.left = functionClass.Extra.values[0];
                if (parseInt(window.getComputedStyle(subT).getPropertyValue('left')) == functionClass.Extra.values[0]) {
                    document.querySelector('.barGroup').style.animation = functionClass.Assets.Animations.animation;
                    document.querySelector('.barGroup').style.left = functionClass.Extra.values[0];
                    if (webScrollContain > 239.5) {
                        wholeContainer.style.animation = '1 0.6s changeFrame ease-in';
                        wholeContainer.style.backgroundColor = functionClass.Extra.values[2];
                        wholeContainer.style.backgroundImage = forestBg;
                        wholeContainer.style.color = functionClass.Assets.hrElem.Border.borderColors.c1;
                        secondIntro.style.animation = functionClass.Assets.Animations.animation;
                        secondIntro.style.left = functionClass.Extra.values[0];
                        document.querySelector('[alt="heloAgain"]').src = 'images/grass.jpg';
                        document.querySelector('[alt="heloAgain"]').style.border = '2px solid white';
                        firstIntro.style.border = `${functionClass.Assets.hrElem.Border.num}.3px ${functionClass.Assets.hrElem.Border.borderType.normal} ${functionClass.Assets.hrElem.Border.borderColors.c1}`;
                        secondIntro.style.border = `${functionClass.Assets.hrElem.Border.num}.3px ${functionClass.Assets.hrElem.Border.borderType.normal} ${functionClass.Assets.hrElem.Border.borderColors.c1}`;
                        (functionClass.Assets.hrElem.Ids.firstId.id).style.border = `${functionClass.Assets.hrElem.Border.num}px ${functionClass.Assets.hrElem.Border.borderType.normal} ${functionClass.Assets.hrElem.Border.borderColors.c1}` //'2px solid white';
                        document.getElementById('card-background').style.border = '3px solid white';
                        document.querySelector('#card-background > cour').style.color = `${(functionClass.Extra.colorVal = 'black')}`; //'black';
                        document.getElementById('grass').style.border = '2px solid white';
                        document.getElementById('grass').src = 'images/grass.jpg';
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
                                        if (webScrollContain > 385 && parseInt(window.getComputedStyle(firstDash).getPropertyValue('left')) == functionClass.Extra.values[0]) {
                                            document.querySelector('.barGroup #grass').style.animation = functionClass.Assets.Animations.animation01;
                                            document.querySelector('.barGroup #grass').style.left = '430px';
                                        } else {
                                            document.querySelector('.barGroup #grass').style.animation = functionClass.Assets.Animations.animation;
                                            document.querySelector('.barGroup #grass').style.left = 0;
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
                            secondIntro.style.animation = functionClass.Assets.Animations.animation01;
                            wholeContainer.style.animation = functionClass.Extra.values[2];
                            document.getElementById('grass').style.border = '2px solid black';
                            document.getElementById('grass').src = 'images/snowgrass.jpg';
                            document.querySelector('[alt="heloAgain"]').src = 'images/snowgrass.jpg';
                            document.querySelector('[alt="heloAgain"]').style.border = '2px solid black';
                            document.getElementById('card-background').style.border = '3px solid black';
                            forestSfx.pause();
                            (functionClass.Assets.hrElem.Ids.firstId.id).style.border = '2px solid black';
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
                }
            }
        });
    } else {
        wholeContainer.removeEventListener((functionClass.Assets.listeners[1]), (event) => {});
    }
    console.error('wow');
}