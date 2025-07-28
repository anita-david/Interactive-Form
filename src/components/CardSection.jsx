function CardSection({name, number, month, year}) {
	return (
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
                {number}
              </p>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-gray-200 text-sm uppercase tracking-wide">
                <p>{name}</p>
                <p>{`${month}/${year}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
	)
}

export default CardSection
