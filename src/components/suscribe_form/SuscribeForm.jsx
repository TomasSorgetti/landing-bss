import { useState } from 'react'
import styles from './SuscribeForm.module.css'
import { suscribeNewsletter } from "../../services/newsletter/newsletter.service"

const SuscribeForm = () => {
    const [loading, setLoading] = useState(false)
    const handleSend = async (e) => {
        e.preventDefault()
        if (!e.target.email.value) return
        setLoading(true)
        try {
            const response = await suscribeNewsletter(e.target.email.value)
            if (response.error) {
                throw new Error(response.message)
            }
            setLoading(false)
            e.target.reset()
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    return (
        <form onSubmit={handleSend} className={styles.suscribe_form}>
            <input type="email" name="email" placeholder="Email" />
            <button type="submit">
                {loading ? "Enviando..." : "Suscribirse"}
            </button>
        </form>
    )
}

export default SuscribeForm
