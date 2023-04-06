import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import './Modal.scss';
import './Form.scss';
import './Input.scss';

import arrow from './arrow-right-light.svg';

const Modal = ({product, price, onCloseModal, productID}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        productInfo: `${product} ${productID}`
    });
    const [isHiddenForm, setIsHiddenForm] = useState(false);
    const [formTitle, setFormTitle] = useState(<><span>Заполните данные</span> чтобы оформить заказ</>);

    const onClose = (e) => {
        onCloseModal(e.target);
    }

    const form = useRef();

    const onSendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(() => {
                setIsHiddenForm(true);
                setFormTitle(<>Заявка отправлена <span>успешно</span>. <br /> Ожидайте обратной связи в течение часа. </>);
            })
            .catch(() => {
                setIsHiddenForm(true);              
                setFormTitle(<>Что-то пошло <span>не так</span></>);  
            })
            .finally(() => {
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    address: '',
                    productInfo: `${product} ${productID}`
                });
            });
    }

    const onInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: .2}}}
            className="modal">
            <div className="modal-overlay" onClick={onClose}>
                <motion.div 
                    initial={{opacity: 0, transform: 'scale(.9)'}}
                    animate={{opacity: 1, transform: 'scale(1)', transition: {duration: .4, delay: .2}}}
                    className="modal-content">
                    <h2 className="title title--small modal-title">{formTitle}</h2>
                    <form 
                        className={`form modal-form ${isHiddenForm ? 'hidden' : null}`} 
                        onSubmit={onSendEmail} 
                        ref={form}>
                        <input 
                            onInput={onInput} 
                            type="text" 
                            name="firstName" 
                            placeholder="Имя*" 
                            className="input" 
                            value={formData.firstName} />
                        <input 
                            onInput={onInput} 
                            type="text" 
                            name="lastName" 
                            placeholder="Фамилия*" 
                            className="input" 
                            value={formData.lastName} />
                        <input 
                            onInput={onInput} 
                            type="text" 
                            name="phoneNumber" 
                            placeholder="Номер телефона*" 
                            className="input" 
                            value={formData.phoneNumber} />
                        <input 
                            onInput={onInput} 
                            type="text" 
                            name="address" 
                            placeholder="Адрес*" 
                            className="input" 
                            value={formData.address} />
                        <input 
                            readOnly
                            type="text" 
                            name="productInfo" 
                            className="visually-hidden" 
                            value={formData.productInfo} />
                        <div className="modal-form-info">
                            <h3 className="body-text form-product"><strong>{product}</strong></h3>
                            <div className="body-text form-price"><strong>{price}</strong></div>
                        </div>
                        <div className="modal-form-footer">
                            <div className="form-agreement">Отправляя форму вы соглашаетесь с <a href="#">Политикой Конфиденциальности</a></div>
                            <button className="btn btn--dark modal-form-btn">
                                Готово
                                <img src={arrow} alt="Arrow pointing to the right" />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Modal;