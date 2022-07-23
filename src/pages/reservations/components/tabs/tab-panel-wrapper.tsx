import { Box, TabPanel, TabPanelProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export function TabPanelWrapper({ children, ...rest }: TabPanelProps) {
  return (
    <TabPanel {...rest}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box
          w={{
            base: '384px',
            md: '792px',
            '2xl': '1300px',
          }}
          mx="auto"
          display="table"
        >
          {children}
        </Box>
      </motion.div>
    </TabPanel>
  );
}
