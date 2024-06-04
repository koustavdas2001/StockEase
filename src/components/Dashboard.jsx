import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart.jsx";
import { mockCompanyDetalis } from "../constants/mock.jsx";
import Header from "./Header.jsx";
import Details from "./Details.jsx";
import Overview from "./Overview.jsx";
import ThemeContext from "../context/ThemeContext.jsx";
import StockContext from "../context/StockContext.jsx";
import { fetchQuote, fetchStockDetails } from "../api/stock-api.jsx";

const Dashboard = () => {
    const { darkMode } = useContext(ThemeContext);

    const { stockSymbol } = useContext(StockContext);
  
    const [stockDetails, setStockDetails] = useState({});
  
    const [quote, setQuote] = useState({});
  
    useEffect(() => {
      const updateStockDetails = async () => {
        try {
          const result = await fetchStockDetails(stockSymbol);
          setStockDetails(result);
        } catch (error) {
          setStockDetails({});
          console.log(error);
        }
      };
  
      const updateStockOverview = async () => {
        try {
          const result = await fetchQuote(stockSymbol);
          setQuote(result);
        } catch (error) {
          setQuote({});
          console.log(error);
        }
      };
  
      updateStockDetails();
      updateStockOverview();
    }, [stockSymbol]);
  
    return (
      <div
        className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
          darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
        }`}
      >
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
          <Header name={stockDetails.name || "Apple Inc."} />
        </div>
        <div className="md:col-span-2 row-span-4">
          <Chart />
        </div>
        <div>
          <Overview
          symbol={stockSymbol}
          price={quote.pc || "N/A"}
          change={quote.d || "N/A"}
          changePercent={quote.dp || "N/A"}
          currency={stockDetails.currency || "N/A"}
          />
        </div>
        <div className="row-span-2 xl:row-span-3">
          <Details details={stockDetails} />
        </div>
      </div>
    );
  };
  
  export default Dashboard;