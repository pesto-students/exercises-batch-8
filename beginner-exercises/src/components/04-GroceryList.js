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
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      groceryName: '',
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.onGroceryNameChange = this.onGroceryNameChange.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  onGroceryNameChange(event) {
    this.setState({ groceryName: event.target.value });
  }

  addGroceryItem() {
    const { groceries, groceryName } = this.state;
    this.setState({
      groceries: [...groceries, { name: groceryName }],
      groceryName: '',
    });
  }

  clearList() {
    this.setState({
      groceries: [],
    });
  }

  render() {
    const { groceries, groceryName } = this.state;
    /*
      Properties are a way to pass parameters to your React components.
      We mentioned this in the third exercise. Properties are to React
      components what attributes are to HTML elements.

      Below you can see how to pass properties to child components.
      We have defined a `grocery` property for each `GroceryListItem`.
    */
    const groceriesComponents = groceries.map((item, i) => ( // eslint-disable-line no-unused-vars
      <GroceryListItem key={item.name} grocery={item} />
    ));
    // Hint: Don't forget about putting items into `ul`
    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>

        <p>Input New Grocery Name</p>
        <input type="text" name="grocery" value={groceryName} onChange={this.onGroceryNameChange} />
        <button id="add-button" type="button" onClick={this.addGroceryItem}>Add</button>
         &nbsp;
        <button id="clear-button" type="button" onClick={this.clearList}>Clear List</button>
      </div>
    );
  }
}

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchased: false,
    };
    this.togglePurchase = this.togglePurchase.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  getColor() {
    const { purchased } = this.state;
    if (purchased) {
      return 'red';
    }
    return 'black';
  }

  togglePurchase() {
    const { purchased } = this.state;
    this.setState({
      purchased: !purchased,
    });
  }

  render() {
    const { grocery: { name } } = this.props;
    return (
      <li>
        <button
          type="button"
          className="grocery-item-name"
          onClick={this.togglePurchase}
          style={{ color: this.getColor() }}
        >
          {
            name
          }
        </button>
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`


GroceryListItem.propTypes = {
  grocery: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default GroceryList;
