import React from "react";
import './index.scss'



interface CardProps{
    nome:string;
    texto:string;
}



const Card:React.FC<CardProps> = ({nome , texto}) =>{


    return(
        <main className="cp-card">
            <div className="card">
            <div className="header">
                    <span className="title">{nome}</span>
                </div>
                <div className="content">
                    <p>
                      {texto}
                    </p>
                </div>
            </div>
        </main>
    )
}


export default Card;