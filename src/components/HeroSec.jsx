import React, { useState } from "react";
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

    const [text, setText] = useState("");       // store textarea value
    const [vowelCount, setVowelCount] = useState(0);  // store vowel count

    // Function to count vowels
    const countVowels = (str) => {
        const matches = str.match(/[aeiouAEIOU]/g);
        return matches ? matches.length : 0;
    };

    // Handler for textarea change
    const handleChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
        setVowelCount(countVowels(inputText));
    };

    return (
        <div className='w-full h-[80vh] md:h-[85vh] z-10 flex items-center justify-center'>
            <Card className='h-auto w-[90%] md:w-[70%] lg:w-[30%] backdrop-blur z-20 bg-black/30 border-none'>
                <CardHeader>
                    <CardTitle className="text-center text-2xl text-white capitalize font-bold">
                        vowel checker
                    </CardTitle>
                    <CardDescription className='text-white/50 text-center text-lg'>
                        Enter the text below to start vowels count
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea placeholder='enter text here ...' className='h-[30vh] text-white text-xl border-gray-500/30 placeholder:text-lg placeholder:capitalize' value={text}
                        onChange={handleChange} />
                </CardContent>
                <CardFooter className='w-full'>
                    <p className="text-lg text-white/50 text-center w-full">
                        Vowel Count: <span className="font-semibold text-white">{vowelCount}</span>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default HeroSec
