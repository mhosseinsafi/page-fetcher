let Arr = process.argv;
//console.log(Arr[2]);
const request = require('request');
request(Arr[2], (error, response,body) => {
  // console.log('body:', body); // Print the HTML for the Google homepage.

  const fs = require('fs');

  fs.writeFile(Arr[3], body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  console.log(`Downloaded and saved ${body.length} bytes to ${Arr[3]}`);
});
