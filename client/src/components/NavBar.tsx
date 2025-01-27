import { PlusIcon } from "../icons/PlusIcon"
import ShareIcon from "../icons/ShareIcon"
import Button from "./ui/Button"
interface NavBarProps {
    isActive: boolean;
    onClick: () => void;
}


const NavBar = ({ onClick }: NavBarProps) => {
    return (
        <div className="flex justify-between items-center p-4 bg-slate-50">
            <div className="font-semibold text-2xl text-turquoise-900">Welcome To Your Brain!</div>
            <div className="flex gap-4">
                <Button text="Share Brain" startIcon={<ShareIcon />} />
                <Button text="Add Content" variant="secondary" startIcon={<PlusIcon />} onClick={onClick} />
            </div>
        </div>
    )
}

export default NavBar