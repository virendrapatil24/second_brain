import Card, { CardProps } from './Card'

interface CardGridProps {
    cards: CardProps[];
}

const CardGrid = ({ cards }: CardGridProps) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'>
            {cards.map((card) => (
                <Card _id={card._id} title={card.title} link={card.link} type={card.type} />
            ))}
        </div>
    )
}

export default CardGrid