import React from "react";
import "./styles.css";

class ShoppingList extends React.Component {
  state = {
    bread: 8,
    unitPrice: 2
  };
  render() {
    const { day, hour, year } = this.props;
    return (
      <div>
        <p>I am the shopping list for {`${day} ${hour} ${year}`}</p>
        <div className="row">
          <label for="bread">Panes:</label>
          <input
            onChange={e => {
              console.log(e.target.value);
            }}
            className="input"
            type="text"
            name="bread"
            id="bread"
            placeholder="5.."
            value={this.state.bread}
          />
        </div>
        <p>Coste total: {this.state.bread * this.state.unitPrice}€</p>
      </div>
    );
  }
}

export default ShoppingList;
