
import React from "react";
import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";



const TextFieldComp = ({ control,name ,rules,defaultValue , type ,variant ,spinButton, ...props}) => {
  
    const {
        field: { onChange, onBlur, value, ref  },
        fieldState: { invalid, isTouched, isDirty , error },
        formState: { touchedFields, dirtyFields }
      } = useController({
        name,
        control,
        rules: rules,
        defaultValue: defaultValue,
      });
 

      return (
    <>
        <TextField 
        {...props}
        className={spinButton === true? null :"spinButton" }
          type={type}
          onChange={onChange} // send value to hook form 
          onBlur={onBlur} // notify when input is touched/blur
          value={value === null ? " " : (value === undefined ? "" : value)} // input value
          name={name} // send down the input name
          label={props.label=== undefined? name : props.label} //
          inputRef={ref} // send input ref, so we can focus on input when error appear
          error={invalid}
          variant={variant}
          helperText={error?.message}
         
        />

        

       </>

      );
}

export default TextFieldComp

