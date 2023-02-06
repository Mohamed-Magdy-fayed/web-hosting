import { Button, Input, Dialog, DialogHeader, DialogBody, Switch, Checkbox, Accordion, AccordionHeader, AccordionBody, IconButton, Typography, Chip, } from '@material-tailwind/react'
import React, { useState } from 'react'
import { BiCart, BiHeartCircle } from 'react-icons/bi'
import { FaDollarSign, FaFilter, FaLightbulb, FaSearch } from 'react-icons/fa'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdClose, MdOutlineDoNotDisturbAlt } from 'react-icons/md'

const endingsOptions = ['.net', '.com', '.me', '.dev', '.us', '.ai', '.io']

let domainNames = []

const getDomainNames = () => {
  for (let i = 0; i < 19; i++) {
    domainNames.push({
      isAvailable: i % 2 === 0 ? true : false,
      name: `domain${i}${endingsOptions[Math.floor(Math.random() * endingsOptions.length)]}`,
      isPremium: i % 2 === 0 ? true : false,
      pricePerYear: Math.floor(Math.random() * 1000),
      insights: ['This ending (.buzz) has been popular recently', 'This name is easy to pronounce and type when heard', 'The words in this name are spelled correctly']
    })
  }
}

getDomainNames()

const GetNewDomain = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [availableOnly, setAvailableOnly] = useState(false)
  const [priceLimit, setPriceLimit] = useState(0)
  const [endings, setEndings] = useState([])
  const [filtersOpened, setFiltersOpened] = useState(false);
  const [filtersOpenedInitData, setFiltersOpenedInitData] = useState({});
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const resetAllSearch = () => {
    setSearchQuery('')
    setAvailableOnly(false)
    setPriceLimit(0)
    setEndings([])
  }

  const handleOpenFilters = (value) => {
    setFiltersOpened(value)
    setFiltersOpenedInitData({ availableOnly, priceLimit, endings })
  }

  const handleCancelFilters = () => {
    setAvailableOnly(filtersOpenedInitData.availableOnly)
    setPriceLimit(filtersOpenedInitData.priceLimit)
    setEndings(filtersOpenedInitData.endings)
    setFiltersOpened(!filtersOpened)
  }

  const handleSetEndings = (option) => {
    if (endings.includes(option)) return setEndings(endings.filter(ending => ending !== option))
    return setEndings([...endings, option])
  }

  return (
    <div className='px-4 md:px-8 xl:px-16 2xl:px-24'>
      <Dialog open={filtersOpened} handler={handleOpenFilters}>
        <DialogHeader>Filter your search</DialogHeader>
        <DialogBody>
          <div>
            <h1>Availablity</h1>
            <div className='flex items-center justify-between'>
              <span>Show available names only</span>
              <Switch checked={availableOnly} onChange={() => setAvailableOnly(!availableOnly)} />
            </div>
          </div>
          <div>
            <h1>Filter by domian ending</h1>
            <div className='py-4 justify-evenly flex flex-wrap overflow-auto max-h-96'>
              {endingsOptions.map(option => (
                <Checkbox key={option} id={option} label={option} checked={endings.includes(option)} onChange={() => handleSetEndings(option)} />
              ))}
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex max-w-fit'>
              <Input min={0} type='number' value={priceLimit} onChange={(e) => setPriceLimit(e.target.value)} label="Maximum name price" icon={<FaDollarSign />} />
            </div>
            <Button
              variant="text"
              color="red"
              onClick={handleCancelFilters}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={() => handleOpenFilters(false)}>
              <span>Confirm</span>
            </Button>
          </div>
        </DialogBody>
      </Dialog>
      <div className='flex gap-4 items-center max-w-3xl m-auto pt-12'>
        <Button onClick={() => handleOpenFilters(true)} className=''>
          <FaFilter></FaFilter>
        </Button>
        <Button onClick={() => resetAllSearch()} className=''>
          <MdClose></MdClose>
        </Button>
        <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} label="Find your perfect domain name" icon={<FaSearch />} />
      </div>
      <div className='flex flex-wrap justify-around p-4 max-w-3xl m-auto'>
        {availableOnly && (
          <Button className='w-fit flex items-center gap-2 !p-0'>
            <Typography variant='small' className='tracking text-xs p-2' onClick={() => handleOpenFilters(true)}>Available only</Typography>
            <div className='pr-2' onClick={() => {
              setAvailableOnly(false)
              setFiltersOpened(false)
            }}>
              <MdClose></MdClose>
            </div>
          </Button>
        )}
        {priceLimit > 0 && (
          <Button className='w-fit flex items-center gap-2 !p-0'>
            <Typography variant='small' className='tracking text-xs p-2' onClick={() => handleOpenFilters(true)}>Price limit ${priceLimit}</Typography>
            <div className='pr-2' onClick={() => {
              setPriceLimit(0)
              setFiltersOpened(false)
            }}>
              <MdClose></MdClose>
            </div>
          </Button>
        )}
        {endings.length > 0 && (
          <Button className='w-fit flex items-center gap-2 !p-0'>
            <Typography variant='small' className='tracking text-xs p-2' onClick={() => handleOpenFilters(true)}>{endings.slice(0, 3).join(' | ')} {endings.slice(3).length > 0 ? 'and ' + endings.slice(3).length + ' others only' : ''} </Typography>
            <div className='pr-2' onClick={() => {
              setEndings([])
              setFiltersOpened(false)
            }}>
              <MdClose></MdClose>
            </div>
          </Button>
        )}
      </div>
      <div className='justify-around max-w-3xl m-auto'>
        {domainNames.map((domain, i) => (
          <div className={`after:content-[''] relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-2 after:bg-primary after:bg-opacity-0 hover:after:bg-opacity-20 overflow-hidden cursor-pointer border-b border-x ${i === 0 ? 'rounded-t border' : i === domainNames.length - 1 ? 'rounded-b border-b' : ''}`} key={i}>
            <Accordion open={open === i + 1}>
              <AccordionHeader className='p-2 flex items-center' onClick={() => handleOpen(i + 1)}>
                <div className='flex items-center gap-2'>
                  {domain.isAvailable ? <AiFillCheckCircle className='text-[#1e8e3e]'></AiFillCheckCircle> : <MdOutlineDoNotDisturbAlt className=' text-gray-600'></MdOutlineDoNotDisturbAlt>}
                  <Typography variant='lead'>{domain.name}</Typography>
                  {domain.isPremium && <Chip className='hidden md:block' value='Premium'></Chip>}
                </div>
                <div className='ml-auto flex items-center justify-around gap-2'>
                  <Typography>${domain.pricePerYear} / year</Typography>
                  <BiHeartCircle></BiHeartCircle>
                  <BiCart></BiCart>
                </div>
              </AccordionHeader>
              <AccordionBody className='p-2'>
                <Typography variant='h5'>Insights</Typography>
                <div className='flex flex-wrap justify-start items-center'>
                  {domain.insights.map((item, i) => (
                    <div key={i} className='flex gap-2 items-center mr-8 my-2'>
                      <FaLightbulb></FaLightbulb>
                      <Typography key={i} variant='paragraph'>{item}</Typography>
                    </div>
                  ))}
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetNewDomain