import { TabPanel, TabPanelProps } from '@chakra-ui/react';

interface PhotosTabProps extends TabPanelProps {}

export function Photos({ ...rest }: PhotosTabProps) {
  return (
    <TabPanel {...rest}>
      <div>PHOTOS TAB</div>
    </TabPanel>
  );
}
