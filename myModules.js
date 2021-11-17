const numbers = [1,3,45,6,7,8];
console.log(numbers);

module.exports = {
    numbers,
}

const fs = require('fs');
fs.readFile('story.txt', 'utf8', function(err, data) {
    if(err) {
        console.log('there is no data');
    } else {
        console.log(data);
    }
});


const faker = require('faker');
let jobTitle = faker.name.jobTitle();
console.log(jobTitle);

const axios = require('axios');
axios.get('https://api.github.com/users/chenmichael2')
.then(function(response) {
    console.log(response);
})
.catch(function(err) {
    console.log(err);
});

const http = require('http');

http.createServer((req, res) => {
    res.write('hello humans');
    res.end();
})
.listen(8001);