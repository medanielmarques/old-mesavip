import { useColorModeValue } from '@chakra-ui/color-mode';
import { dark } from 'src/styles/themes/dark';
import { light } from 'src/styles/themes/light';

type Props = {
  width: string;
};

export function Separator(props: Props) {
  const { width } = props;

  const theme = useColorModeValue(light, dark);

  return (
    <div
      style={{
        alignItems: 'center',
        textAlign: 'center',
        margin: ' 20px auto',
        borderBottom: `1px solid ${theme.form.separator}`,
        display: 'flex',
        width,
      }}
    />
  );
}
