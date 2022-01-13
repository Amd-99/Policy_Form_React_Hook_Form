import React from "react";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import TextFieldComp from "../ReusableComponents/TextFieldComp";
import CheckboxComp from "../ReusableComponents/CheckBoxComp";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const PolicyForm = (props) => {
  const { control, handleSubmit, watch, error } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const roomWatch = watch("roomCapping");
  const planTypeWatch = watch("planType")
  const autoApproveExpenseWatch = watch("autoApproveExpense")
  return (
    <Box boxShadow={10} height={500} m={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          padding={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={4}>
            <TextFieldComp
              fullWidth
              name="name"
              label="Name"
              control={control}
              type="text"
              variant="standard"
            />
          </Grid>
          <Grid xs={4}>
            <TextFieldComp
              fullWidth
              name="code"
              label="Code"
              control={control}
              type="text"
              variant="standard"
            />
          </Grid>
          <Grid xs={2}>
            <CheckboxComp name="active" control={control} label="Active" />
          </Grid>
        </Grid>

          
        

          <Controller
            rules={{ required: true }}
            control={control}
            name="roomCapping"
            render={({ field }) => {
              return (
                <>
               
                  <RadioGroup {...field}>
                  <Grid
                  container 
                  direction="row"
                 
                  alignItems="center"
                >
                  <Grid xs={1} ><label>Room</label></Grid>
                    <Grid >
                      <FormControlLabel
                        name="noCapping"
                        value="noCapping"
                        control={<Radio />}
                        label="No Capping"
                      />
                    </Grid>
                    <Grid   justifyContent="center">
                    <FormControlLabel
                      name="roomAmountCapping"
                      value="roomAmountCapping"
                      control={<Radio />}
                      label="Room Amount Capping"
                    />
                    {roomWatch === "roomAmountCapping" && (
                      <TextFieldComp
                       
                        name="roomAmountCapping.maxRoomAmount"
                        label="Maximum Room Amount"
                        control={control}
                        type="text"
                        variant="standard"
                      />
                    )}

                    </Grid>
                    <Grid  justifyContent="center">
                    <FormControlLabel
                      name="roomTypeCapping"
                      value="roomTypeCapping"
                      control={<Radio />}
                      label="Room Type Capping"
                    />

                    {roomWatch === "roomTypeCapping" && (
                      <TextFieldComp
                       
                        name={`roomTypeCapping.roomType`}
                        label="Room Type"
                        control={control}
                        type="text"
                        variant="standard"
                      />
                    )}

                    </Grid>
                    </Grid>
                  </RadioGroup>
                 
                </>
              );
            }}
          />

<Controller
            rules={{ required: true }}
            control={control}
            name="planType"
            render={({ field }) => {
              return (
                <>
               
                  <RadioGroup {...field}>
                  <Grid
                  container 
                  direction="row"
                 
                  alignItems="center"
                >
                  <Grid xs={1} ><label>Plan Type *</label></Grid>
                 
                    <Grid   justifyContent="center">
                    <FormControlLabel
                      name="individualSumInsured"
                      value="individualSumInsured"
                      control={<Radio />}
                      label="Individual Sum Insured"
                    />
                    

                    </Grid>
                    <Grid  justifyContent="center">
                    <FormControlLabel
                      name="familyFloater"
                      value="familyFloater"
                      control={<Radio />}
                      label="Family Floater"
                    />
                    {planTypeWatch === "individualSumInsured" ? (
                      <>
                      <TextFieldComp
                       
                       name="individualSumInsured.sumInsuredAmount"
                       label="Sum Insured Amount"
                       control={control}
                       type="text"
                       variant="standard"
                     />
                     <TextFieldComp
                      
                     name="individualSumInsured.premiumAmount"
                     label="Premium Amount"
                     control={control}
                     type="text"
                     variant="standard"
                   />
                   </>
                    ):<></>}
                    {planTypeWatch === "familyFloater" ? (
                 <>
                      <TextFieldComp
                       
                       name={`familyFloater.maxMembers`}
                       label="Max Members"
                       control={control}
                       type="text"
                       variant="standard"
                     />
                          <TextFieldComp
                       
                       name={`familyFloater.sumInsuredAmount`}
                       label="Sum Insured Amount"
                       control={control}
                       type="text"
                       variant="standard"
                     />
                          <TextFieldComp
                       
                       name={`familyFloater.premiumAmount`}
                       label="Premium Amount"
                       control={control}
                       type="text"
                       variant="standard"
                     />
                     </>
                    ):<></>}

                    </Grid>
                    </Grid>
                  </RadioGroup>
                 
                </>
              );
            }}
          />


<Grid
          container
          padding={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid>
            <CheckboxComp name="autoApproveExpense" control={control} label="Auto Approved Expense" />
          </Grid>

          <Grid>
{
    autoApproveExpenseWatch && (
        <>
        <TextFieldComp
                       
                       name="autoApprovedExpense.autoApprovedExpenseRupees"
                       label="Auto Approved Expense"
                       control={control}
                       type="text"
                       variant="standard"
                     />
        </>
    )
}
          </Grid>
        </Grid>

       <Grid>
       <CheckboxComp name="preApproveExpense" control={control} label="Pre Approved Expense" /> 
       </Grid>

        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

export default PolicyForm;
