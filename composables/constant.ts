export const navLinks: any = [
  [
    {
      label: "Management",
      icon: "i-lucide-book-open",
      defaultOpen: true,
      active: true,
      children: [
        {
          label: "Users",
          icon: "i-lucide-house",
          to: "/users",
        },
        {
          label: "Courses",
          icon: "i-lucide-cloud-download",
          to: "/courses",
        },
        {
          label: "Icons",
          icon: "i-lucide-smile",
          description:
            "You have nothing to do, @nuxt/icon will handle it automatically.",
        },
        {
          label: "Colors",
          icon: "i-lucide-swatch-book",
          description:
            "Choose a primary and a neutral color from your Tailwind CSS theme.",
        },
        {
          label: "Theme",
          icon: "i-lucide-cog",
          description:
            "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
        },
      ],
    },
    {
      label: "Composables",
      icon: "i-lucide-database",
      defaultOpen: true,
      active: true,
      children: [
        {
          label: "defineShortcuts",
          icon: "i-lucide-file-text",
          description: "Define shortcuts for your application.",
          to: "/composables/define-shortcuts",
        },
        {
          label: "useModal",
          icon: "i-lucide-file-text",
          description: "Display a modal within your application.",
          to: "/composables/use-modal",
        },
        {
          label: "useSlideover",
          icon: "i-lucide-file-text",
          description: "Display a slideover within your application.",
          to: "/composables/use-slideover",
        },
        {
          label: "useToast",
          icon: "i-lucide-file-text",
          description: "Display a toast within your application.",
          to: "/composables/use-toast",
        },
      ],
    },
    {
      label: "Components",
      icon: "i-lucide-box",
      defaultOpen: true,
      active: true,
      children: [
        {
          label: "Link",
          icon: "i-lucide-file-text",
          description: "Use NuxtLink with superpowers.",
          to: "/components/link",
        },
        {
          label: "Modal",
          icon: "i-lucide-file-text",
          description: "Display a modal within your application.",
          to: "/components/modal",
        },
        {
          label: "NavigationMenu",
          icon: "i-lucide-file-text",
          description: "Display a list of links.",
          to: "/components/navigation-menu",
        },
        {
          label: "Pagination",
          icon: "i-lucide-file-text",
          description: "Display a list of pages.",
          to: "/components/pagination",
        },
        {
          label: "Popover",
          icon: "i-lucide-file-text",
          description:
            "Display a non-modal dialog that floats around a trigger element.",
          to: "/components/popover",
        },
        {
          label: "Progress",
          icon: "i-lucide-file-text",
          description: "Show a horizontal bar to indicate task progression.",
          to: "/components/progress",
        },
      ],
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      badge: "3.8k",
      to: "https://github.com/nuxt/ui",
      target: "_blank",
    },
    {
      label: "Help",
      icon: "i-lucide-circle-help",
      disabled: true,
    },
  ],
];

export const userData: any = [
  {
    id: "4600",
    date: "2024-03-11T15:30:00",
    status: "paid",
    email: "james.anderson@example.com",
    amount: 594,
  },
  {
    id: "4599",
    date: "2024-03-11T10:10:00",
    status: "failed",
    email: "mia.white@example.com",
    amount: 276,
  },
  {
    id: "4598",
    date: "2024-03-11T08:50:00",
    status: "refunded",
    email: "william.brown@example.com",
    amount: 315,
  },
  {
    id: "4597",
    date: "2024-03-10T19:45:00",
    status: "paid",
    email: "emma.davis@example.com",
    amount: 529,
  },
  {
    id: "4596",
    date: "2024-03-10T15:55:00",
    status: "paid",
    email: "ethan.harris@example.com",
    amount: 639,
  },
];
