/*
    This is the Config file!
    This is where additional stuff are Set
    more like a setting
*/
let date = new Date();
const CurrentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
let mainContent = document.getElementById('flex-container');
console.log(CurrentTime);

/////////////////// BRIGHTNESS OPTION ////////////////////////////////////// 

// Set the brightness
function setBrightness(percent) {
    const brightSite = true;
    let cnf;
    if (brightSite == true) {
        mainContent.style.filter = `brightness(${percent}%)`;
        return cnf = changeBrightness(100);
    } else {
        mainContent.style.filter = `brightness(${percent}%)`;
        if (cnf != null) {
            cnf = undefined;
        }
        return changeContrast(1);
    }
    return;
}
setBrightness(100);

// change the brightness if time is ...
function changeBrightness(percent) {
    const givenAmount = 0.1;
    let decrease;
    let increase;
    if (CurrentTime >= '18:0:00') {
        if (increase != null && increase != undefined) {
            clearInterval(increase);
        }
        if (window.getComputedStyle(mainContent).getPropertyValue('filter') == 0) {
            clearInterval(decrease);
        }
        decrease = setInterval(() => {
            mainContent.style.filter = `brightness(${(percent--)})`;
            console.log('My filter is: ' + window.getComputedStyle(mainContent).getPropertyValue('filter'));
            if (window.getComputedStyle(mainContent).getPropertyValue('filter') == 'brightness(0)') {
                clearInterval(decrease);
            }
        }, 120000);
    } else if (CurrentTime == '24:0:00') {
        if (decrease != null && decrease != undefined) {
            clearInterval(decrease);
        } else if (increase != null && increase != undefined) {
            clearInterval(increase);
        }
        mainContent.style.filter = `brightness(${percent})`;
    } else if (CurrentTime >= '13:0:00') {
        if (decrease != null && decrease != undefined) {
            clearInterval(decrease);
        }
        if (window.getComputedStyle(mainContent).getPropertyValue('filter') == 200) {
            clearInterval(increase);
        }
        increase = setInterval(() => {
            mainContent.style.filter = `brightness(${percent++})`;
            console.log('My filter is: ' + window.getComputedStyle(mainContent).getPropertyValue('filter'));
            if (window.getComputedStyle(mainContent).getPropertyValue('filter') == 'brightness(200)') {
                clearInterval(increase);
            }
        }, 120000);
    }
    return;
}
/////////////////////////////////////////////////////////

const popUpDelayTime = 1300;
const enablePopUp = true;

/* if the prev option doesn't work,
    then call this function
*/
// changes the colors
function changeContrast(rgbNum) {
    let conDecrease = setInterval(() => {
        mainContent.style.backgroundColor = `rgba(255, 255, 255, ${(rgbNum--)})`;
        console.log('changed');
    }, 120000);
}