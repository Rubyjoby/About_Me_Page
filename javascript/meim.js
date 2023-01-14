var Http = require('http');
Http.createServer((req, rec) => {
    rec.write('hello world');
    rec.end();
})
.listen(26543);

var filePath = require('path');
console.log(filePath);

/*import * from './addNum';
var myAge = 15;
var otherPerson = 14;
function ageGap() {
    return div(myAge, otherPerson);
}
ageGap();*/