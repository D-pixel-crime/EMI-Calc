import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import WithoutPrePayment from "./WithoutPrePayment";
import PrePayment from "./PrePayment";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPrePayment, setIsPrePayment] = useState(false);
  const [emiDetails, setEmiDetails] = useState({
    principal: 0,
    totalInterest: 0,
    tenure: 0,
  });
  const [prePaymentDetails, setPrePaymentDetails] = useState(0);
  const [isWithoutCalculated, setIsWithoutCalculated] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [result, setResult] = useState({
    emiPayable: 0,
    interestPayable: 0,
    totalAmountPayable: 0,
    monthly: {
      principalPerMonth: 0,
      interestPerMonth: 0,
      remainingLoanBalance: 0,
    },
  });
  const [withPrepayment, setWithPrepayment] = useState({
    constantTenure: {
      emi: 0,
      interestPayable: 0,
      totalAmountPayable: 0,
      monthly: {
        principalPerMonth: 0,
        interestPerMonth: 0,
        remainingLoanBalance: 0,
      },
    },
    constantEmi: {
      emi: 0,
      interestPayable: 0,
      totalAmountPayable: 0,
      monthly: {
        principalPerMonth: 0,
        interestPerMonth: 0,
        remainingLoanBalance: 0,
      },
    },
  });

  const calculateWithoutPrepayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsWithoutCalculated(false);
    setIsLoading(true);
    setTimeout(() => {
      const monthlyInterestRate = emiDetails.totalInterest / 12;
      const tempPow = Math.pow(1 + monthlyInterestRate, emiDetails.tenure);
      const emi =
        (emiDetails.principal * tempPow * monthlyInterestRate) / (tempPow - 1);
      const interestPayable = emi * emiDetails.tenure - emiDetails.principal;
      const totalAmountPayable = emiDetails.principal + interestPayable;
      const monthlyInterest = (emiDetails.principal * monthlyInterestRate) / 12;
      const monthlyPrincipal = emi - monthlyInterest;
      const remainingLoanBalance = emiDetails.principal - monthlyPrincipal;

      setResult({
        emiPayable: emi,
        interestPayable: interestPayable,
        totalAmountPayable: totalAmountPayable,
        monthly: {
          principalPerMonth: monthlyPrincipal,
          interestPerMonth: monthlyInterest,
          remainingLoanBalance: remainingLoanBalance,
        },
      });
      setIsLoading(false);
      setIsWithoutCalculated(true);
      window.location.href = "#stats";
    }, 1500);
  };

  const calculatePrepayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCalculated(false);
    setIsLoading(true);
    setTimeout(() => {
      if (emiDetails.principal <= prePaymentDetails) {
        alert("Prepayment amount should be less than the principal amount");
        setIsLoading(false);
        setIsCalculated(true);
        return;
      }
      const monthlyInterestRate = emiDetails.totalInterest / 12;
      const tempPow = Math.pow(1 + monthlyInterestRate, emiDetails.tenure);
      const emi =
        (emiDetails.principal * tempPow * monthlyInterestRate) / (tempPow - 1);
      const newPrinpical = emiDetails.principal - prePaymentDetails;
      const newTenure =
        Math.log10(emi / (emi - newPrinpical * monthlyInterestRate)) /
        Math.log10(1 + monthlyInterestRate);
      const newEmi =
        (emiDetails.principal * tempPow * monthlyInterestRate) / (tempPow - 1);
      const interestPayable = {
        constantTenure: newEmi * emiDetails.tenure - newPrinpical,
        constantEmi: emi * newTenure - newPrinpical,
      };
      const totalAmountPayable = {
        constantTenure: newPrinpical + interestPayable.constantTenure,
        constantEmi: newPrinpical + interestPayable.constantEmi,
      };
      const monthlyInterest = {
        constantTenure: (newPrinpical * monthlyInterestRate) / 12,
        constantEmi: (newPrinpical * monthlyInterestRate) / 12,
      };
      const monthlyPrincipal = {
        constantTenure: newEmi - monthlyInterest.constantTenure,
        constantEmi: emi - monthlyInterest.constantEmi,
      };
      const remainingLoanBalance = {
        constantTenure: newPrinpical - monthlyPrincipal.constantTenure,
        constantEmi: newPrinpical - monthlyPrincipal.constantEmi,
      };

      setWithPrepayment({
        constantTenure: {
          emi: newEmi,
          interestPayable: interestPayable.constantTenure,
          totalAmountPayable: totalAmountPayable.constantTenure,
          monthly: {
            principalPerMonth: monthlyPrincipal.constantTenure,
            interestPerMonth: monthlyInterest.constantTenure,
            remainingLoanBalance: remainingLoanBalance.constantTenure,
          },
        },
        constantEmi: {
          emi: emi,
          interestPayable: interestPayable.constantEmi,
          totalAmountPayable: totalAmountPayable.constantEmi,
          monthly: {
            principalPerMonth: monthlyPrincipal.constantEmi,
            interestPerMonth: monthlyInterest.constantEmi,
            remainingLoanBalance: remainingLoanBalance.constantEmi,
          },
        },
      });

      setIsLoading(false);
      setIsCalculated(true);
      window.location.href = "#stats";
    }, 1500);
  };

  return (
    <article className="flex-center flex-col gap-8 w-full relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!isPrePayment) calculateWithoutPrepayment(e);
          else calculatePrepayment(e);
        }}
        className="box relative lg:w-5/12 px-12 sm:w-2/3 py-10 flex flex-col gap-6"
      >
        <div className="side-line-right"></div>
        <div className="side-line-left"></div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="amount">Loan Amount 💳</label>
          <input
            type="number"
            min={0}
            name="amount"
            id="amount"
            placeholder="Enter the principal amount"
            className="border-2 outline-none border-slate-500/40 rounded-md px-2 py-1.5 bg-transparent text-slate-400"
            onChange={(e) =>
              setEmiDetails({
                ...emiDetails,
                principal:
                  Number(e.target.value) >= 0 ? Number(e.target.value) : 0,
              })
            }
            value={emiDetails.principal === 0 ? "" : emiDetails.principal}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="interest">Interest Rate 💹</label>
          <input
            type="number"
            min={0}
            name="interest"
            id="interest"
            placeholder="Enter the Interest rate(in %)"
            className="border-2 outline-none border-slate-500/40 rounded-md px-2 py-1.5 bg-transparent text-slate-400"
            onChange={(e) =>
              setEmiDetails({
                ...emiDetails,
                totalInterest:
                  Number(e.target.value) >= 0 ? Number(e.target.value) : 0,
              })
            }
            value={
              emiDetails.totalInterest === 0 ? "" : emiDetails.totalInterest
            }
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="tenure">Tenure ⌛</label>
          <input
            type="number"
            min={0}
            name="tenure"
            id="tenure"
            placeholder="Enter the Time Period(in months)"
            className="border-2 outline-none border-slate-500/40 rounded-md px-2 py-1.5 bg-transparent text-slate-400"
            onChange={(e) =>
              setEmiDetails({
                ...emiDetails,
                tenure:
                  Number(e.target.value) >= 0 ? Number(e.target.value) : 0,
              })
            }
            value={emiDetails.tenure === 0 ? "" : emiDetails.tenure}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <label
              htmlFor="pre-payment"
              className={`${!isPrePayment ? "text-gray-500" : "text-white"}`}
            >
              Pre-payment 💰(If applicable)
            </label>
            <input
              type="checkbox"
              name="changeApplicable"
              id="changeApplicable"
              className="w-4"
              onChange={() => setIsPrePayment((prev) => !prev)}
              checked={isPrePayment}
            />
          </div>
          <input
            type="number"
            min={0}
            name="pre-payment"
            id="pre-payment"
            placeholder="(Optional) Enter the pre-payment amount"
            className={`border-2 ${
              !isPrePayment && "cursor-not-allowed"
            } outline-none border-slate-500/40 rounded-md px-2 py-1.5 ${
              !isPrePayment ? "bg-slate-500" : "bg-transparent"
            } ${isPrePayment ? "text-slate-400" : "text-black/40"}`}
            disabled={!isPrePayment}
            onChange={(e) =>
              setPrePaymentDetails(
                Number(e.target.value) >= 0 ? Number(e.target.value) : 0
              )
            }
            value={prePaymentDetails === 0 ? "" : prePaymentDetails}
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
      <div className="line-below md:w-full w-[90%]"></div>
      {isWithoutCalculated && !isPrePayment && (
        <WithoutPrePayment result={result} />
      )}
      {isCalculated && isPrePayment && (
        <PrePayment withPrepayment={withPrepayment} />
      )}
    </article>
  );
};
export default Form;
