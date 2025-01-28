import TrashIcon from '../icons/TrashIcon';

export interface CardProps {
    _id: string;
    title: string;
    link: string;
    type: "youtube" | "twitter";
    tags?: string[];
    date?: string;
    onDelete: (id: string) => void;
}

const Card = ({ title, link, type, tags, date, _id, onDelete }: CardProps) => (
    <div className="flex flex-col gap-4 w-72 h-96 p-4 border rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-lg truncate">{title}</div>
            <div className="flex items-center text-gray-500 cursor-pointer" onClick={() => onDelete(_id)}>
                <TrashIcon />
            </div>
        </div>
        <div className="overflow-hidden">
            {type === "youtube" && (
                <iframe
                    className="w-full h-full max-h-40 rounded-md"
                    src={link.replace("youtu.be", "www.youtube.com/embed")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}
            {type === "twitter" && (
                <blockquote className="twitter-tweet w-full max-h-40 overflow-hidden">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>
            )}
        </div>
        <div className="flex flex-wrap gap-2">
            {tags && tags.map((tag, index) => (
                <span key={index} className="bg-turquoise-100 py-1 px-2 rounded-full text-sm text-turquoise-900">
                    #{tag}
                </span>
            ))}
        </div>
        <div className="flex text-sm text-gray-500 justify-center">Added on 01/01/2025{date}</div>
    </div>
);

export default Card;
