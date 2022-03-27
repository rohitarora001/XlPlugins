import React, { useEffect, useContext } from 'react'
import Card from '../Card/Card'
import data from '../../Data/data.json'
import ProfileContext from '../../Context/profilesContext'
import { Grid, GridItem } from '@chakra-ui/react'
import './index.css'
import { useMediaQuery } from '@chakra-ui/react'

const Index = () => {
  const [profileState, dispatch] = useContext(ProfileContext);
  const [isLargerThan1310] = useMediaQuery('(min-width: 1310px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan684] = useMediaQuery('(min-width: 684px)')
  useEffect(() => {
    const getData = () => {
      let localData = JSON.parse(localStorage.getItem('assignmentData'))
      if (localData) {
        dispatch({ type: 'setData', payload: localData })
      }
      else {
        data.map(el => {
          el['liked'] = false;
        })
        dispatch({ type: 'setData', payload: data })
        localStorage.setItem('assignmentData', JSON.stringify(data))
      }
    }
    getData()
  }, [])
  return (
    <>
      <div className='Container'>
        <Grid templateColumns={
          isLargerThan1310 ?
            'repeat(4, 1fr)'
            :
            isLargerThan1000 ?
              'repeat(3, 1fr)'
              :
              isLargerThan684 ?
              'repeat(2, 1fr)'
              :
              'repeat(1, 1fr)'
        } gap={5}>
          {

            profileState.profileData?.map((el) => {
              let userImage = `https://avatars.dicebear.com/v2/avataaars/${el.username}.svg`
              return (
                <GridItem w='100%' key={el.id} paddingX='0.5rem' paddingY='0.5rem'>
                  <Card people={el} image={userImage} />
                </GridItem>
              )
            })
          }
        </Grid>
      </div>
    </>
  )
}

export default Index