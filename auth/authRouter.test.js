const request = require('supertest');
const server = require('../api/server')
const prepTestDB = require('../helpers/prepTestDB')
const validateUniqueUsername = require('./validateUniqueUsername')
jest.mock('./validateUniqueUsername')

beforeEach(prepTestDB)
beforeEach(() => validateUniqueUsername.mockClear())

describe('authRouter.js', () => {

    describe('POST /auth/register', () => {
        it('creates a new user', async () => {
            const res = await request(server)
                .post('/auth/register')
                .send({ name: 'realtor', password: 'disguised!'})
            
            expect(validateUniqueUsername).toBeCalled()
            expect(res.status).toBe(201)
        })
    })

    describe('POST /login', () => {
        it('returns 200 OK', async () => {            
            const res = await request(server)
                .post('/auth/login')
                .send({ "name": "admin", "password": "password1234" })

            expect(res.status).toBe(200)
        })
    })
})