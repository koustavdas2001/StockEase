import React, { useContext } from "react";
import Card from "./Card.jsx";
import ThemeContext from "../context/ThemeContext.jsx";

const Details = ({details}) => {
    const {darkMode} = useContext(ThemeContext);
    const detailsList = {
        name: "Name",
        country: "Country",
        currency: "Currency",
        // exchange: "Exchange",
        ipo: "IPO Date",
        marketCapitalization: "Market Cap",
        finnhubIndustry: "Industry",
    }

    const convertMilliontoBillion = (number) => {
        return (number / 1000).toFixed(2);
    }

    return <Card>
        <ul className={`w-full h-full flex flex-col justify-between divide-y-1 overflow-y-scroll custom-scrollbar2 ${darkMode ? "divide-gray-700" : null} `}>
            {Object.keys(detailsList).map((item) => {
                return (
                    <li key={item} className="flex-1 flex justify-between items-center">
                        <span>{detailsList[item]}</span>
                        <span>
                            {item === "marketCapitalization" ? `${convertMilliontoBillion(details[item])}B` : details[item]}
                        </span>
                    </li>
                )
            })}
        </ul>
    </Card>
}

export default Details;