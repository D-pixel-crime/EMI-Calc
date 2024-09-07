import { useEffect, useState } from "react";
import "./App.css";
import { TailSpin } from "react-loader-spinner";
import Form from "./components/Form";

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);
  }, []);

  return isInitialLoad ? (
    <TailSpin
      wrapperClass="h-screen w-screen bg-slate-900 flex-center"
      visible={true}
      height={65}
      width={65}
      radius={1}
      color="#363C4F"
    />
  ) : (
    <main className="min-h-screen max-w-screen overflow-x-hidden bg-slate-900 text-white">
      <section className="background flex lg:px-10 lg:py-16 py-10 items-center gap-10 flex-col w-full overflow-x-hidden min-h-screen">
        <header className="flex-center flex-col">
          <h1 className="text-6xl font-semibold border-b-2 border-b-slate-600 bg-gradient-to-br from-purple-500 via-slate-400 to-purple-500 w-fit bg-clip-text text-transparent pb-0.5 mb-0.5">
            EMI-Calc
          </h1>
          <p className="text-xs text-gray-500 w-fit">
            Get EMI details in a few clicks
          </p>
        </header>
        <Form />
      </section>
    </main>
  );
}

export default App;
