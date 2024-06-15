import { render, screen } from '@testing-library/react-native';
import { GestureTestPage } from './GestureTestPage';

describe('GestureTest', () => {
  it('"Test" Button will be on the screen.', async () => {
    render(<GestureTestPage />);

    const element = await screen.getByRole('button', { name: 'Test' });
    expect(element).toBeOnTheScreen();
  });
});
