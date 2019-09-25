// const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const secrets = require('../auth/secrets');
const Auth = require('./authModel');
const router = require('./authRouter');
const request = require('supertest');
const db = require('../api/db-config'); 

describe('authRouter.js', () => {

// resets tables
  beforeEach(async () => {
    await db('users').truncate()
  })

    describe('POST /register', () => {
        it('returns saved user', () => {
            request(router)
            .post('/register')
            .send('username=admin', 'password=password134')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if(err) return document(err);
                document();
            })
        })
    })
    describe('POST /login', () => {
        it('returns a token', () => {
            request(router)
            .post('/login')
            .send('username=admin', 'password=password1234')
            .then(res => console.log(res))
            // .set('token','application/json')
            // .expect(200)
            // .end(function(err, res) {
            //     if(err)return done(err);
            //     done()
            // })
        })
    })
})