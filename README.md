# 🚀 Ahmed Shaheen - Portfolio

A modern, responsive portfolio website built with Next.js 16, featuring smooth animations, glassmorphism design, and a contact form with email integration.

![Next.js](https://img.shields.io/badge/Next.js-16.0.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- **🎨 Modern Design**: Sleek dark theme with glassmorphism effects and vibrant gradient accents
- **✨ Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **📱 Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **📧 Contact Form**: Integrated email functionality using Nodemailer
- **⚡ Performance Optimized**: Built with Next.js 16 for lightning-fast page loads
- **🎯 SEO Ready**: Proper meta tags and semantic HTML structure
- **🔒 Form Validation**: Client-side validation with React Hook Form and Zod

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend
- **Email Service**: [Nodemailer](https://nodemailer.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

### Development Tools
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Package Manager**: npm

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── actions.ts          # Server actions for form submission
│   │   ├── globals.css         # Global styles and theme variables
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page
│   └── components/
│       ├── About.tsx           # About section with skills
│       ├── Contact.tsx         # Contact section wrapper
│       ├── ContactForm.tsx     # Contact form with validation
│       ├── Experience.tsx      # Work experience timeline
│       ├── Footer.tsx          # Footer component
│       ├── Header.tsx          # Navigation header
│       ├── Hero.tsx            # Hero section
│       └── Projects.tsx        # Featured projects showcase
├── public/                     # Static assets
├── .env                        # Environment variables
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-app-specific-password
   ```

   > **Note**: For Gmail, you'll need to generate an [App Password](https://support.google.com/accounts/answer/185833) instead of using your regular password.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Theme Colors

Modify the color scheme in `src/app/globals.css`:

```css
:root {
  --color-primary: #00f0ff;    /* Cyan */
  --color-secondary: #7000ff;  /* Violet */
  --color-accent: #ff00aa;     /* Pink/Fuchsia */
}
```

## 📦 Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 🚢 Deployment

### Deployed on Netlify [Click here to see it](https://ahmedshaheenresume.netlify.app/)



## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 👨‍💻 Author

**Ahmed Shaheen**
- Full Stack Developer
- Bachelor's in Software Engineering, Üsküdar University
- [GitHub](https://github.com/ahmedshaheenreal)
- [LinkedIn](https://linkedin.com/in/real-ahmed-shaheen)
- [Email](ahmedshaheenwork@gmail.com)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">
  Made with ❤️ by Ahmed Shaheen
</div>
