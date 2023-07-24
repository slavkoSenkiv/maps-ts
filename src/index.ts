import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from './CustomMap';

console.log('hello');

const user = new User;
console.log(user.userName);

const company = new Company;
console.log(company);

const customMap = new CustomMap('map'); 
customMap.addMarker(user);
customMap.addMarker(company);


