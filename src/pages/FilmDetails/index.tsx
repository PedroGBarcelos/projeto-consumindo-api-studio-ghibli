import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Film } from "../../types/Film";
import { api } from "../../services/api";
import bgImage from "../../assets/img/image-bg.jpeg";
import GhibliRating from "../../components/RottenTomatoes";

export const FilmDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [film, setFilm] = useState<Film | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                if (!id) {
                    throw new Error("Filme não encontrado.");
                }

                const data = await api.getFilmById(id);
                setFilm(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Erro ao carregar o filme.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchFilm();
    }, [id]);

    if (loading) {
        return (
            <p className="text-center p-10 font-ghibli text-amber-400">Carregando filme...</p>
        );
    }

    if (error) {
        return (
            <p className="text-center p-10 font-ghibli text-red-500">{error}</p>
        );
    }

    if (!film) {
        return (
            <p className="text-center p-10 font-ghibli text-amber-400">Filme não encontrado.</p>
        );
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex flex-col bg-cover bg-center bg-no-repeat overflow-y-auto" style={{
            backgroundImage: `url(${bgImage})`,
        }}>

            <div className="text-center mb-2 px-4 shrink-0">
                <h1 className="font-ghibli text-4xl sm:text-6xl lg:text-7xl text-center pt-4 text-amber-400 drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)]">
                    Detalhes do Filme
                </h1>
                <p className="font-ghibli text-2xl sm:text-4xl lg:text-5xl text-center mb-2 text-amber-400 drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)]"> "{film.title}"</p>
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 justify-center mx-auto py-2 px-4 sm:px-8 grow mb-4">

                <div className="lg:col-span-7 flex flex-col gap-4">

                    <div className="border-4 sm:border-[6px] border-amber-400 rounded-lg overflow-hidden shrink-0 shadow-lg lg:grow">
                        <div className="h-full w-full">
                            <img
                                src={film.movie_banner}
                                alt={`Banner do filme ${film.title}`}
                                className="w-full h-48 sm:h-64 lg:h-full min-h-75 object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0">

                        <div className="bg-amber-100 border-[3px] border-amber-400 rounded-lg overflow-hidden flex flex-col shadow-md">
                            <div className="bg-amber-200 text-center font-bold py-2 text-lg sm:text-xl border-b-[3px] border-amber-400 tracking-wider">
                                Rotten Tomatoes
                            </div>
                            <div className="flex-1 flex items-center justify-center p-2">
                                <GhibliRating rt_score={film.rt_score} />
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-amber-100 border-[3px] border-amber-400 rounded-lg overflow-hidden shadow-md">
                            <table className="w-full h-full text-left border-collapse font-semibold text-base sm:text-lg">
                                <tbody>
                                    <tr className="border-b-[3px] border-amber-400">
                                        <td className="bg-amber-200 py-2 px-4 w-1/3 sm:w-2/5">DIRETOR:</td>
                                        <td className="py-2 px-4">{film.director}</td>
                                    </tr>
                                    <tr className="border-b-[3px] border-amber-400">
                                        <td className="bg-amber-200 py-2 px-4">PRODUTORA:</td>
                                        <td className="py-2 px-4">{film.producer}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-amber-200 py-2 px-4">LANÇAMENTO:</td>
                                        <td className="py-2 px-4">{film.release_date}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                
                <div className="lg:col-span-5 flex flex-col h-full">
                    <div className="bg-amber-100 border-[3px] border-amber-400 rounded-lg overflow-hidden flex flex-col shadow-md h-full">
                        <div className="bg-amber-200 text-center font-bold py-3 text-lg sm:text-xl border-b-[3px] border-amber-400 tracking-wider shrink-0">
                            DESCRIÇÃO DO FILME
                        </div>
                        <div className="p-4 sm:p-8 text-[1rem] sm:text-[1.1rem] font-medium text-justify overflow-y-auto">
                            <p>{film.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
