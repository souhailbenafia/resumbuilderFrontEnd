import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import React from 'react'

function inputs(props) {
    
  return (

<Grid item xs={12}>
                    <TextField
                      label={props.label}
                      required
                      fullWidth
                      name= {props.name}
                      type={props.type}
                      onChange={props.OnChangeHandler}
                      icon={props.icon}
                      helperText={props.error}
                      onBlur={props.onbrul}
                     
                    />
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors}
        </span>
        

                  </Grid>


  )
}

export default inputs