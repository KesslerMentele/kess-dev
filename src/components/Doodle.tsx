import {useLayoutEffect, useRef} from "react";

const strokeSelector = "path, line, polyline, polygon, circle, ellipse, rect";

const Doodle = ({svg, className = "text-surface"}: {svg: string; className?: string}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current?.querySelector("svg");
    if (!root) return;

    root.removeAttribute("width");
    root.removeAttribute("height");
    if (!root.hasAttribute("preserveAspectRatio")) {
      root.setAttribute("preserveAspectRatio", "xMidYMid slice");
    }

    // pathLength="1" lets one dash setting in CSS fit every stroke, whatever its real length
    root.querySelectorAll<SVGElement>(strokeSelector).forEach((el, i) => {
      el.setAttribute("pathLength", "1");
      el.style.setProperty("--i", String(i));
    });
  }, [svg]);

  return <div ref={ref} className={`Doodle ${className}`} aria-hidden dangerouslySetInnerHTML={{__html: svg}}/>;
};

export default Doodle;