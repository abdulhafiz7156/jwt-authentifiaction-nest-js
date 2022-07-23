import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
 private users: User[] = [
    {
        id: 0,
        name: 'Hafiz',
        email: 'xxafiz69@gmail.com',
        password: '6969'
    },

    {
        id: 1,
        name: 'Rizo',
        email: 'muhammadrizo.tursunbayev@gmail.com',
        password: 'rizo'
    },

    {
        id: 2,
        name: 'Hoji',
        email: 'siddikov.2007@gmail.com',
        password: 'hoji'
    },
    ];

    findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find((user) => user.email === email)

        if(user) {
            return Promise.resolve(user)
        }
        return undefined
    }

    findOne(id: number): Promise<User | undefined> {
        const user = this.users.find((user) => user.id === id)

        if(user) {
            return Promise.resolve(user)
        }
        return undefined
    }
}
