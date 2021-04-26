process.env.NODE_ENV = 'test'
const server = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const { restart } = require('nodemon')
let should = chai.should()

chai.use(chaiHttp)

describe('/GET lookups',()=>{
    it('it should GET all the lookups', (done)=>{
        chai.request(server)
        .get('/lookups')
        .end((err,res)=>{

            if(err){
                console.log(err)
            }
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.result.rows[0].should.have.property('id')
            res.body.result.rows[0].should.have.property('name')
            res.body.result.rows[0].should.have.property('abbreviation')
        done()
        })
    })
})

describe('/POST lookup',()=>{
    it('it should POST a lookup ',(done)=>{
        let lookup = {
            name: "Testing",
            abbreviation: "tst"
        }
        chai.request(server)
        .post('/lookup')
        .send(lookup)
        .end((err,res)=>{
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('result')
        done()
        })
    })
})

describe('/GET lookup',()=>{
    it('it should GET a specific lookup by abbreviation', (done)=>{
        let lookup = {abbreviation:'rit'}
        chai.request(server)
        .get('/lookup?abbreviation='+lookup.abbreviation)
        .send(lookup)
        .end((err,res) =>{
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('result')
        done()
        })
    })
})

// describe('/DELETE lookup', ()=>{
//     it('it should DELETE specific lookup',(done)=>{
//         let lookup = {
//             abbreviation:'tst'
//         }
//         chai.request(server)
//         .delete('/lookup?abbreviation='+lookup.abbreviation)
//         .send(lookup)
//         .end((err,res) =>{
//             res.should.have.status(200);
//             res.body.should.be.a('object')
//             res.body.should.have.property('result')
//         done()
//         })
//     })
// })

