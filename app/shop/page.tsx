import Link from "next/link";
import LinkCard from "../components/LinkCard";
import Image from "next/image";

type ShopLink = {
  title: string;
};

const shopLinks: ShopLink[] = [
  {
    title: "New Ford Vehicles",
  },
  {
    title: "Pre Owned Vehicles",
  },
  {
    title: "Custom Order Ford",
  },
  {
    title: "Classic Cars",
  },
  {
    title: "Electric Vehicles",
  },
];

export default function Shop() {
  return (
    <section className="m-4 p-8 sm:m-8 sm:p-12 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 rounded-md flex flex-col sm:items-center">
      <Image
        src={"/hero3.webp"}
        alt="ford logo 3"
        width={1440}
        height={800}
        className="w-auto h-auto rounded-xl shadow-xl"
      />

      <h2 className="my-4 text-lg font-extrabold">Shop</h2>

      <ul className="flex flex-col sm:flex-row sm:justify-center items-start gap-2.5 sm:gap-4 text-[#004D71] font-bold text-sm sm:text-base">
        {shopLinks.map((item: ShopLink) => (
          <LinkCard title={item.title} key={item.title} />
        ))}
        <Link href="/">
          <p className="sm:hidden underline underline-offset-2 tracking-widest text-xs text-slate-50">
            How does it work?
          </p>
        </Link>
      </ul>
      <Link href="/">
        <p className="hidden sm:block m-2 p-1 bg-slate-200 hover:bg-slate-100 rounded hover:underline hover:underline-offset-2 tracking-widest text-xs">
          How does it work?
        </p>
      </Link>
    </section>
  );
}
