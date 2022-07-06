import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

export function verifyAuth(ctx: GetServerSidePropsContext) {
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
