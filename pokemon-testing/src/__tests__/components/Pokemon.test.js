import React from 'react';
import { shallow, mount } from 'enzyme';

import Pokemon from '../../components/Pokemon';

describe('<Pokemon />', () => {
  test('should have props', () => {
    const pokemonProp = {
      name: 'a',
      id: '1',
    };
    const wrapper = mount(<Pokemon pokemon={pokemonProp} />);
    expect(wrapper.props().pokemon).toBe(pokemonProp);
  });

  describe('<li />', () => {
    test('should be rendered', () => {
      const pokemonProp = {
        name: 'a',
        id: '1',
      };
      const wrapper = shallow(<Pokemon pokemon={pokemonProp} />);
      const li = wrapper.find('li');
      expect(li.length).toBe(1);
    });

    describe('<button />', () => {
      test('should be rendered', () => {
        const pokemonProp = {
          name: 'a',
          id: 1,
        };
        const wrapper = shallow(<Pokemon pokemon={pokemonProp} />);
        const li = wrapper.find('li');
        const button = li.find('button');
        expect(button.length).toBe(1);
      });
    });

    describe('<p />', () => {
      test('should be rendered', () => {
        const pokemonProp = {
          name: 'a',
          id: 1,
        };
        const wrapper = shallow(<Pokemon pokemon={pokemonProp} />);
        const li = wrapper.find('li');
        const p = li.find('p');
        expect(p.length).toBe(1);
        expect(p.text()).toBe(pokemonProp.name);
      });
      test('should have text', () => {
        
      })
      
    });
  });
});
