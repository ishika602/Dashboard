import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardList from '@/components/CardList'
import { Progress } from "@/components/ui/progress"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge, BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AppLineChart } from '@/components/AppLineChart'
const SingleUserPage = () => {
  return (
    <div className=''>
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>John doe</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
<div className="mt-4 flex flex-col xl:flex-row gap-8">
    <div className="w-full xl:w-1/3 space-y-6">
    <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-xl font-semibold">User badges</h1>
        <div className="flex gap-4 mt-4">
            <HoverCard>
  <HoverCardTrigger>
    <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'/>
  </HoverCardTrigger>
  <HoverCardContent>
   <h1 className="font-bold mb-2">Verified User</h1>
   <p className="text-sm text-muted-foreground">This User has been verified by the admin.</p>
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger>
    <Candy size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'/>
  </HoverCardTrigger>
  <HoverCardContent>
   <h1 className="font-bold mb-2">Awarded</h1>
   <p className="text-sm text-muted-foreground">This User has been verified by the admin.</p>
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger>
    <Citrus size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'/>
  </HoverCardTrigger>
  <HoverCardContent>
   <h1 className="font-bold mb-2">Popular</h1>
   <p className="text-sm text-muted-foreground">This User has been verified by the admin.</p>
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger>
    <Shield size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'/>
  </HoverCardTrigger>
  <HoverCardContent>
   <h1 className="font-bold mb-2">Admin</h1>
   <p className="text-sm text-muted-foreground">This User has been verified by the admin.</p>
  </HoverCardContent>
</HoverCard>
        </div>
        
    </div>
    <div className="bg-primary-foreground p-4 rounded-lg">
        <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">User Information</h1>
        <Sheet>
  <SheetTrigger asChild>
    <Button>Edit User</Button></SheetTrigger>
    <EditUser/>
</Sheet>
        </div>
        <div className='space-y-4 mt-4'>
            <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">Profile completion
                    <Progress value={66} />
                </p>
            </div>
            <div className="flex items-center gap-2">
                <span className='font-bold'>Username:</span>
                <span>john.doe</span>
            </div>
            <div className="flex items-center gap-2">
                <span className='font-bold'>Email:</span>
                <span>john.doe@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
                <span className='font-bold'>Phone:</span>
                <span>1567789</span>
            </div>
            <div className="flex items-center gap-2">
                <span className='font-bold'>Location:</span>
                <span>London</span>
            </div>
            <div className="flex items-center gap-2">
                <span className='font-bold'>Role:</span>
                {/* <span>Software developer</span> */}
                <Badge>Admin</Badge>
            </div>
        </div>
        <p className='text-sm text-muted-foreground mt-4'>Joined on 2025</p>
    </div>
    <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title='Recent Transactions'/>
    </div>
    </div>
    <div className="w-full xl:w-2/3 space-y-6">
    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
      <div className="flex items-center gap-2">
        <Avatar className='size-12'>
          <AvatarImage src="https://github.com/shadcn.png"/>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h1 className='text-xl font-semibold'>John Doe</h1>
      </div>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, earum. Officia omnis adipisci minus! Magni ad modi architecto necessitatibus neque temporibus magnam similique obcaecati illo labore, consectetur voluptate excepturi velit rerum facere debitis reprehenderit maxime ea libero consequuntur iure ex aperiam? Vitae est neque voluptatum animi possimus veritatis illum doloremque quidem! Quisquam corporis fugiat ipsa facere?
      </p>
    </div>
    <div className="bg-primary-foreground p-4 rounded-lg"><AppLineChart/></div>
    </div>
</div>

    </div>
  )
}

export default SingleUserPage
