import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

const wrapper = shallow(<App />);

describe('App Component Test Suite', () => {
  describe('Render components', function () {
    it('Render App component', () => {
      expect(wrapper.exists());
    });

    it('Verify that App renders a div with the class App-header', () => {
      expect(wrapper.contains(<header className="App-header" />));
    });

    it('Verify that App renders a div with the class App-body', () => {
      expect(wrapper.contains(<body className="App-body" />));
    });

    it('Verify that App renders a div with the class App-footer', () => {
      expect(wrapper.contains(<footer className="App-footer" />));
    });
  });
});
