module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define(
    "Expense",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "expense",
    },
  );

  return Expense;
};
