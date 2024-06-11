import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
   const ref = useRef(null);


    const data = [
        {
            desc: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
            filesize: "",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Martin Luther King Jr.",
                tagColor: "green"
            }
        },
        {
            desc: "Your thoughts can be like nutritious food for your mind or toxic poison. Choose what you feed your mind wisely. ",
            filesize: "",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Food and Mind",
                tagColor: "yellow"
            }
        },
        {
            desc: "Peace comes from within. Do not seek it without",
            filesize: "",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Gautama Buddha",
                tagColor: "blue"
            }
        },
        {
            desc: "Nurture your personality like a garden, cultivating kindness, empathy, and authenticity. ",
            filesize: "",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Personality",
                tagColor: "red"
            }
        },
        {
            desc: " These teachings have been part of my upbringing, guiding me towards personal growth and liberation",
            filesize: ".4mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Shantanu",
                tagColor: "green"
            }
        }
    ];

    return (
        <div ref={ref} className='fixed top-0 z-[3] w-full h-full p-5'>
            <div className="absolute bg-zinc-900/90"></div> {/* Transparent overlay */}
            <div className='flex gap-10 flex-wrap'>
                {data.map((item, index) => (
                    <Card key={index} data={item} reference={ref}/>
                ))}
            </div>
        </div>
    );
}

export default Foreground;
