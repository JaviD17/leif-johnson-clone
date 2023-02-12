import Image from "next/image";

const Logo = () => {
  return (
    <section className="hidden sm:flex sm:gap-2">
      <Image
        src={"/ford-logo.webp"}
        alt="ford logo"
        width={125}
        height={125}
        className="w-auto h-auto"
      />
      <Image
        priority
        src={"/dealer-logo.webp"}
        alt="leif logo"
        width={125}
        height={125}
        className="w-auto h-auto"
      />
    </section>
  );
};

export default Logo;
