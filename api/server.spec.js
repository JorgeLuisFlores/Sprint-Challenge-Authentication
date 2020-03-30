const server = require('./server.js');
const request = require('supertest');

describe('server.js', () => {

    test('should be the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {

        it('should return 401 unauth', async () => {
            const res = await request(server).get('/api/jokes');
            expect(res.status).toBe(401);
        });

        it('should be json', async () => {
            const res = await request(server).get('/api/jokes');
            expect(res.type).toBe('application/json');
        })

    });
});