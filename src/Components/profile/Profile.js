import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Flex, Image } from '@chakra-ui/react';
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaRegAddressCard } from 'react-icons/fa'
import { ImOffice } from 'react-icons/im'
import data from '../../Data/data.json'
import { BsGlobe } from 'react-icons/bs'
import './profile.css'

const Profile = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const [userImage, setUserImage] = useState(null)
  useEffect(() => {
    const getUser = () => {
      console.log(userId)
      let tempUser = data.filter(el => el.id == userId)
      setUser(tempUser[0])
      setUserImage(`https://avatars.dicebear.com/v2/avataaars/${tempUser[0].username}.svg`)
      console.log(userImage)
      console.log(tempUser[0])
    }
    getUser()
  }, [])
  // console.log(user)
  return (
    <div className="mainProfile">
      {user ?
        <Box w='100%'>
          <Box className='image' backgroundColor='#F4F4F4'>
            <Image className='imageAbsolute' src={userImage} alt='loading...' />
          </Box>
          <Flex align={'center'} justify={'center'} >
            <Box marginLeft={5} marginY={7} width={'50%'}>
              <Box
                fontWeight={700}
                marginY={2}
                fontFamily='system-ui'
                className={'name'}
                height='2rem'
              >
                {user.name}
              </Box>
              <Box
                marginY={2}
                fontFamily='sans-serif'
                height='2rem'
                className='i-common'
              >
                <Flex align="center" marginLeft={'2%'}>
                  <HiOutlineMail size={22} marginLeft='2px' />
                  <Box
                    marginLeft={3}
                    className='text'
                  >
                    {user.email}
                  </Box>
                </Flex>
              </Box>
              <Box
                marginY={2}
                fontFamily='sans-serif'
                height='2rem'
                className='i-common'
              >
                <Flex align="center" marginLeft={'2%'}>
                  <AiOutlinePhone size={22} marginLeft='2px' />
                  <Box
                    marginLeft={3}
                    className='text'
                  >
                    {user.phone}
                  </Box>
                </Flex>
              </Box>
              <Box
                marginY={2}
                fontFamily='sans-serif'
                height='2rem'
                className='i-common'
              >
                <Flex align="center" marginLeft={'2%'}>
                  <BsGlobe size={22} marginLeft='2px' />
                  <Box
                    className='text'
                    marginLeft={3}
                  >
                    {user.website}
                  </Box>
                </Flex>
              </Box>
              <Box
                marginY={2}
                fontFamily='sans-serif'
                height='2rem'
                className='i-common'
              >
                <Flex align="center" marginLeft={'2%'}>
                  <ImOffice size={22} />
                  <Box
                    className='text'
                    marginLeft={3}
                  >
                    {user.company.name}
                  </Box>
                </Flex>
              </Box>
              <Box
                marginY={2}
                fontFamily='sans-serif'
                height='2rem'
                className='i-common'
              >
                <Flex align="center" marginLeft={'2%'}>
                  <FaRegAddressCard size={22} marginLeft='2px' />
                  <Box
                    className='text'
                    marginLeft={3}
                  >
                    {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
        : null
      }
    </div>

  )
}

export default Profile