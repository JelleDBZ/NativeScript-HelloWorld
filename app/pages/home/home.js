const frameModule = require('ui/frame');

exports.onAboutTap = function(){
    console.log('Going to about');
    frameModule.topmost().navigate('pages/about/about');
}