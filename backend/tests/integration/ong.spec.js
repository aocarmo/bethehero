const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () =>{
       await connection.destroy();
    });

    it('should be able to create a new ONG', async () =>{
        const response = await request(app)
            .post('/ongs')
            .send({
            
                name : "APAE",
                email: "contator@gmail.com",
                whatsapp: "7133415588",
                city: "Salvador",
                uf:"BA"
            
            });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    })
})