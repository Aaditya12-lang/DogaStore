import React,{useState,useEffect} from 'react';
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { User,Key } from 'lucide-react';



export default function Auth(){
                const [username, setusername] = useState()
                const [password, setpassword] = useState()
                const [REQUESTRESPONSE, setREQUESTRESPONSE] = useState()
                console.log(password,username)
                // creating the POST request to the backend.
                const submit = async () => {
                  try {
                    let result = await fetch("http://localhost:80/",{
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ 
                        username:username,
                        password:password
                    })
                    })
                    let data = await result.json()
                    setREQUESTRESPONSE(data);
                    console.log(data)
                    if (data) {
                      toast('Login Sucessfully!!1')
                    }
                  } catch (err) {
                    console.log(err)
                  }
                }
                

  return (
    <>
      {/* <Toaster richColors /> */}
      <div className="mainContainer min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-zinc-800 mb-10">
          Welcome To DogaStore
        </h1>
        <Tabs
          defaultValue="account"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-lg shadow-md"
        >
          {/*
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">SignUp</TabsTrigger>
          </TabsList>*/}

          {/* Login Tab */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Login</CardTitle>
                <CardDescription>Login into your Account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" onChange={(e)=>{setusername(e.target.value)}} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" onChange={(e)=>{setpassword(e.target.value)}} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="px-8 sm:px-14" onClick={submit}><Key/>LOGIN</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* SignUp Tab */}
          {/* <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>SignUp</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm_password">Confirm Password</Label>
                  <Input id="confirm_password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="date" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  // onClick={() => {
                  //   toast.success('Account created successfully');
                  // }}
                >
                  Create Account
                </Button>
              </CardFooter>
            </Card>
          </TabsContent> */}
          <Button variant="link" className="mt-3">
            Know more about here--
          </Button>
        </Tabs>
        
      </div>

    </>
  )
}

