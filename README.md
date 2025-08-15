# AKvision - Electronics Company Website

A modern, responsive frontend website for AKvision, an electronics company specializing in security and surveillance solutions. Built with React, React Router, and Tailwind CSS.

## Features

- Responsive design that works on mobile, tablet, and desktop devices
- Modern UI with smooth animations and transitions
- Complete set of pages including:
  - Homepage with hero section and featured products
  - Products catalog with filtering
  - Solutions for different industries
  - Services offered by the company
  - About Us with company information
  - Support resources and FAQs
  - Blog and resources section
  - Contact page with form and office locations
  - Legal pages (Privacy Policy, Terms of Service, Return Policy)
- SEO-friendly structure
- Fast loading performance

## Technologies Used

- **React**: Frontend library for building user interfaces
- **React Router**: For navigation and routing
- **Tailwind CSS**: For styling and responsive design
- **Heroicons**: For beautiful, consistent icons
- **Vite**: For fast development and optimized builds

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/akvision-frontend.git
   cd akvision-frontend
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory.

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable components
│   │   └── layout/      # Layout components (Header, Footer)
│   ├── pages/           # Page components
│   ├── App.jsx          # Main App component with routing
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file and global styles in `src/index.css`.

### Adding New Pages

1. Create a new page component in the `src/pages` directory
2. Add the route in `src/App.jsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern electronics company websites
- Built as a demonstration of frontend development skills
