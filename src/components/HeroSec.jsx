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
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="">
                        vowel checker
                    </CardTitle>
                    <CardDescription>
                        Enter text to count vowels
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea />
                </CardContent>
                <CardFooter>
                    <Button>Count vowels</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default HeroSec
