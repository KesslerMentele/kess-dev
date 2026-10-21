import Doodle from "@/components/Doodle.tsx";
import type {FC} from "react";
import type {SourceProps} from "@/types.ts";


const PhotoTile: FC<SourceProps & {className?: string}> = ({src, doodle, doodleColor, className = ""}) => (
  <div className={`PhotoTile relative min-h-0 overflow-hidden rounded-lg ${className}`} tabIndex={doodle ? 0 : undefined}>
    <img src={src} alt="" className="w-full h-full object-cover"/>
    {doodle && <Doodle svg={doodle} className={doodleColor}/>}
  </div>
);

export default PhotoTile;