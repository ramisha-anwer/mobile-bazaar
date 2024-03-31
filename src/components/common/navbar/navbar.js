
import React from 'react';
import {
  createStyles,
  Navbar,
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ScrollArea
} from '@mantine/core';
import { Bulb, User, Checkbox, Search,
  DeviceMobile,
  ListDetails,
  CurrencyDollar,
  Database,
  ColorPicker,
  Star,
  Adjustments
} from 'tabler-icons-react';
import { LinksGroup } from './NavbarLinksGroup';
import { PriceFilter } from './priceFilter'
import { RatingFilter } from './ratingFilter'
import { ColorFilter } from './colorFilter'

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingTop: 0,
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,

    '&:not(:last-of-type)': {
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  },

  searchCode: {
    fontWeight: 700,
    fontSize: 10,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },

  mainLinks: {
    paddingLeft: theme.spacing.md - theme.spacing.xs,
    paddingRight: theme.spacing.md - theme.spacing.xs,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: theme.fontSizes.xs,
    padding: `8px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: 20,
    height: 20,
    pointerEvents: 'none',
  },

  collections: {
    paddingLeft: theme.spacing.md - 6,
    paddingRight: theme.spacing.md - 6,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: theme.spacing.md + 2,
    paddingRight: theme.spacing.md,
    marginBottom: 5,
  },

  collectionLink: {
    display: 'block',
    padding: `8px ${theme.spacing.xs}px`,
    textDecoration: 'none',
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

const links = [
  { icon: Bulb, label: 'Activity', notifications: 3 },
  { icon: Checkbox, label: 'Tasks', notifications: 4 },
  { icon: User, label: 'Contacts' },
];

export function CommonNavbar({hidden}) {
  const { classes } = useStyles();
  const mockdata = [
  {
    label: 'Operating System',
    initiallyOpened: true,
    icon: DeviceMobile,
    links: [
      { label: 'Andriod', link: '/' },
      { label: 'IOS', link: '/' },
      { label: 'MIUI', link: '/' },
      { label: 'HarmonyOS', link: '/' },
    ],
  },
  {
    label: 'Brand',
    icon: ListDetails,
    initiallyOpened: false,
    links: [
      { label: 'Samsung', link: '/' },
      { label: 'Huawei', link: '/' },
      { label: 'Vivo', link: '/' },
      { label: 'Honor', link: '/' },
      { label: 'OPPO', link: '/' },
      { label: 'Realme', link: '/' },
      { label: 'Nokia', link: '/' },
      { label: 'Xiaomi', link: '/' },
      { label: 'Infinix', link: '/' },
      { label: 'Apple', link: '/' },
      { label: 'Tecno', link: '/' },
      { label: 'Q Mobile', link: '/' },
      { label: 'Lenovo', link: '/' },
      { label: 'Sony', link: '/' },
      { label: 'LG', link: '/' },
      { label: 'Itel', link: '/' },
      { label: 'OnePlus', link: '/' },
      { label: 'Telenor', link: '/' },
      { label: 'Alcatel', link: '/' },
      { label: 'HTC', link: '/' },
      { label: 'Microsoft', link: '/' },
      { label: 'Rivo', link: '/' },
      { label: 'Hair', link: '/' },
      { label: 'Mobilink', link: '/' },
      { label: 'Motorola', link: '/' },
      { label: 'Black Berry', link: '/' },
      { label: 'VOICE', link: '/' },
      { label: 'Meizu', link: '/' },
      { label: 'Ophone', link: '/' },
      { label: 'Calme', link: '/' },
      { label: 'GRight', link: '/' },
      { label: 'G\'Five', link: '/' },
      { label: 'Club', link: '/' },
      { label: 'Sony Ericsson', link: '/' },
     ],
  },
  { label: 'Storage', 
    icon: Database,
    initiallyOpened: false,
    links: [
      { label: '16gb', link: '/' },
      { label: '32gb', link: '/' },
      { label: '64gb', link: '/' },
      { label: '128gb', link: '/' },
      { label: '256gb', link: '/' },
    ] 
  },
  {
    label: 'Features',
    icon: Adjustments,
    links: [
      { label:'Bluetooth',  link: '/' },
      { label:'WiFi', link: '/' },
      { label:'USB port', link: '/' },
      { label:'LTE', link: '/' },
      { label:'NFC', link: '/' },
      { label:'5G', link: '/' },
      { label:'Extendable Memory', link: '/' },
      { label:'Gorilla Glass', link: '/' },
      { label:'Fingerprint sensor', link: '/' },
      { label:'OLED', link: '/' },
      { label:'Pen Input', link: '/' },
      { label:'Touch display', link: '/' },
      { label:'Face recognition', link: '/' },
      { label: 'Andriod', link: '/' },
      { label: 'IOS', link: '/' },
      { label: 'MIUI', link: '/' },
      { label: 'HarmonyOS', link: '/' },
    ],
  }
];
  const colors = ['black','silver','gray','orange','indigo','teal','cyan','violet','pink'] 

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));


  return (
    // <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
    <Navbar p="md" hiddenBreakpoint="sm" hidden={hidden} width={{ sm: 200, lg: 300 }}>
      <TextInput
        placeholder="Search"
        size="xs"
        icon={<Search size={12} />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        mb="sm"
      />

      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.section} grow component={ScrollArea} mx="-xs" px="xs">
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Filters
          </Text>
        </Group>

        <div  className={classes.linksInner}>
          { mockdata.map((item) => <LinksGroup {...item} key={item.label} />) }
          <PriceFilter  {...{label: 'Price', icon: CurrencyDollar, initiallyOpened:true}} key={'price'} />
          <ColorFilter  {...{label: 'Color', icon: ColorPicker, initiallyOpened:true, colors:colors}} key={'color'} />
          <RatingFilter  {...{label: 'Rating', icon: Star}} key={'rating'} />
        </div>
      </Navbar.Section>
    </Navbar>
  );
}









