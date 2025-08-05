"use client"
import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
// import { Label } from "@/components/ui/label"
import { Label } from '@radix-ui/react-dropdown-menu'
// import { Label } from 'recharts'
import { useState } from 'react'
import { Button } from './ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from "@/components/ui/calendar"
const TodoList = () => {
  const [date , setDate]=useState<Date | undefined >(new Date())
  const [open,setOpen]=useState(false);
  return (
    <div>
      <h1 className='text-lg font-mrdium mb-6'>Todo List</h1>

      <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button className='w-full'>
      <CalendarIcon/>
      {date ? format(date, "PPP") : <span>pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className='p-0 w-auto'>
    <Calendar
    mode="single"
    selected={date}
    onSelect={(date)=>{
      setDate(date)
      setOpen(false)
    }}
    className="rounded-lg border"
  />
  </PopoverContent>
</Popover>
      <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
        <div className='flex flex-col gap-4'>

        
        <Card className='p-4'>
            <div className="flex items-center gap-4">
                <Checkbox id='item1' />
                <label htmlFor="item1" className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis praesentium quam iste asperiores eos soluta eum! Vel iste, rerum velit quisquam et ipsam officiis eos, soluta labore similique quam.</label>
            </div>
            <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <label htmlFor="terms">Accept terms and conditions</label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <label htmlFor="terms-2">Accept terms and conditions</label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="toggle" disabled />
        <label htmlFor="toggle">Enable notifications</label>
      </div>
      <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <Checkbox
          id="toggle-2"
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Label>
    </div>
        </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodoList
