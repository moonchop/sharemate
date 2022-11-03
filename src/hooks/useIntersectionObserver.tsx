import { useEffect, useState } from "react";
import useInfinityQuery from "../hooks/useInfinityQuery";

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}
const loadMore = () => {};

const handler = () => {};

const useIntersectionObserver = ({
  root,
  rootMargin = "0px",
  threshold = 0.1,
  onIntersect,
}: useIntersectionObserverProps) => {
  const InfinityQuery = useInfinityQuery();
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  const [check, setCheck] = useState<boolean>(false);
  useEffect(() => {
    if (!target) return;
    let previousY = 0;
    let previousRatio = 0;

    const observer: IntersectionObserver = new IntersectionObserver(
      //onIntersect,
      (entries) => {
        entries.forEach((entry) => {
          const currentY = entry.boundingClientRect.y;
          const currentRatio = entry.intersectionRatio;
          if (entry.isIntersecting && currentRatio > previousRatio && !check) {
            observer.unobserve(entry.target);
            InfinityQuery.nextFetch();
            setCheck(true);
            console.log("감지");
          }
          previousY = currentY;
          previousRatio = currentRatio;
        });
      },
      { root, rootMargin, threshold }
    );
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};

export default useIntersectionObserver;
