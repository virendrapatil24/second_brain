import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL;

export const fetchContent = async (token: string) => {
    try {
        const response = await axios.get(`${apiURL}/api/v1/content/`, {
            headers: { token },
        });
        return response.data.content;
    } catch (err) {
        console.error(err)
        throw new Error('Error fetching content');
    }
};

export const deleteContent = async (id: string, token: string) => {
    try {
        await axios.delete(`${apiURL}/api/v1/content/`, {
            params: { contentId: id },
            headers: { token },
        });
    } catch (err) {
        console.error(err)
        throw new Error('Error deleting content');
    }
};
