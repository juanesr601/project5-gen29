import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

function SelectType({ setTypeSelected }) {

    const url = 'https://pokeapi.co/api/v2/type'
    const [ types, getTypes ] = useFetch(url)

    useEffect(() => {
        getTypes()
    }, [])

    const handleChange = e => {
        setTypeSelected(e.target.value);
    }

    return (
        <div className='all__types'>
            <select className='all__select' onChange={handleChange}>
                <option className='all__names' value="allPokemons">All pokemons</option>
                    {
                        types?.results.map(typeInfo => (
                            <option className='all__pokemons' key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                        ))
                    }
            </select>
        </div>
    )
}

export default SelectType
