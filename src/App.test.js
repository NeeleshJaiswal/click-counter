import App from './App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders without error', () => {
const wrapper = shallow(<App/>);
const appComponent = wrapper.find("[data-test='component-app']");

expect(appComponent.length).toBe(1);
//     expect(appComponent.exists).toBeTruthy();
});

test('render increment button', ()=> {

});

test('render counter display', ()=> {

});


test('counter display start at 0', ()=> {

});

test('clicking button increments counter display', ()=> {

});