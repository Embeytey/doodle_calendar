import React, { useState } from "react";
import { Button } from "@mui/material";

function Assign() {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleInputChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleSaveClick = () => {
    // You can save the text field value wherever you need it (e.g., in state, send it to an API, etc.)
    console.log("Saving text:", textFieldValue);
    setTextFieldValue("");
  };

  return (
    <div>
      <input type="text" value={textFieldValue} onChange={handleInputChange} />
      <Button variant="contained" onClick={handleSaveClick}>
        Save
      </Button>
    </div>
  );
}

export default Assign;
