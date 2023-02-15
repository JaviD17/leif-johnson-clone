import Image from "next/image";

const ServiceLayout = () => {
  return (
    <section className="w-full">
      <div className="m-8 p-8 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 rounded flex flex-col items-center sm:flex-row justify-between">
        <div  className="flex flex-col gap-2 items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            iure! Ullam quasi fugiat quo natus veniam cum repellendus iste odio,
            perspiciatis eos fugit autem sint veritatis ex, minima possimus
            facere!
          </p>
          <button className="px-4 py-2 bg-[#2C3F87] rounded-lg text-slate-50 ">
            Schedule Service
          </button>
        </div>
        {/* Image */}
        <Image
          src={"/service.webp"}
          alt="service"
          width={450}
          height={300}
          className="w-auto h-auto rounded-xl shadow-xl mt-4"
        />
      </div>
    </section>
  );
};

export default ServiceLayout;
