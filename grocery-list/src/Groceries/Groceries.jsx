import React, { Component } from 'react';
import { connect } from 'react-redux';

class Groceries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryName: '',
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

  clearItems() {
    this.props.clearItems();
  }

  render() {
    const { groceries } = this.props;
    return (
      <div>
        <h1>Groceries</h1>
        <ul>
          {groceries.map(grocery => (
            <li>{grocery}</li>
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
  groceries: state.groceries,
});
const mapDispatchToProps = dispatch => ({
  addItem: itemName => dispatch({ type: 'ADD_ITEM', itemName }),
  clearItems: () => dispatch({ type: 'CLEAR_ITEMS' }),
});
const GroceriesWithState = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Groceries);
export default GroceriesWithState;
