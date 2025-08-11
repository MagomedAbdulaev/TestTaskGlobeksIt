import { useState } from 'react';
import PhoneIcon from '../../assets/icons/phone.svg';
import MailIcon from '../../assets/icons/mail.svg';
import './UserCard.css';

function UserCard({ user_data, on_click }) {

  return (
    <div className='usercard' onClick={on_click}>
      <h2 className='usercard__title'>{user_data.name}</h2>
      <div className="usercard__item">
        <img
         src={PhoneIcon}
         alt="Номер телефона"
         width='14'
         height='24'
         className='item__image'
        />
        <span className="item__value">
          {user_data.phone}
        </span>
      </div>
      <div className="usercard__item">
        <img
         src={MailIcon}
         alt="Электронная почта"
         width='24'
         height='14'
         className='item__image'
        />
        <span className="item__value">
          {user_data.email}
        </span>
      </div>
    </div>
  )
}

export default UserCard;
