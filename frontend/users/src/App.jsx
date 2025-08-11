import { useState, useEffect } from 'react';
import Search from './ui/Search/Search';
import UserCard from './ui/UserCard/UserCard';
import PopUp from "./ui/PopUp/PopUp.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [popUpUserId, setPopUpUserId] = useState(null);

  useEffect(() => {
    // Формируем урл запросы
    const url = searchValue.trim()
      ? `/api/?term=${encodeURIComponent(searchValue)}`
      : `/api/`;

    fetch(url, {
      method: 'get',
      mode: 'same-origin',
    })
      .then(response => response.json())
      .then(result => {
        setUsers(result.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, [searchValue]); // запрос каждый раз при изменении строки поиска

  return (
    <div className='wrapper'>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {users.length > 0 ? (
        <section className="usercards">
          {users.map((user_data) => (
            <UserCard
              user_data={user_data}
              key={user_data.id}
              on_click={() => setPopUpUserId(user_data.id)}
            />
          ))}
        </section>
      ) : (
        <h1 className='not_found'>Пользователей не найдено</h1>
      )}
      {popUpUserId && (
        <PopUp
          user_data={users.find(user => user.id === popUpUserId)}
          onClose={() => setPopUpUserId(null)}
        />
      )}
    </div>
  )
}

export default App;