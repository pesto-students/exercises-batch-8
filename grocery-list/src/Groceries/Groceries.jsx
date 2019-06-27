import React, { Component } from 'react';
import { connect } from 'react-redux';

class Groceries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryName: ''
    };
    this.handleGroceryNameChange = this.handleGroceryNameChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }

  handleGroceryNameChange(e) {
    this.setState({ ...this.state, groceryName: e.target.value });
  }

  addItem() {
    this.props.addItem(this.state.groceryName);
  }
  updateItem(newName, index) {
    this.props.updateItem(newName, index);
  }
  clearItems() {
    this.props.clearItems();
  }
  deleteItem(index) {
    this.props.deleteItem(index);
  }

  purchaseItem(index) {
    this.props.purchaseItem(index);
  }
  render() {
    const { groceries } = this.props;
    console.log(groceries);
    return (
      <div>
        <h1>Groceries</h1>
        <ul>
          {groceries.map((grocery, index) => (
            <li>
              <button
                style={{
                  color: grocery.purchased ? 'red' : 'black',
                  background: 'white',
                  border: 'none',
                  fontSize: '1em'
                }}
                onClick={() => this.purchaseItem(index)}
              >
                {grocery.itemName}
              </button>{' '}
              <button onClick={() => this.deleteItem(index)}>x</button>
            </li>
          ))}
        </ul>
        <input
          value={this.state.groceryName}
          onChange={this.handleGroceryNameChange}
        />
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.clearItems}>Clear</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  groceries: state.groceries
});
const mapDispatchToProps = dispatch => ({
  addItem: itemName => dispatch({ type: 'ADD_ITEM', itemName }),
  purchaseItem: index => dispatch({ type: 'PURCHASE_ITEM', index }),
  editItem: (newName, index) => dispatch({ type: 'EDIT_ITEM', index, newName }),
  clearItems: () => dispatch({ type: 'CLEAR_ITEMS' }),
  deleteItem: index => dispatch({ type: 'DELETE_ITEM', index }),
});
const GroceriesWithState = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Groceries);
export default GroceriesWithState;
