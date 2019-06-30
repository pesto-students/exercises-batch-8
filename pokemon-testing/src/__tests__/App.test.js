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

});
