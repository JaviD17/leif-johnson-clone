import Image from "next/image";

const MobileLogo = () => {
  return (
    <section className="flex sm:hidden">
      <Image
        src={"/dealer-logo-mobile.webp"}
        alt=""
        width={50}
        height={50}
        className="w-auto h-auto"
      />
      <h1 className="text-xl font-extrabold mx-2">Leif Johnson Ford</h1>
    </section>
  );
};

export default MobileLogo;
