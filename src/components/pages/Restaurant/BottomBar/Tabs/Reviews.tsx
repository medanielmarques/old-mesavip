import { TabPanel, TabPanelProps } from '@chakra-ui/react';

interface ReviewsTabProps extends TabPanelProps {}

export function Reviews({ ...rest }: ReviewsTabProps) {
  return (
    <TabPanel {...rest}>
      <div>REVIEWS TAB</div>
    </TabPanel>
  );
}
