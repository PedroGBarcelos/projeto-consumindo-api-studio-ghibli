import { Link, useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation();

    if (location.pathname === "/") {
        return null;
    }

    return (
        <header className="sticky top-0 z-50 bg-amber-100 backdrop-blur-md border-b-2 border-amber-200 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div>
                        <Link to="/" className="font-ghibli text-2xl text-amber-400 hover:text-amber-600 transition-colors">
                            Studio Ghibli
                        </Link>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}