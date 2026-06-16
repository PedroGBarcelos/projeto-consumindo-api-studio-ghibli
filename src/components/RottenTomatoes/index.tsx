import React from 'react';
import certifiedIcon from '../../assets/img/certified-fresh.png';
import freshIcon from '../../assets/img/fresh.png';
import rottenIcon from '../../assets/img/rotten.png';

const ICONS = {
  certified: certifiedIcon,
  fresh: freshIcon,
  rotten: rottenIcon,
};

interface GhibliFilmProps {
  rt_score: string; 
}

const GhibliRating: React.FC<GhibliFilmProps> = ({ rt_score }) => {
  
  const score = parseInt(rt_score, 10);

  
  const getRatingMetadata = () => {
    if (score >= 75) return { icon: ICONS.certified, label: 'Certified Fresh' };
    if (score >= 60) return { icon: ICONS.fresh, label: 'Fresh' };
    return { icon: ICONS.rotten, label: 'Rotten' };
  };

  const { icon, label } = getRatingMetadata();

  return (
    <div className="flex items-center p-2 sm:p-3">
      <img src={icon} alt={label} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"/>
      <div className="ml-2">
        <div className="text-lg sm:text-xl font-black text-center">{score}%</div>
        <div className="text-xs sm:text-sm text-slate-500 font-light text-center leading-tight">{label}</div>
      </div>
    </div>
  );
};

export default GhibliRating;