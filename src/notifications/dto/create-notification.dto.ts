import { User } from "src/users/entities/user.entity";

export class CreateNotificationDto {
    user: User;
    message: string;
    channel: [string];
}
