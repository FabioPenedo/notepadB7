import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface UserInstance extends Model {
    id: number;
    foldername: string;
    title: string;
    text: string;
    notecolor: string;
}

export const Notepad = sequelize.define<UserInstance>('Notepad', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    foldername: {
        type: DataTypes.STRING,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
    },
    text: {
        type: DataTypes.STRING
    },
    notecolor: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'notes',
    timestamps: false
});