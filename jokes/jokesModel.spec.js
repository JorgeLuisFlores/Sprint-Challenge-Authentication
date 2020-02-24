const db = require('../database/dbConfig.js');
const Users = require('./jokesModel.js');

describe('users model', () => {
    describe('add', () => {
        it('should add the provided users into the db', async () => {
            await Users.add({
                username: "testing test",
                password: "testing test"
            });
            await Users.add({
                username: "testing test2",
                password: "testing test2"
            });

            const users = await db('users');
            expect(users).toHaveLength(2);
        })

        it('should return the added user', async () => {
            let user = await Users.add({
                username: "testing test",
                password: "testing test"
            });
            expect(user.username).toBe('testing test');
            expect(user.password).toBe('testing test');

            user = await Users.add({
                username: "testing test2",
                password: "testing test2"
            });
            expect(user.username).toBe('testing test2');
            expect(user.password).toBe('testing test2');

        })
    })
})

beforeEach(async () => {
    await db('users').truncate();
})