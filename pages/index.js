import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div>
      Click{' '}
      <Link href="/about">
        <a>here</a>
      </Link>{' '}
      to read more
      <Link href="/Post?slug=something" as="/Post"><a>post</a></Link>
    </div>
  );
}

export default Home;