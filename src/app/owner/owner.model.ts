import { Pet } from "../pets/pet.model";

export class Owner {
    public id: number;
    public firstName: string;
    public lastName: string;
    public pets: Pet[];
    constructor(firstName: string,
        lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}