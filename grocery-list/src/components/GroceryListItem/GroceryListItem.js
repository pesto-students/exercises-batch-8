import React from 'react';
import PropTypes from 'prop-types';

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


  export default GroceryListItem;