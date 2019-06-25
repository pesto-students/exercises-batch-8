import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
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
      groceries: [{ name: "Apples" }, { name: "KitKat" }, { name: "Red Bull" }],
      groceryItem: ""
    };
  }
  handleGroceryItemSubmit = e => {
    e.preventDefault();
    const { groceryItem, groceries } = this.state;
    const copyOfGroceries = [...groceries];
    const newGroceryItem = {
      name: groceryItem
    };
    copyOfGroceries.push(newGroceryItem);
    this.setState({ groceries: copyOfGroceries, groceryItem: "" });
  };
  handleClearGroceryList = () => {
    this.setState({ groceries: [] });
  };
  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { groceries, groceryItem } = this.state;
    /*
      Properties are a way to pass parameters to your React components.
      We mentioned this in the third exercise. Properties are to React
      components what attributes are to HTML elements.

      Below you can see how to pass properties to child components.
      We have defined a `grocery` property for each `GroceryListItem`.
    */
    const groceriesComponent = groceries.map((
      item // eslint-disable-line no-unused-vars
    ) => <GroceryListItem key={uuid()} grocery={item.name} />);
    // Hint: Don't forget about putting items into `ul`
    return (
      <React.Fragment>
        <ul>{groceriesComponent}</ul>
        <form onSubmit={this.handleGroceryItemSubmit}>
          <input
            type="text"
            name="groceryItem"
            placeholder="Enter a new grocery item"
            value={groceryItem}
            onChange={this.handleInputChange}
          />
          <br />
          <button type="submit">Add a new grocery item</button>
        </form>
        <button onClick={this.handleClearGroceryList}>Clear the List</button>
      </React.Fragment>
    );
  }
}

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { grocery } = this.props;
    return <li>{grocery}</li>;
  }
}

// Do prop validation here using the package `prop-types`
GroceryListItem.propTypes = {
  grocery: PropTypes.string.isRequired
};
export default GroceryList;
