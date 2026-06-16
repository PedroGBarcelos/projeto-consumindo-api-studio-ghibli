import { useEffect, useState } from "react";
import type { Film } from "../../types/Film";
import { api } from "../../services/api";
import { FilmCard } from "../../components/FilmCard";
import bgImage from "../../assets/img/image-bg.jpeg";

export const Home = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const data = await api.getFilms();

                const sortedFilms = [...data].sort((a, b) =>
                    a.title.localeCompare(b.title)
                );

                const topTenFilms = sortedFilms.slice(0, 10);

                setFilms(topTenFilms);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Erro ao carregar os filmes.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, []);

    if (loading) {
        return <p>Carregando filmes...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div
            className="h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col overflow-y-auto"
            style={{
               backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="grow flex items-center justify-center py-4 sm:py-6 lg:py-8 px-4 sm:px-8">
                <div className="max-w-7xl w-full flex flex-col items-center">
                    <h1 className="font-ghibli text-4xl sm:text-6xl lg:text-7xl text-center mb-6 lg:mb-10 p-2 text-amber-400 drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)]">
                        Studio Ghibli
                    </h1>

                    <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-5 w-full items-stretch">
                        {films.map((film) => (
                            <div key={film.id} className="flex">
                                <FilmCard film={film} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};