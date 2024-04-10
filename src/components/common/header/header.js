import React from 'react';
import { createStyles, Header, 
        Group, Burger, MediaQuery } from '@mantine/core';

import { MantineLogo } from '../_logo';
import { Link } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));


export function CommonHeader({ opened, setOpened }) {
  // const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();
  // const [setOpened] = useState(false);

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                // color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
          <h2>Mobile Bazaar</h2>
        </Group>
        <Group ml={50} spacing={5} className={classes.links}>
          <Link key='Home' to="/" className={classes.link}>Home</Link>
          <Link key='Compare' to="/compare" className={classes.link}>Compare</Link>
          <Link key='Contact' to="/contact" className={classes.link}>Contact Us</Link>
        </Group>  
      </div>
    </Header>
  );
}