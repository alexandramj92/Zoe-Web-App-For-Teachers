
module.exports = {
//authentication

    authenticate:  function (req, res) {

      const {username, _id} = req.user;
      res.status(200).json({isAuthenticated : true, user : {username, _id}});
     
  }};