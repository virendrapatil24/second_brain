import { useState } from 'react';
import CreateContentModal from '../components/CreateContentModal';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import CardGrid from '../components/CardGrid';
import { useContent } from '../hooks/useContent';

const Dashboard = () => {
    const [isCreateContentModalActive, setIsCreateContentModalActive] = useState(false);
    const { content, error, handleDeleteContent } = useContent();

    return (
        <>
            <SideBar />
            <CreateContentModal
                isActive={isCreateContentModalActive}
                onClose={() => setIsCreateContentModalActive(false)}
            />
            <div className="ml-72 bg-slate-50 h-screen">
                <NavBar isActive={isCreateContentModalActive} onClick={() => setIsCreateContentModalActive(true)} />
                {error && <div className="text-red-500">{error}</div>} {/* Error Message */}
                <CardGrid cards={content} onDelete={handleDeleteContent} />
            </div>
        </>
    );
};

export default Dashboard;
