import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center bg-pink-600">
      
      <h1 className="mr-10 text-xl text-slate-200 fond-bold"> Dynamic Calendar</h1>
      <button onClick={handleReset} className="py-2 px-4 mr-10 text-white">
        Today
      </button>
      <button className="border bg-black text-slate-200 rounded py-2 px-4 mr-5" onClick={handlePrevMonth}>
        <span>
        Previous   
        </span>
      </button>
      <h2 className="mr-4  text-xl text-white text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <button className="border bg-black text-slate-200 rounded py-2 px-4 mr-5" onClick={handleNextMonth}>
        <span >
            Next
        </span>
      </button>
      
    </header>
  );
}
