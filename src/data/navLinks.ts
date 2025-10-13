export interface NavLink {
    href: string;
    label: string;
    pageType?: string;
  };
  
export const navLinks = [
    { href: "/", label: "Home", pageType: "index" },
    { href: "/about", label: "Over ons", pageType: "about" },
    { href: "/services", label: "Diensten", pageType: "services" },
    { href: "/portfolio", label: "Portfolio", pageType: "portfolio" },
    { href: "/contact", label: "Contact", pageType: "contact" },
    { href: "/blog", label: "Blog", pageType: "blog" },
  ];

export const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Over ons" },
    { href: "/services", label: "Diensten" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/cookiepolicy", label: "Cookiebeleid" },
    { href: "/privacy", label: "Privacybeleid" },
    { href: "/terms-conditions", label: "Voorwaarden" },
  ];