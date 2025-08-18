// hooks/useChartAnimation.ts
import { useState, useEffect } from 'react';

const useChartAnimation = (delay = 300) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeight(63); // Full height of your chart
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return height;
};

export default useChartAnimation;