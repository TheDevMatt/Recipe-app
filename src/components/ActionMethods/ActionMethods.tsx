import React from 'react';

export const handleMouseAction = <T extends HTMLElement> (
    id:number,
    action: "enter" | "leave"
) => {
    const element = document.getElementById(`meal-item-${id}`)
    if(action === "enter"){
        element?.classList.add("show-tooltip");
    } else if(action === "leave"){
        element?.classList.remove("show-tooltip");
    }
}