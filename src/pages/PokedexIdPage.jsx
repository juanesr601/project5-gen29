import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const PokedexIdPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const [ pokemon, getPokemon ] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [id])

    console.log(pokemon);

    return (
        <div className="pokemon">
            <img className="poke__img1" src="/image/img-group.png" alt="" />
            <img className="poke__img2" src="/image/img-projec5.png" alt="" />
            <section className="pokemon__info">
            <img className="pokemon__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <h2 className="pokemnon__id"> #{pokemon?.id}</h2>
            <h2 className="pokemon__name"><hr className="barra"/>{pokemon?.name}<hr className="barra__2"/></h2>
            <div className="pokemon__medidas">
            <h3 className="pokemon__weight"><p className="name__weight">Weight</p> {pokemon?.weight}</h3>
            <h3 className="pokemon__height"><p className="name__height">Height
</p> {pokemon?.height}</h3>
</div> 
<div className="pokemon_types__origin">
            <ul className="pokemon__type"><p className="name__type">Type</p>{pokemon?.types.map(typeName => (
                <li className="types__list" key={typeName.type.url}>{typeName.type.name}</li>
            ))}</ul> 
            <ul className="pokemon__abilities">
                <p className="name__abilities">Abilities</p>
                {pokemon?.abilities.map(abili => (
                    <li className="abilities__list" key={abili.ability.url}>{abili.ability.name}</li>
                ))}
            </ul>
            </div>
            <div className="stats__origin">
            <ul className="pokemon__stats">
                <h2 className="name__stats">Stats</h2>
                {pokemon?.stats.map(statsInfo => (
                    <li className="stats__list" key={statsInfo.stat.url}>
                    {statsInfo.stat.name} <ol>{statsInfo.base_stat}/150</ol>  </li> 
                ))}
                
            </ul>
            </div> 
            </section>
            <section className="pokemon__move">
                <h2 className="name__move">Movements</h2>
                <ul className="movements">
                    {pokemon?.moves.map(movesInfo => (
                        <li className="moves__list" key={movesInfo.move.url}>{movesInfo.move.name}</li>
                    ))}
                </ul>
            </section>       
        </div>
    )
}

export default PokedexIdPage
