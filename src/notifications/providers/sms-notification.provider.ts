import { User } from "src/users/entities/user.entity";
import { INotificationProvider } from "../interfaces/notification.interface";

export class SmsNotificationProvider implements INotificationProvider{

    send(user: User, message: string){
        console.log("Method implementation for send SMS Notification");
    }

}