const reqyest = require('supertest')
const app = require('../index')

.describe(" POST /empleadors", () => {
    it('TEST 01 empleado creado', () => {
        const data = {
            nombre: 'Juan Ramirez',
            cargo: 'admin01',
            departamento: 'Financiero',
            sueldo: 1400
        }
        request(app)
            .post('/Empleados')
            .send(data)
            .set('Aceptado', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200, done);
    })
})

describe("GET /users/:id",()=>{
    it("Respuesta cuando llamo por id", (done)=>{
    request(app)
    .get('/users/U001')
    .set('Aceptado','application/json')
    .expect('Content-Type, /json/')
    .expect(200,done)
    });

    
    it("Respuesta cuando llamo por id y no funciona", (done)=>{
        request(app)
        .get('/users/afdfdf')
        .set('Aceptado','application/json')
        .expect('Content-Type, /json/')
        .expect(404)
        .expect('Usuario no creado')
 });
} );