import {Link} from "react-router-dom";
import {
  type RemixiconComponentType,
  RiArrowRightLine,
  RiCameraLine,
  RiCompass3Line, RiDiscordLine,
  RiFireLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "@remixicon/react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {projects} from "@/data/projects";
import hero from "@/assets/photos/4.webp";
import D4 from "@/components/doodles/Doodle4.tsx";
import snap3 from "@/assets/photos/14.webp";
import snap1 from "@/assets/photos/6.webp";
import snap2 from "@/assets/photos/7.webp";
import PhotoTile from "@/components/PhotoTIle.tsx";

type IconType =  RemixiconComponentType;

const featured = projects.filter((project) => project.featured);

const snapshots = [snap1, snap2, snap3];

const socials: {href: string; label: string; Icon: IconType}[] = [
  {href: "https://github.com/KesslerMentele", label: "GitHub", Icon: RiGithubLine},
  {href: "mailto:kesslermentele@gmail.com", label: "Email", Icon: RiMailLine},
  {href: "https://www.linkedin.com/in/kessler-mentele-163894291/", label: "LinkedIn", Icon: RiLinkedinBoxLine},
  {href: "https://discord.com/users/373965983435587584", label:"Discord", Icon: RiDiscordLine}
];

const SectionHeading = ({icon: Icon, title}: {icon: IconType; title: string}) => (
  <h2 className="flex items-center gap-2 text-lg font-bold text-surface">
    <Icon size={20}/>
    {title}
  </h2>
);

const MoreLink = ({to, label}: {to: string; label: string}) => (
  <Link to={to} className="flex items-center gap-1 self-end text-sm font-bold text-surface hover:underline">
    {label} <RiArrowRightLine size={16}/>
  </Link>
);

const Home = () => {
  return (
    <div className="w-[90%] xl:w-full max-w-6xl mx-auto py-6 flex flex-col gap-10 text-left">
      <Card className="gap-0 py-0 md:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-4 p-6 sm:p-8">
          <p className="text-sm text-muted-foreground">Welcome to the camp<strong>site</strong></p>
          <h1 className="text-3xl sm:text-4xl font-bold">Hey, I'm Kess.</h1>
          <p className="text-sm sm:text-base">
            Pull up a chair and stay a while! I build things for the web.
          </p>
          <div className="flex flex-wrap gap-2 text-sm font-bold">
            <Link to="/projects" className="bg-accent px-4 py-2 text-surface hover:brightness-110">
              See my projects
            </Link>
            <Link to="/about" className="border-2 border-accent px-4 py-2 hover:bg-accent hover:text-surface">
              About me
            </Link>
          </div>
        </div>
        <PhotoTile src={hero} doodle={D4} className={"aspect-4/3 w-full object-cover md:w-1/2 rounded-none"} />
      </Card>

      <section className="flex flex-col gap-4">
        <SectionHeading icon={RiCompass3Line} title="Projects"/>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle className="text-accent font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{project.summary}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <MoreLink to="/projects" label="All projects"/>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading icon={RiCameraLine} title="From the trail"/>
        <div className="grid grid-cols-3 gap-2">
          {snapshots.map((src) => (
            <img key={src} src={src} alt="" className="aspect-square w-full object-cover rounded-lg"/>
          ))}
        </div>
        <MoreLink to="/about" label="Full gallery"/>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading icon={RiFireLine} title="Around the fire"/>
        <Card>
          <CardContent className="text-sm">
            Want to chat about a project, or just say hi? Come find me.
          </CardContent>
          <CardFooter className="gap-4">
            {socials.map(({href, label, Icon}) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-accent hover:underline">
                <Icon size={18}/>
                {label}
              </a>
            ))}
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Home;