import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import axios from "axios";
import TimeDurationPicker from "./TimeDuration"; // Import your TimeDurationPicker component
import { Grid } from "@mui/material";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

function BasicDateCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  //   app.post('/api/schedule', (req, res) => {
  //   const { selectedDate, selectedEndTime, selectedDuration } = req.body;
  //   console.log('Received data:', { selectedDate, selectedEndTime, selectedDuration });
  //   res.json({ message: 'Data received successfully' });
  // });

  // app.listen(port, () => {
  //   console.log(`Server is running on port ${port}`);
  // });
  // I

  useEffect(() => {
    const sendToBackend = async () => {
      try {
        const backendEndpoint = "YOUR_BACKEND_ENDPOINT";
        const dataToSend = {
          selectedDate: selectedDate,
          selectedEndTime: selectedEndTime,
          selectedDuration: selectedDuration,
        };

        const response = await axios.post(backendEndpoint, dataToSend);
        console.log("Backend Response:", response.data);
      } catch (error) {
        console.error("Error sending data to the backend:", error);
      }
    };

    if (selectedDate && selectedEndTime && selectedDuration) {
      sendToBackend();
    }
  }, [selectedDate, selectedEndTime, selectedDuration]);

  const handleDateSelect = (date) => {
    const endDateTime = calculateEndTime(date, selectedDuration);
    setSelectedDate(date);
    setSelectedEndTime(endDateTime);
  };

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);

    if (selectedDate) {
      const endDateTime = calculateEndTime(selectedDate, duration);
      setSelectedEndTime(endDateTime);
    }
  };

  const shouldDisableDate = (date) => {
    return dayjs(date).isBefore(dayjs(), "day");
  };

  const calculateEndTime = (startDateTime, duration) => {
    return dayjs(startDateTime).add(duration, "minute");
  };
  return (
    <div className="calendar">
      <h2>Add Time</h2>
      <h2>{selectedDate ? dayjs(selectedDate).format("YYYY-MM-DD") : ""}</h2>
      <h2>{selectedEndTime ? dayjs(selectedEndTime).format("HH:mm") : ""}</h2>
      <h2> Duration {selectedDuration} </h2>
      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid xs={6}>
          <TimeDurationPicker
            onSelectDuration={handleDurationSelect}
            sx={{ ml: 50 }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              shouldDisableDate={shouldDisableDate}
              date={selectedDate}
              onChange={handleDateSelect}
              components={["DigitalClock", "MultiSectionDigitalClock"]}
              sx={{ ml: 10 }}
            >
              <DemoItem>
                <MultiSectionDigitalClock />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs} className="date">
            <DateCalendar
              shouldDisableDate={shouldDisableDate}
              date={selectedDate}
              onChange={handleDateSelect}
              sx={{ width: 300 }}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default BasicDateCalendar;
