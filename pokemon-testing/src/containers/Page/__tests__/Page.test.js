import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Page } from '../index';
import Search from '../../../components/Search';
import Pokemon from '../../../components/Pokemon';


describe('<Page />', () => {
  let pageBasicProps;

  beforeEach(() => {
    pageBasicProps = {
      page: {
        displayedPokemons: ['pokemon-1', 'pokemon-2'],
      },
      pageActions: {
        fetchPokemons: jest.fn(),
        filterPokemons: jest.fn(),
      },
    };
  });


  it('should match the snapshot', () => {
    const tree = shallow(<Page {...pageBasicProps} />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should have `handleSearch` function', () => {
    const tree = shallow(<Page {...pageBasicProps} />);
    const { handleSearch } = tree.instance();
    expect(typeof handleSearch).toBe('function');
  });

  it('should have single `.pokemons__wrapper` div', () => {
    const tree = shallow(<Page {...pageBasicProps} />);
    const div = tree.find('div.pokemons__wrapper');
    expect(div.length).toBe(1);
  });

  it('should have un-ordered list with class `.pokemons`', () => {
    const tree = shallow(<Page {...pageBasicProps} />);
    const ul = tree.find('ul.pokemons');
    expect(ul.length).toBe(1);
  });

  describe('<Search />', () => {
    it('should render always', () => {
      const tree = shallow(<Page {...pageBasicProps} />);
      const search = tree.find(Search);
      expect(search.length).toBe(1);
    });

    it('should have `onChange` prop set to `handleSearch`', () => {
      const tree = shallow(<Page {...pageBasicProps} />);
      const search = tree.find(Search);
      const { handleSearch } = tree.instance();
      expect(search.props().onChange).toEqual(handleSearch);
    });
  });

  describe('when `isFetched` prop', () => {
    describe('is true', () => {
      it('should have `p` element in `pokenmons`', () => {
        pageBasicProps.page.isFetched = true;
        const tree = shallow(<Page {...pageBasicProps} />);
        const loading = tree.find('p');
        expect(loading.length).toBe(1);
      });
    });

    describe('is false or absent', () => {
      describe('list of <Pokemon />', () => {
        it('should render', () => {
          const tree = shallow(<Page {...pageBasicProps} />);
          const pokemons = tree.find(Pokemon);
          expect(pokemons.length).toBe(2);
        });
      });

      it('should not have `p` element in `pokenmons`', () => {
        const tree = shallow(<Page {...pageBasicProps} />);
        const loading = tree.find('p');
        expect(loading.length).toBe(0);
      });
    });
  });
});
