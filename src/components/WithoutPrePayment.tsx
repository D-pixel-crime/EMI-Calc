import SmallBoxes from "./SmallBoxes";

interface props {
  result: {
    emiPayable: number;
    interestPayable: number;
    totalAmountPayable: number;
    monthly: {
      principalPerMonth: number;
      interestPerMonth: number;
      remainingLoanBalance: number;
    };
  };
}

const WithoutPrePayment = ({ result }: props) => {
  return (
    <article className="flex items-center w-full flex-col gap-10" id="stats">
      <h1 className="text-5xl border-b-2 border-slate-600 bg-gradient-to-tr from-green-400 via-slate-400/80 to-green-400 bg-clip-text text-transparent w-fit">
        Statistics
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7">
        <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
          <SmallBoxes />
          <h2 className="text-2xl w-full text-center border-b-2 border-slate-600">
            EMI Payable
          </h2>
          <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
            {Number.isNaN(result.emiPayable) ? 0 : result.emiPayable}
          </p>
        </div>
        <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
          <SmallBoxes />
          <h2 className="text-2xl w-full text-center border-b-2 border-slate-600">
            Interest Payable
          </h2>
          <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
            {Number.isNaN(result.interestPayable) ? 0 : result.interestPayable}
          </p>
        </div>
        <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
          <SmallBoxes />
          <h2 className="text-2xl w-full text-center border-b-2 border-slate-600">
            Total Amount Payable
          </h2>
          <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
            {Number.isNaN(result.totalAmountPayable)
              ? 0
              : result.totalAmountPayable}
          </p>
        </div>
        <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
          <SmallBoxes />
          <h2 className="text-2xl text-blue-400 w-full text-center border-b-2 border-slate-600">
            Monthly Principal
          </h2>
          <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
            {Number.isNaN(result.monthly.principalPerMonth)
              ? 0
              : result.monthly.principalPerMonth}
          </p>
        </div>
        <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
          <SmallBoxes />
          <h2 className="text-2xl text-blue-400 w-full text-center border-b-2 border-slate-600">
            Monthly Interest
          </h2>
          <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
            {Number.isNaN(result.monthly.interestPerMonth)
              ? 0
              : result.monthly.interestPerMonth}
          </p>
        </div>
        <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
          <SmallBoxes />
          <h2 className="text-2xl text-blue-400 w-full text-center border-b-2 border-slate-600">
            Remaining Balance
          </h2>
          <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
            {Number.isNaN(result.monthly.remainingLoanBalance)
              ? 0
              : result.monthly.remainingLoanBalance}
          </p>
        </div>
      </div>
    </article>
  );
};
export default WithoutPrePayment;
