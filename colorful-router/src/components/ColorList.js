import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom'
import '../styles/ColorList.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '40em',
    width: '60em',
  },
};
class ColorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      pathToColors: window.location.href,
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(color) {
    console.log('opening modal', color);
    this.setState({ ...this.state, color: color.hex, modalIsOpen: true, colorName: color.name }, () => console.log(this.state))
  }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    console.log()
    const colorLinks = this.props.colors.map(color => (
      <li key={color.hex}>
        <NavLink to={`/${color.name}`}>{color.name} </NavLink><button onClick={() => this.openModal(color)}>Edit</button>
      </li>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Colorful Router.</h1>
          <h1><NavLink to="/new">Add a color</NavLink></h1>
        </header>
        <div className="App-intro">
          <p>Please select a color.</p>
          <ul>{colorLinks}</ul>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={{ content: { ...customStyles.content, background: `${this.state.color}` } }}
          contentLabel="Example Modal"

        >
          <button style={{ float: 'right' }} onClick={this.closeModal}>close</button>
          <h3>{this.state.pathToColors + this.state.colorName}</h3>
          <h1 style={{ color: 'white' }}>{this.state.colorName}</h1>
        </Modal>
      </div >
    );
  }
}

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default withRouter(ColorList);
