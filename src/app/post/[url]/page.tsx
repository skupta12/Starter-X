import { blogs } from '@/lib/data';

export default async function Page({ params }: { params: { url: string } }) {

    const post = blogs?.find((obj) => obj.url === params.url);
    
  return (
    <div>{blogs.map(({ id, }))}</div>
  )
}
