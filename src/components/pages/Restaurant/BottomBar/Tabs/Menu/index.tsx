import { TabPanel, TabPanelProps } from '@chakra-ui/react';

interface MenuTabProps extends TabPanelProps {}

export function Menu({ ...rest }: MenuTabProps) {
  return (
    <TabPanel {...rest}>
      <div>MENU TAB</div>
    </TabPanel>
  );
}
