const TradingView = require('./js/main');

/**
 * This example tests the user login function
 */

process.argv[2] = "TVUsername9@gmail.com"
process.argv[3] = "TVpassword"
if (!process.argv[2]) throw Error('Please specify your username/email');
if (!process.argv[3]) throw Error('Please specify your password');

TradingView.loginUser(process.argv[2], process.argv[3], false).then((user) => {
  console.log('User:', user);
  console.log('Sessionid:', user.session);
  console.log('Signature:', user.signature);
}).catch((err) => {
  console.error('Login error:', err.message);
});