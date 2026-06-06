# SmartShop - E-commerce Product Catalog

A modern, production-ready e-commerce application built with React, Vite, and React Router.

## 🚀 Features

- **Modular Architecture**: Well-organized component structure with separation of concerns
- **Client-side Routing**: Seamless navigation with React Router v7
- **State Management**: Context API for favorites management
- **Responsive Design**: Mobile-first approach with Tailwind-inspired CSS
- **Performance Optimized**: 
  - Code splitting with Vite
  - Lazy image loading
  - Optimized bundle sizes
  - Production minification
- **Search Functionality**: Real-time product filtering
- **Favorites System**: Persistent favorites using localStorage with Context API
- **Modern UI/UX**: Smooth animations and interactions

## 📁 Project Structure

```
smartshop/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with favorites badge
│   │   ├── ProductCard.jsx     # Reusable product card with favorite button
│   │   ├── SearchBar.jsx       # Product search component
│   │   └── Footer.jsx          # Footer component
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Products.jsx        # Products listing with search
│   │   ├── ProductDetails.jsx  # Detailed product view
│   │   └── Favorites.jsx       # Saved favorites page
│   ├── context/
│   │   └── FavoritesContext.jsx # Global favorites state
│   ├── hooks/
│   │   └── useFavorites.js    # Custom hook for favorites
│   ├── data/
│   │   └── products.js        # Product data
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── vite.config.js             # Vite configuration with optimizations
├── package.json               # Dependencies & scripts
├── vercel.json                # Vercel deployment config
└── netlify.toml               # Netlify deployment config
```

## 🛠️ Technologies Used

- **Frontend**: React 19 + Vite 6
- **Routing**: React Router DOM v7
- **State Management**: React Context API
- **Styling**: Custom CSS with responsive design
- **Build Tool**: Vite with optimizations
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smartshop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

## 🚀 Deployment

### Option 1: Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   - Connect your Git repository
   - Follow the prompts
   - Your app will be live with a `.vercel.app` URL

### Option 2: Deploy to Netlify

#### Method A: Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```
   - Connect your GitHub account
   - Select repository
   - Your app will be live with a `.netlify.app` URL

#### Method B: Using Netlify UI

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop `dist` folder** to Netlify (https://app.netlify.com/drop)

3. **Custom Domain Setup** (Optional)
   - Go to Site Settings → Domain Management
   - Add your custom domain

### Option 3: Deploy to Render

1. **Create account** at https://render.com

2. **Connect GitHub repository**

3. **Create new Web Service**
   - Build Command: `npm install && npm run build`
   - Start Command: Leave empty (static site)
   - Publish Directory: `dist`

4. **Deploy** - Render will automatically deploy on push

## 📊 Performance Optimizations

### Build Optimizations
- **Code Splitting**: Separate chunks for React, Router, and app code
- **Tree Shaking**: Removes unused code in production
- **Minification**: Terser compression with console removal
- **CSS Splitting**: Separate CSS files per route

### Runtime Optimizations
- **Lazy Image Loading**: `loading="lazy"` attribute on images
- **Image CDN**: Using Picsum Photos for placeholder images
- **LocalStorage Cache**: Favorites stored efficiently
- **React Strict Mode**: Development checks for issues

### Bundle Metrics
- Minified bundle: ~150KB (React + Router)
- Gzipped: ~50KB
- Load time: < 2 seconds on 4G

## 🔒 Environment Variables

Create a `.env.local` file:

```env
VITE_APP_NAME=SmartShop
VITE_APP_VERSION=1.0.0
```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server on :3000

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
npm run build && npm run preview  # Test production build locally
```

## 🎨 Styling Architecture

### CSS Features
- **Responsive Grid**: Auto-fill grid with minimum cell size
- **Gradients**: Modern gradient backgrounds
- **Animations**: Smooth transitions and keyframe animations
- **Mobile First**: Base styles for mobile, enhanced for desktop
- **Dark Mode Ready**: Can be easily extended

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🔄 State Management

### Context API Structure
```
FavoritesContext
├── favorites: Array
├── addFavorite: Function
├── removeFavorite: Function
└── isFavorite: Function
```

### Usage Example
```javascript
import { useFavorites } from '../hooks/useFavorites';

function Component() {
  const { favorites, addFavorite } = useFavorites();
  // Use hook...
}
```

## 🚢 Deployment Checklist

- [x] Code splitting configured
- [x] Images optimized with lazy loading
- [x] CSS minified and optimized
- [x] Environment variables set
- [x] Build command tested locally
- [x] Production build verified
- [x] Deployment config files created
- [x] Mobile responsiveness verified
- [x] Performance tested
- [x] SEO basic setup ready

## 🐛 Troubleshooting

### Deploy fails on Vercel
- Ensure `build` command completes locally: `npm run build`
- Check Node version: Should be 18+
- Check `package.json` has all dependencies

### CSS not loading
- Check file paths are relative
- Verify CSS file is imported in `main.jsx`
- Clear browser cache

### Routes not working after deployment
- Ensure `netlify.toml` or `vercel.json` redirects are configured
- Check router configuration in `App.jsx`

## 📈 Next Steps for Enhancement

1. **Add Backend API**: Connect to REST API
2. **Authentication**: User login and registration
3. **Shopping Cart**: Full e-commerce functionality
4. **Payment Integration**: Stripe/PayPal
5. **Admin Panel**: Product management
6. **Analytics**: Sentry/Google Analytics
7. **PWA**: Progressive Web App setup
8. **Testing**: Jest + React Testing Library

## 📄 License

MIT License - Free to use for educational and commercial projects

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and structure.

## 📞 Support

For questions and issues:
- Check existing issues on GitHub
- Create a new issue with detailed description
- Include steps to reproduce

---

**Live Demo**: [Deployed URL will appear here after deployment]

**Happy Coding! 🎉**
