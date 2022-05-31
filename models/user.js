const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  //init 메서드에서 테이블에 대한 설정
  static init(sequelize) {
    // super.init(인수1, 인수2)
    // 인수1: 테이블 컬럼에 대한 설정
    // 인수2: 테이블 자체에 대한 설정
    // id를 기본 키로 자동 연결하므로 id에 대해서 적을 필요 없음
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      // 이모티콘을 넣고 싶을 때는 utf8mb4와 utf8mb4_general_ci를 입력하기!
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  // 다른 모델과의 관계를 적는 메서드
  static associate(db) {
    db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});
  }
};