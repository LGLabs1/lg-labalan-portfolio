# Personal Portfolio

A simple, modern personal portfolio website built with React, Vite, and Tailwind CSS.

## Sections

- Home (hero section with intro)
- About (bio, experience/education, skills, resume link)
- Projects (project cards with tech tags)
- Contact (email, links, short instructions)

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Then open the URL shown in your terminal (usually http://localhost:5173).

3. Build for production:

```bash
npm run build
```

## Customization

- Update your name, tagline, and avatar initials in `src/components/Hero.jsx`.
- Edit your bio, experience/education text, and skills in `src/components/About.jsx`.
- Replace project data in `src/data/projects.js` with your real projects.
- Set your email, location, GitHub, and LinkedIn in `src/components/Contact.jsx`.
- Change the footer text in `src/components/Footer.jsx`.

### Resume

- Place your resume file at `public/resume.pdf`.
- The "Download Resume" button in the About section will automatically link to it.

You can further customize styles by editing `src/index.css` and Tailwind config in `tailwind.config.js`.
