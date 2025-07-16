import Card from "./Card"
const Main = () => {
    const cards = []
    for(let i=0; i<=6; i++) {
        cards.push(<Card key={i}>{Math.floor(Math.random() * 826)}</Card>)
    }
    return (
        <main>
            {cards}
        </main>
    )
}

export default Main