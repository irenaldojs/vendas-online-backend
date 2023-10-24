import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'address',
})
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'complement', nullable: false })
  complement: string;

  @Column({ name: 'number' })
  numberAddress: string;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'city_id', nullable: false })
  cityId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
