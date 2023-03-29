import React, { useState } from "react";
function Datepicker() {
  const [birthday, setBirthday] = useState(Date.now());
  return <div>Datepicker</div>;
}

export default Datepicker;
