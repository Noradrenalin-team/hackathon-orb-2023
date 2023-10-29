import './Sidebar.scss'
import { NavLink } from 'react-router-dom'

const Sidebar =() => {
  return (
    <aside className='sidebar'>
      <NavLink to='/company' className={'item'}>О компании</NavLink>
      <NavLink to='/training' className={'item'}>Мое обучение</NavLink>
      <NavLink to='/tests' className={'item'}>Мои тесты</NavLink>
      <NavLink to='/results' className={'item'}>Мои результаты</NavLink>
      <NavLink to='/appeals' className={'item'}>Мои обращения</NavLink>
      <NavLink to='/applications' className={'item'}>Мои заявки</NavLink>
      <NavLink to='/materials' className={'item'}>База учебных материалов</NavLink>
      <NavLink to='/tests-base' className={'item'}>База тестов</NavLink>
      <NavLink to='/staff' className={'item'}>База сотрудников</NavLink>
      <NavLink to='/analytics' className={'item'}>Аналитика по компании</NavLink>
      <NavLink to='/settings' className={'item'}>Настройки</NavLink>
    </aside>
  )
}

export default Sidebar