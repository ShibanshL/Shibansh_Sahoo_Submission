//this is a custom hook i made to find the screen width at any given time to add some
//extra conrtrol to me over the website.

import { useState, useEffect } from 'react';

function useScreenWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useScreenWidth;
