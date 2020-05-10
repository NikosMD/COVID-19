import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";
import "./DataPicker.scss";

const DataPicker = () => {
  const { selectDateStore } = useStores();
  const { from, to } = selectDateStore;
  const modifiers = { start: from, end: to };
  return (
    <div className="InputFromTo">
      <DayPickerInput
        value={from}
        placeholder="From"
        format="YYYY-MM-DD"
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{
          selectedDays: [from, { from, to }],
          disabledDays: { after: to },
          toMonth: to,
          modifiers,
          numberOfMonths: 2,
        }}
        onDayChange={(from) => {
          selectDateStore.handleFromChange(from);
        }}
      />
      —
      <span className="InputFromTo-to">
        <DayPickerInput
          value={to}
          placeholder="To"
          format="YYYY-MM-DD"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { before: from },
            modifiers,
            month: from,
            fromMonth: from,
            numberOfMonths: 2,
          }}
          onDayChange={(to) => {
            selectDateStore.handleToChange(to);
          }}
        />
      </span>
    </div>
  );
};

export default observer(DataPicker);
