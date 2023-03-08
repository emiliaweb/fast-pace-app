import './Modal.scss';
import './Form.scss';
import './Input.scss';

import arrow from './arrow-right-light.svg';

const Modal = ({product, price, onCloseModal}) => {
    const onClose = (e) => {
        onCloseModal(e.target);
    }
    return (
        <div className="modal">
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content">
                    <h2 className="title title--small modal-title"><span>Fill out your credentials</span> to proceed with the order</h2>
                    <form className="form modal-form">
                        <input type="text" name="firstName" placeholder="First name*" className="input" />
                        <input type="text" name="lastName" placeholder="Last name*" className="input" />
                        <input type="text" name="phoneNumber" placeholder="Phone number*" className="input" />
                        <input type="text" name="address" placeholder="Address*" className="input" />
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