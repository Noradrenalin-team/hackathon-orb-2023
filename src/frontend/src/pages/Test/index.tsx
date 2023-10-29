import './Test.scss'
import { useNavigate } from 'react-router-dom'

const Test = () => {
  const navigate = useNavigate()
  return <main>
    <h1>Тест 3234213</h1>
    <h3>Тест на знание историю эволюции сварочного аппарата</h3>

    <form onSubmit={(e) => {
      e.preventDefault()
      navigate('/results')
    }}>
      <div className="wrap">
        <b>1. Какова основная функция сварки?</b>
        <p className='row'><input type="radio" name='1' />a) Соединение материалов путем нагрева и плавления.</p>
        <p className='row'><input type="radio" name='1' />b) Резка материалов на куски.</p>
        <p className='row'><input type="radio" name='1' />c) Очистка поверхности материала.</p>
      </div>
      <div className="wrap">
        <b>2. Какие виды сварки вы знаете?</b>
        <p className='row'><input type="radio" name='2' /> a) Электросварка, газосварка, дуговая сварка.</p>
        <p className='row'><input type="radio" name='2' /> b) Бензосварка, химическая сварка, сварка ультразвуком.</p>
        <p className='row'><input type="radio" name='2' /> c) Термическая сварка, механическая сварка, вибрационная сварка.</p>
      </div>
      <div className="wrap">
        <b>3. Какие предосторожности следует соблюдать при сварке?</b>
        <p className='row'><input type="radio" name='3' />a) Носить специальную защитную одежду и маску, избегать контакта с газами и парометаллами.</p>
        <p className='row'><input type="radio" name='3' />b) Можно сваривать в любой одежде, главное – следить за процессом.</p>
        <p className='row'><input type="radio" name='3' />c) Не важно, какая одежда, главное – не касаться раскаленных поверхностей руками.</p>
      </div>
      <button>Отправить</button>      
    </form>
  </main>
}

export default Test