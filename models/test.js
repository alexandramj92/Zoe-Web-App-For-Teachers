module.exports = function(sequelize, DataTypes) {
    let wp_6kmg8v_users = sequelize.define("wp_6kmg8v_users", {
      ID: {
        type: DataTypes.BIGINT(20),
        unique: true,
        autoIncrement: true,
        primaryKey: true 
      },
      user_login: {
        type: DataTypes.STRING(60)
      },
      // user_pass: {
      //   type: DataTypes.STRING(255)ss
      // },
      user_nicemane: {
        type: DataTypes.STRING(50)
      },
      user_email: {
        type: DataTypes.STRING(100)
      },
      user_url: {
          type: DataTypes.STRING(100)
      },
      user_registered: {
        type: DataTypes.DATE
      },
      user_activation_key: {
        type: DataTypes.STRING(255)
      },
      user_status: {
        type: DataTypes.INTEGER(11)
      },
      display_name: {
        type: DataTypes.STRING(250)
      }
    });
  
    return wp_6kmg8v_users;
  };
  