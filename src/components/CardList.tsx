import React from 'react';
import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  CardFooter,
  // CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"

const latestTransactions=[{
    id:1,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},
{
    id:2,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},
{
    id:3,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},
{
    id:4,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},
{
    id:5,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},

]
const popularContent=[{
    id:1,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},
{
    id:2,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},
{
    id:3,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},
{
    id:4,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},
{
    id:5,
    title:"Subscription Renewal",
    badge:"Michael Johnson",
    image:"https://images.pexels.com/photos/29570237/pexels-photo-29570237.jpeg",
    count:1300,
},

]
const CardList = ({title}:{title:string}) => {
    const list = title === "Popular Content " ? popularContent : latestTransactions
  return (
    <div className=''>
        <h1 className="text-lg font-medium mb-2">{title}</h1>
        <div className="flex flex-col gap-2"></div>
        {list.map(item=>(
            <Card key={item.id} className='flex-row items-center justify-center gap-4 '>
  {/* <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter> */}
  <div className="w-10 h-10 rounded-sm relative overflow-hidden">
    <Image src={item.image} alt={item.title} fill className="object-cover"/>
  </div>
  <CardContent className='p-0'>
    <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
    <Badge variant="secondary">{item.badge}</Badge>
  </CardContent>
  <CardFooter className=' flex-1 p-0'>{item.count / 1000}k</CardFooter>
</Card>
        ))}
    </div>
  )
}

export default CardList
