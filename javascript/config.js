/*
    This is the Config file!
    This is where additional stuff are Set
    more like a setting
*/
let date = new Date();
const CurrentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(CurrentTime);

/////////////////// BRIGHTNESS OPTION ////////////////////////////////////// 

// Set the brightness
function setBrightness(percent) {
    const brightSite = true;
    if (brightSite) {
        document.getElementById('flex-container').style.filter = `brightness(${percent}%)`;
        return changeBrightness(100);
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
        if (window.getComputedStyle(document.getElementById('flex-container')).getPropertyValue('filter') == 0) {
            clearInterval(decrease);
        }
        decrease = setInterval(() => {
            document.getElementById('flex-container').style.filter = `brightness(${(percent--)})`;
            console.log('My filter is: ' + window.getComputedStyle(document.getElementById('flex-container')).getPropertyValue('filter'));
            if (window.getComputedStyle(document.getElementById('flex-container')).getPropertyValue('filter') == 'brightness(0)') {
                clearInterval(decrease);
            }
        }, 120000);
    } else if (CurrentTime == '24:0:00') {
        if (decrease != null && decrease != undefined) {
            clearInterval(decrease);
        } else if (increase != null && increase != undefined) {
            clearInterval(increase);
        }
        document.getElementById('flex-container').style.filter = `brightness(${percent})`;
    } else if (CurrentTime >= '13:0:00') {
        if (decrease != null && decrease != undefined) {
            clearInterval(decrease);
        }
        if (window.getComputedStyle(document.getElementById('flex-container')).getPropertyValue('filter') == 200) {
            clearInterval(increase);
        }
        increase = setInterval(() => {
            document.getElementById('flex-container').style.filter = `brightness(${percent++})`;
            console.log('My filter is: ' + window.getComputedStyle(document.getElementById('flex-container')).getPropertyValue('filter'));
            if (window.getComputedStyle(document.getElementById('flex-container')).getPropertyValue('filter') == 'brightness(200)') {
                clearInterval(increase);
            }
        }, 120000);
    }
    return console.log(document.getElementById('flex-container').style.filter);
}
///////////////////////////////////////////////////////// 