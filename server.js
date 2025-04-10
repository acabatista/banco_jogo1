import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const   app = express()
app.use(express.json())
const users =[]


app.post('/usuarios', async (req,res) => {
     
   await  prisma.user.create({
        data:{
            email:req.body.email,
            age:req.body.age,
            name:req.body.name
        }
    })

    users.push(req.body)

    res.send('ok, enviado com sucesso')

})

/*app.get('/usuarios',(req, res)=>    {
res.json(users)
nome banco no mongo db :banco_jogo
senha :OKE7o9AL681u1f8R
parei no 56:05
})*/
app.listen(4000)    
