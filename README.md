<div style="display: flex; justify-content: center; align-items: center;">
 <img src="https://i.ibb.co/vs0KBRb/svgviewer-png-output.png" alt="libernotarum logo" border="0">
</div>

<div style="display: flex; justify-content: center; align-items: center;">

</div>

# <img src="static/favicon/favicon-32x32.png" alt="libernotarum logo" border="0"> liber notarum

**Liber notarum** is a versatile note-taking app built with SvelteKit and Prisma that lets you manage and utilize your markdown content effectively.

**Key Benefits:**

- **Effortless Note Organization:** Structure your notes with ease using markdown syntax.
- **Seamless Data Storage:** Securely store and retrieve your notes with a user-friendly interface.
- **Powerful Database Integration:** Ensure efficient data management through Prisma.

**Getting Started**

- **Prerequisites:** Node.js and npm (or yarn) installed on your system (installation instructions: [https://nodejs.org/en](https://nodejs.org/en))
- **Clone the Repository:**

```bash
git clone https://github.com/Michael-Obele/libernotarum.git
```

- **Install Dependencies:**

```bash
cd liber-notarum
npm install  # or yarn install
```

- **Database Setup:**
  Configure your database connection details in `prisma/schema.prisma`.
  Run migrations to create or update your database schema:
  ```bash
  npx prisma migrate dev
  ```
  Replace `dev` with your desired environment (e.g., `production`) if applicable.

**Development**

1. **Start the Development Server:**
   ```bash
   npm run dev  # or yarn dev
   ```
   This opens the application in your default web browser, usually at `http://localhost:5173/`.
2. **Make Changes and See Results:**
   Edit files within the `src` directory using a code editor (e.g., Visual Studio Code, Sublime Text).
   The development server automatically refreshes the browser for a streamlined workflow.

**Deployment**

Refer to the SvelteKit documentation for detailed deployment instructions based on your preferred hosting platform: [https://kit.svelte.dev/docs/building-your-app](https://kit.svelte.dev/docs/building-your-app)

**Contributing**

We welcome contributions to liber notarum! If you have ideas for improvement or want to fix bugs, please create a pull request on GitHub. Refer to our contribution guidelines (if available) for a smooth review process.

**License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

[![Netlify Status](https://api.netlify.com/api/v1/badges/b7b3ab7a-cbdf-4c19-b71b-93b3c876b945/deploy-status)](https://app.netlify.com/sites/libernotarum/deploys)
