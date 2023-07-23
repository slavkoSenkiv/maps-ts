import { User } from "./User";
import { CustomMap } from "./CustomMap";

console.log('hello there');
const user = new User;
console.log(user);


const customMap = new CustomMap('map');
customMap.addMarker(user);

