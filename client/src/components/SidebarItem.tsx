import React, { ReactNode } from 'react'


interface SidebarItemProps {
    icon?: ReactNode;
    text: string;
}

const SidebarItem = ({ icon, text }: SidebarItemProps) => {
    return (
        <div className='flex gap-4 p-4 text-gray-700 cursor-pointer hover:bg-gray-200 rounded w-full transition-all duration-150'>
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    )
}

export default SidebarItem