import React from 'react'
import useForm from '../../hooks/useForm'
import { Box, Button, TextField } from "@mui/material"


const Register = () => {
    const form = useForm()
  return (
    <Box>

      <TextField
        onChange={form.handleChange}
        id="password"
        fullWidth
        label="Username"
        name="username"
        variant="outlined"
        sx={{ marginY: 1 }}
      />
      <TextField
        onChange={form.handleChange}
        id="password"
        fullWidth
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        sx={{ marginY: 1 }}
      />
      <TextField
        onChange={form.handleChange}
        id="password"
        fullWidth
        label="Password confirm"
        type="password"
        name="passwordConfirm"
        variant="outlined"
        sx={{ marginY: 1 }}
      />
      <Button
        fullWidth
       
        variant="contained"
        sx={{ marginY: 1 }}
      >
        Kayıt Ol
      </Button>
    </Box>
  )
}

export default Register
