import styles from "./Login.module.css"
import { useContext, useState } from "react"
import { userContext } from "../../context/user/UserContext"
import { signIn } from "../../services/users/user.service"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const { LoginUser } = useContext(userContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await signIn(form.email, form.password)
            if (response.error) {
                throw new Error(response.message)
            }

            setLoading(false)
            LoginUser()
            setForm({
                email: "",
                password: ""
            })
            navigate("/")
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    return (
        <main className={styles.login_cont}>
            <form onSubmit={handleSubmit} >
                <h1>Iniciar Sesion</h1>
                <div className={styles.error_cont}>
                    {error && <span>{error}</span>}
                </div>
                <ul>
                    <li className={styles.input_cont}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
                    </li>
                    <li className={styles.input_cont}>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" name="password" id="password" value={form.password} onChange={handleChange} />
                    </li>
                    <li className={styles.remember_cont}>
                        <input type="checkbox" name="rememberme" id="rememberme" />
                        <label htmlFor="rememberme">Recordarme</label>
                    </li>
                    <li className={styles.button_cont}>
                        <p>Todavía no tienes cuenta? <span>Registrarse</span></p>
                        {loading ? <button>Enviando...</button>
                            : <button>Iniciar Sesion</button>
                        }
                    </li>
                </ul>
            </form>

        </main>
    )
}

export default Login
