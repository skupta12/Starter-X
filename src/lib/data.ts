import { ChevronDown, Percent, Plus } from "lucide-react";


export const nav = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Pages",
    href: "#",
    icon: ChevronDown,
    dropdown: [
      {
        id: 1,
        text: "Sign up",
        href: "/sign-up"
      },
      {
        id: 2,
        text: "Sign in",
        href: "/sign-in"
      },
      {
        id: 3,
        text: "Forgot Password",
        href: "/forgot-password"
      },
      {
        id: 4,
        text: "Confirm Email",
        href: "/confirm-email"
      },
      {
        id: 5,
        text: "Terms & conditions",
        href: "/terms-conditions"
      },
      {
        id: 6,
        text: "404 Not found",
        href: "404-not-found"
      },
    ]   
  },
  {
    id: 4,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
  },
];

export const brands = [
  {
    id: 1,
    img: "/svg/brand-1.svg",
    alt: "brand image"
  },
  {
    id: 2,
    img: "/svg/brand-2.svg",
    alt: "brand image"
  },
  {
    id: 3,
    img: "/svg/brand-3.svg",
    alt: "brand image"
  },
  {
    id: 4,
    img: "/svg/brand-4.svg",
    alt: "brand image"
  },
  {
    id: 5,
    img: "/svg/brand-5.svg",
    alt: "brand image"
  },
  {
    id: 6,
    img: "/svg/brand-6.svg",
    alt: "brand image"
  },
]

export const accordion = [
  {
    id: 1,
    title: "Mobile and desktop app",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostru.",
    icon: "/svg/accordion-icon-1.svg",
  },
  {
    id: 2,
    title: "Cryptocurrencies supported",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostru.",
    icon: "/svg/accordion-icon-2.svg",
  },
  {
    id: 3,
    title: "256-bit security encryption",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostru.",
    icon: "/svg/accordion-icon-3.svg",
  },
  {
    id: 4,
    title: "Earnings & expense reports",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostru.",
    icon: "/svg/accordion-icon-4.svg",
  },
  {
    id: 5,
    title: "World-class support",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostru.",
    icon: "/svg/accordion-icon-5.svg",
  },
]

export const numbers = [
  {
    id: 1,
    number: 98,
    title: "Customer satisfaction",
    icon: Percent,
    color: "#F1A280"
  },
  {
    id: 2,
    number: 205 + "M",
    title: "Monthly active users",
    icon: Plus,
    color: "#E4D275"
  },
  {
    id: 3,
    number: 100 + "K",
    title: "New users per week",
    icon: Plus,
    color: "#CEEAE8"
  },
  {
    id: 4,
    number: 55,
    title: "Growth year-over-year",
    icon: Percent,
    color: "#13544E"
  },
]

export const socialLinks = [
  // {
  //   id: 1,
  //   title: "Follow us",
  //   href: "/"
  // },
  {
    id: 2,
    title: "Facebook",
    href: "/"
  },
  {
    id: 3,
    title: "Instagram",
    href: "/"
  },
  {
    id: 4,
    title: "Linkedin",
    href: "/"
  },
  {
    id: 5,
    title: "Youtube",
    href: "/"
  },
]


