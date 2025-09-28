import React from 'react';
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

const HeroSec = () => {
    return (
        <div className='w-full h-[85vh] flex items-center justify-center'>
            <Card className='h-auto w-[90%] md:w-[70%] lg:w-[30%] backdrop-blur bg-black/30 border-none'>
                <CardHeader>
                    <CardTitle className="text-center text-2xl text-white capitalize font-bold">
                        vowel checker
                    </CardTitle>
                    <CardDescription className='text-white/50 text-center text-lg'>
                        Enter the text below to count vowels
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea placeholder='enter text here ...' className='h-[30vh] text-white text-xl border-gray-500/30 placeholder:text-lg'/>
                </CardContent>
                <CardFooter className='w-full'>
                    <Button className='w-full bg-gradient-to-r h-[6vh] from-[#9363ff] via-[#c1a6ff] to-[#f5f0ff] text-lg capitalize font-[500]'>Count vowels</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default HeroSec
