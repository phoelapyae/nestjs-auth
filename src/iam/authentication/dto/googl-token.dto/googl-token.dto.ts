import { IsNotEmpty } from "class-validator";

export class GooglTokenDto {
    @IsNotEmpty()
    token: string;
}