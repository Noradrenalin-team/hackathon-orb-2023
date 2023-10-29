import './Results.scss'

const Results = () => {
  return (
    <main className="results">
      <h1>Мои результаты</h1>
      <table>
      <thead>
        <th>Название</th>
        <th>Статус</th>
      </thead>
      <tbody>
        <tr>
        <td>Тест на знание строения сворочного аппарата</td>
        <td>44%</td>
        </tr>
        <tr>
        <td>Тест на знание историю эволюции сварочного аппарата</td>
        <td>33.3%</td>
        </tr>
      </tbody>
    </table>
    </main>
  );
};

export default Results;
