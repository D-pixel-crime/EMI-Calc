# EMI-Calc 💰

This project is an EMI (Equated Monthly Installment) Calculator built with Vite+React & Typescript. It allows users to calculate monthly EMIs for a loan based on the principal amount, annual interest rate, and loan tenure. The calculator also supports optional prepayments and provides an amortization schedule to visualize loan repayment over time.

## Deployment 🛜

- Access live demo here: https://emi-calc-dpk.vercel.app

## Features 🚀

- **EMI Calculation**: Calculate the monthly EMI for a loan based on the loan amount, interest rate, and tenure.
- **Prepayment Handling**: Allows users to make prepayments and see how it affects the loan schedule.
- **Amortization Schedule**: Displays a detailed breakdown of each month's EMI, including the principal and interest components, along with the remaining balance.
- **Responsive & User-friendly Design**: This attractive user-friendly interface is designed to be fully responsive, working seamlessly across different devices.

## Technologies Used 🛠️

- **React**: The frontend framework used for building the user interface.
- **Typescript**: The logic for EMI calculation and rendering the amortization schedule.
- **Tailwind & Vanilla CSS**: Styling of the user interface.

## Prerequisites 📋

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14+)
- **npm** (v6+) or **yarn**

## Installation ⚙️

1. Clone the repository:

   ```bash
   git clone https://github.com/D-pixel-crime/EMI-Calc.git
   ```

2. Navigate to the project directory:

   ```bash
   cd EMI-Calc
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   Or, if you prefer yarn:

   ```bash
   yarn install
   ```

## Running the Application ▶️

To run the application locally, use the following command:

```bash
npm run dev
```

Or, with yarn:

```bash
yarn start
```

The application will run on `http://localhost:5173` by default.

## How to Use 📝

1. **Loan Amount**: Enter the total amount of the loan (supports decimal values).
2. **Interest Rate**: Enter the annual interest rate (in percentage). The input supports decimal values.
3. **Tenure**: Enter the loan tenure in months.
4. **Prepayment Amount**: Optionally, add a prepayment amount that will be deducted from the outstanding balance periodically.
5. Click **Calculate** to view the monthly EMI and the amortization schedule.
6. The **Amortization Schedule** section will display the breakdown of the EMI into principal and interest components for each month.

## EMI Calculation Formula 🧮

The EMI (Equated Monthly Installment) is calculated using the following formula:

\[
EMI = \frac{P \times R \times (1 + R)^N}{(1 + R)^N - 1}
\]

Where:

- \( P \) = Principal loan amount
- \( R \) = Monthly interest rate (Annual interest rate divided by 12)
- \( N \) = Loan tenure (in months)

## Future Enhancements 🚧

- **Integration with MetaMask**: Allow users to make payments via cryptocurrency using MetaMask.
- **Additional Loan Types**: Support for other types of loans (e.g., reducing balance loans).
- **Graphical Representation**: Add charts to visually represent the amortization schedule.
