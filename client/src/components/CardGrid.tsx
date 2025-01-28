import Card, { CardProps } from './Card';

interface CardGridProps {
    cards: CardProps[];
    onDelete: (id: string) => void;
}

const CardGrid = ({ cards, onDelete }: CardGridProps) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {cards.map(card => (
            <Card key={card._id} {...card} onDelete={onDelete} />
        ))}
    </div>
);

export default CardGrid;
