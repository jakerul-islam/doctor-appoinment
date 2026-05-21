"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";


const LoginPage = () => {
    
    const onSubmit =async (e)=>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries())
    console.log(userData, 'from login page')

    const {data,error}= await authClient.signIn.email({
        ...userData,

        callbackURL:'/'
    })

    
    if(error){
        toast.error('login failed')
    }

}

const googleSignInHandle = async()=>{
    const data = await authClient.signIn.social({
    provider: "google",
  });
}
    return (
          <div className=' my-15 flex justify-center items-center'>
               <Card className='border '>
               <div className='my-6'>
        
               <div className='flex justify-center items-center'>
                 <Image  src={'/assets/logo.png'} alt='logo' width={60} height={60}></Image>
               </div>
        
                 <h2 className='font-bold text-2xl text-center '>Login</h2>
                <p className='text-sm text-gray-400 text-center'>Welcome back to login for join us </p>
               </div>
                     <Form className="flex w-96 flex-col gap-4 space-y-5" onSubmit={onSubmit}>
                  
        
        
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>
        
       
        
              <TextField
                isRequired
                minLength={6}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 6) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[a-z]/.test(value)) {
                    return "Password must contain at least one lowercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <p  className="text-sm text-gray-400 text-right cursor-pointer">Forget password?</p>
               
                <FieldError />
              </TextField>
              <div className="flex gap-2 ">
                <Button className={'w-full rounded-none border bg-teal-500 text-white px-4 py-2  '} type="submit">
                  
                 Login
                </Button>
               
              </div>
            </Form>
        
           <div className="w-full max-w-md mx-auto flex flex-col items-center gap-5 p-4">
              
              {/* HTML + Tailwind Pure Divider Line (Error Ashbe Na) */}
              <div className="relative w-full flex items-center justify-center my-2">
                <div className="w-full border-t border-slate-200"></div>
                <span className="absolute bg-white px-3 text-xs font-bold text-blue-600 uppercase tracking-wider z-10">
                  OR
                </span>
              </div>
        
              {/* Hero UI Button for Google Sign-In */}
              <Button
              onClick={googleSignInHandle}
                variant="bordered"
                radius="xl"
                className="w-full bg-slate-50/40 hover:bg-slate-50/80 border-slate-200 text-slate-700 h-12 shadow-sm font-semibold transition-all rounded-none flex items-center justify-center gap-3"
              >
                {/* Google SVG Icon */}
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm tracking-wide">Continue with Google</span>
              </Button>
        
              {/* Footer Text with Next.js Link */}
              <p className="text-sm text-slate-500 font-medium mt-1">
                Don't have an account?{' '}
                <Link
                  href={"/register"} 
                  className="text-teal-600 hover:text-teal-700 font-bold transition-colors ml-1"
                >
                  Register
                </Link>
              </p>
        
            </div>
               </Card>
                </div>
    );
};

export default LoginPage;


