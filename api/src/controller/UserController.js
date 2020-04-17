const connection = require('../database/connection');
const crypto = require('crypto');
const nodemailer = require('nodemailer')

module.exports = {

    async index(request, response) {
        const users = await connection('users').select('*');
        return response.json({ users })
    },

    async create(request, response) {
        const { email } = request.body;
        const senha = crypto.randomBytes(4).toString('HEX');

        // nodemailer
          await connection('users').insert({
            email,
            senha
          });
        
          const nodemailer = require('nodemailer') // Importa o módulo principal

          const transporter = nodemailer.createTransport({ // Configura os parâmetros de conexão com servidor.
            host: 'smtp.umbler.com',
            port: 547,
            secure: false,
            auth: {
              user: 'exemplo@gabrielrufino.com',
              pass: 'ex3mpl0'
            }
          })

          const mailOptions = { // Define informações pertinentes ao E-mail que será enviado
            from: 'exemplo@gabrielrufino.com',
            to: email,
            subject: 'Projeto de software',
            text: `Sua Senha de Acesso Chegou, e é ${senha}`
          }

          transporter.sendMail(mailOptions, (err, info) => { // Função que, efetivamente, envia o email.
            if (err) {
              return console.log(err)
            }
            console.log(info)
          })

        // fim nodemailer

        return response.json({ senha });
    }
}