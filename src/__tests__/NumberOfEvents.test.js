
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />);
  })

  test('renders a textbox element', () => {
    const eventTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventTextBox).toBeInTheDocument();
  });

  test('default value of input field is 32', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
  });

  test('value of events updates when user types in textbox', async () => {
    const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
    const user = userEvent.setup();
    await user.type(numberOfEvents, '{backspace}{backspace}10');
    expect(numberOfEvents).toHaveValue('10');
  });
});
