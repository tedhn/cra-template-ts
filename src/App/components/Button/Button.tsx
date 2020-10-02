import React, { useState } from "react";

function Button() {
  const [value, setValue] = useState("Click Me");

  const handleClick = () => setValue("Clicked");

  return (
    <div data-testid="test-button" onClick={handleClick}>
      {value}
    </div>
  );
}

export default Button;
