import React from "react";
import Books from "../assets/Books";
import Briefcase from "../assets/Briefcase.jsx";
import CreditcardIcon from "../assets/CreditcardIcon.jsx";
const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <CreditcardIcon />, url: "/products" },
      { label: "terminal", icon: <CreditcardIcon />, url: "/products" },
      { label: "connect", icon: <CreditcardIcon />, url: "/products" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: <Books />, url: "/products" },
      { label: "libraries", icon: <Books />, url: "/products" },
      { label: "help", icon: <Books />, url: "/products" },
      { label: "billing", icon: <Books />, url: "/products" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <Briefcase />, url: "/products" },
      { label: "customers", icon: <Briefcase />, url: "/products" },
    ],
  },
];

export default sublinks;
