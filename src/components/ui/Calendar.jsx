/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

function Calendar({ className = "", classNames = {}, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`p-3 ${className}`}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border rounded",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        day: "h-9 w-9 p-0 font-normal bg-transparent hover:bg-gray-200 focus:bg-gray-300 rounded-md",
        day_selected: "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600",
        day_today: "bg-gray-100 text-gray-800",
        day_outside: "text-gray-400 opacity-50",
        day_disabled: "text-gray-400 opacity-50",
        day_range_middle: "bg-gray-200 text-gray-800",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: (props) => <ChevronLeft className="h-4 w-4" {...props} />,
        IconRight: (props) => <ChevronRight className="h-4 w-4" {...props} />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
