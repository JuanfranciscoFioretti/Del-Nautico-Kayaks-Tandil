
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3001;

// app.use(bodyParser.json());

// app.post('/send-email', (req, res) => {
//     const { user_name, user_phone, user_email, message } = req.body;

//     // Configura el transporter de nodemailer
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'tucorreo@gmail.com',
//             pass: 'tucontraseña'
//         }
//     });

//     // Configura el contenido del correo electrónico
//     const mailOptions = {
//         from: 'tucorreo@gmail.com',
//         to: 'juanfrafio125@gmail.com', // Correo de destino (tu cliente)
//         subject: 'Nuevo mensaje de contacto',
//         text: `Nombre: ${user_name}\nTeléfono: ${user_phone}\nEmail: ${user_email}\nMensaje: ${message}`
//     };

//     // Envía el correo electrónico
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send('Error al enviar el correo electrónico');
//         } else {
//             console.log('Correo electrónico enviado: ' + info.response);
//             res.status(200).send('Correo electrónico enviado correctamente');
//         }
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Servidor iniciado en el puerto ${PORT}`);
// });






















// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/send-email', (req, res) => {
//     const { name, phone, email, message } = req.body;

//     // Configura el transporte de nodemailer
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'enviodemailsdelnauticokayaks@gmail.com',  // Coloca aquí el correo desde donde enviarás los correos
//             pass: 'tucontraseña' // Coloca aquí la contraseña de tu correo
//         }
//     });

//     // Configura el contenido del correo electrónico
//     const mailOptions = {
//         from: 'enviodemailsdelnauticokayaks@gmail.com',
//         to: 'juanfrafio125@gmail.com',  // Correo de destino (tu cliente)
//         subject: 'Nuevo mensaje de contacto',
//         text: `Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\nMensaje: ${message}`
//     };

//     // Envía el correo electrónico
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send('Error al enviar el correo electrónico');
//         } else {
//             console.log('Email enviado: ' + info.response);
//             res.status(200).send('Correo electrónico enviado correctamente');
//         }
//     });
// });

// const PORT = 3001;  // Puerto en el que se ejecutará el servidor
// app.listen(PORT, () => {
//     console.log(`Servidor Node.js en funcionamiento en el puerto ${PORT}`);
// });
