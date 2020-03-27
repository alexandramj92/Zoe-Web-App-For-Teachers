



module.exports = {
//logout user

    logout:  function (req, res) {
        res.clearCookie('access_token');
        res.json({user: {username : "", success: true}});
  }};