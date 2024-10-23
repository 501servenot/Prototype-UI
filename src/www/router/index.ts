export { default as Router } from './router';
export type { RouteChange } from './router';

export const docsRoute: Record<string, { title: string; value: string; href: string }[]> = {
  'Getting Started': [
    {
      title: 'Introduction',
      value: 'docs-introduction',
      href: '/docs/introduction',
    },
  ],
  'Shadcn UI': [
    {
      title: 'Button',
      value: 'shadcn-button',
      href: '/components/shadcn/button',
    },
    {
      title: 'Tabs',
      value: 'shadcn-tabs',
      href: '/components/shadcn/tabs',
    },
    {
      title: 'Select',
      value: 'shadcn-select',
      href: '/components/shadcn/select',
    },
    {
      title: 'Input',
      value: 'shadcn-input',
      href: '/components/shadcn/input',
    },
  ],
  'Prototype UI': [
    {
      title: 'Tabs',
      value: 'prototype-tabs',
      href: '/components/prototype/tabs',
    },
    {
      title: 'Transition',
      value: 'prototype-transition',
      href: '/components/prototype/transition',
    },
    {
      title: 'Select',
      value: 'prototype-select',
      href: '/components/prototype/select',
    },
    {
      title: 'Form',
      value: 'prototype-form',
      href: '/components/prototype/form',
    },
    {
      title: 'Scroll Area',
      value: 'prototype-scroll-area',
      href: '/components/prototype/scroll-area',
    },
  ],
};
