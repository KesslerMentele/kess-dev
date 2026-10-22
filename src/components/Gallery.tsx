import p1 from "../assets/photos/1.jpg";
import p2 from "../assets/photos/2.jpg";
import p3 from "../assets/photos/3.jpg";
import p4 from "../assets/photos/4.jpg";
import p5 from "../assets/photos/5.jpg";
import p6 from "../assets/photos/6.jpg";
import p7 from "../assets/photos/7.jpg";
import p8 from "../assets/photos/8.jpg";
import p9 from "../assets/photos/9.jpg";
import p10 from "../assets/photos/10.jpg";
import p11 from "../assets/photos/11.jpg";
import p12 from "../assets/photos/12.jpg";
import p13 from "../assets/photos/13.jpg";
import p14 from "../assets/photos/14.jpg";
import p15 from "../assets/photos/15.jpg";
import D4 from "@/components/doodles/Doodle4.tsx"
import D15 from "@/components/doodles/Doodle15.tsx"
import type {FC} from "react";
import PhotoTile from "@/components/PhotoTIle.tsx";
import type {SourceProps} from "@/types.ts";



// Each grid cell is 4:3, so tiles are sized by how many cells they span
// 1 col x 2 rows
const TwoTallPortrait: FC<SourceProps> = (props) => <PhotoTile {...props} className="row-span-2"/>
// 1 col x 1 row
const SmallLandscape: FC<SourceProps> = (props) => <PhotoTile {...props}/>
// 2 cols x 2 rows
const WideLandscape: FC<SourceProps> = (props) => <PhotoTile {...props} className="col-span-2 row-span-2"/>
// 2 cols x 1 row
const Panorama: FC<SourceProps> = (props) => <PhotoTile {...props} className="col-span-2"/>

const Gallery = () => (
  <section className="@container w-[90%] xl:w-full max-w-6xl mx-auto py-6">
    {/* Row height = column width * 3/4, so every cell is 4:3 (100cqw is the section width, minus the gaps) */}
    <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-2 auto-rows-[calc((100cqw-0.5rem)/2*0.75)] md:auto-rows-[calc((100cqw-1.5rem)/4*0.75)]">
      {/* Rows 1-2 */}
      <TwoTallPortrait src={p1}/>
      <WideLandscape src={p2}/>
      <TwoTallPortrait src={p3}/>
      {/* Rows 3-4 */}
      <WideLandscape src={p4} doodle={D4} />
      <TwoTallPortrait src={p5}/>
      <SmallLandscape src={p6}/>
      <SmallLandscape src={p7}/>
      {/* Rows 5-6 */}
      <TwoTallPortrait src={p8}/>
      <TwoTallPortrait src={p10}/>
      <WideLandscape src={p14}/>
      {/* Rows 7-8 */}
      <TwoTallPortrait src={p11}/>
      <Panorama src={p13}/>
      <TwoTallPortrait src={p15} doodle={D15}/>
      <SmallLandscape src={p12}/>
      <SmallLandscape src={p9}/>
    </div>
  </section>
);

export default Gallery;