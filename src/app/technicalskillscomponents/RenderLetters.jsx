import React, { useState, useEffect } from 'react';

function RenderLetters() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const textToPrint = `#include <iostream>\nusing namespace std;\nclass Fibonacci {\n  private:\n      int terms;\n  public:\n      Fibonacci(int n) : terms(n) {}\n      void calculateFibonacci(int a = 0, int b = 1, int c = 0) {\n          if (c < terms) {\n              cout << a << " ";\n              calculateFibonacci(b, a + b, c + 1);\n          }\n      }\n  };\n  int main() {\n      int n;\n      cout << "Enter the number of terms for Fibonacci series: ";\n      cin >> n;\n      Fibonacci fib(n);\n      fib.calculateFibonacci();\n      return 0;\n  }`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < textToPrint.length && !reverse) {
        setText((prevText) => prevText + textToPrint.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else if (index > 0 && reverse) {
        setText((prevText) => prevText.slice(0, -1));
        setIndex((prevIndex) => prevIndex - 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setReverse((prevReverse) => !prevReverse);
        }, 500);
      }
    }, reverse ? 25 : 100);

    return () => clearInterval(intervalId);
  }, [index, reverse, textToPrint]);

  return (
    <div className=' text-yellow-500'>
      <pre>{text}</pre>
    </div>
  );
}

export default RenderLetters;
