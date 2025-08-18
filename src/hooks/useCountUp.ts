// hooks/useCountUp.ts
import { useState, useEffect } from 'react';

const useCountUp = (target: number, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target <= 0) return;
    
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const endTime = startTime + duration;
      
      const updateCount = () => {
        const now = Date.now();
        const remaining = Math.max(endTime - now, 0);
        const progress = 1 - remaining / duration;
        const currentCount = Math.floor(progress * target);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };
      
      requestAnimationFrame(updateCount);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [target, duration, delay]);

  return count;
};

export default useCountUp;