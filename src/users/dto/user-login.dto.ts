import { IsString } from 'class-validator';

export class UserRegisterDto {
	@IsString({ message: 'no email specified' })
	email: string;
	@IsString({ message: 'no password specified' })
	password: string;
	@IsString({ message: 'no name specified' })
	name: string;
}
