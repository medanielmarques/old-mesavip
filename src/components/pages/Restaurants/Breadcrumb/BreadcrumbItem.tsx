import {
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbItemProps as ChakraBreadcrumbItemProps,
} from '@chakra-ui/react';

interface BreadcrumbItemProps extends ChakraBreadcrumbItemProps {
  text: string;
  href?: string;
  isCurrentPage?: boolean;
}

export function BreadcrumbItem(props: BreadcrumbItemProps) {
  const { text, href, isCurrentPage, ...rest } = props;

  return (
    <ChakraBreadcrumbItem isCurrentPage={isCurrentPage} {...rest}>
      <BreadcrumbLink
        href={href}
        textDecoration={!!isCurrentPage ? 'none' : 'underline'}
        cursor={!!isCurrentPage ? '' : 'pointer'}
        _hover={{ color: '#000' }}
      >
        {text}
      </BreadcrumbLink>
    </ChakraBreadcrumbItem>
  );
}
