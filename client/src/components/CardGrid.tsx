import Card, { CardProps } from './Card'

interface CardGridProps {
    cards: CardProps[];
}

const CardGrid = ({ cards }: CardGridProps) => {
    console.log("these are cards", cards)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} link={card.link} type={card.type} />
            ))}
        </div>
    )
}

export default CardGrid