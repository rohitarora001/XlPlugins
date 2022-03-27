import React, { useContext, useState } from 'react'
import { IconButton, Box, Flex, Spacer, ChakraProvider } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import ProfileContext from '../../Context/profilesContext'
import { motion } from 'framer-motion'
import Edit from '../Edit/Edit'
import './card.css'
import Delete from '../Delete/Delete'

const CardFooter = ({ people }) => {
    const [profileState, dispatch] = useContext(ProfileContext);
    const [animation, setAnimation] = useState(false)
    const like = (id) => {
        setAnimation(true)
        dispatch({ type: 'likeProfile', payload: id })
        setTimeout(() => {
            setAnimation(false)
        }, 500);
        localStorage.setItem('assignmentData', JSON.stringify(profileState.profileData))
    }
    const unLike = (id) => {
        dispatch({ type: 'unlikeProfile', payload: id })
        localStorage.setItem('assignmentData', JSON.stringify(profileState.profileData))
    }
    return (
        <Flex
            backgroundColor='#F4F4F4'
            align="center"
            height={30}
        >
            <Box p='4'>
                {animation ?
                    <motion.div
                        animate={{
                            scale: [1, 2, 2, 1, 0.5, 0],
                        }}
                    >
                        {
                            people.liked === false ?
                                <IconButton
                                    onClick={() => like(people.id)}
                                    size='lg'
                                    icon={<AiOutlineHeart size={20} />}
                                    className='lowerButton'
                                />
                                :
                                <IconButton
                                    onClick={() => unLike(people.id)}
                                    size='lg'
                                    icon={<AiFillHeart size={20} />}
                                    className='lowerButton'
                                />
                        }
                    </motion.div>
                    :
                    people.liked === false ?
                        <IconButton
                            onClick={() => like(people.id)}
                            size='lg'
                            icon={<AiOutlineHeart size={20} />}
                            className='lowerButton'
                        />
                        :
                        <IconButton
                            onClick={() => unLike(people.id)}
                            size='lg'
                            icon={<AiFillHeart size={20} />}
                            className='lowerButton'
                        />

                }
            </Box>
            <Spacer />
            <ChakraProvider>
                <Edit people={people} />
                <Spacer />
                <Delete people={people} />
            </ChakraProvider>
        </Flex>
    )
}

export default CardFooter