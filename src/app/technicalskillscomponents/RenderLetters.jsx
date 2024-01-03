import React, { useState, useEffect } from 'react';

function RenderLetters() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const textToPrint = `#include <iostream>
using namespace std;
  
class Fibonacci {
public:
  int calFib(int n) {
      if (n <= 1)
        return n;

      return calFib(n - 1) + calFib(n - 2);
      }
  };
  
int main() {
  int n;
  cout << "Enter nth terms for Fibonacci series: ";
  cin >> n;
  Fibonacci fib;
  cout << "nth Fibonacci number is: ";
  cout << fib.calFib(n) << endl;
  return 0;
}`;

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
