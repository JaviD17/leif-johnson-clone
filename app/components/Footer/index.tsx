const Footer = () => {
  return (
    <section className="w-screen flex flex-col sm:flex-row gap-8 sm:gap-12 absolute bottom-0 p-8 bg-[#004D71] text-slate-50">
      <div>
        <h3 className="text-lg sm:text-2xl">Leif Johnson Ford</h3>
        <p className="text-lg pt-2 px-2">501 E Koenig Ln, Austin, Tx 78751</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
        <div>
          <h3 className="text-lg sm:text-2xl">Shop</h3>
          <ul>
            <li>New</li>
            <li>Pre Owned Vehicles</li>
            <li>Specials</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-2xl">Service</h3>
          <ul>
            <li>Set Appointment</li>
            <li>Service Department</li>
            <li>Parts Department</li>
            <li>Order Parts</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-2xl">Sell</h3>
          <ul>
            <li>Sell your vehicle</li>
            <li>Value your trade</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-2xl">Finance</h3>
          <ul>
            <li>Finance Application</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
