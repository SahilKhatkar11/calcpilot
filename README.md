# CalcPilot 🧮✨

**CalcPilot** is a next-generation, high-performance GUI calculator running Python 3 natively in the browser via **PyScript** and **WebAssembly**, encased in a dark **iOS Liquid Glass** aesthetic with neighborhood light-leak proximity glows, expression copying, and persistent history logging.

---

## 🌐 Live Demo

Try the live version of the app here:  
👉 [CalcPilot Live](https://sahilkhatkar11.github.io/calcpilot/)

No installation required — just open the link and start using the app instantly.

---

## 🌟 Key Features

- **Native Python Execution in WASM**: Calculations are evaluated directly using Python 3's engine in the browser via PyScript.
- **Liquid Glass Aesthetic**: Dark mode interface with ambient glassmorphic blurs, specular edge highlights, and high-contrast typography.
- **Synchronized Reactive Glow & Light Leak**:
  - Interactive multi-colored active button press states matching specific control types (Orange for operators, White for digits, Gray for utility functions).
  - Proximity light-leak projection onto orthogonal and diagonal adjacent key edges for a tactile, physical feel.
  - Reactive status indicator dots (Red, Yellow, Green) that flash sequentially on standard keypresses and trigger a simultaneous 3-dot illumination when evaluate (`=`) or clear (`C`) is pressed.
- **Quick Expression & Result Copy**:
  - One-tap clipboard copy button situated beside the history toggle.
  - Automatically formats `[expression] = [result]` or current display value into clipboard memory with visual checkmark confirmation.
- **Persistent LocalStorage History Log**:
  - Slide-over calculation history panel accessible via the header history button.
  - Auto-persists calculations into browser `localStorage` (up to 50 entries).
  - One-click "Paste Result" feature to reuse prior outputs.
  - Prominent "Clear All" action with red outline and hover states.
  - Uniform squircle (`rounded-lg`) header control buttons for consistent design alignment.
- **Ergonomic Keyboard Mapping**:
  - Full physical keyboard support: digits (`0-9`), arithmetic (`+`, `-`, `*`, `/`), exponentiation (`^`), percentages (`%`), backspace, `Escape` (Clear), and `Enter` / `=` (Evaluate).
- **Robust Math Guarding**:
  - Consecutive operator error prevention and smart division-by-zero detection.
  - Automatic dynamic font size scaling for long numeric strings.

---

## 🛠️ Tech Stack

- **Core Engine**: [PyScript](https://pyscript.net/) (Python 3 WebAssembly runtime)
- **Frontend Framework**: HTML5, Modern Vanilla JS & CSS3
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: Lucide Icons
- **Build System**: [Vite](https://vitejs.dev/)

---

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/calcpilot.git
   cd calcpilot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local dev server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Auto-Deploy to GitHub Pages

CalcPilot comes pre-configured for automated GitHub Pages deployment using GitHub Actions and relative asset path routing (`base: './'`).

### Automated GitHub Actions Workflow

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Update CalcPilot"
   git branch -M main
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) will automatically trigger on every push to `main` and deploy to `https://<your-username>.github.io/<repository-name>/`.

---

## 📄 License

MIT License. Designed with precision for effortless browser-native calculations.
