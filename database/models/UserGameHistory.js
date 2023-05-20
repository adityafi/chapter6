const { Model, DataTypes } = require("sequelize");

class UserGameHistory extends Model {}

UserGameHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      //references:
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    hobby: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "user_game_histories",
    timestamps: false,
  }
);
