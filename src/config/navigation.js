export const mainNavigation = [
  {
    id: "products",
    label: "Products",
    path: "/products",
    mega: [
      {
        title: "Network Products",
        links: [
          { label: "Network Cameras", path: "/products/network-cameras" },
          { label: "PTZ Cameras", path: "/products/ptz-cameras" },
          { label: "NVRs", path: "/products/nvrs" },
          { label: "Video Intercom", path: "/products/video-intercom" },
        ],
      },
      {
        title: "Turbo HD",
        links: [
          { label: "Turbo HD Cameras", path: "/products/turbo-hd-cameras" },
          { label: "DVR", path: "/products/dvr" },
        ],
      },
      {
        title: "Access Control",
        links: [
          { label: "Face Terminals", path: "/products/face-terminals" },
          { label: "Fingerprint", path: "/products/fingerprint" },
          { label: "Card Terminals", path: "/products/card-terminals" },
        ],
      },
    ],
  },
  { id: "solutions", label: "Solutions", path: "/solutions" },
  { id: "support", label: "Support", path: "/support" },
  { id: "partners", label: "Partners", path: "/partners" },
  { id: "about", label: "About Us", path: "/about" },
];


