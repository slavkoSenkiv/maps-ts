import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{

    userName: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor(){
        this.userName = faker.person.firstName();
        this.location = { 
            lat: faker.location.latitude(), 
            lng: faker.location.longitude() 
        };
    }

    markerContent(): string {
        return `<p>User Name: ${this.userName}</p>`
    }
}