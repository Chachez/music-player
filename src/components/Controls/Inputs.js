import React from "react";
import { TextField } from "@mui/material";

const ButtonInputs = (props) => {
  const { label, value, name, onChange, ...other } = props;
  return (
    <div>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        {...other}
      />
    </div>
  );
};

export default ButtonInputs;
