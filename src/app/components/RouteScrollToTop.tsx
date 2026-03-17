import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RouteScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname, hash]);

  return null;
}
