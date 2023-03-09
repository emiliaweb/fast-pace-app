import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import './Modal.scss';
import './Form.scss';
import './Input.scss';

import arrow from './arrow-right-light.svg';

const Modal = ({product, price, onCloseModal}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
    });
    const [isHiddenForm, setIsHiddenForm] = useState(false);
    const [formTitle, setFormTitle] = useState(<><span>Fill out your credentials</span> to proceed with the order</>);

    const onClose = (e) => {
        onCloseModal(e.target);
    }

    const form = useRef();

    const onSendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(() => {
                setIsHiddenForm(true);
                setFormTitle(<>Order placed <span>successfully</span>. <br /> We'll inform you about the status of your order within an hour.</>);
            })
            .catch(() => {
                setIsHiddenForm(true);              
                setFormTitle(<>Something went <span>wrong</span></>);  
            })
            .finally(() => {
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    address: '',
                });
            })
    }

    const onInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content">
                    <h2 className="title title--small modal-title">{formTitle}</h2>
                    <form className={`form modal-form ${isHiddenForm ? 'hidden' : null}`} onSubmit={onSendEmail} ref={form}>
                        <input 
                            onInput={onInput} 
                            type="text" 
                            name="firstName" 
                            placeholder="First name*" 
                            className="input" 
                            value={formData.firstName} />
                        <input 
                            onInput={onInput} 
                            type="text" 
                            name="lastName" 
                            placeholder="Last name*" 
                            className="input" 
                            value={formData.lastName} />
                        <input 
                            onInput={onInput} 
                            type="text" 
                            name="phoneNumber" 
                            placeholder="Phone number*" 
                            className="input" 
                            value={formData.phoneNumber} />
                        <input 
                            onInput={onInput} 
                            type="text" 
                            name="address" 
                            placeholder="Address*" 
                            className="input" 
                            value={formData.address} />
                        <div className="modal-form-info">
                            <h3 className="body-text form-product"><strong>{product}</strong></h3>
                            <div className="body-text form-price"><strong>{price}</strong></div>
                        </div>
                        <div className="modal-form-footer">
                            <div className="form-agreement">By submitting this form you automatically agree to our <a href="#">Privacy Policy</a></div>
                            <button className="btn btn--dark modal-form-btn">
                                Submit
                                <img src={arrow} alt="Arrow pointing to the right" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;