import { Component } from 'react';
import styles from "./Contact.module.css"

import { postContact } from "../../services/contact/contact.service";
import validateContact from '../../helpers/contact.validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function showToast() {
    toast.success("El mensaje se envió correctamente.");
}
function showErrorToast() {
    toast.error("Hubo un error al enviar el mensaje.");
}
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            loading: false,
            errors: {
                name: "",
                email: "",
                message: "",
            },
            touched: {
                name: false,
                email: false,
                message: false,
            },
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        // esta parte es importante para que se actualicen los errores cuando se cambia el estado del input y que
        // al hacer un cambio, deje de mostrar el error
        this.setState(prevState => ({
            touched: { ...prevState.touched, [name]: true },
            errors: { ...prevState.errors, [name]: "" }
        }));
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ touched: { name: true, email: true, message: true } });

        const { isValid, errors } = validateContact(this.state);
        if (!isValid) {
            this.setState({ errors });
            return;
        }

        this.setState({ loading: true });

        try {
            const response = await postContact(this.state);
            console.log(response);

            if (!response.error) {
                this.setState({
                    loading: false,
                    name: "",
                    email: "",
                    message: "",
                    errors: {
                        name: "",
                        email: "",
                        message: "",
                    },
                    touched: {
                        name: false,
                        email: false,
                        message: false,
                    },
                });

                showToast();
            }
        } catch (error) {
            console.log(error);
            this.setState({ loading: false });
            showErrorToast()
        }
    }

    render() {
        const { name, email, message, loading, touched, errors } = this.state;

        return (
            <main className={styles.contact_cont}>
                <div className={styles.wrapper}>
                    <section className={styles.contact_info}>
                        <h1>Contactanos</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ea ducimus pariatur dolore nihil tempora culpa blanditiis magni. Quaerat facilis dolor ipsam quos veritatis quod numquam non cumque eum illo.</p>
                    </section>
                    <form onSubmit={this.handleSubmit} className={styles.contact_form}>
                        <ul>
                            <li>
                                <h2>Envianos un mensaje</h2>
                            </li>
                            <li>
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={this.handleChange}
                                />
                                {touched.name && errors.name && <span>{errors.name}</span>}
                            </li>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={this.handleChange}
                                />
                                {touched.email && errors.email && <span>{errors.email}</span>}
                            </li>
                            <li>
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    type="text"
                                    name="message"
                                    id="message"
                                    value={message}
                                    onChange={this.handleChange}
                                />
                                {touched.message && errors.message && <span>{errors.message}</span>}
                            </li>
                            <li>
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Enviando...' : 'Enviar'}
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>

                <ToastContainer
                    position="bottom-left"
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </main>
        );
    }
}

export default Contact;