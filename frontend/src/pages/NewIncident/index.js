import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be the Hero' />
          <h1>Cadastro</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para
            resolve-lo
          </p>
          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#e02041' />
            Voltar para seus casos cadastrados
          </Link>
        </section>
        <form action=''>
          <input type='text' placeholder='Titulo do caso' />
          <textarea type='text' placeholder='Descrição' />
          <input type='text' placeholder='Valor em reais' />

          <button className='button' type='submit'>
            {' '}
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
