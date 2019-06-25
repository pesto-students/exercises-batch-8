/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions  */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import PropTypes from 'prop-types';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      currentGrocery: '',
    };
    this.onGroceryChange = this.onGroceryChange.bind(this);
    this.addGrocery = this.addGrocery.bind(this);
    this.clearGroceries = this.clearGroceries.bind(this);
  }

  onGroceryChange(event) {
    const nextState = { ...this.state, currentGrocery: event.target.value };
    this.setState(nextState);
  }

  addGrocery() {
    const { groceries, currentGrocery } = this.state;
    if (currentGrocery === '') {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-undef
      alert('Please fill input box to add');
    }
    groceries.push(
      {
        name: currentGrocery,
      },
    );
    const nextState = { ...this.state, groceries, currentGrocery: '' };
    console.log(nextState);
    this.setState(nextState);
  }

  clearGroceries() {
    const nextState = { ...this.state, groceries: [] };
    console.log(nextState);
    this.setState(nextState);
  }

  render() {
    const { groceries } = this.state;

    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      <GroceryListItem grocery={item} />
    ));
    const { currentGrocery } = this.state;
    // Hint: Don't forget about putting items into `ul`
    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        <input type="text" name="groceryName" value={currentGrocery} onChange={this.onGroceryChange} />
        <br />
        <button name="addGrocery" type="button" onClick={this.addGrocery}> Add Grocery </button>
        <button name="clearGrocery" type="button" onClick={this.clearGroceries}> Clear groceries </button>

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
    this.changePurchaseStatus = this.changePurchaseStatus.bind(this);
  }

  changePurchaseStatus() {
    const { isPurchased } = this.state;
    const newState = { ...this.state, isPurchased: !isPurchased };
    this.setState(newState);
  }

  render() {
    const PURCHASED = 'red';
    const NOT_PURCHASED = 'black';
    const { isPurchased } = this.state;
    const { grocery } = this.props;
    return (
      <li
        onClick={this.changePurchaseStatus}
        style={{
          color: isPurchased ? PURCHASED : NOT_PURCHASED,
        }}
      >
        {grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`
GroceryListItem.propTypes = {
  grocery: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,

};
export default GroceryList;
