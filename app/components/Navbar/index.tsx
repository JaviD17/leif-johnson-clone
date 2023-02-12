import Logo from "../Logo";
import MobileLogo from "../MobileLogo";

type Link = {
  title: string;
};

type Service = {
  title: string;
};

const links: Link[] = [
  {
    title: "Shop Vehicles",
  },
  {
    title: "Commercial Vehicles",
  },
  {
    title: "Service",
  },
  {
    title: "Sell or Trade",
  },
  {
    title: "Finance Center",
  },
];

const services: Service[] = [
  {
    title: "Service (888) 373-3147",
  },
  {
    title: "Main (512) 454-3711",
  },
  {
    title: "Sales (888) 293-1419",
  },
  {
    title: "About Leif Johnson",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="hidden sm:block bg-[#004D71] text-slate-50 font-extralight">
        <ul className="sm:flex sm:gap-8 justify-end px-8 py-2">
          {services.map((service: Service) => (
            <li key={service.title}>{service.title}</li>
          ))}
        </ul>
      </div>
      <nav className="p-4 sm:p-8 sm:flex sm:justify-between sm:items-center">
        <Logo />
        <MobileLogo />

        <ul className="sm:flex sm:gap-20 sm:text-xl sm:font-extralight">
          {links.map((link: Link) => (
            <li key={link.title}>{link.title}</li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
