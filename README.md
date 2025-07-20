# 📦 React + Vite Admin Course App

This project is a simple course admin dashboard built using **React** and **Vite**, with API integration using **MockAPI**. It includes features like product and user management, reusable components, responsive layouts, and global state management using **Zustand**.

## 🚀 Tech Stack

* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Zustand](https://zustand-demo.pmnd.rs/)
* [MockAPI](https://mockapi.io/)
* [ESLint](https://eslint.org/)
* [pnpm](https://pnpm.io/)

## 📁 Features

* ✅ CRUD for Products and Users
* ✅ Search filter on product list
* ✅ Form reuse for add & edit
* ✅ Zustand for global state
* ✅ LocalStorage fallback (optional)
* ✅ Responsive UI with TailwindCSS
* ✅ Organized file structure

## 🔧 Getting Started

To run this project locally:

1. Clone the repository:

```bash
git clone https://github.com/dwikimaulana6701/course-app-fe2.git
cd course-app-fe2
pnpm install
```

2. Create a `.env` file in the root folder and add the following environment variables:

```env
VITE_API_URL_PRODUCTS=https://6865e73589803950dbb08e41.mockapi.io/products
VITE_API_URL_USERS=https://6865e73589803950dbb08e41.mockapi.io/users
```

3. Start the development server:

```bash
pnpm run dev
```

## 📦 Build

To create a production build:

```bash
pnpm run build
```
