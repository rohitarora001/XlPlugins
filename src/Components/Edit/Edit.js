import React, { useState, useContext } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import ProfileContext from '../../Context/profilesContext'
import {
    Flex,
    ChakraProvider,
    Button,
    Stack,
    Input,
    useDisclosure,
    Box,
    useToast,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const Edit = ({ people }) => {
    const [website, setWebsite] = useState(people.website)
    const [email, setEmail] = useState(people.email)
    const [phone, setPhone] = useState(people.phone)
    const [name, setName] = useState(people.name)
    const toast = useToast()
    const [profileState, dispatch] = useContext(ProfileContext);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const edit = () => {
        const data = {
            id: people.id,
            website,
            email,
            phone,
            name
        }
        dispatch({ type: 'editProfile', payload: data })
        toast({
            title: 'Edited Successfully.',
            description: "The profile have been successfully edited.",
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
        localStorage.setItem('assignmentData', JSON.stringify(profileState.profileData))
        onClose()
    }

    return (
        <>

            <Box p='4'>
                <IconButton
                    background={'none'}
                    size='100'
                    onClick={onOpen}
                    icon={<AiOutlineEdit size={20} />}
                    className='lowerButton'
                />
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={3}>
                            <Flex
                                align="center"
                            >
                                <Box
                                    width='17%'
                                >
                                    Name :
                                </Box>
                                <Box
                                    width='80%'
                                >
                                    <Input
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Name'
                                        size='md'
                                        value={name}
                                    />

                                </Box>
                            </Flex>
                            <Flex
                                align="center"
                            >
                                <Box
                                    width='17%'
                                >
                                    Email :
                                </Box>
                                <Box
                                    width='80%'
                                >
                                    <Input
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        size='md'
                                        value={email}
                                    />
                                </Box>
                            </Flex>
                            <Flex
                                align="center"
                            >
                                <Box
                                    width='17%'
                                >
                                    Phone :
                                </Box>
                                <Box
                                    width='80%'
                                >
                                    <Input
                                        placeholder='Phone'
                                        size='md'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />

                                </Box>
                            </Flex>
                            <Flex
                                align="center"
                            >
                                <Box
                                    width='17%'
                                >
                                    Website :
                                </Box>
                                <Box
                                    width='80%'
                                >
                                    <Input
                                        placeholder='Website'
                                        size='md'
                                        onChange={(e) => setWebsite(e.target.value)}
                                        value={website}
                                    />

                                </Box>
                            </Flex>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost' onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={() => edit()} colorScheme='blue' ml={3}>
                            Done
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Edit