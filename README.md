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

## 🚀 Quick Start (Local Development)

### Prerequisites

- **Node.js 18+** (Recommended: 18.17.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/iunoo/space-portfolio.git
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

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking

## 🖥️ VPS/Server Installation Guide

### Step 1: Server Setup

1. **Connect to your VPS**
   ```bash
   ssh root@your-server-ip
   # or
   ssh username@your-server-ip
   ```

2. **Update system packages**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. **Install Node.js 18+ (using NodeSource)**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Verify installation
   node --version  # Should show v18.x.x
   npm --version   # Should show 9.x.x or higher
   ```

4. **Install Git**
   ```bash
   sudo apt install git -y
   ```

5. **Install PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   ```

### Step 2: Deploy Application

1. **Clone your repository**
   ```bash
   cd /var/www  # or your preferred directory
   sudo git clone https://github.com/iunoo/space-portfolio.git
   cd space-portfolio
   ```

2. **Set proper permissions**
   ```bash
   sudo chown -R $USER:$USER /var/www/space-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Build the application**
   ```bash
   npm run build
   ```

5. **Start with PM2**
   ```bash
   pm2 start npm --name "space-portfolio" -- start
   
   # Save PM2 configuration
   pm2 save
   pm2 startup
   ```

### Step 3: Configure Nginx (Optional but Recommended)

1. **Install Nginx**
   ```bash
   sudo apt install nginx -y
   ```

2. **Create Nginx configuration**
   ```bash
   sudo nano /etc/nginx/sites-available/space-portfolio
   ```

3. **Add this configuration:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Enable the site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/space-portfolio /etc/nginx/sites-enabled/
   sudo nginx -t  # Test configuration
   sudo systemctl restart nginx
   ```

### Step 4: SSL Certificate (Optional)

1. **Install Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```

2. **Get SSL certificate**
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

### Step 5: Useful PM2 Commands

```bash
# View running processes
pm2 list

# View logs
pm2 logs space-portfolio

# Restart application
pm2 restart space-portfolio

# Stop application
pm2 stop space-portfolio

# Delete application from PM2
pm2 delete space-portfolio

# Monitor resources
pm2 monit
```

### Step 6: Update Deployment

When you want to update your portfolio:

```bash
cd /var/www/space-portfolio

# Pull latest changes
git pull origin main

# Install new dependencies (if any)
npm install

# Rebuild application
npm run build

# Restart with PM2
pm2 restart space-portfolio
```

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

### Navigation Scroll Offsets

Edit `components/main/navbar.tsx` to adjust scroll positions:

```javascript
// About me offset (hero section)
offsetTop = element.offsetTop - 180;

// Skills offset (perfect alignment)
offsetTop = element.offsetTop - 10;

// Projects offset
offsetTop = element.offsetTop - 100;
```

### Styling

- **Colors**: Modify the gradient colors in `app/globals.css`
- **Animations**: Customize glitch effects and transitions
- **Layout**: Adjust spacing and responsive breakpoints

## 🚀 Deployment Options

### Option 1: Vercel (Recommended for Easy Deployment)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Option 2: Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure custom domain if needed

### Option 3: VPS/Server (Full Control)

Follow the **VPS Installation Guide** above for complete server setup.

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 🔧 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill process on port 3000
   sudo lsof -ti:3000 | xargs kill -9
   ```

2. **Permission denied on VPS**
   ```bash
   # Fix ownership
   sudo chown -R $USER:$USER /var/www/space-portfolio
   ```

3. **PM2 not starting on boot**
   ```bash
   pm2 startup
   pm2 save
   ```

4. **Nginx configuration test failed**
   ```bash
   sudo nginx -t
   # Fix any syntax errors shown
   ```

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

### Modified By
- **[iunoo](https://github.com/iunoo)** - Customization and modifications for personal portfolio

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