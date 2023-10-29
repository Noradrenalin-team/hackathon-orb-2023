import './Tests.scss'
import { Link } from "react-router-dom"

const Tests = () => {
  return <main className="tests">
    <h1>Мои тесты</h1>
    <table>
      <thead>
        <th>Название</th>
        <th>Статус</th>
      </thead>
      <tbody>
        <tr>
        <td>Тест на знание строения сворочного аппарата</td>
        <td>Пройдено</td>
        </tr>
        <tr>
        <td>Тест на знание историю эволюции сварочного аппарата</td>
        <td><Link to='/tests/3234213'>Не пройдено</Link></td>
        </tr>
      </tbody>
    </table>
  </main>
}

export default Tests