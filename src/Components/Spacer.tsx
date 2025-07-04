import React from "react";


const Spacer: React.FC<{ height?: number }> = ({ height = 48 }) => (
  <div style={{ height }} />
);

export default Spacer;