/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addItem, deleteItem, clearList, updateItem, togglePurchase } from '../redux/actions';

const GroceryList = ({
  groceries,
  addItem,
  deleteItem,
  clearList,
  updateItem,
  togglePurchase,
}) => {
  const [itemName, setItemName] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setItemName(value);
  }

  function handleAddItem() {
    addItem(itemName);
    setItemName('');
  }

  function handleClearList() {
    clearList();
  }

  function handleDelete(id) {
    deleteItem(id);
  }

  function handleUpdate(content, id) {
    updateItem(content, id);
  }

  function handleTogglePurchase(id) {
    togglePurchase(id);
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {groceries.map(item => (
          <GroceryItem
            item={item}
            deleteItem={handleDelete}
            updateItem={handleUpdate}
            togglePurchase={handleTogglePurchase}
          />
        ))}
      </ul>
      <br />
      <input name="item" type="text" value={itemName} onChange={handleChange} />
      <br />
      <button onClick={handleAddItem}>Add</button>
      <button onClick={handleClearList}>Clear List</button>
    </div>
  );
};

GroceryList.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
  }).isRequired).isRequired,
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  togglePurchase: PropTypes.func.isRequired,
};


const GroceryItem = ({
  item: { name, id, purchased },
  deleteItem,
  updateItem,
  togglePurchase,
}) => {
  const listVal = React.createRef(null);

  function handleEdit(e) {
    const editBtn = e.target;
    const listItem = listVal.current;
    if (editBtn.textContent === 'edit') {
      listItem.contentEditable = true;
      listItem.focus();
      editBtn.textContent = 'save';
    } else {
      editBtn.textContent = 'edit';
      listItem.contentEditable = false;
      const content = listItem.textContent;
      updateItem(content, id);
    }
  }


  return (
    <li className="listItem">
      <span
        ref={listVal}
        className={purchased ? 'purchased' : 'not-purchased'}
        onClick={() => togglePurchase(id)}
      >{name}
      </span>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        X
      </button>
      <button onClick={handleEdit}>edit</button>
    </li>
  );
};

GroceryItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    purchased: PropTypes.bool.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  togglePurchase: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  groceries: state.groceries,
});

const mapDispatchToProps = {
  addItem,
  deleteItem,
  clearList,
  updateItem,
  togglePurchase,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroceryList);
