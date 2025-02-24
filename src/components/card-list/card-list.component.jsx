///////// Class List Component ///////////////////
// import { Component } from "react";
// import Card from "../card/card.component";
// import './card-list.styles.css';
// class CardList extends Component {
//     render() {
//         // console.log(this.props);
//         // console.log('render');
//         const { monsters } = this.props;
//         return (
//             <div className="card-list">
//                 {/* Hello! I'm the CardList Component */}
//                 {monsters.map((monster) => {
//                     return(
//                        <Card monster={monster}/>
//                     );
//                 })}
//             </div>
//         )
//     }
// }

// export default CardList;

///////////// Functional Component ///////////////////////////////
import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';
// const CardList = (props) => {

//     // const { monsters } = this.props;
//     const {monsters} = props
//     return (
//         <div className="card-list">
//             {monsters.map((monster) => {
//                 return(
//                     <Card monster={monster}/>
//                 );
//             })}
//         </div>
//     )
// }

const CardList = ({monsters}) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return(
                <Card monster={monster}/>
            );
        })}
    </div>
);

export default CardList;