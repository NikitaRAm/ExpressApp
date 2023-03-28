import { IsString } from 'class-validator';

export class UserLoginDto {
	@IsString({ message: 'no email specified' })
	email: string;
	@IsString({ message: 'no password specified' })
	password: string;
}
