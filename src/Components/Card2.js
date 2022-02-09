import React from 'react'
import './Card2.css'
function Card2 (){
    return(
        <div class="card2Contain">
            <div class="inputDiv">
                <input class="addTask" placeholder="Add Task for today" type="text"></input>
                <button class="Add">Add</button>
            </div>
            <div class="Card2">
                <p>1.</p>
                <p>Coding class</p>
                <button class="delete">Delete</button>
            </div>
        </div>
    )
}

export default Card2