import React, { useState } from 'react';
import { Group, Box, ThemeIcon, UnstyledButton, createStyles, Collapse,Avatar } from '@mantine/core';
import { Icon as TablerIcon, ChevronLeft, ChevronRight,Star } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function RatingFilter({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === 'ltr' ? ChevronRight : ChevronLeft;

return (
    <>
        <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
            <Group position="apart" spacing={0}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ThemeIcon variant="light" size={30}>
                    <Icon size={18} />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
                </Box>
                
                <ChevronIcon
                    className={classes.chevron}
                    size={14}
                    style={{
                    transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
                    }}
                />
            </Group>
        </UnstyledButton>
        <Collapse in={opened} className={classes.link}>
        <Group position="left" spacing="xs">
            <Avatar color="yellow" radius="xl" size={30}>
              <Star size={16} />
            </Avatar>
            <Avatar color="yellow" radius="xl" size={30}>
              <Star size={16} />
            </Avatar>          
            <Avatar color="yellow" radius="xl" size={30}>
              <Star size={16} />
            </Avatar>          
            <Avatar color="yellow" radius="xl" size={30}>
              <Star size={16} />
            </Avatar>          
            <Avatar color="yellow" radius="xl" size={30}>
              <Star size={16} />
            </Avatar>
          </Group>
        </Collapse>
    </>)
}

