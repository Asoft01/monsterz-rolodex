import { Component } from "react";

class CardList extends Component {
    render() {
        // console.log(this.props);
        console.log('render');
        const { monsters } = this.props;
        return (
            <div>
                Hello! I'm the CardList Component
                {monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        )
    }
}

export default CardList;