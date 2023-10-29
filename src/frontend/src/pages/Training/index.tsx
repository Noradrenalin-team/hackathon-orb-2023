import { Link } from 'react-router-dom'
import './Training.scss'

const Training = () => {
  return <main className='training'>
    <h1>Моё обучение</h1>
    <p>
      <Link to='/training/42312'>Общие сведения о профессии сварщик</Link>
    </p>
  </main>
}

export default Training