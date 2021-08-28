import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import '../assets/styles/components/Search.scss';
import logo from '../assets/static/Logo_ML.png';
import iconSearch from '../assets/static/ic_Search.png';

const Search = () => {
  const [ search, setSearch ] = useState('');
  const history = useHistory();

  const onHandler = (event) => {
    const { value } = event.target;
    setSearch(value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    history.push(`/items?search=${search}`);
  }

  return (
    <section className="search">
    <form className="search-form" onSubmit={onFormSubmit}>
      <img src={logo} alt="Logo Meli" />
      <input id="search" onChange={onHandler} type="text" className="input-search" placeholder="Nunca dejes de buscar" />
      <button className="button-input-search" type="submit">
        <img src={iconSearch} alt='search button' />
      </button>
    </form>
  </section>
  )
}

export default Search;
