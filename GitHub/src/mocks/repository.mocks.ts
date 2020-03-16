import { Repository } from "../models/repository.interface";
import { USER_LIST } from "../mocks/user.mocks";

const repositoryList: Repository[] = [{
    name: 'Ionic 3 Camara',
    description: 'This repository shows the usage of the camara functionality within Ionic 3.',
    owner: USER_LIST[0]
},
{
    name: 'Ionic 3 SMS',
    description: 'This repository shows the usage of the SMS functionality within Ionic 3.',
    owner: USER_LIST[0]
},
{
    name: 'Ionic 3 Geolaction',
    description: 'This repository shows the usage of the Geolaction functionality within Ionic 3.',
    owner: USER_LIST[1]
},
{
    name: 'Ionic 3 Vibration',
    description: 'This repository shows the usage of the Vibration functionality within Ionic 3.',
    owner: USER_LIST[1]
}];

export const REPOSITORY_LIST = repositoryList;


