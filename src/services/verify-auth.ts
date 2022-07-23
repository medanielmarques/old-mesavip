import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

export function verifyAuthOnPublicPages(ctx: GetServerSidePropsContext) {
  const cookies = parseCookies(ctx);

  if (cookies['mesavip.token']) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export function verifyAuthOnPrivatePages(ctx: GetServerSidePropsContext) {
  const cookies = parseCookies(ctx);

  if (!cookies['mesavip.token']) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}
