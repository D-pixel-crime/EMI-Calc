import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <article className="flex-center flex-col gap-8 w-full relative">
      <form
        onSubmit={handleSubmit}
        className="box relative lg:w-5/12 px-12 py-10 flex flex-col gap-6"
      >
        <div className="side-line-right"></div>
        <div className="side-line-left"></div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="amount">Loan Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="Enter the principal amount"
            className="border-2 border-slate-500/40 rounded-md px-2 py-1.5 bg-transparent text-slate-400"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="interest">Interest Rate</label>
          <input
            type="text"
            name="interest"
            id="interest"
            placeholder="Enter the Interest rate(in %)"
            className="border-2 border-slate-500/40 rounded-md px-2 py-1.5 bg-transparent text-slate-400"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="tenure">Tenure</label>
          <input
            type="text"
            name="tenure"
            id="tenure"
            placeholder="Enter the Time Period(in months)"
            className="border-2 border-slate-500/40 rounded-md px-2 py-1.5 bg-transparent text-slate-400"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="pre-payment">Pre-payment(If applicable)</label>
          <input
            type="text"
            name="pre-payment"
            id="pre-payment"
            placeholder="(Optional) Enter the pre-payment amount"
            className="border-2 border-slate-500/40 rounded-md px-2 py-1.5 bg-transparent text-slate-400"
          />
        </div>
        <button
          type="submit"
          className={`${
            isLoading ? "bg-transparent" : "bg-green-500"
          } border-2 my-4 w-full border-green-500 text-white text-lg rounded-md px-2 py-1.5 hover:bg-transparent hover:text-green-500`}
          disabled={isLoading}
        >
          {isLoading ? (
            <TailSpin
              visible={true}
              height={25}
              width={25}
              wrapperClass="flex-center text-green-500"
            />
          ) : (
            "Calculate"
          )}
        </button>
      </form>
      <div className="line-below w-full"></div>
    </article>
  );
};
export default Form;
