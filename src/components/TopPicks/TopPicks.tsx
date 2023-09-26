import React from 'react';
import {topPicks} from '../Data/Data';
import '../../styles/TopPicks.scss';

const TopPicks: React.FC = () => {

    const onMouseEnter = (id:number) => {
        const element = document.getElementById(`meal-item-${id}`);

        if(element){
            element.classList.add("show-tooltip");
        }
    }

    const onMouseLeave = (id:number) => {
        const element = document.getElementById(`meal-item-${id}`);

        if(element){
            element.classList.remove("show-tooltip");
        }
    }

    return(
        <div className='top-picks'>
            <h2>Top Picks</h2>
            <div className='top-picks-items'>
                {topPicks.map((item) => (
                <div key={item.id} id={`meal-item-${item.id}`} className='meal-item' onMouseEnter={() => onMouseEnter(item.id)} onMouseLeave={() => onMouseLeave(item.id)}>
                <img className='top-picks-image' src={item.img} alt={item.title}/>
                <p className='meal-name-tooltip'>{item.title}<span>{item.price}</span></p>
                </div>
            ))}
            </div>
        </div>    
        )
}

export default TopPicks;