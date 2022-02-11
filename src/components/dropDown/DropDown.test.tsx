import React from 'react';
import { shallow, configure } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import DropDown from './DropDown';
import { act } from 'react-dom/test-utils';
import wait from 'waait';
import Adapter from 'enzyme-adapter-react-16';

const mocks = [];
const mockData = {
  title: 'Ken',
  items: 'Profile',
};

configure({ adapter: new Adapter() });

describe('DropDown should', () => {
  it('render properly', async () => {
    let wrapper;
    await act(async () => {
      wrapper = shallow(
        <MockedProvider mocks={mocks} addTypename={false}>
          <DropDown title={mockData.title} items={mockData.items} />
        </MockedProvider>,
      );
    });
    await act(() => wait(0));
    wrapper.update();

    expect(wrapper).toBeTruthy();
  });
});
