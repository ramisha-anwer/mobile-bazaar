import React, { useState } from 'react';
import { Group, Box, ThemeIcon, UnstyledButton, createStyles, Collapse,ColorSwatch } from '@mantine/core';
import { Icon as TablerIcon, ChevronLeft, ChevronRight, Check } from 'tabler-icons-react';
// import { CheckIcon } from '@modulz/radix-icons';

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

interface ColorFilterProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  colors: [string];
}

export function ColorFilter({ icon: Icon, label, initiallyOpened, colors }: ColorFilterProps) {
  const { classes, theme } = useStyles();
  const [opened, setOpened] = useState(initiallyOpened || false);
  // const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);
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
          {
            colors.map(color=>{
              return (
                <ColorSwatch key={color} component="button" color={color} onClick={() => setChecked((c) => !c)} style={{ color: '#fff', cursor: 'pointer' }}>
                      {checked && <Check  size={14}/>}
                </ColorSwatch>
              )
            })
          }
        </Group>
      </Collapse>
    </>)
}

