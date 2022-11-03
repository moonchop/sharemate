import { useEffect, useState } from "react";

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const loadMore = () => {};

const useIntersectionObserver = ({
  root,
  rootMargin = "0px",
  threshold = 0.1,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      //onIntersect,
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 데이터 불러오기 추가 필요
            observer.unobserve(entry.target);
            console.log(`상태 : ${entry.isIntersecting}`);
          }
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
