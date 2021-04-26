process.env.NODE_ENV = 'test'
const server = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')
let should = chai.should()

chai.use(chaiHttp)

describe('/GET infos',()=>{
    it('it should GET all the infos', (done)=>{
        chai.request(server)
        .get('/infos')
        .end((err,res)=>{
            if(err){
                console.log(err)
            }
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.result.rows[0].should.have.property('active_subscribers')
            res.body.result.rows[0].should.have.property('comments')
            res.body.result.rows[0].should.have.property('date')
            res.body.result.rows[0].should.have.property('submission')
            res.body.result.rows[0].should.have.property('subreddit_id')
            res.body.result.rows[0].should.have.property('subscribers')
        done()
        })
    })
})

describe('/POST info', ()=>{
    it('it should POST info',(done)=>{

        let info = {
            active_subscribers:5,
            comments:3,
            date:'2020-12-07 10:30:39',
            submission:67,
            subreddit_id:2,
            subscribers:9

        }
        chai.request(server)
        .post('/info')
        .send(info)
        .end((err,res)=>{
            if(err){
                console.log(err)
            }
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('result')
        done()
        })
    })
})

describe('/GET info',()=>{
    it('it should GET a specific info by subreddit id',(done)=>{
        let info = {subreddit_id:2}
        chai.request(server)
        .get('/info?subreddit_id='+info.subreddit_id)
        .send(info)
        .end((err,res)=>{
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('result')
        done()
        })
    })
})



// describe('/DELETE info',()=>{
//     it('it should DELETE specific info',(done)=>{
//         let info = {id:413}
//         chai.request(server)
//         .delete('/info?id='+info.id)
//         .send(info)
//         .end((err,res)=>{
//             res.should.have.status(200)
//             res.body.should.be.a('object')
//             res.body.should.have.property('result')
//         done()
//         })
//     })
// })