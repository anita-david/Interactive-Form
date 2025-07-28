function Completed({ setComplete}) {
	function handleHome() {
		setComplete(false)
	}
	return (
		  <div className="relative top-75 left-11 flex flex-col lg:top-0 justify-center align-center  lg:left-170 w-70 gap-2  ">

				<img className="w-30 mx-auto" src="/icon-complete.svg" alt="" />
				<p className="uppercase text-4xl text-purple-900 text-center">Thank you!</p>
				<p className="text-gray-500 text-center">We've added your card details</p>
        
        <button onClick={handleHome} className="bg-purple-950 text-white mt-5 mb-5 p-2 rounded-md cursor-pointer">
          Continue
        </button>
      </div>
	)
}

export default Completed
