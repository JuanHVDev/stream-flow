"use client"
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

const ButtonReturn = () =>
{
  const router = useRouter()
  return (<Button className="" onClick={() => router.back()} >
    Volver
  </Button>
  )
}

export default ButtonReturn