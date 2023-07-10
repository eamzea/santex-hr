import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('should render correctly', () => {
    const component = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(component).toMatchSnapshot();
  });
});
