import { Profile } from "../../models/profile/profile.interface";

const UserList: Profile[] = [
    { firstName: 'Paul', lastName: 'Holliday', avatar: 'assets/imgs/logo.png', email: 'paul@paul.com',dateOfBirth: new Date() },
    { firstName: 'John', lastName: 'Doe', avatar: 'assets/imgs/logo.png', email: 'john@doe.com', dateOfBirth: new Date() },
    { firstName: 'Sarah', lastName: 'Smith', avatar: 'assets/imgs/logo.png', email: 'sarah@Smith.com', dateOfBirth: new Date() },
    { firstName: 'Royer', lastName: 'Reynolds', avatar: 'assets/imgs/logo.png', email: 'royer@reynolds.com', dateOfBirth: new Date() },
];

export const USER_LIST = UserList;