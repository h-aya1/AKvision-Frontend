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
  { id: "services", label: "Service", path: "/services" },
  { 
    id: "support", 
    label: "Support", 
    path: "/support",
    mega: [
      {
        title: "Download",
        links: [
          { label: "Firmware", path: "/support/download/firmware" },
          { label: "SDK", path: "/support/download/sdk" },
          { label: "Software", path: "/support/download/software" },
        ],
      },
      {
        title: "How to's",
        links: [
          { label: "Guide", path: "/support/howto/guide" },
          { label: "Video", path: "/support/howto/video" },
        ],
      },
    ],
  },
  { id: "partners", label: "Partners", path: "/partners" },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "about", label: "About Us", path: "/about" },
];


