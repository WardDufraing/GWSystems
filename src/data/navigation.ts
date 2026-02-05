import { company } from "./company";

export const navigation = {
    pages: [
        { label: "Home", href: "/" },
        { label: "Diensten", href: "/diensten" },
        { label: "Contact", href: "/contact" },
        { label: "Over ons", href: "/over-ons" },
      ],

  services: company.services.map((service) => ({
    label: service.label,
    href: `/diensten#${service.id}`,
  })),

  footer: [
    { label: "Privacy", href: "/privacy" },
    { label: "Voorwaarden", href: "/voorwaarden" },
  ],
} as const;