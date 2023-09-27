import React, { useState } from 'react';
import {mealData} from '../Data/Data';
import { handleMouseAction } from '../ActionMethods/ActionMethods';
import Button from '../Button/Button';
import '../../styles/Meal.scss';

const Meal:React.FC = () => {

    const [category, setCategory] = useState(mealData);

    const handleCategory = (category: any) => {
        setCategory(mealData.filter(item => {
            return item.category === category;
        }))
    }

    return(
        <div className='meals'>
            <h2>Meal</h2>
            <div className='meals-buttons'>
            <Button className='meal-button' onClick={() => setCategory(mealData)}>All</Button>
            <Button className='meal-button' onClick={() => handleCategory("Pizza")}>Pizza</Button>
            <Button className='meal-button' onClick={() => handleCategory("Chicken")}>Chicken</Button>
            <Button className='meal-button' onClick={() => handleCategory("Salad")}>Salad</Button>
            </div>
            <div className='meals-items'>
                {category.map((item) => (
                    <div key={item.id} id={`meal-item-${item.id}`} className='meal-item' onMouseEnter={() => handleMouseAction(item.id, "enter")} onMouseLeave={() => handleMouseAction(item.id, "leave")}>
                    <img className='meals-image' src={item.img} alt={item.name}/>
                    <p className='meal-name-tooltip'>{item.name}<span>{item.price}</span></p>
                    </div>
               ))}
            </div>
        </div>
    )
}

export default Meal;