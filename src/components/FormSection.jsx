function FormSection({
  handleMonth,
  handleName,
  handleNumber,
  handleSubmit,
  handleYear,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative top-75 left-11 flex flex-col lg:top-0 justify-center align-center  lg:left-170 w-70 gap-2  "
    >
      <label htmlFor="cardholderName" className="uppercase text-purple-950">
        Cardholder Name
      </label>
      <input
        className="border border-gray-400 rounded px-4 py-2 outline-none 
         focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-70"
        type="text"
        placeholder="e.g. Jane Appleseed"
        name="cardholderName"
        onChange={handleName}
        required
      />
      <label htmlFor="" className="uppercase text-purple-950">
        Card Number
      </label>
      <input
        className="border border-gray-400 rounded px-4 py-2 outline-none 
         focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-70"
        type="text"
        inputMode="numeric"
        pattern="\d*"
        placeholder="e.g. 1234 5678 9123 0000"
        name="cardNumber"
        onChange={handleNumber}
        maxLength={16}
        required
      />
      <div className="flex flex-row gap-3 mt-3">
        <div>
          <p className="uppercase text-purple-950">Exp. Date </p>
          <input
            className="border border-gray-400 rounded px-4 py-2 outline-none
             focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-20"
            type="text"
            placeholder="MM"
            name="expiryMonth"
            onChange={handleMonth}
            maxLength={2}
            inputMode="numeric"
            required
          />
        </div>
        <div>
          <p className="uppercase text-purple-950">(MM/YY)</p>
          <input
            className="border border-gray-400 rounded px-4 py-2 outline-none
             focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-20"
            type="text"
            placeholder="YY"
            name="expiryYear"
            onChange={handleYear}
            maxLength={2}
            inputMode="numeric"
            required
          />
        </div>
        <div>
          <p className="uppercase text-purple-950">CVC</p>
          <input
            className="border border-gray-400 rounded px-4 py-2 outline-none
             focus:border-purple-600 focus:ring-1 focus:ring-purple-600 w-25"
            type="text"
            placeholder="e.g. 123"
            name="cvc"
            maxLength={3}
            inputMode="numeric"
            required
          />
        </div>
      </div>
      <button className="bg-purple-950 text-white mt-5 mb-5 p-2 rounded-md cursor-pointer">
        Confirm
      </button>
    </form>
  );
}

export default FormSection;
