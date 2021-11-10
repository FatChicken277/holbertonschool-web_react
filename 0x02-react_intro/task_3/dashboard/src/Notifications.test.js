import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

describe('Notifications Component Test Suite', () => {
  describe('Render components', () => {
    it('Render Notifications component', () => {
        expect(wrapper.exists());
      });

    it('Verify that Notifications renders three list items', () => {
      expect(wrapper.find('ul').exists()).to.be.true;
      expect(wrapper.find('li')).to.have.lengthOf(3);
    });

    it('Verify that Notifications renders the expected text', () => {
      expect(wrapper.find('p').contains('Here is the list of notifications')).to.be.true;
    });
  });
});
