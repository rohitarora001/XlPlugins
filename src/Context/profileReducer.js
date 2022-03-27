export default function Reducer(state, action) {
    switch (action.type) {
        case 'setData':
            return { profileData: action.payload };

        case 'likeProfile':
            let index = state.profileData.findIndex(el => el.id === action.payload)
            state.profileData[index]['liked'] = true
            // state.profileData.map(el=>console.log(el))
            return { profileData: state.profileData };

        case 'unlikeProfile':
            let unlikeIndex = state.profileData.findIndex(el => el.id === action.payload)
            // console.log(unlikeIndex)
            state.profileData[unlikeIndex]['liked'] = false
            // state.profileData.map(el=>console.log(el))
            return { profileData: state.profileData };

        case 'editProfile':
            let editIndex = state.profileData.findIndex(el => el.id === action.payload.id)
            state.profileData[editIndex]['website'] = action.payload.website
            state.profileData[editIndex]['phone'] = action.payload.phone
            state.profileData[editIndex]['name'] = action.payload.name
            state.profileData[editIndex]['email'] = action.payload.email
            return { profileData: state.profileData };

        case 'deleteProfile':
            let deleteIndex = state.profileData.findIndex(el => el.id === action.payload)
            state.profileData.splice(deleteIndex,1)
            return { profileData: state.profileData };

        default:
            throw new Error();
    }
}