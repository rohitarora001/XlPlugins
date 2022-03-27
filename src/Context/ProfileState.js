import React, { useEffect, useReducer } from 'react'
import ProfileContext from './profilesContext'
import Reducer from './profileReducer'
const initialState = {
    profileData: null
};

const ProfileState = ({ children }) => {
    useEffect(()=>{
        // console.log(profileState.profileData)
    },[initialState.profileData])
    const [profileState, dispatch] = useReducer(Reducer, initialState)
    return (
        <ProfileContext.Provider value={[profileState, dispatch]}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileState