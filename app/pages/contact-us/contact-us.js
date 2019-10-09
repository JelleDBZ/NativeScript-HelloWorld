const dialogModule = require('ui/dialogs');
const obs = require('data/observable');

// let message = new obs.Observable();
// message.message= "";
// message.subject= "";

let message = obs.fromObject ({
    message: "",
    subject: ""
});

exports.onSubmit = function() {
    console.log("Submitting message: " + JSON.stringify(message));
    dialogModule.alert('Submitted message succesfully');
}
exports.onLoaded = function(args) {
    let b = args.object; //get page that was loaded
    b.bindingContext = message; //Data binding between message and GUI
}

