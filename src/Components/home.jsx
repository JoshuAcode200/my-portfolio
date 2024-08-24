import Hero from "./hero";
import { useEffect, useState } from "react";

const Home = () => {
  const recLoad = Array.from({ length: 21 }, (_, i) => i + 1);

  const [pone, setPone] = useState(0);
  const [ptwo, setPtwo] = useState(0);
  const [pthree, setPthree] = useState(0);
  const [pfour, setPfour] = useState(0);

  useEffect(() => {
    // Function to increment a counter until it reaches the target value
    const incrementCounter = (setCounter, target) => {
      const interval = setInterval(() => {
        setCounter(prev => {
          if (prev < target) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev; // Stop the counter once it reaches the target
          }
        });
      }, 900); // Adjust the interval speed as needed
    };

    // Start the counters for each target
    incrementCounter(setPone, 1);
    incrementCounter(setPtwo, 6);
    incrementCounter(setPthree, 5);
    incrementCounter(setPfour, recLoad.length);

  }, [recLoad]);

  return (
    <div className="home">
      <div>
        <Hero />
      </div>
      <div className="flex flex-row ml-48 mr-20 gap-24 font-body">
        <div className="flex flex-row gap-4">
          <p className="font-bold text-green-700 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">{pone}</p>
          <p className="pt-1 text-xs sm:text-sm md:text-base lg:text-lg text-black flex flex-col">
            Year of <span className="text-xs sm:text-sm md:text-base lg:text-lg text-black flex">Experience</span>
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <p className="font-bold text-green-700 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">{ptwo}</p>
          <p className="pt-1 text-xs sm:text-sm md:text-base lg:text-lg text-black flex flex-col">
            Projects <span className="text-xs sm:text-sm md:text-base lg:text-lg text-black flex">Completed</span>
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <p className="font-bold text-green-700 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">{pthree}</p>
          <p className="pt-1 text-xs sm:text-sm md:text-base lg:text-lg text-black flex flex-col">
            Technologies <span className="text-xs sm:text-sm md:text-base lg:text-lg text-black flex">Used</span>
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <p className="font-bold text-green-700 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">{pfour}</p>
          <p className="pt-1 text-xs sm:text-sm md:text-base lg:text-lg text-black flex flex-col">
            Code <span className="text-xs sm:text-sm md:text-base lg:text-lg text-black flex">Commits</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
