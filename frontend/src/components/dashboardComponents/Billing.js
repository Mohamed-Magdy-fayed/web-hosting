import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { FaIcons } from 'react-icons/fa'
import BasicCard from '../shared/BasicCard'

const Billing = () => {

  const user = {
    paymentMethods: ["CC"],
    unpaidInvoices: [],
    services: [{ serviceId: 1, autoRenew: false }],
  }

  return (
    <div className='flex flex-col gap-8 justify-start px-4 md:px-8 xl:px-16 2xl:px-24 h-full'>
      <Typography variant='h4' className='mt-8 text-left w-full p-4 text-xl md:text-2xl xl:text-3xl'>Billing</Typography>
      <div className='border-b rounded border p-4 lg:p-8 w-full shadow flex flex-col md:flex-row md:justify-between gap-2 items-center'>
        <div className='flex gap-4 items-center w-full md:w-fit justify-center'>
          <BsExclamationCircleFill color='orange' />
          <Typography className='text-base lg:text-lg xl:text-xl' variant='h6'>{user.paymentMethods.length === 0 ? 'No payment methods added yet' : 'Payment methods'}</Typography>
        </div>
        <div className='w-full md:w-fit'>
          <Button className='py-2 w-full lg:py-4'>
            {user.paymentMethods.length === 0 ? 'Add payment method' : 'Manage'}
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8'>
        <BasicCard
          head={'Unpaid Invoices'}
          paragraph={user.unpaidInvoices.length > 0 ? `You have ${user.unpaidInvoices.length} unpaid invoices` : 'You don\'t have unpaid invoices'}
          linkText={`Go to unpaid invoices`}
          linkUrl={`/`}
          icon={<FaIcons size={50} />}
        />
        <BasicCard
          head={'Services'}
          paragraph={`1 service has auto-renewal turned-off`}
          linkText={`Go to services`}
          linkUrl={`/`}
          icon={<FaIcons size={50} />}
        />
        <BasicCard
          head={'Payment history'}
          paragraph={`Find all your payments and their invoices`}
          linkText={`Go to payment history`}
          linkUrl={`/`}
          icon={<FaIcons size={50} />}
        />
      </div>
    </div>
  )
}

export default Billing