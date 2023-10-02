'use client'
import React from 'react'
import Button from '../components/Button'
const DashFooter = () => {
  return (
    <div>
        <Button text='Save' onClick={()=>{
            console.log('clicked')
        }} color='bg-purple' textColor='text-white'/>
    </div>
  )
}

export default DashFooter