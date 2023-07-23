import { User } from "./User";
import { CustomMap } from "./CustomMap";
import { Company } from "./Company";

console.log('hello there');

const user = new User;
console.log(user);

const company = new Company;
console.log(company);


const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);

