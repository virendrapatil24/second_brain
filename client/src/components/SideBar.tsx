import BrainIcon from '../icons/BrainIcon'
import SidebarItem from './SidebarItem'
import YoutubeIcon from '../icons/YoutubeIcon'
import TwitterIcon from '../icons/TwitterIcon'
import Button from './ui/Button'

interface SideBarProps {
    onLogout: () => void
}

const SideBar = ({ onLogout }: SideBarProps) => {

    return (
        <div className='h-screen bg-white border-r w-72 fixed left-0 top-0 flex flex-col justify-between pb-6'>
            <div>
                <div className='flex gap-2 items-center p-4'>
                    <span className='text-turquoise-600'>
                        <BrainIcon />
                    </span>
                    <p className='text-turquoise-900 font-bold text-2xl'>Second Brain</p>
                </div>

                <div className='p-4'>
                    <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
                    <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                </div>
            </div>

            <div className='flex justify-center'>
                <Button text="Logout" onClick={onLogout} />
            </div>

        </div>
    )
}

export default SideBar