import React,{useState,useEffect} from 'react';

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

import { User } from 'lucide-react';



export default function Auth(){
                

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
                <CardTitle className="text-xl">Login</CardTitle>
                <CardDescription>Login into your Account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="px-8 sm:px-14">LOGIN</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* SignUp Tab */}
          <TabsContent value="password">
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
          </TabsContent>
          <Button variant="link" className="mt-3">
            Know more about here--
          </Button>
        </Tabs>
        <p className='text-2xl my-6 bg-slate-100'>App will come soon.....</p>
      </div>

    </>
  )
}

