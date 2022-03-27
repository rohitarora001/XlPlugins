import React, { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import ProfileContext from '../../Context/profilesContext'
import {
    Button,
    useDisclosure,
    Box,
    useToast,
    IconButton,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'

const Delete = ({ people }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()
    const [profileState, dispatch] = useContext(ProfileContext);
    const deleteProfile = (id) => {
        dispatch({ type: 'deleteProfile', payload: id })
        toast({
            title: 'Deleted Successfully.',
            description: "The profile have been successfully deleted.",
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
                    onClick={onOpen}
                    size='100'
                    icon={<AiFillDelete size={20} />}
                    className='lowerButton'
                />
            </Box>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Customer
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={()=>deleteProfile(people.id)} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default Delete