import { render, fireEvent } from '@testing-library/react-native';
import { Contador } from '../Contador';

test('incrementa y decrementa el contador', () => {
  const { getByText } = render(<Contador />);
  fireEvent.press(getByText("+"));
  expect(getByText("Valor: 1")).toBeTruthy();
  fireEvent.press(getByText("-"));
  expect(getByText("Valor: 0")).toBeTruthy();
});
