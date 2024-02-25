
import  React from "react";

type AppProps = {
  title?: string;
}; /* use `interface` if exporting so that consumers can extend */

const App = ({ title }: AppProps) => 
  <div className="elative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <h1 className="text-32l font-bold">{title}</h1>
  </div>;

export default App;
