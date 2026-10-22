# Aftab Asghar - Personal Developer Portfolio

A modern, responsive, and elegant personal developer portfolio website designed for **Aftab Asghar**, Undergraduate Computer Science student at **Riphah International University**.

The website uses the dark brown, warm beige, ivory, and sand color scheme inspired by Aftab's original CV.

---

## 🌟 Quick Options to View & Run

### Option 1: Instant Browser Preview (Zero Installation Needed!)
Double-click [`preview.html`](file:///d:/Devops%20LAB/portfolio/preview.html) directly in Windows File Explorer or open it in Google Chrome / Microsoft Edge.
It contains the complete design, Tailwind styling, interactive modals, responsive menu, and contact validation with zero `npm` setup!

### Option 2: Run with React + Vite in VS Code
1. Open this folder in **VS Code**: `d:\Devops LAB\portfolio`
2. Open a terminal (`Ctrl + ~`)
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open your browser at `http://localhost:3000` (or the URL printed by Vite).

---

## 📂 Project Architecture

```
portfolio/
├── preview.html              # Instant standalone browser preview (no npm needed)
├── index.html                # Vite HTML entry point with Google Fonts
├── package.json              # Project dependencies (React 18, Tailwind, Lucide, Framer Motion)
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Custom warm brown & beige color theme
├── postcss.config.js         # PostCSS configuration
├── src/
│   ├── main.jsx              # Application bootstrap
│   ├── App.jsx               # Root page component
│   ├── index.css             # Tailwind imports & custom scrollbar
│   ├── data/
│   │   └── portfolioData.js  # All your profile data, projects, skills, education & contacts
│   └── components/
│       ├── Navbar.jsx        # Sticky glass navigation + mobile hamburger drawer
│       ├── Hero.jsx          # Hero section with photo placeholder & CTA buttons
│       ├── About.jsx         # Academic background & 4 feature cards
│       ├── Skills.jsx        # Technical skills with progress indicators
│       ├── Projects.jsx      # Project showcase with custom UI thumbnails
│       ├── ProjectModal.jsx  # Interactive modal with project breakdown
│       ├── Education.jsx     # Vertical timeline matching CV (Matric, FSc, BS)
│       ├── Hobbies.jsx       # Icon cards for Coding, Cycling, Painting, etc.
│       ├── Contact.jsx       # Contact details + validated message form
│       ├── CVModal.jsx       # Built-in printable CV preview + PDF export
│       └── Footer.jsx        # Modern footer with copyright & back-to-top
└── README.md
```

---

## 🛠️ How to Customize Your Details

All website data is centralized in one file: [`src/data/portfolioData.js`](file:///d:/Devops%20LAB/portfolio/src/data/portfolioData.js).

1. **Profile Photograph**:
   - Save your photo as `profile.jpg` inside the `public/` folder, OR
   - Click the **"Upload / Set Photo"** button on the website to preview your photo directly in the browser!
2. **Social Media & Profiles**:
   - GitHub: `https://github.com/AftabAsghar-512`
   - LinkedIn: `https://www.linkedin.com/in/muhammad-aftab-asghar-b111a02bb`
3. **Projects**:
   - Includes **Doc Signer Pro** (Published on Microsoft), **Candy Crush Game**, **Hotel Room Booking System**, **Buddy Bills Mobile App**, and **Car Game Using Unity**.
4. **CV Download**:
   - Place your official PDF resume as `public/aftab-cv.pdf` for direct one-click downloading, or use the built-in **"Print / Save as PDF"** button in the CV modal.

---

## 🎨 Design Theme
- **Deep Espresso**: `#3B2314`
- **Primary Dark Brown**: `#5C3A21`
- **Warm Bronze / Caramel**: `#8C5A35`
- **Warm Beige**: `#F4EDE4`
- **Ivory Surface**: `#FDFBF7`
