import { Owner } from '../owner/owner.model'
export class Pet {


    constructor(
        public id: number,
        public name: string,
        public owner: Owner,
        public breed: string
    ) {

    }
}