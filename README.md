# **liber notarum**

This project provides a versatile platform for storing, managing, and utilizing markdown content using SvelteKit and Prisma. Whether you're a note-taker, researcher, or aspiring writer, "liber notarum" empowers you to:

- **Effortlessly Structure Your Notes:** Markdown's intuitive syntax allows you to organize your ideas with headings, lists, code blocks, and more.
- **Seamless Data Persistence:** SvelteKit, a robust frontend framework, facilitates the creation of a user-friendly interface for interacting with your notes.
- **Powerful Database Integration:** Prisma, a type-safe ORM (Object-Relational Mapping) tool, ensures secure and efficient data storage and retrieval from your chosen database.

**Getting Started**

1. **Prerequisites:**
   - Node.js and npm (or yarn) installed on your system. You can download them from [https://nodejs.org/en](https://nodejs.org/en).
2. **Clone the Repository:**
   ```bash
   git clone https://github.com/Michael-Obele/libernotarum.git
   ```
   Replace `<your-username>` with your actual GitHub username.
3. **Install Dependencies:**
   ```bash
   cd liber-notarum
   npm install  # or yarn install
   ```
4. **Database Setup:**
   - Configure your database connection details in `prisma/schema.prisma`.
   - Run migrations to create or update your database schema:
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
   Edit files within the `src` directory to implement new features or customize the application's structure and styling.
   The development server automatically detects changes and refreshes the browser, streamlining your development workflow.

**Deployment**

- Refer to the SvelteKit documentation for detailed deployment instructions based on your preferred hosting platform: [https://kit.svelte.dev/docs/building-your-app](https://kit.svelte.dev/docs/building-your-app)

**Contributing**

We welcome contributions to "liber notarum"! If you have ideas for improvement or want to fix bugs, please create a pull request on GitHub. Make sure to follow our contribution guidelines (if any) to ensure a smooth review process.

**License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
