"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    
    const router = useRouter();

  return (
    <Image
    className="hidden md:block cursor-pointer"
    alt="Logo"
    height="100"
    width="100"
    style={{height: '100%', width: 'auto'}}
    src="/images/logo.png"
    priority
    />
      
  )
}

export default Logo
