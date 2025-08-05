
"use client"
import {
  // Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  // SheetTrigger,
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { Form, useForm } from "react-hook-form"
 
// import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2,{message:"Username must be at least 2 characters! "}).max(50),
  email:z.string().email({message:"Invalid email address!"}),
  phone:z.string().min(10).max(15),
  location:z.string().min(2),
  role:z.enum(["admin","user"]),
})
const EditUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username:" John doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      location: "New York",
      role: "admin",
    },
  })
function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values)
  }
 
  return (
    <div>
      <SheetContent>
    <SheetHeader>
      <SheetTitle className='mb-4'>Edit User</SheetTitle>
      <SheetDescription>
        <Form {...form}><form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>location</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                {/* <Input placeholder="shadcn" {...field} /> */}
                <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="role" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Admin">Admin</SelectItem>
    <SelectItem value="Role">User</SelectItem>
    {/* <SelectItem value="system">System</SelectItem> */}
  </SelectContent>
</Select>
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form></Form>

        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
    </div>
  )
}

export default EditUser
