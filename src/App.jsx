function App() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row ">
      <div
        className="
          absolute top-0 left-0
          w-full h-[30vh]
          bg-[url('/bg-main-mobile.png')]
          bg-cover bg-center
          lg:w-[30%] lg:h-full
          lg:bg-[url('/bg-main-desktop.png')]
        "
      >
        <div className="relative w-full h-full justify-center align-center">
          <div className="absolute top-10 left-18 md:top-20 md:left-70 lg:top-70 lg:left-70 w-[280px]">
            <img
              src="/bg-card-back.png"
              className="w-full h-auto object-cover"
              alt="Back of Card"
            />
          </div>

          <div className="absolute top-33 left-10 md:top-43 md:left-58 lg:top-30 lg:left-50 w-[280px] z-10">
            <div className="relative w-full h-auto">
              <img
                src="/bg-card-front.png"
                className="w-full h-auto object-cover"
                alt="Front of Card"
              />

              <img
                src="/card-logo.svg"
                className="absolute top-4 left-4 w-10"
                alt="Card Logo"
              />

              <p className="absolute top-20 left-4 text-gray-200 text-lg tracking-widest">
                0000 0000 0000 0000
              </p>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-gray-200 text-sm uppercase tracking-wide">
                <p>James Appleseed</p>
                <p>00/00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative top-75 left-11 flex flex-col lg:top-0 justify-center align-center  lg:left-170 w-70 gap-2  ">
        <label htmlFor="" className="uppercase text-purple-950">
          Cardholder Name
        </label>
        <input
          className="border border-gray-400 rounded px-4 py-2 outline-none 
         focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-70"
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
        <label htmlFor="" className="uppercase text-purple-950">Card Number</label>
        <input
          className="border border-gray-400 rounded px-4 py-2 outline-none 
         focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-70"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="flex flex-row gap-3 mt-3">
          <div>
            <p className="uppercase text-purple-950">Exp. Date </p>
            <input
              className="border border-gray-400 rounded px-4 py-2 outline-none
             focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-20"
              type="text"
              placeholder="MM"
            />
          </div>
          <div>
            <p className="uppercase text-purple-950">(MM/YY)</p>
            <input
              className="border border-gray-400 rounded px-4 py-2 outline-none
             focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-20"
              type="text"
              placeholder="YY"
            />
          </div>
           <div>
            <p className="uppercase text-purple-950">CVC</p>
            <input
              className="border border-gray-400 rounded px-4 py-2 outline-none
             focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-25"
              type="text"
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <button className="bg-purple-950 text-white mt-5 mb-5 p-2 rounded-md">Confirm</button>
      </div>
    </section>
  );
}

export default App;
