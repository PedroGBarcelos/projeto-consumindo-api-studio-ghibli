import { Link } from "react-router-dom";
import type { Film } from "../../types/Film";

interface FilmCardProps {
    film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
    return (
        <Link to={`/films/${film.id}`}>

            <div className="group h-full flex flex-col overflow-hidden rounded-xl bg-amber-100 backdrop-blur-sm shadow-md
            transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer border border-amber-400">

                <div className="overflow-hidden h-40 sm:h-48 lg:h-52">

                    <img src={film.movie_banner} alt={film.title} className="h-full w-full object-cover
                    transition-transform duration-500 group-hover:scale-110"/>

                </div>

                <div className="p-3 sm:p-4 h-20 sm:h-24 flex items-center justify-center">
                    <h2 className="font-ghibli text-center text-sm sm:text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-gray-500 line-clamp-2 leading-tight">
                        {film.title}
                    </h2>
                </div>

            </div>
            
        </Link>
    );
};