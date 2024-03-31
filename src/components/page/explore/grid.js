import React, { useContext } from 'react';
import { CardWithStats } from './item'

import { Grid, Space, Input } from '@mantine/core';
import { BreadcrumbsComponent } from '../../common/breadcrumb'
import {  ChevronRight } from 'tabler-icons-react';
import { Link } from "react-router-dom";
import { MobileContext } from "../../index"

export function Explore() {
  let mobiles = useContext(MobileContext)
  const sortMobiles = e => {
    let option = e.target.value
    console.log(typeof(mobiles))
    switch(option){
      case 'All':
        break
      case 'Most Popular':
        break
      case 'New Arrivals':
        break
      case 'Up Coming':
        break
      case 'Price high to low':
        console.log(option)
        // mobiles = mobiles.sor
        break           
      case 'Price low to high':
        console.log(option)
        break  
      default:
        console.log('default')                    
    }
  }
  return (
    <>
      <Grid>
        <Grid.Col span={10}>
          <BreadcrumbsComponent/>
        </Grid.Col>
        <Grid.Col span={2}>
          <Input component="select" rightSection={<ChevronRight />} onChange={ sortMobiles } >
            <option value="All">All</option>
            <option value="Most Popular">Most Popular</option>
            <option value="New Arrivals">New Arrivals</option>
            <option value="Up Coming">Up Coming</option>
            <option value="Price high to low">Price high to low</option>
            <option value="Price low to high">Price low to high</option>
          </Input>
        </Grid.Col>
      </Grid>
      <Space h="md" />
      <Grid>
          {
            // Object.keys(mobiles).map(index=>{
            Object.keys(mobiles).splice(0,12).map(index=>{
              return (
                <Grid.Col md={6} lg={3} key={mobiles[index]['brand']+mobiles[index]['title']}>
                  <Link key={mobiles[index]['brand']+mobiles[index]['title']} to={{ pathname:`/detail/${index}`}} state={index}  style={{textDecoration:'none'}}>
                      <CardWithStats
                      image={mobiles[index]['imgs'][0] }
                      title={mobiles[index]['title']}
                      description={ mobiles[index]['brand']+" • 2022 • "+ mobiles[index]['platform']}
                      stats={
                        [
                          { "title": "Price", "value": mobiles[index]['price']},
                          { "title": "Avg. rating", "value": mobiles[index]['rating']+" / 5" }
                        ]
                      }
                      />
                  </Link>
                </Grid.Col>
              )

          })
        }
      </Grid>
    </>
  );
}