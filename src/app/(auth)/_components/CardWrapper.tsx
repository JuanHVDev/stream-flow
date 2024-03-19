import ButtonReturn from '@/components/ButtonReturn'
import { Card, CardHeader, CardFooter, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { CiUnlock } from "react-icons/ci";
import React from 'react'

type Props = {
  title: string,
  children: React.ReactNode
}

const CardWrapper = ({ title, children }: Props) =>
{
  return (
    <Card className="w-[350px] mx-auto bg-white mt-10 ">
      <CardHeader>
        <CardTitle>Stream Flow</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
    // <Card className='w-full max-w-[300px] sm:max-w-sm lg:max-w-5xl mx-auto mt-5 rounded-3xl border-primary border-4 text-center shadow-md shadow-primary/60'>
    //   <CardHeader className="flex flex-row items-center justify-center gap-2" >
    //     <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
    //       {title}
    //     </CardTitle>
    //     <CiUnlock size="2rem" />
    //   </CardHeader>
    //   <CardContent>
    //     {children}
    //   </CardContent>
    //   <CardFooter>
    //     <ButtonReturn />
    //   </CardFooter>
    // </Card>
  )
}

export default CardWrapper