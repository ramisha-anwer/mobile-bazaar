import { Breadcrumbs, Anchor } from '@mantine/core';


export function BreadcrumbsComponent() {
    const items = [
        { title: 'Catalog', href: '#' },
        { title: 'All', href: '#' }
      ].map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));
    return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
    </>
  );
}
