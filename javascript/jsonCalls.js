// testing the request
let xhr = new XMLHttpRequest();
xhr.open('POST', 'javascript/classmates.json', true);
// Check the request
xhr.onload = function () {
    if (this.status == 200) {
        //console.log(this.responseText);
        let cls = JSON.parse(this.responseText);
        for (var t in cls) {
            console.log('name: ', cls[t].name);
            console.log('age: ', cls[t].age);
            console.log('isABoy: ', cls[t].isABoy);
            console.log('hobbies: ', cls[t].hobbies);
            console.log('id: ', cls.id);
            console.log('iq: ', cls[t].knownIQ);
            console.log('owner: ', cls[t].owner);
        }
    }
xhr.send();