import Router from 'next/router';
import React from 'react';
function ReadMore() {
  return (
    <div>
      Click <span onClick={() => Router.push('/HelloUA')}>here</span> to read more
    </div>
  );
}

export default ReadMore;
