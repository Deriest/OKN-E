// Central site data: images, CTA mailto links, navigation.

const EMAIL = "octopuskaryanusantara@gmail.com";

export const mail = (subject) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

export const EMAIL_ADDRESS = EMAIL;

export const CTA = {
  primary: { label: "Lock It With Us", href: mail("Partnership Enquiry") },
  cdr: { label: "Secure Verified Removal", href: mail("CDR Offtake Enquiry") },
  investor: { label: "Request the Brief", href: mail("Investment Enquiry") },
  government: { label: "Restore the Land Together", href: mail("Partnership Enquiry") },
  media: { label: "Reach Us", href: mail("General Enquiry") },
  proof: { label: "See the Proof", href: "/proof" },
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "The Solution", to: "/solution" },
  { label: "The Proof", to: "/proof" },
  { label: "The Opportunity", to: "/opportunity" },
  { label: "Our Story", to: "/story" },
];

export const IMG = {
  octopusBiochar: "/assets/octopus-biochar.png",
  octopusEmerald: "/assets/octopus-emerald.png",
  logo: "/assets/okn-logo.png",
  canopyKalimantan: "https://images.pexels.com/photos/27627211/pexels-photo-27627211.jpeg",
  jungleBali: "https://images.pexels.com/photos/6015206/pexels-photo-6015206.jpeg",
  riceTerrace: "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&w=1600&q=80",
  ricePaddy: "https://images.pexels.com/photos/30067472/pexels-photo-30067472.jpeg",
  oilPalm: "https://images.pexels.com/photos/3246159/pexels-photo-3246159.jpeg",
  soilDark: "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?auto=format&fit=crop&w=1600&q=80",
  biocharTexture: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=80",
  handSoil: "https://images.unsplash.com/photo-1642952273588-ed6fa28870ac?auto=format&fit=crop&w=1400&q=80",
  handSoilWorm: "https://images.pexels.com/photos/33534747/pexels-photo-33534747.jpeg",
  ocean: "https://images.unsplash.com/photo-1549074862-6173e20d02a8?auto=format&fit=crop&w=1600&q=80",
  // Client-supplied photography
  farmers: "https://customer-assets.emergentagent.com/job_carbon-permanent/artifacts/ipmc23ki_image.png",
  productBags: "https://customer-assets.emergentagent.com/job_carbon-permanent/artifacts/uwtgp2o0_image.png",
};
