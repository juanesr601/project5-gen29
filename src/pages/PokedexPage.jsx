import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'


const PokedexPage = () => {

    const trainer = useSelector(store => store.trainer)

    const [inputValue, setInputValue] = useState('')
    const [typeSelected, setTypeSelected] = useState('allPokemons')

    console.log(typeSelected);

    const inputSearch = useRef()
    
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
    const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)

    useEffect(() => {
        if(typeSelected === 'allPokemons') {
            getPokemons()
        }else {
            getTypePokemon(typeSelected)
        }
        getPokemons()
    }, [typeSelected])

    const handleSearch = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())
    }

    const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

    return (
        <div className='poke_imgs__origin'>
            <img className='poke__img1' src="/image/img-group.png" alt="" />
            <img className='poke__img2' src="/image/img-projec5.png" alt="" />
            <h3 className='poke__name'>Welcome {trainer} </h3>
            <form className='poke__form' onSubmit={handleSearch}>
                <input className='poke__input'  ref={inputSearch} type="text" />
                <button className='poke__button'>Search</button>
            </form>
            <SelectType 
            setTypeSelected={setTypeSelected}
            />
            <div className='card__origin'>
                {
                    pokeFiltered?.map(poke => (
                        <PokeCard 
                        key={poke.url}
                        url={poke.url}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PokedexPage
