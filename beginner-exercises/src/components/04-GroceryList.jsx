import React from 'react';
import PropTypes from 'prop-types';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { name: 'Apples', purchased: false },
        { name: 'KitKat', purchased: false },
        { name: 'Red Bull', purchased: false },
      ],
      purchases: [],
    };
    this.updateNewGrocery = this.updateNewGrocery.bind(this);
    this.addNewGrocery = this.addNewGrocery.bind(this);
    this.clearAllGroceries = this.clearAllGroceries.bind(this);
    this.purchaseItem = this.purchaseItem.bind(this);
  }
  updateNewGrocery(event) {
    if (!event.target.value) {
      return;
    }
    this.setState({ ...this.state, newItem: event.target.value });
  }
  addNewGrocery() {
    const updatedGroceries = this.state.groceries;
    updatedGroceries.push({ name: this.state.newItem });
    this.setState({ ...this.state, groceries: updatedGroceries });
  }
  purchaseItem(event) {
    const updatedPurchasedItem = this.state.groceries;
    updatedPurchasedItem[event.target.id].purchased = !this.state.groceries[
      event.target.id
    ].purchased;
    this.setState({
      ...this.state,
      groceries: updatedPurchasedItem,
    });
  }
  clearAllGroceries() {
    this.setState({ ...this.state, groceries: [] });
  }
  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map((item, index) => (
      <GroceryListItem
        color={item.purchased ? 'red' : 'black'}
        key={item.name}
        index={index}
        grocery={item}
        clickEventFunction={this.purchaseItem}
      />
    ));
    return (
      <div>
        {this.state.groceries.length === 0 ? 'List is Empty' : null}
        <ul>{groceriesComponents}</ul>
        <input onChange={this.updateNewGrocery} />
        <button onClick={this.addNewGrocery}>Add</button>
        <button onClick={this.clearAllGroceries}>Clear</button>
      </div>
    );
  }
}


const GroceryListItem = props => (
  <li>
    <button
      id={props.index}
      onClick={props.clickEventFunction}
      style={{ color: props.color }}
      className="groceryItem"
    >
      {props.grocery.name}
    </button>
  </li>
);

GroceryListItem.propTypes = {
  grocery: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  clickEventFunction: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default GroceryList;
