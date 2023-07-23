import { faker } from "@faker-js/faker";

export class User {

    userName: string;
    location: {
        ltd: number;
        lng: number;
    }

    constructor(){
        this.userName = faker.person.firstName();
        this.location = { 
            ltd: faker.location.latitude(), 
            lng: faker.location.longitude() 
        };
    }
}