# Sidath Ranasinghe - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing my
skills, projects, and professional experience as a Full Stack Developer.

## ✨ Features

- **Modern Design**: Clean, professional UI with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Contact Form**: Working contact form with EmailJS integration
- **SEO Optimized**: Built-in SEO optimization and metadata management
- **Performance**: Optimized for speed and performance
- **Accessible**: Built with accessibility best practices

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion
- **Email**: EmailJS for contact form
- **Font**: Geist Sans, Geist Mono, Manrope (Google Fonts)
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── common/           # Reusable common components
│   ├── providers/        # Context providers
│   ├── sections/         # Page section components
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and data
├── public/               # Static assets
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SidathRanasinghe/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables:

```bash
cp .env.example .env.local
```

4. Add your EmailJS configuration to `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Edit `lib/portfolio-data.ts` to update:

- Personal details
- Skills and technologies
- Work experience
- Projects
- Testimonials

### Styling

- **Colors**: Modify color scheme in `app/globals.css` and `tailwind.config.ts`
- **Fonts**: Update font configuration in `app/layout.tsx`
- **Components**: Customize components in `components/` directory

### Content Sections

- **Hero**: `components/sections/hero-section.tsx`
- **About**: `components/sections/about-section.tsx`
- **Skills**: `components/sections/skills-section.tsx`
- **Experience**: `components/sections/experience-section.tsx`
- **Projects**: `components/sections/projects-section.tsx`
- **Testimonials**: `components/sections/testimonials-section.tsx`
- **Contact**: `components/sections/contact-section.tsx`

## 📧 Email Configuration

This portfolio uses EmailJS for the contact form. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your environment variables

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🎯 Performance

- **100/100** Lighthouse Performance Score
- **Tree-shaking** for optimal bundle size
- **Image optimization** with Next.js Image component
- **Font optimization** with next/font
- **CSS optimization** with Tailwind CSS purging

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel
free to:

- Open an issue for bugs or suggestions
- Submit a pull request for improvements
- Fork the project for your own use

## 📞 Contact

**Sidath Ranasinghe**

- Email: sidath.ranasinghe@gmail.com
- LinkedIn:
  [linkedin.com/in/sidath-ranasinghe](https://linkedin.com/in/sidath-ranasinghe)
- GitHub: [github.com/SidathRanasinghe](https://github.com/SidathRanasinghe)
- Website: [sidath.io](https://sidath.io)

---

⭐ If you found this project helpful, please consider giving it a star!
