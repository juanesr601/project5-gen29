import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"


const PokeCard = ({ url }) => {

    const [ pokemon, getPokemon ] = useFetch(url)

    console.log(pokemon);

    useEffect(() => {
        getPokemon()
    }, [])

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        
    <article className="card__total" onClick={handleNavigate}>
        <header className="card">
            <img className="card__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="card__info">
            <div className="card__info1">
            <h3 className="card__name">{pokemon?.name}</h3>
            <p className="card_type__tittle">Type</p>
            <ul className="card__type">{ 
                    pokemon?.types.map( typeInfo =>( 
                        <li className="card__types1" key={typeInfo.type.url}> {typeInfo.type.name}</li>
                    ))
                }
            </ul>
            </div>
            <hr className="card__hr"/>
            <ul className="card__stat">
                {
                    pokemon?.stats.map(statInfo => (
                        <li className="card__stats" key={statInfo.stat.url}>
                            { <span className="card_stast__name">{statInfo.stat.name}</span>}
                            <span className="card_stats__info">{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
   
    )
}

export default PokeCard
