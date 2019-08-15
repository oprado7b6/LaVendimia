app.get('/main',
passport.authenticate('oauth2-jwt-bearer', { session: false }),
function (req, res) {
    getUserInfo(req) //get your information to use it.
        .then(function (userinfo) {  //return your promise
            res.json({ "name": userinfo.Name});
            //you can declare/return more vars in this res.json.
            //res.cookie('name', name); //https trouble
        })
    .error(function (e) {console.log("Error handler " + e)})
    .catch(function (e) {console.log("Catch handler " + e)});
});