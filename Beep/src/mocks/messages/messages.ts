import { USER_LIST } from "../profile/profile";
import { Message } from "../../models/message/message.interface";

const UserList = USER_LIST;

const messagesList: Message[] = [];

UserList.forEach(user => {
    messagesList.push({user: user, date: new Date()})
});


export const MESSAGE_LIST = messagesList;