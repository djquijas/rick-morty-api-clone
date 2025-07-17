import '../Styles/Card.css'
import { useEffect, useState } from "react"

const Card = ({children}) => {

    const URL = 'https://rickandmortyapi.com/api/character/'

    const [characterData, setCharacterData] = useState(null)

    useEffect(() => {
        fetch(`${URL}${children}`)
            .then(res => res.json())
            .then(data => {
                setCharacterData(data)
            })
    }, [])

    return (
         characterData != null ?
        <article className="card-container">
            <img src={characterData.image} alt="Some image" />
            <section className="info">
                <h2>{characterData.name}</h2>
                <ul className='status'>
                    <li>{characterData.status} - {characterData.species}</li>
                </ul>
                <p>Last Known location</p>
                <h3>{characterData.location.name}</h3>
                <p>Fisrt seen in:</p>
                {/* <h3>{characterData.episode[0]}</h3> */}
            </section>
        </article> : <p>Loading...</p>
    )
}

export default Card
