import { useState, useEffect, useCallback } from 'react';
import { fetchContent, deleteContent } from '../services/apiService';

export const useContent = (intervalDuration = 10 * 1000) => {
    const [content, setContent] = useState([]);
    const [error, setError] = useState<string | null>(null);
    const token = localStorage.getItem('secondBrainAuthToken') || '';

    const refresh = useCallback(async () => {
        try {
            const contentData = await fetchContent(token);
            setContent(contentData);
        } catch (err) {
            console.error(err)
            setError('Failed to fetch content');
        }
    }, [token]);

    const handleDeleteContent = async (id: string) => {
        try {
            await deleteContent(id, token);
            refresh();
        } catch (err) {
            console.error(err)
            setError('Failed to delete content');
        }
    };

    useEffect(() => {
        const interval = setInterval(refresh, intervalDuration);
        refresh();
        return () => clearInterval(interval);
    }, [refresh, intervalDuration]);

    return { content, error, refresh, handleDeleteContent };
};
