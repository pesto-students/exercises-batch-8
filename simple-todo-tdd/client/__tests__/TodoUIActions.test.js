import { shallow } from 'enzyme';

describe('<App /> shallow rendering', () => {
  it('adds one item in todo list on clicking add', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('#add');
    const todoListSize = wrapper.find('TodoList').children().length;
    button.simulate('click');
    const todoListSizeUpdated = wrapper.find('TodoList').children().length;
    expect(todoListSizeUpdated).to.have.lengthOf(todoListSize + 1);
  });
});
