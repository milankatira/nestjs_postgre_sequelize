import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Book extends Model {
  @Column
  number: string;
}
