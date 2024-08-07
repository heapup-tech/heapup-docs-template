import { MainNavItem, SidebarNavItem } from '@/types'

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Docs',
      href: '/docs/markdown'
    },
    {
      title: 'Showcase',
      href: '/showcase'
    },
    {
      title: 'Google',
      href: 'https://www.google.com',
      external: true
    }
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Markdown',
          href: '/docs/markdown',
          items: []
        },
        {
          title: 'Built-in Mdx Components',
          href: '/docs/mdx',
          items: []
        }
      ]
    }
  ]
}
