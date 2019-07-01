import React from "react";


class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: "Apples" }, { name: "KitKat" }, { name: "Red Bull" }]
    };
  }

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map((item, index) => 
      <GroceryListItem grocery={item} key={item.name + index} />);
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <form id="add-grocery">
          <label>Enter an item to add it to the grocery list: </label>
          <input type="text" name="grocery" />
          <button form="add-grocery" type="submit" >
            Add
          </button>
        </form>
      </div>
    );
  }
}

/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <li>{this.props.grocery.name}</li>;
  }
}


export default GroceryList;
