import { useState, useEffect } from 'react'
import CreateContentModal from './../components/CreateContentModal'
import NavBar from './../components/NavBar'
import SideBar from './../components/SideBar'
import { useContent } from '../hooks/useContent'
import CardGrid from '../components/CardGrid'

const Dashboard = () => {
    const [isCreateContentModalActive, setIsCreateContentModalActive] = useState(false);
    const { content, refresh } = useContent();

    useEffect(() => {
        refresh();
    }, [refresh, isCreateContentModalActive])

    return (
        <>
            <SideBar />
            <CreateContentModal isActive={isCreateContentModalActive} onClose={() => setIsCreateContentModalActive(false)} />
            <div className='ml-72 bg-slate-50 h-screen'>
                <NavBar isActive={isCreateContentModalActive} onClick={() => setIsCreateContentModalActive(true)} />
                <CardGrid cards={content} />
            </div >
        </>
    )
}

export default Dashboard