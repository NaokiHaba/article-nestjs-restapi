import { MaxLength } from 'class-validator';

export class CreateUserDto {
  @MaxLength(255, {
    message: 'アカウント名は255文字以内で入力してください',
  })
  name: string;
}
