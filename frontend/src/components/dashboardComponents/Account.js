import { Accordion, AccordionBody, AccordionHeader, Button, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'

const Account = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className='flex flex-col gap-12 max-w-3xl m-auto pt-12 px-4 md:px-8 xl:px-16 2xl:px-24'>
      <div>
        <Typography variant='lead'>Email notifications</Typography>
        <div className='flex justify-between items-center p-4 relative overflow-hidden border-t border-b border-x rounded-t'>
          <Typography variant='h5'>Marketing emails</Typography>
          <Button variant='text'>Yes to all</Button>
        </div>
        <div className={`after:content-[''] relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-2 after:bg-primary after:bg-opacity-0 hover:after:bg-opacity-20 overflow-hidden cursor-pointer border-b border-x rounded-b`}>
          <Accordion open={open === 1}>
            <AccordionHeader className='p-4 flex items-center' onClick={() => handleOpen(1)}>
              <div className='flex items-center gap-2'>
                <Typography variant='lead'>You are not opted in to receiving any marketing emails</Typography>
              </div>
            </AccordionHeader>
            <AccordionBody className='p-2'>
              <Typography variant='h5'>Insights</Typography>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div>
        <Typography variant='lead'>Your account settings</Typography>
        <div className='flex justify-between items-center p-4 relative overflow-hidden border-t border-b border-x rounded-t'>
          <Typography variant='h5'>Option</Typography>
          <Button variant='text'>Manage</Button>
        </div>
        <div className={`after:content-[''] relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-2 after:bg-primary after:bg-opacity-0 hover:after:bg-opacity-20 overflow-hidden cursor-pointer border-b border-x rounded-b`}>
          <Accordion open={open === 1}>
            <AccordionHeader className='p-4 flex items-center' onClick={() => handleOpen(1)}>
              <div className='flex items-center gap-2'>
                <Typography variant='lead'>Your other settings</Typography>
              </div>
            </AccordionHeader>
            <AccordionBody className='p-2'>
              <Typography variant='h5'>Details</Typography>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className='mb-12'>
        <Typography variant='lead'>Your account settings</Typography>
        <div className='flex justify-between items-center p-4 relative overflow-hidden border-t border-b border-x rounded-t'>
          <Typography variant='h5'>Option</Typography>
          <Button variant='text'>Manage</Button>
        </div>
        <div className={`after:content-[''] relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-2 after:bg-primary after:bg-opacity-0 hover:after:bg-opacity-20 overflow-hidden cursor-pointer border-b border-x rounded-b`}>
          <Accordion open={open === 1}>
            <AccordionHeader className='p-4 flex items-center' onClick={() => handleOpen(1)}>
              <div className='flex items-center gap-2'>
                <Typography variant='lead'>Your other settings</Typography>
              </div>
            </AccordionHeader>
            <AccordionBody className='p-2'>
              <Typography variant='h5'>Details</Typography>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Account