import React from "react";
import { Button } from "@mui/material";

const ButtonInputs = (props) => {
  const { label, onClick, variant, ...other } = props;
  return (
    <div>
      <Button
        variant={"contained" || variant}
        onclick={onClick}
        label={label}
        {...other}
      />
    </div>
  );
};

export default ButtonInputs;
