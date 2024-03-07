import { User } from "src/users/entities/user.entity";

export interface INotificationProvider{
    send(user: User, message: string);
}