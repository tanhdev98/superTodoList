import axios from "axios"

export const getTasks = async (page, pageSize, signal) => {
    const response = await axios.get(`/tasks?pagination[pageSize]=${pageSize}&pagination[page]=${page}`, signal);
    return response.data;
}