import { render } from '@testing-library/react-native';
import { ListaUsuarios } from '../ListaUsuarios';

test('renderiza lista de usuarios', () => {
  const usuarios = [
    { id: '1', nombre: 'Aylin' },
    { id: '2', nombre: 'Judith' },
  ];
  const { getByText } = render(<ListaUsuarios usuarios={usuarios} />);
  expect(getByText("Aylin")).toBeTruthy();
  expect(getByText("Judith")).toBeTruthy();
});
