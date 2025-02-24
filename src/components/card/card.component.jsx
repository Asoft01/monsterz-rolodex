import { Component } from "react";
import './card.styles.css'; 

// class Card extends Component {
//     render() {
//         const {id, name, email} = this.props.monster; 
//         return(
//             <div className="card-container" key={id}>
//                 <img 
//                     alt={`monster ${name}`} 
//                     src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                 />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

const Card = ({monster}) =>{
    const {id, name, email } = monster;
 
    return(
        <div className="card-container" key={id}>
            <img 
                alt="{`monster ${name}`}"
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <h2>{email}</h2>
        </div>   
    )
}
export default Card;