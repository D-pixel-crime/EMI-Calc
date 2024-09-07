import SmallBoxes from "./SmallBoxes";

interface props {
  withPrepayment: {
    constantEmi: {
      emi: number;
      interestPayable: number;
      totalAmountPayable: number;
      monthly: {
        principalPerMonth: number;
        interestPerMonth: number;
        remainingLoanBalance: number;
      };
    };
    constantTenure: {
      emi: number;
      interestPayable: number;
      totalAmountPayable: number;
      monthly: {
        principalPerMonth: number;
        interestPerMonth: number;
        remainingLoanBalance: number;
      };
    };
  };
}

const PrePayment = ({ withPrepayment }: props) => {
  return (
    <article className="flex items-center w-full flex-col gap-10" id="stats">
      <h1 className="text-5xl border-b-2 border-slate-600 bg-gradient-to-tr from-green-400 via-slate-400/80 to-green-400 bg-clip-text text-transparent w-fit">
        Statistics
      </h1>
      <div className="flex flex-col gap-2">
        <h2 className="border-b-2 border-b-slate-600 text-2xl text-red-500 mb-3">
          Constant EMI
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7">
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl w-full text-center border-b-2 border-slate-600">
              EMI Payable
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(withPrepayment.constantEmi.emi)
                ? 0
                : withPrepayment.constantEmi.emi}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl w-full text-center border-b-2 border-slate-600">
              Interest Payable
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(withPrepayment.constantEmi.interestPayable)
                ? 0
                : withPrepayment.constantEmi.interestPayable}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl w-full text-center border-b-2 border-slate-600">
              Total Amount Payable
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(withPrepayment.constantEmi.totalAmountPayable)
                ? 0
                : withPrepayment.constantEmi.totalAmountPayable}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl text-blue-400 w-full text-center border-b-2 border-slate-600">
              Monthly Principal
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(
                withPrepayment.constantEmi.monthly.principalPerMonth
              )
                ? 0
                : withPrepayment.constantEmi.monthly.principalPerMonth}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl text-blue-400 w-full text-center border-b-2 border-slate-600">
              Monthly Interest
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(withPrepayment.constantEmi.monthly.interestPerMonth)
                ? 0
                : withPrepayment.constantEmi.monthly.interestPerMonth}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl text-blue-400 w-full text-center border-b-2 border-slate-600">
              Remaining Balance
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(
                withPrepayment.constantEmi.monthly.remainingLoanBalance
              )
                ? 0
                : withPrepayment.constantEmi.monthly.remainingLoanBalance}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b-2 border-b-slate-600 text-2xl text-red-500 mb-3">
          Constant Tenure
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7">
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl w-full text-center border-b-2 border-slate-600">
              EMI Payable
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(withPrepayment.constantTenure.emi)
                ? 0
                : withPrepayment.constantTenure.emi}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl w-full text-center border-b-2 border-slate-600">
              Interest Payable
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(withPrepayment.constantTenure.interestPayable)
                ? 0
                : withPrepayment.constantTenure.interestPayable}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl w-full text-center border-b-2 border-slate-600">
              Total Amount Payable
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(withPrepayment.constantTenure.totalAmountPayable)
                ? 0
                : withPrepayment.constantTenure.totalAmountPayable}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl text-blue-400 w-full text-center border-b-2 border-slate-600">
              Monthly Principal
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(
                withPrepayment.constantTenure.monthly.principalPerMonth
              )
                ? 0
                : withPrepayment.constantTenure.monthly.principalPerMonth}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl text-blue-400 w-full text-center border-b-2 border-slate-600">
              Monthly Interest
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(
                withPrepayment.constantTenure.monthly.interestPerMonth
              )
                ? 0
                : withPrepayment.constantTenure.monthly.interestPerMonth}
            </p>
          </div>
          <div className="box relative px-10 py-4 flex gap-3 flex-col items-center">
            <SmallBoxes />
            <h2 className="text-2xl text-blue-400 w-full text-center border-b-2 border-slate-600">
              Remaining Balance
            </h2>
            <p className="text-lg break-words bg-gradient-to-bl from-purple-500 via-red-400 to-purple-500 bg-clip-text text-transparent w-fit">
              {Number.isNaN(
                withPrepayment.constantTenure.monthly.remainingLoanBalance
              )
                ? 0
                : withPrepayment.constantTenure.monthly.remainingLoanBalance}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default PrePayment;
