const Footer = () => {
  return (
    <footer>
      <div className="Footer box-content min-h-lh max-h-[10svh] overflow-hidden flex items-center px-2 sm:px-4 py-[min(1rem,2svh)] md:justify-between text-[clamp(0.375rem,2.2vw,0.75rem)]">
        <span className="min-w-0 truncate text-body sm:text-center">
          © 2026 Kessler Mentele. All Rights Reserved.
        </span>
        <span>
          <a href={"https://www.google.com/maps/place/Diablo+Lake"}>48°42'49"N 121°07'05"W</a>
        </span>
      </div>
    </footer>
);
};

export default Footer;