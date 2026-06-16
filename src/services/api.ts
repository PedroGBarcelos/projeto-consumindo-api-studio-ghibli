import type { Film } from "../types/Film";

const API_URL = "https://ghibliapi.vercel.app/films";

const getFilms = async (): Promise<Film[]> => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch films");
    }

    const data = await response.json();

    return data as Film[];
};

const getFilmById = async (id: string): Promise<Film> => {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch film");
    }

    const data = await response.json();

    return data as Film;
};

export const api = {
    getFilms,
    getFilmById,
};