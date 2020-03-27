import React from 'react';
import './styles.css';
import herosImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImage} alt='Be the Hero' />
        <form action=''>
          <h1>Faça seu logon</h1>
          <input placeholder='Sua ID' type='text' />
          <button className='button' type='submit'>
            Entrar
          </button>
          <a href='/register'>
            <FiLogIn size={16} color='#e02041' />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={herosImage} alt='Heroes' />
    </div>
  );
}
