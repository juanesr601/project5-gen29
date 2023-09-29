import { useRef } from "react"
import { setTrainerSlice } from '../store/slice/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const inputTrainer = useRef() 

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleTrainer = e => {
        e.preventDefault()
        dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }

    return (
        <div className="home">
            <img className="home__img" src="/image/img-projec5.png" alt="" />
            <h1 className="home__trainer">Hi Trainer!</h1>
            <p className="home__nickname">To start, please enter your trainer nickname</p>
                <form className="home__form" onSubmit={handleTrainer}>
                <input className="home__input"   ref={inputTrainer} type="text" placeholder=" your name..."/>
                <button className="home__button">Start</button>
                </form>
                <div className="home_img__father">
        <img className="home__img2" src="/image/img-group1.png" alt="" />
        </div>
        </div>
        
    ) 
}

export default HomePage
