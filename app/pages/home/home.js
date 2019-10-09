const frameModule = require('ui/frame');

let navigate = function(page){
    console.log(`Going to ${page}`);
    frameModule.topmost().navigate(`pages/${page}/${page}`);
}
exports.onAboutTap = () => navigate('about');
exports.onContactTap = () => navigate('contact-us');
exports.onReposTap = () =>navigate('repos');
exports.onProfileTap = () =>navigate('profile');
exports.onImagesTap = () =>navigate('images');

