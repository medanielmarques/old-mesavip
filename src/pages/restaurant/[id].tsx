import { useRouter } from 'next/router';

export default function Restaurant() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return <div>oi</div>;
}
