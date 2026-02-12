# Project Structure Explanation

This project was scaffolded using the Shadcn CLI's `create` command with a custom preset for Vite + React + TypeScript. The preset configures theming (purple theme on neutral base), icons (Lucide), font (DM Sans), and other styles (Vega style, subtle menu accents, default radius). The structure starts minimal but is enhanced with modular folders for better organization. Decisions follow React best practices like separation of concerns and feature-based grouping, while leveraging Shadcn's CLI for easy component additions.

## Overall Structure

- **Root Level**: Config files (e.g., `vite.config.ts`, `tailwind.config.js`, `components.json`) are kept here for quick access. Package lock (`pnpm-lock.yaml`) ensures reproducible builds.
- **src/ Folder**: Core app code, grouped by type for clarity.
- **public/**: Static public assets (unchanged from Vite defaults).

### Key Folders and Files

- **assets/**: Static files like images or icons (added manually).
- **components/**: UI elements.
  - **ui/**: Shadcn primitives (e.g., Button.tsx), auto-generated and themed per preset.
- **hooks/**: Custom React hooks (e.g., for state or effects).
- **lib/**: Utilities (e.g., `utils.ts` with Shadcn's `cn` for classnames).
- **pages/**: Route-level views (e.g., Home.tsx).
- **services/**: Data logic (e.g., API clients).
- **types/**: Shared TypeScript types (e.g., interfaces for props).
- **App.tsx**: Root component (handles layout/routing).
- **main.tsx**: App entry.
- **index.css**: Global styles with Tailwind layers and preset theme variables.

## Decisions and Rationale

### a. Scalability

- **Scaffolded Base + Enhancements**: The `shadcn create` command provides a lightweight Vite setup with pre-installed deps and themed components, scaling well for rapid prototyping. Added folders (hooks, pages, services) allow grouping by feature (e.g., add `components/auth/` later), preventing a monolithic `src/`. Supports growing teams by isolating concerns—update themes in `tailwind.config.js` without touching code.
- **Preset Usage**: Custom options (e.g., purple theme, Lucide icons) are baked in via `components.json`, making it easy to extend with CLI adds (no manual config drift). Vite's fast builds and HMR handle larger apps efficiently.
- **Future-Proof**: Easy to integrate tools like React Router or state managers (e.g., add `store/` folder). TypeScript ensures type safety as complexity increases.

### b. Readability

- **Descriptive Grouping**: Folders like `ui/` isolate Shadcn from custom components, making it obvious: "Shadcn button? Check components/ui/." Preset-driven files (e.g., theme vars in index.css) are centralized.
- **Convention-Based**: Follows Vite/Shadcn norms (e.g., lib/utils.ts) with intuitive additions (pages for views). Index files (e.g., types/index.ts) simplify imports: `import { User } from '@/types';`.
- **Minimal Clutter**: Root configs separate from src/, reducing noise in IDE. Themed components are self-documenting via preset (e.g., purple accents visible in UI).

### c. Maintainability

- **Modular and Testable**: Decoupled layers (UI in components, logic in hooks/services) ease updates—e.g., refactor APIs in services/ without UI changes. Shadcn CLI handles component updates/overwrites.
- **Type Safety and Tools**: TS configs (tsconfig.json) and types/ folder minimize bugs. Preset ensures consistent styling; edit `components.json` to tweak globally.
- **Onboarding Aid**: This MD file documents "why" (e.g., preset for quick theming). Add ESLint/Prettier for enforcement: `pnpm add -D eslint prettier`.
- **Performance**: Vite optimizes bundling; preset's CSS vars enable runtime theming without bloat.

This setup balances the scaffolded simplicity with extensibility.
