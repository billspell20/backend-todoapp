var firebase = require('firebase');
const mongoose = require('mongoose');
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var useruid = user.uid;
      console.log(this.state.useruid)
      return useruid
    } else {
      console.log("no id");
    }
});

module.exports = mongoose.model('UserId', useruid);