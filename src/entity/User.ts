import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number | undefined;

    @Column("varchar")
    public firstName: string | undefined;

    @Column("varchar")
    public lastName: string | undefined;
}
