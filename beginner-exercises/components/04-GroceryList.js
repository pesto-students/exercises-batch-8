import React from 'react';
import PropTypes from 'prop-types';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { id: '1', name: 'Apples', isPurchased: false },
        { id: '2', name: 'KitKat', isPurchased: false },
        { id: '3', name: 'Red Bull', isPurchased: false },
      ],
      inputField: '',
    };
    this.addGrocery = this.addGrocery.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.clear = this.clear.bind(this);
  }

  addGrocery() {
    if (this.state.inputField !== '') {
      const id = String(Math.random());
      this.setState({
        groceries: [
          ...this.state.groceries,
          {
            id,
            name: this.state.inputField,
            isPurchased: false,
          },
        ],
      });
    }
  }

  clear() {
    this.setState({
      groceries: [],
    });
  }

  onInputChange(event) {
    this.setState({ inputField: event.target.value });
  }

  toggleStatus(event) {
    const { id } = event.target;
    const updatedGroceries = this.state.groceries.map((grocery) => {
      if (grocery.id === id) {
        return { ...grocery, isPurchased: !grocery.isPurchased };
      }
      return grocery;
    });
    this.setState({ groceries: updatedGroceries });
  }

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map(item => (
      <GroceryListItem key={item.id} grocery={item} toggleStatus={this.toggleStatus} />
    ));
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <input type="text" name="name" onChange={this.onInputChange} />
        <button onClick={this.addGrocery}>Add</button>
        <button onClick={this.clear}>Clear</button>
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
    const style = this.props.grocery.isPurchased === true ? { color: 'red' } : { color: 'black' };

    return (
      <li
        key={this.props.grocery.id}
        id={this.props.grocery.id}
        style={style}
        onClick={this.props.toggleStatus}
      >
        {this.props.grocery.name}
      </li>
    );
  }
}

GroceryListItem.propTypes = {
  grocery: PropTypes.object,
  toggleStatus: PropTypes.func,
};

export default GroceryList;
