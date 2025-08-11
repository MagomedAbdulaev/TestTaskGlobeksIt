import './PopUp.css';

function PopUp({ user_data, onClose }) {


  function formatDate(input) {
    const date = new Date(input);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className='popup'>
        <header className='popup__header'>
          <h2 className='header__title'>{user_data.name}</h2>
          <div className="header__close" onClick={onClose}></div>
        </header>
        <ul className='popup__list'>
          <li className="list__item">
            <span className="item__key">Телефон:</span>
            <span className="item__value">{user_data.phone}</span>
          </li>
          <li className="list__item">
            <span className="item__key">Почта:</span>
            <span className="item__value">{user_data.email}</span>
          </li>
          <li className="list__item">
            <span className="item__key">Дата приема:</span>
            <span className="item__value">{formatDate(user_data.hire_date)}</span>
          </li>
          <li className="list__item">
            <span className="item__key">Должность:</span>
            <span className="item__value">{user_data.position_name.slice(0, 30)}...</span>
          </li>
          <li className="list__item">
            <span className="item__key">Подразделение:</span>
            <span className="item__value">{user_data.department.slice(0, 30)}...</span>
          </li>
        </ul>
        <section className='popup__information'>
          <h3 className='information__title'>Дополнительная информация:</h3>
          <p className='information__text'>
            Жуламур жула жипливу.
            Разработчики используют текст в качестве заполнителя макта страницы. 
            Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
          </p>
        </section>
      </div>
    </>
  )
}

export default PopUp;
