import React from 'react';
import PropTypes from 'prop-types';
/*
  In this exercises, you'll will make a reactive grocery list.

  Task 1: Fill the `return` of `GroceryList` render method. It should return
        a list of `GroceryListItem`. You need to display the groceries names
        using `this.props` in `GroceryListItem`. We already prepared the variable
        `groceriesComponents` inside `render` method containing a list of these items for you.


  Task 2: Create an input box and a button. User should be able to add more grocery items and click
          the `Add` button to add it to the list displaying the item.

  Task 3: Create a button to clear the whole list.

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

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
    /*
      Properties are a way to pass parameters to your React components.
      We mentioned this in the third exercise. Properties are to React
      components what attributes are to HTML elements.

      Below you can see how to pass properties to child components.
      We have defined a `grocery` property for each `GroceryListItem`.
    */
    const groceriesComponents = groceries.map((item, index) => (
      <GroceryListItem
        color={item.purchased ? 'red' : 'black'}
        key={item.name}
        index={index}
        grocery={item}
        clickEventFunction={this.purchaseItem}
      />
    ));
    // Hint: Don't forget about putting items into `ul`
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

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */

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

// Do prop validation here using the package `prop-types`
GroceryListItem.propTypes = {
  grocery: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  clickEventFunction: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default GroceryList;
