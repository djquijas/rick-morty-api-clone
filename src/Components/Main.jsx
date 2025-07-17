import Card from "./Card"
import '../Styles/Main.css'
const Main = () => {
    const cards = []
    for(let i=0; i<=5; i++) {
        cards.push(<Card key={i}>{Math.floor(Math.random() * 826)}</Card>)
    }
    return (
        <main className="main-content">
            {cards}
        </main>
    )
}

export default Main