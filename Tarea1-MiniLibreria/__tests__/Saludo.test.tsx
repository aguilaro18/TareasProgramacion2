import { render } from '@testing-library/react-native';
import { Saludo } from '../Saludo';

test('muestra nombre y edad', () => {
  const { getByText } = render(<Saludo nombre="Aylin" edad={20} />);
  expect(getByText("Hola Aylin, tienes 20 años.")).toBeTruthy();
});
