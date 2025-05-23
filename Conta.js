import { Model, DataTypes } from 'sequelize';

class Conta extends Model {
  static init(sequelize) {
    super.init(
      {
        saldo: DataTypes.DECIMAL,
      },
      {
        sequelize,
        tableName: 'contas',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'usuario_id', as: 'usuario' });
    this.belongsTo(models.Instituicao, { foreignKey: 'instituicao_id', as: 'instituicao' });
    this.hasMany(models.Transacao, { foreignKey: 'conta_id', as: 'transacoes' });
  }
}

export default Conta;
