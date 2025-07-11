import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com',
      role: 'employee',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@email.com',
      role: 'manager',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@email.com',
      role: 'intern',
    },
    {
      id: 4,
      name: 'Jonathan Brown',
      email: 'jonathan@email.com',
      role: 'manager',
    },
  ];

  // role co the trong hoac la 1 trong 3
  findAll(role?: 'intern' | 'employee' | 'manager') {
    if (role) {
      const roleArray =  this.users.filter((user) => user.role === role);
      if (roleArray.length === 0) {
        throw new NotFoundException('Not exist ' + `${role}` + ' role')
      }
      return roleArray}
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id); // giong voi for each trong cpp
    if (!user) {
      throw new NotFoundException('User with this id not found');
    }

    return user
  }

  create(createUserDto: CreateUserDto) {
    const UserHighestID = [...this.users.sort((a, b) => b.id - a.id)]; //descent sort
    const newUser = {
      id: UserHighestID[0].id + 1,
      ...createUserDto
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'intern';
      employee;
      manager;
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });
    return this.findOne(id);
  }

  remove(id: number) {
    const removeUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removeUser?.name ? removeUser.name : `User with id ${id} not found`;
  }
}
