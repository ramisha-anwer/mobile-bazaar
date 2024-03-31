import React, { useState } from 'react';
import { Group, Box, ThemeIcon, UnstyledButton, createStyles,
  RangeSlider, Collapse,TextInput,SimpleGrid } from '@mantine/core';
import { Icon as TablerIcon, ChevronLeft, ChevronRight } from 'tabler-icons-react';

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
  initiallyOpened: boolean;
}

export function PriceFilter({ icon: Icon, label, initiallyOpened }: LinksGroupProps) {
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
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}  >
              <TextInput placeholder="$350" />
              <TextInput placeholder="$2000" />
            </SimpleGrid>
            <RangeSlider in={opened} defaultValue={[350, 770]} min={150} max={1500} step={10} label={(value) => value.toFixed(1)} style={{ padding:20}} />
        </Collapse>
    </>)
}

