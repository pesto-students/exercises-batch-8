import React from 'react';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

import '../setupTest';
import Page from '../containers/Page/Page';

describe('<Page /> is rendering', () => {
  test('page contains pokemon wrapper', () => {
    const wrapper = shallow(
      <Page
        page={{ displayedPokemons: [], isFetched: false }}
        pageActions={{ fetchPokemons: () => {} }}
      />
    );
    expect(wrapper.find('.pokemons__wrapper').length).toBe(1);
  });
  test('page contains pokemons', () => {
    const wrapper = shallow(
      <Page
        page={{ displayedPokemons: [] }}
        pageActions={{ fetchPokemons: () => {} }}
      />
    );
    expect(wrapper.find('.pokemons').length).toBe(1);
  });

  test('p is loading', () => {
    const wrapper =
      shallow(<Page
        page={{ displayedPokemons: [], isFetched: true }}
        pageActions={{ fetchPokemons: () => {} }}
      />);
    expect(wrapper.find('p').text()).toBe('Loading...');
  });

  //   it('matches the snapshot', () => {
  //     const tree = shallow(<App />);
  //     expect(toJson(tree)).toMatchSnapshot();
  //   });

  //   it('updates className with new State', () => {
  //     const wrapper = shallow(<App />);
  //     expect(wrapper.find('.blue').length).toBe(1);
  //     expect(wrapper.find('.red').length).toBe(0);
  //     wrapper.setState({ mainColor: 'red' });
  //     expect(wrapper.find('.blue').length).toBe(0);
  //     expect(wrapper.find('.red').length).toBe(1);
  //   });

  //   it('on button click changes p text', () => {
  //     const wrapper = shallow(<App />);
  //     const button = wrapper.find('button');
  //     expect(wrapper.find('.button-state').text()).toBe('No!');
  //     button.simulate('click');
  //     expect(wrapper.find('.button-state').text()).toBe('Yes!');
  //   });

  //   it('on input change, title changes text', () => {
  //     const wrapper = shallow(<App />);
  //     const input = wrapper.find('input');
  //     expect(wrapper.find('h2').text()).toBe('');
  //     input.simulate('change', { currentTarget: { value: 'Pesto' } });
  //     expect(wrapper.find('h2').text()).toBe('Pesto');
  //   });

  //   it('handleStrings function returns correctly', () => {
  //     const wrapper = shallow(<App />);
  //     const trueReturn = wrapper.instance().handleStrings('Hello World');
  //     const falseReturn = wrapper.instance().handleStrings('');
  //     expect(trueReturn).toBe(true);
  //     expect(falseReturn).toBe(false);
  //   });
});
