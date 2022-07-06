import { ReactNode, useMemo } from 'react';
import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

interface ModalProps {
  children: ReactNode;
}

interface UseModalProps {
  title: string;
  closeButton?: boolean;
}

export function useModal({ title, closeButton }: UseModalProps) {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();

  const Modal = useMemo(() => {
    return ({ children }: ModalProps) => (
      <ChakraModal isOpen={isOpen} onClose={onToggle}>
        <ModalOverlay />

        <ModalContent w={{ base: '80', md: 'inherit' }}>
          <ModalHeader fontSize='lg' fontWeight='bold'>
            {title}
          </ModalHeader>

          {closeButton && <ModalCloseButton />}

          {children}
        </ModalContent>
      </ChakraModal>
    );
  }, [isOpen]);

  return { Modal, isOpen, onToggle, onOpen, onClose };
}
