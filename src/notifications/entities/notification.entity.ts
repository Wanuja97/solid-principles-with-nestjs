import { User } from "src/users/entities/user.entity";

export class Notification {
    user: User;
    message: string;
    channel: [string];
}
