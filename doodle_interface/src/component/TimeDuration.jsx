import React, { useState } from "react";
import { Button } from "@mui/material";

function TimeDurationPicker({ onSelectDuration }) {
  const [minutes, setMinutes] = useState(0);
  const [hours, sethours] = useState(0);

  const handleDurationSelection = (updatedMinutes) => {
    const durationInMinutes = hours * 60 + updatedMinutes;
    onSelectDuration(durationInMinutes);
  };

  const availableMinutes = [15, 30, 45, 60];
  return (
    <div>
      {availableMinutes.map((value) => (
        <Button
          variant="contained"
          className="duration"
          key={value}
          onClick={() => {
            setMinutes((prevMinutes) => {
              const updatedMinutes = value;
              setTimeout(() => {
                handleDurationSelection(updatedMinutes);
              }, 0);
              return updatedMinutes;
            });
          }}
          style={{ margin: "2px" }}
        >
          {value}
        </Button>
      ))}
    </div>
  );
}

export default TimeDurationPicker;
