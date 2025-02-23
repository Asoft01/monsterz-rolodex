import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';
class CardList extends Component {
    render() {
        // console.log(this.props);
        console.log('render');
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {/* Hello! I'm the CardList Component */}
                {monsters.map((monster) => {
                    return(
                       <Card monster={monster}/>
                    );
                })}
            </div>
        )
    }
}

export default CardList;