const sdk = require('node-appwrite');

let client = new sdk.Client();

const endPoint = 'http://127.0.0.1:9501/v1';
const projectId = '6270fa31ea6924bb7676';
const apiKey = 'xxxs';

client
    .setEndpoint(endPoint)
    .setProject(projectId)
    .setKey(apiKey)
// .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
;


let account = new sdk.Account(client);
let users = new sdk.Users(client);

let promise3 = account.createJWT();

promise3.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});



//
//
// users.get('623b66a849afa34b5d4e').then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });
//
//
// account.get().then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });
//
//
//
//
// sdk
//     .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
//     .setProject('5df5acd0d48c2') // Your project ID
// ;
//
// let promise = sdk.account.create('[USER_ID]', 'email@example.com', 'password');
//
// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
