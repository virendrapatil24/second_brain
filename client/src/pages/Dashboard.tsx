import { useState } from 'react'
import Card from './../components/Card'
import CreateContentModal from './../components/CreateContentModal'
import NavBar from './../components/NavBar'
import SideBar from './../components/SideBar'

const Dashboard = () => {
    const [isCreateContentModalActive, setIsCreateContentModalActive] = useState(false);
    return (
        <>
            <SideBar />
            <CreateContentModal isActive={isCreateContentModalActive} onClose={() => setIsCreateContentModalActive(false)} />
            <div className='ml-72 bg-slate-50'>
                <NavBar isActive={isCreateContentModalActive} onClick={() => setIsCreateContentModalActive(true)} />
                <div className='flex pt-12 gap-2 justify-center h-screen'>
                    <Card title="Sample1" link="https://youtu.be/M4IHWsk-EAM?si=6Ze-hXdWAFRUFJ7g" type="youtube" tags={["new", "classy"]} />
                    <Card title="Sample2" link="https://x.com/virendrapatil24/status/1874478187809579166" type="twitter" tags={["new", "classy"]} date='added on 24/11/1999' />
                </div>
            </div>
        </>
    )
}

export default Dashboard