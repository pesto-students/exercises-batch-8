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
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    
  }

  render() {
    const { groceries } = this.state;

    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      <GroceryListItem grocery={item} />

    ));
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <form id="formAddGrocery" onSubmit={this.onSubmit}>
          <label htmlFor="txtAddGrocery">
            Grocery item name <br />
            <input type="text" name="txtAddGrocery" id="txtAddGrocery" />
          </label>
          <input type="submit" value="Add Item" />
        </form>
      </div>
    );
  }
}

const GroceryListItem = props => <li> {props.grocery.name} </li>;

GroceryListItem.propTypes = {
  grocery: PropTypes.string,
};

GroceryListItem.defaultProps = {
  grocery: '',
};

export default GroceryList;
