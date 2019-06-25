/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
      newItem: '',
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
    };

    this.addNewItem = this.addNewItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.clearAll = this.clearAll(this);
  }

  addNewItem(e) {
    e.preventDefault();
    const { newItem, groceries } = this.state;
    if (newItem.length) {
      this.setState({
        groceries: [...groceries, { name: newItem }],
        newItem: '',
      });
    }
  }

  handleOnChange(e) {
    this.setState({ newItem: e.target.value });
  }

  clearAll() {
    this.setState({ groceries: [] });
  }

  render() {
    const { groceries, newItem } = this.state;
    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      <GroceryListItem key={item.name} grocery={item} />
    ));

    return (
      <div>
        <form onSubmit={this.addNewItem}>
          <label htmlFor="newItem">
            New Item:
            <input
              type="text"
              id="newItem"
              name="newItem"
              value={newItem}
              onChange={this.handleOnChange}
            />
          </label>
          <button onClick={this.addNewItem}>Add</button>
          <button onClick={this.clearAll}>Clear All</button>
          <ul>
            {groceriesComponents}
          </ul>
        </form>
      </div>
    );
  }
}

/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPurchased: false,
    };

    this.handleOnPurchase = this.handleOnPurchase(this);
  }

  handleOnPurchase() {
    const { isPurchased } = this.state;
    this.setState({ isPurchased: !isPurchased });
  }

  render() {
    const { isPurchased } = this.state;
    const { grocery } = this.props;
    const { name } = grocery;
    const listStyle = {
      color: isPurchased ? 'red' : 'black',
    };
    return (
      <li key={name} style={listStyle} onClick={this.handleOnPurchase}>
        {name}
      </li>
    );
  }
}

GroceryListItem.propTypes = {
  grocery: PropTypes.objectOf(PropTypes.string),
};

GroceryListItem.defaultProps = {
  grocery: [],
};

export default GroceryList;
