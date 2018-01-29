import { renderComponent , expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Header', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the correct class', () =>{
    expect(component).to.have.class('header-navbar');
  });

  it('shows an LI for each menu item', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
});
