import React from 'react';
function Page({ stars }) {
  return <div>Next stars: {stars}</div>;
}

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Page;
