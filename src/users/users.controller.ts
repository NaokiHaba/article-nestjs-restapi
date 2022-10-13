import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * 登録
   * @param createUserDto
   * @returns
   */
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ message: string }> {
    return await this.usersService.create(createUserDto);
  }

  /**
   * @summary 一覧
   * @returns
   */
  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  /**
   * @summary 詳細
   * @param id
   * @returns
   */
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.usersService.findOne(+id);
  }

  /**
   * @summary 更新
   * @param id
   * @param updateUserDto
   * @returns
   */
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<{ message: string }> {
    return await this.usersService.update(+id, updateUserDto);
  }

  /**
   * @summary 削除
   * @param id
   * @returns
   */
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    return await this.usersService.remove(+id);
  }
}
