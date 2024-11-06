# UFUQ



## Features

- **User Authentication**: Secure sign-up, sign-in, and password recovery functionality to protect user accounts.


## Demo

Try the live version of the app here: [UFUQ]()

## Getting Started

### Prerequisites

- Node.js and npm installed
- PostgreSQL database

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/Mahmood-Anaam/nextjs-ufuq.git
cd nextjs-ufuq
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**:

Create a `.env` file in the root directory and add the following environment variables:

```bash
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
NODE_ENV=development
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass
```

### Environment Variables

- `DATABASE_URL`: Connection string for the PostgreSQL database.
- `JWT_SECRET`: Secret key for JWT authentication.
- `NODE_ENV`: Defines the environment (development or production).
- `SMTP_HOST`: Hostname of the SMTP server for sending emails.
- `SMTP_PORT`: Port used by the SMTP server.
- `SMTP_USER`: Username for SMTP authentication.
- `SMTP_PASS`: Password for SMTP authentication.


### Running the App

Start the development server:

```bash
npm run dev
```

The app will be running on `http://localhost:3000`.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Prisma**: A modern ORM for database interaction in Node.js.
- **Nodemailer**: A Node.js module for sending emails.


