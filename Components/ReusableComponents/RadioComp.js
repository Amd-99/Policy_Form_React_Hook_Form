import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Controller, useController } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";

const RadioComp = ({ control, name, rules, defaultValue, label,checked }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    defaultValue: defaultValue,
  });

  return (
    <>
<Controller
          name={name}
          control={control}
        
          onChange={onChange}
          render={()=> (
           <div>
            
            <Checkbox
              onChange={onChange}
              checked={checked}
            /> 
            <label>{label}</label></div>
          )}
         
        />

     
    </>
  );
};

export default RadioComp;
