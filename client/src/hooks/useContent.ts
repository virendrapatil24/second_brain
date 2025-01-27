import axios from "axios";
import { useEffect, useState, useCallback } from "react";


export const useContent = (intervalDuration = 10 * 1000) => {
    const [content, setContent] = useState([]);
    const apiURL = import.meta.env.VITE_API_URL;

    const refresh = useCallback(async () => {
        try {
            const token = localStorage.getItem("secondBrainAuthToken");
            const response = await axios.get(
                `${apiURL}/api/v1/content/`,
                {
                    headers: {
                        token: token || "",
                    },
                }
            );
            setContent(response.data.content);
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    }, [apiURL]);

    useEffect(() => {
        const interval = setInterval(() => {
            refresh();
        }, intervalDuration);

        refresh();

        return () => {
            clearInterval(interval);
        };
    }, [refresh, intervalDuration]);

    return { refresh, content };
};
