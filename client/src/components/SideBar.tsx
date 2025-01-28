import BrainIcon from '../icons/BrainIcon'
import SidebarItem from './SidebarItem'
import YoutubeIcon from '../icons/YoutubeIcon'
import TwitterIcon from '../icons/TwitterIcon'

const SideBar = () => {
    return (
        <div className='h-screen bg-white border-r w-72 fixed left-0 top-0'>
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
    )
}

export default SideBar