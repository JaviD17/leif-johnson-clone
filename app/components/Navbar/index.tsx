import Link from "next/link";
import Logo from "../Logo";
import MobileLogo from "../MobileLogo";

type LinkType = {
  title: string;
  href: string;
};

type Service = {
  title: string;
};

const links: LinkType[] = [
  {
    title: "Shop Vehicles",
    href: "/shop",
  },
  {
    title: "Commercial Vehicles",
    href: "/commercial",
  },
  {
    title: "Service",
    href: "/service",
  },
  {
    title: "Sell or Trade",
    href: "/sell-or-trade",
  },
  {
    title: "Finance Center",
    href: "/finance",
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
      <div className="hidden sm:block bg-[#2C3F87] text-slate-50 font-extralight">
        <ul className="sm:flex sm:gap-8 justify-end px-8 py-2">
          {services.map((service: Service) => (
            <li key={service.title}>{service.title}</li>
          ))}
        </ul>
      </div>
      <nav className="p-4 sm:p-8 sm:flex sm:justify-between sm:items-center nav">
        <Link href={"/"}>
          <Logo />
          <MobileLogo />
        </Link>

        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-20 sm:text-xl sm:font-extralight pt-8 sm:my-0">
          {links.map((link: LinkType) => (
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
