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
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   ```

   > **Note**: For Gmail, you'll need to generate an [App Password](https://support.google.com/accounts/answer/185833) instead of using your regular password.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📧 Email Configuration

The contact form uses Nodemailer to send emails. To configure it:

1. Update the `.env` file with your email credentials
2. For Gmail users:
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in `EMAIL_PASS`
3. For other email providers, update the SMTP configuration in `src/app/actions.ts`

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **`src/components/Hero.tsx`**: Name, title, and description
- **`src/components/About.tsx`**: Bio, education, and skills
- **`src/components/Experience.tsx`**: Work experience details
- **`src/components/Projects.tsx`**: Featured projects
- **`src/components/Footer.tsx`**: Social media links

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

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Other Platforms

This portfolio can also be deployed on:
- **Netlify**: Connect your GitHub repo and deploy
- **AWS Amplify**: Use the Amplify console
- **Railway**: Deploy with a single click
- **DigitalOcean App Platform**: Connect and deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 👨‍💻 Author

**Ahmed Shaheen**
- Full Stack Developer
- Bachelor's in Software Engineering, Üsküdar University
- [GitHub](https://github.com/yourusername)
- [LinkedIn](https://linkedin.com/in/yourprofile)
- [Email](mailto:your-email@example.com)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">
  Made with ❤️ by Ahmed Shaheen
</div>
