import React from 'react';
import { connect } from 'react-redux';
import { GroceryListItem } from '../GroceryListItem';
import { addItemToGroceryList, clearGroceryList } from '../../redux/actions';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { groceryName } = this.state;
    const { addItemToGroceryList } = this.props;
    addItemToGroceryList(groceryName);
    this.setState({
      groceryName: '',
    });
  }

  clearList() {
    const { clearGroceryList } = this.props;
    clearGroceryList();
  }

  render() {
    const { groceryName } = this.state;
    const { groceries } = this.props;
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

const mapStateToProps = (state) =>({
  groceries: state.groceries
});

export default connect(mapStateToProps, {
  addItemToGroceryList,
  clearGroceryList,
})(GroceryList);
