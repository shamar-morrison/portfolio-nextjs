# Shamar's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

This portfolio website showcases my skills, projects, and provides a way for potential clients and employers to contact me. The website includes:

- A modern, responsive design
- Dark/light mode support
- Smooth navigation
- Project showcase section
- Contact form with email functionality

## Technologies Used

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Shadcn UI
- **Email**: Resend API for contact form emails
- **Styling**: Tailwind CSS, CSS Modules
- **Deployment**: Netlify

## Setup Instructions

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Important Configuration

### Email Functionality

The contact form uses [Resend](https://resend.com) to send emails. To get this working:

1. Login to your account on [Resend](https://resend.com)
2. Generate/Copy an API key
3. Add the API key to your `.env.local` file

## Troubleshooting

### Email Not Sending

If emails aren't being received:

1. Check that your Resend API key is correct
2. Verify your domain is properly set up in Resend
3. Check that the "from" email uses your verified domain
4. Look at the logs in the Resend dashboard
5. Check spam folders
