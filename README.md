# 🌌 Space Portfolio - AI-Powered Systems Builder

A modern, interactive portfolio website built with Next.js 14, featuring stunning 3D animations, glitch effects, and a space theme. This portfolio showcases AI-powered systems and modern web development skills.

> **Note**: This project is based on the original [Space Portfolio](https://github.com/sanidhyy/space-portfolio) by [Sanidhya Kumar Verma](https://github.com/sanidhyy), modified and customized for personal use.

## ✨ Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **3D Animations**: Three.js with React Three Fiber
- **Smooth Animations**: Framer Motion for fluid transitions
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Performance Optimized**: Image optimization, lazy loading, and caching
- **SEO Friendly**: Meta tags, structured data, and semantic HTML
- **Glitch Effects**: Custom CSS animations for cyberpunk aesthetics
- **Interactive Elements**: Hover effects, tooltips, and micro-interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/space-portfolio.git
   cd space-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the portfolio in action.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
space-portfolio/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── main/             # Main page components
│   └── sub/              # Sub-components
├── constants/            # Static data and configurations
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
│   ├── skills/          # Skill icons
│   ├── projects/        # Project images
│   └── videos/          # Background videos
└── config/              # App configuration
```

## 🎨 Customization

### Personal Information

1. **Update constants/index.ts**
   - Modify `SKILL_DATA`, `PROJECTS`, `SOCIALS`
   - Update personal links and information

2. **Replace assets in public/**
   - Add your project screenshots to `public/projects/`
   - Update skill icons in `public/skills/`
   - Replace logo and hero background

3. **Update site metadata in config/index.ts**
   - Change title, description, and keywords
   - Update author information

### Styling

- **Colors**: Modify the gradient colors in `app/globals.css`
- **Animations**: Customize glitch effects and transitions
- **Layout**: Adjust spacing and responsive breakpoints

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### VPS/Server Deployment

1. **Install PM2 globally**
   ```bash
   npm install -g pm2
   ```

2. **Build and start with PM2**
   ```bash
   npm run build
   pm2 start npm --name "space-portfolio" -- start
   ```

3. **Configure Nginx** (optional)
   - Set up reverse proxy for better performance
   - Enable SSL with Let's Encrypt

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits & Acknowledgments

### Original Author
- **[Sanidhya Kumar Verma](https://github.com/sanidhyy)** - Original Space Portfolio template
- **Repository**: [space-portfolio](https://github.com/sanidhyy/space-portfolio)

### Technologies Used
- [Next.js](https://nextjs.org/) - React framework
- [Three.js](https://threejs.org/) - 3D graphics library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## 📞 Support

If you have any questions or need help with setup, feel free to:

- Open an issue on GitHub
- Contact me at [contact@iuno.in]
- Visit [iuno.in]

---

⭐ **Star this repository if you found it helpful!**