import React from "react";
import numeral from "numeral";

import "./styles.css";

class ShoppingList extends React.Component {
  state = {
    bread: 8,
    unitPrice: 2.34234
  };

  onChange = value => {
    this.setState({ bread: value });
  };
  render() {
    const { day, hour, year } = this.props;
    const { bread, unitPrice } = this.state;

    const myArray = ["mango", "banana", "orange"];
    return (
      <div>
        Numeros:
        {myArray.map(number => (
          <p>{`I am a sexy ${number}`}</p>
        ))}
        <p>I am the shopping list for {`${day} ${hour} ${year}`}</p>
        <div className="row">
          <label for="bread">Panes:</label>
          <input
            onChange={e => {
              this.onChange(e.target.value);
            }}
            className="input"
            type="text"
            name="bread"
            id="bread"
            placeholder="5.."
            value={this.state.bread}
          />
        </div>
        <p>Coste total: {numeral(bread * unitPrice).format("0.00")}€</p>
      </div>
    );
  }
}

export default ShoppingList;
