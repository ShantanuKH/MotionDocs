import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className='relative flex-shrink-0 w-[220px] h-[275px] rounded-[50px] bg-zinc-900/90 text-white overflow-hidden py-7 cursor-pointer'

    //   Combining properties of framer motion and css
      whileHover={{ cursor: 'grab' }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <FaFileAlt className='ml-5'/>
      <p className='text-sm mt-5 font-semibold leading-tight px-5'>{data.desc}.</p>
      <div className='footer absolute bottom-0 w-full'>
        <div className='flex items-center justify-between py-3 px-8  mb-3'>
          <h5>{data.filesize}</h5>
          <span className='cursor-pointer w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoIosClose /> : <LiaDownloadSolid color='#fff'/>}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag w-full py-4 bg-green-600  flex justify-center items-center pt-3 cursor-pointer`}>
            <h3 className='font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
