import Link from 'next/link';
import { Button } from '@chakra-ui/react';

interface Props {
  label: string;
  href: string;
  onClick?(): void;
}

export function ListItemButton(props: Props) {
  const { label, href, onClick } = props;

  return (
    <li>
      <div className='buttons'>
        <Link href={href}>
          <a>
            <Button variant='outline' onClick={onClick}>
              {label}
            </Button>
          </a>
        </Link>
      </div>
    </li>
  );
}
