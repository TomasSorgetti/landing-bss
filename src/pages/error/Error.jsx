import styles from './Error.module.css'
import Button from '../../components/button/Button'
const Error = () => {
  return (
    <main className={styles.error_cont}>
      <h1>Opps! <span>Algo salio mal</span></h1>
      <p>La página que buscas
        no se encuentra.</p>
      <Button label='Inicio' url='/' />

    </main>
  )
}

export default Error
