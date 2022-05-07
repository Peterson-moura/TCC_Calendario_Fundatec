const express = require('express')
const app = express()
 let url 

// depois do db
const mongoose = require('mongoose')

const Calender = require('./models/Calender')

app.use(
    express.urlencoded({
      extended: true,
    }),
  )

  app.use(express.json())
  

  //Inserir Data no Banco
  app.post('/calender', async (req, res) => {
    const { Curso,Turma,Turno,Disciplina,Professor,Data} = req.body
  
    const calender = {
      Curso,
      Turma,
      Turno,
      Disciplina,
      Professor,
      Data      
    }
        

    try {      
      await Calender.create(calender)  
      res.status(201).json({ message: 'Agendado com Sucesso'})
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  //Puxar dados do Banco
  app.get('/calender', async (req, res) => {
    try {
      const calender = await Calender.find()
  
      res.status(200).json(calender)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  //Paginal Inicial Calendario
  app.get('/', (req, res) => {
    res.json({ message: 'Pagina inicial Calendario' })
  })

  mongoose
  .connect(
      "mongodb://localhost:27017/meu_banco",
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(4000)
  })
  .catch((err) => console.log(err))

