import React, { useRef, useState } from 'react';
import styles from './styles.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// import emailjs from 'emailjs-com';
// import axios from 'axios';

const ContactForm = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rz1wkwh', 'template_p6zg59l', form.current, '56WsSw6Y5fcpk1YdC')
        .then((result) => {
            // alert("Se ha enviado el mail de forma correcta.");
            Swal.fire({
                title: 'Confirmado!',
                text: 'Su consulta fue enviada de forma correcta.',
                icon: 'success',
                confirmButtonText: 'Hecho',
                allowEscapeKey: true,
                allowOutsideClick: true,
                timer: 6000,
                backdrop: '#445938b1',
            })
            console.log(result.text);
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
            
            // setInput('');
            // setFormData(formData.value(''));
            // input.value = '';
        }, (error) => {
            // alert("Se ha enviado el mail de forma incorrecta.");
            Swal.fire({
                title: 'Error!',
                text: 'El mensaje no fue enviado de forma correcta.',
                icon: 'error',
                confirmButtonText: 'Intenta de nuevo',
                allowEscapeKey: true,
                allowOutsideClick: true,
                timer: 6000,
                backdrop: '#4e3a3ab2',
            })
            console.log(error.text);
        });
    }

    
    // const [ input, setInput ] = useState('');

    const [ formData, setFormData ] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData('');
        // setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    

    //.................................................

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         //PROBAR CON HTTPS acá abajo .
    //         await axios.post('http://localhost:3001/send-email', formData);
    //         alert('Correo electrónico enviado correctamente');
    //         //Acción adicional de limpiar el formulario luego de enviar el correo
    //         setFormData({
    //             name: '',
    //             phone: '',
    //             email: '',
    //             message: ''
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         alert('Error al enviar el correo electrónico');
    //     }
    // };

    return (
        // <div className='formContainer'>
            <div className="login-box" id='Contacto'>
                <h1>CONTACTO</h1>
                <form id='form' ref={form} onSubmit={sendEmail}>
                    <div className=''>
                        <div className="user-box">
                        <input 
                            type="text" 
                            name="user_name" 
                            // value={input}
                            value={formData.name}
                            onChange={handleChange}
                            autocomplete="off"
                            required/>
                        <label>Nombre</label>
                        </div>
                        <div className="user-box">
        {/* .......... ELIMINAR EL NUMBER PICKER ....... */}
                        <input
                            type="number" 
                            name="user_phone"
                            value={formData.phone}
                            onChange={handleChange}
                            autocomplete="off"
                            required
                            />
                        <label>Teléfono</label>
        {/* .......... ELIMINAR EL NUMBER PICKER ....... */}
                        </div>
                    </div>
                    <div className="user-box">
                    <input 
                        type="mail" 
                        name="user_email"
                        autoComplete='off'
                        value={formData.email}
                        onChange={handleChange}
                        autocomplete="off"
                        required/>
                    <label>Email</label>
                    </div>
                    <div className="user-box">
                        {/* <textarea name="message" cols="60" rows="5"/> */}
                    <input 
                        type="text" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        autocomplete="off"
                        required
                        />
                    <label>Deje su consulta</label>
                    </div>
                    <button id='button-submit' type='submit'>
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                        <p>Enviar</p>
                    </button>
                </form>
            </div>
        // </div>
    )
}

export default ContactForm;
