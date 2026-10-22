import type {DoodleSvg} from "@/types.ts";


const Doodle = ({DoodleSVG, className = "text-surface"}: {DoodleSVG: DoodleSvg; className?: string}) => {

  return (
    <div className={`Doodle ${className}`} aria-hidden>
      <DoodleSVG />
    </div>
    );
};

export default Doodle;
