const express = require('express');

const app = express();

app.get('/', function (req, res) {
    // Testing linters
    function checkPositive(number){
        // Variable declared but not used
        const x = 3;
        //Error in edge cases
        if (number > 0) {
            return true;
        }
    }
    // Second arguement radix has been ommitted
    const magic_num = parseInt("071");
    const message = {
        message: "Testing node app with linters for stratus",
        checkPositive: checkPositive(3),
        magic_number: magic_num
    };
    res.send(message);
});

app.listen(3000, function () {
    console.log(`App listening on port 3000: http://localhost:3000/`);
});