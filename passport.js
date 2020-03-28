const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require ('./models/User');

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

// authorization 
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    //must match key in loginController.js
    secretOrKey: "NoobCoder"
}, (payload, done) => {
    User.findById({_id: payload.sub}, (err, user) => {
    if(err)
        return done(err, false)
    if(user)
        return done(null, user);
    else    
        return done(null, false);
    });
}));

//authentication local strategy using username and password
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({username}, (err, user) => {
        //something went wrong with the database
        if(err)
            return done(err);
        // if no user exists
        if(!user)
            return done(null, false);
        //check if password is correct
        user.comparePassword(password, done);

    });

}));
