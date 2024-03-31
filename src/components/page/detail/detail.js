import React, { useContext, useState, useEffect } from 'react';
import { Table, ScrollArea,
        // Group, Avatar, 
        Image,Text, Space, ActionIcon, useMantineTheme, Autocomplete } from '@mantine/core';
// import { Star } from 'tabler-icons-react';
import { BreadcrumbsComponent } from '../../common/breadcrumb'
import  {useLocation} from 'react-router-dom'
import { MobileContext } from "../../index"
import { DeviceMobile, Plus } from 'tabler-icons-react';


export function ProductDetail() {
  const [searchMobile, setSearchMobile] = useState('');
  const [selectedMobiles, setSelectedMobiles] = useState([]);


  const theme = useMantineTheme();
  const location = useLocation()
  const mobiles = useContext(MobileContext)
  const path = window.location.pathname
  
  let tableHead = <th>Table Head</th>
  let tableBody = <tr><td>Table Body</td></tr>
  const mobileTitles = Object.values(mobiles).map(value => value['title'])
  const attributes = ['rating','brand','display','displayTechnology',
  'resolution','platform','processor','backCamera','frontCamera','storage',
  'memory','technology','battery','weight','dimensions','colors','topFeature']

  const addMobile = event => setSearchMobile(event)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(`I can see you're not typing. I can use "${searchMobile}" now!`)
      let index = mobileTitles.findIndex(index => index === searchMobile)
      setSelectedMobiles(selectedMobiles => [...selectedMobiles, mobiles[index]])
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchMobile]);

  const tableContent = (mobiles) => {
    tableHead = mobiles.map(mobile=>
                  <th key={mobile['title']}>
                    <Image src={ mobile['imgs'][0] } alt={ mobile['title'] } height={120} withPlaceholder fit="contain"/>
                    <Text align="center">{mobile['title']}</Text>
                    <Text align="center">{mobile['price']}</Text>
                  </th>
                )
    tableBody = attributes.map(key=>
                  <tr key={ key }>
                    <td> <strong>{ key.toUpperCase() }</strong> </td>
                    {mobiles.map(mobile=>  <td align="center"> { mobile[key] } </td>)}
                  </tr>
                ) 
  }  

  if(path.includes('/detail') && selectedMobiles.filter(element => element !== undefined).length === 0){
    const { state } = location
    setSelectedMobiles(selectedMobiles => [...selectedMobiles, mobiles[state]])
  }
  tableContent(selectedMobiles.filter(element => element !== undefined))


  return (
    <>    
      <BreadcrumbsComponent/>
      <Space h="md" />
      <Autocomplete
        icon={<DeviceMobile size={16} />}
        placeholder="Search mobile to compare"
        data={ Object.values(mobiles).map(value=> value['title']) }
        value = { searchMobile }
        radius="xl"
        size="md"
        limit= { 5 }
        rightSectionWidth={42}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        rightSection={
          <ActionIcon size={32} radius="xl" variant="filled" color={theme.primaryColor} >
            <Plus size={18} />
          </ActionIcon>
        }
        onChange={ addMobile }
      />
      <Space h="md" />
      <ScrollArea>
        <Table  verticalSpacing="xs">
          <thead>
            <tr>
              <th></th>
              { tableHead }
            </tr>
          </thead>
          <tbody>
              { tableBody }
          </tbody>
        </Table>
      </ScrollArea>
    </>
  );
}

