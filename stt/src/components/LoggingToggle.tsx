"use client";
import { FunctionComponent } from "react";
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useLogContext } from "@/utils/context/LogContext";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#008000',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? 'red' : '#111827',
      width: 32,
      height: 32,
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#C70039',
      borderRadius: 20 / 2,
    },
}));
  

export const LoggingToggle: FunctionComponent = () => {
  const { enableLogs, toggleLogs } = useLogContext();

  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} checked={enableLogs} onChange={toggleLogs} />}
      label="Enable/Disable Logs"
    />
  );
};
