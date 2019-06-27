import React,{ useState } from 'react'
import { connect } from 'react-redux';

import { addItem, deleteItem, clearList } from '../../redux/actions';

const ReusableComponent1 = ({ groceries, addItem, deleteItem }) => {
    const [itemName, setItemName] = useState('');

    function handleChange(e) {
        const { value } = e.target;
        setItemName(value);
    }

    function handleAddItem() {
        addItem(itemName);
        setItemName('');
    }

    return (
        <div>
            <h1>Grocery List</h1>
            <ul>
                {groceries.map(item => <GroceryItem item={item} />)}
            </ul>
            <br />
            <input name="item" type="text" value={itemName} onChange={handleChange} />
            <br />
            <button onClick={handleAddItem}>Add</button>
            <button>Clear List</button>
        </div>
    )
}

const GroceryItem = ({ item: { name } }) => {
    return (
        <li>
            <span>name</span>
            <button>X</button>
            <button>edit</button>
        </li>
    );
}

mapStateToProps = (state) => {
    groceries: state.groceries;
}

mapDispatchToProps = {
    addItem,
    deleteItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReusableComponent1);


// class GroceryList extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
//         newItem: '',
//       };
//       this.handleAddingItem = this.handleAddingItem.bind(this);
//       this.handleOnChange = this.handleOnChange.bind(this);
//       this.handleClearingList = this.handleClearingList.bind(this);
//     }
  
//     handleOnChange(e) {
//       const itemName = e.target.value;
//       this.setState({ ...this.state, newItem: itemName });
//     }
  
//     handleAddingItem() {
//       const updatedGroceries = [
//         ...this.state.groceries,
//         { name: this.state.newItem },
//       ];
//       this.setState({ groceries: updatedGroceries, itemName: '' });
//     }
  
//     handleClearingList() {
//       this.setState({ ...this.state, groceries: [] });
//     }
  
//     render() {
//       const { groceries } = this.state;
//       // eslint-disable-next-line arrow-parens
//       const groceriesComponents = groceries.map(item => (
//         <GroceryListItem grocery={item} />
//       ));
//       return (
//         <div>
//           {groceriesComponents}
//           <br />
//           <input type="text" name="grocery-item" onChange={this.handleOnChange} />
//           <button onClick={this.handleAddingItem}>Add item</button>
//           <br />
//           <button onClick={this.handleClearingList}>Clear List</button>
//         </div>
//       );
//     }
//   }
  
//   /* eslint-disable react/no-multi-comp, no-useless-constructor */
//   class GroceryListItem extends React.Component {
//     static handleColorChange(e) {
//       const listItem = e.target;
//       if (listItem.style.color === 'red') {
//         listItem.style.color = 'black';
//       } else {
//         listItem.style.color = 'red';
//       }
//     }
  
//     constructor(props) {
//       super(props);
//       this.handleColorChange = this.handleColorChange.bind(this);
//     }
  
//     render() {
//       return <button onClick={GroceryListItem.handleColorChange}>{this.props.grocery.name}</button>;
//     }
//   }
  
//   GroceryListItem.propTypes = {
//     grocery: PropTypes.shape({
//       name: PropTypes.string,
//     }).isRequired,
//   };
  
//   export default GroceryList;
  