import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItems = ({TitleContent, textContent}) => {
  return (
    <>
    <Accordion>
     <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{TitleContent}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {textContent}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionItems