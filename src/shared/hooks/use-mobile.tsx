import * as React from "react";

const MOBILE_QUERY = "(max-width: 767px)";

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(MOBILE_QUERY).matches;
  });

  React.useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);

    const listener = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // دعم قديم + جديد
    if (media.addEventListener) {
      media.addEventListener("change", listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, []);

  return isMobile;
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => setMatches(media.matches);

    listener();

    // دعم قديم + جديد
    if (media.addEventListener) {
      media.addEventListener("change", listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}
