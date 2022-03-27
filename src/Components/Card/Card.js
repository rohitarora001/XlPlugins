import React from 'react'
import { Image, Box, Flex } from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import CardFooter from './CardFooter'
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({ people, image }) => {
    return (
        <div className='main'>
            <Box w='100%'>
                <Box className='image' backgroundColor='#F4F4F4'>
                    <Image className='imageAbsolute' src={image} alt='loading...' />
                </Box>
                <Box marginLeft={5} marginY={7}>
                    <Link to={`/users/${people.id}`}>
                        <Box
                            fontWeight={700}
                            marginY={2}
                            fontFamily='system-ui'
                            className='name'
                        >
                            {people.name}
                        </Box>
                    </Link>
                    <Box
                        marginY={2}
                        fontFamily='sans-serif'
                    >
                        <Flex align="center">
                            <HiOutlineMail size={17} />
                            <Box
                                marginLeft={3}
                                className='text'
                            >
                                {people.email}
                            </Box>
                        </Flex>
                    </Box>
                    <Box
                        marginY={2}
                        fontFamily='sans-serif'
                    >
                        <Flex align="center">
                            <AiOutlinePhone size={17} />
                            <Box
                                marginLeft={3}
                                className='text'
                            >
                                {people.phone}
                            </Box>
                        </Flex>
                    </Box>
                    <Box
                        marginY={2}
                        fontFamily='sans-serif'
                    >
                        <Flex align="center">
                            <BsGlobe size={17} />
                            <Box
                                className='text'
                                marginLeft={3}
                            >
                                {people.website}
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <CardFooter people={people} />
            </Box>
        </div>
    )

}

export default Card