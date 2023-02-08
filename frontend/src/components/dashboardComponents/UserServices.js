import { Accordion, AccordionBody, AccordionHeader, Button, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const UserServices = ({ setDomainData, service }) => {
    const [open, setOpen] = useState(0);
    const navigate = useNavigate()

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className={`after:content-[''] relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-2 after:bg-primary after:bg-opacity-0 hover:after:bg-opacity-20 overflow-hidden cursor-pointer border-b border-x rounded border ${open !== 1 ? 'rounded-b' : ''}`}>
            <Accordion open={open === 1}>
                <AccordionHeader className='p-2 flex items-center' onClick={() => handleOpen(1)}>
                    <div className='flex items-center gap-2'>
                        <Typography variant='h6'>{service.serviceName}</Typography>
                    </div>
                    <div className='ml-auto flex items-center justify-around gap-2'>

                    </div>
                </AccordionHeader>
                <AccordionBody className='flex flex-col gap-4'>
                    {service.userServices.map(service => (
                        <div key={service.id} className='flex justify-between items-center border-b-4 p-4'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    {service.serviceIcon}
                                </div>
                                <div>
                                    <Typography variant='h5'>{service.domainType}</Typography>
                                    <div className='flex items-center gap-4'>
                                        <Typography variant='small'>Expires on {service.expiryDate}</Typography>
                                        <div className='block h-6 w-2 mr-2 border-r-2 border-gray-400'></div>
                                        <Link to={`service/${service.id}`} className='text-primary cursor-pointer hover:text-accent' variant='paragraph'>{service.domainName}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <Button className='bg-primary' onClick={() => navigate(`service/${service.id}`)}>Manage</Button>
                            </div>
                        </div>
                    ))}
                </AccordionBody>
            </Accordion>
        </div>
    )
}

export default UserServices