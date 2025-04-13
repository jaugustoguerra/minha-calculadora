"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { detectErrors } from "@/ai/flows/detect-errors";

export default function Home() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value: string) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = async () => {
    try {
      const detectedError = await detectErrors({ expression });

      if (detectedError.hasError) {
        setResult(`Error: ${detectedError.errorMessage}`);
        return;
      }

      // eslint-disable-next-line no-eval
      const calculatedResult = eval(expression);
      setResult(String(calculatedResult));
    } catch (error: any) {
      setResult("Error: Invalid expression");
    }
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0F0F0] py-2">
      <div className="mb-4">
        <Input
          type="text"
          readOnly
          value={expression}
          placeholder="0"
          className="w-80 h-12 text-2xl font-bold text-right bg-[#333] text-white rounded-md shadow-md"
        />
        <Input
          type="text"
          readOnly
          value={result}
          className="w-80 h-10 text-xl text-right bg-white rounded-md shadow-md mt-2"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Button onClick={() => handleButtonClick("7")} className="shadow-md">
          7
        </Button>
        <Button onClick={() => handleButtonClick("8")} className="shadow-md">
          8
        </Button>
        <Button onClick={() => handleButtonClick("9")} className="shadow-md">
          9
        </Button>
        <Button
          onClick={() => handleButtonClick("/")}
          className="bg-teal-500 text-white shadow-md"
        >
          /
        </Button>

        <Button onClick={() => handleButtonClick("4")} className="shadow-md">
          4
        </Button>
        <Button onClick={() => handleButtonClick("5")} className="shadow-md">
          5
        </Button>
        <Button onClick={() => handleButtonClick("6")} className="shadow-md">
          6
        </Button>
        <Button
          onClick={() => handleButtonClick("*")}
          className="bg-teal-500 text-white shadow-md"
        >
          *
        </Button>

        <Button onClick={() => handleButtonClick("1")} className="shadow-md">
          1
        </Button>
        <Button onClick={() => handleButtonClick("2")} className="shadow-md">
          2
        </Button>
        <Button onClick={() => handleButtonClick("3")} className="shadow-md">
          3
        </Button>
        <Button
          onClick={() => handleButtonClick("-")}
          className="bg-teal-500 text-white shadow-md"
        >
          -
        </Button>

        <Button onClick={() => handleButtonClick("0")} className="shadow-md">
          0
        </Button>
        <Button onClick={() => handleButtonClick(".")} className="shadow-md">
          .
        </Button>
        <Button onClick={handleCalculate} className="bg-teal-500 text-white shadow-md">
          =
        </Button>
        <Button
          onClick={() => handleButtonClick("+")}
          className="bg-teal-500 text-white shadow-md"
        >
          +
        </Button>
        <Button onClick={handleClear} className="bg-gray-500 text-white shadow-md col-span-4">
          Clear
        </Button>
      </div>
    </div>
  );
}
