import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
export default function ReusableForm({ template, onSubmit }) {
  let { register, handleSubmit, errors, watch, setError, clearErrors } =
    useForm();
  let { title, fields } = template;

  const renderFields = (fields) => {
    return fields.map((field) => {
      let { title, type, name, validationProps, control } = field;
      switch (type) {
        case "text":
          return (
            <>
              <TextField
              key={name}
                label={title}
                name={name}
                type={type}
                variant="standard"
                
                {...register(`${name}`)}
              />

              {/* <label htmlFor={name}>{title}</label>
                    <input type="text"  id={name} {...register(`${name}`,{validationProps})}/>
                     */}
            </>
          );
        case "email":
          return (
            <>
              <TextField
                key={name}
                label={title}
                name={name}
                type="email"
                variant="standard"
                
                {...register(`${name}`)}
              />
            </>
          );

        case "number":
          return (
            <>
              <TextField
                key={name}
                label={title}
                name={name}
                type="number"
                variant="standard"
                
               {...register(`${name}`)}
              />
            </>
          );
        case "checkbox":
          return (
            <>
              <Checkbox
                label={title}
                name={name}
                key={name}
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
                {...register(`${name}`)}
              />
              <label htmlFor={name}>{title}</label>
            </>
          );

        default:
          return <div>Invalid Field</div>;
      }
    });
  };

  return (
    <div>
      <form className="formClass" onSubmit={handleSubmit(onSubmit)}>
        <h4>Job Application</h4>
        {renderFields(fields)}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
