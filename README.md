
# UFUQ - Arabic Language Learning through Historical Figures

**UFUQ** is an innovative Arabic language learning application that takes children on an immersive journey through time. In this educational experience, users interact with famous historical poets and writers from various Arab countries, enhancing their language skills and cultural understanding through engaging dialogues. UFUQ uses the **Allam** model to simulate realistic, age-appropriate interactions with these figures, making language learning enjoyable and meaningful.

## Live Demo

Explore UFUQ live: [UFUQ on Vercel](https://web-ufuq.vercel.app/)

## Key Features

- **Conversational AI with Allam**: UFUQ leverages **Allam**, a powerful language model from SDAIA, to create authentic, culturally rich conversations with historical literary figures. Each character’s personality is crafted to reflect their literary style, making interactions feel genuine.

- **Level-Based Learning**: Users progress through levels, each introducing a new Arab country and a different historical figure. Starting in Egypt with Ahmad Shawqi, users travel to other nations, meeting figures like Nizar Qabbani and Badr Shakir al-Sayyab.

- **Interactive Chat Experience**: Through `ai-sdk`, UFUQ provides real-time chat where users converse with historical characters. Responses are tailored to ensure they align with the character’s background, offering a truly interactive learning journey.

- **Quizzes and Assessments**: After each level, users answer quiz questions related to the conversation, reinforcing their understanding of the material and tracking their progress.

## Technologies Used

- **Next.js** and **Vercel**: Server-side rendering and static site generation for efficient, scalable deployment.
- **Langchain**: Provides prompt customization for each historical character, maintaining the authenticity of their personalities.
- **Prisma**: Manages PostgreSQL database interactions, tracking user progress and storing relevant data.
- **ai-sdk**: Enables real-time streaming of chat messages, creating a responsive user experience.
- **Tailwind CSS**: Ensures a clean, modern, and responsive UI design.
  
## Installation and Setup

### Prerequisites

- Node.js and npm
- PostgreSQL database

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Mahmood-Anaam/nextjs-ufuq.git
   cd nextjs-ufuq
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory and configure the following environment variables:

   ```plaintext
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_pass

   # WatsonX Configuration for Allam Model
   WATSONX_APIKEY=your_watsonx_apikey
   WATSONX_PROJECT_ID=your_watsonx_project_id
   WATSONX_PASSWORD=your_watsonx_password
   WATSONX_USERNAME=your_watsonx_username
   WATSONX_URL="https://eu-de.ml.cloud.ibm.com"
   MODEL_ID="sdaia/allam-1-13b-instruct"
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be running at `http://localhost:3000`.

### Environment Variables

- **DATABASE_URL**: Connection string for the PostgreSQL database.
- **JWT_SECRET**: Secret key for JWT authentication.
- **SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS**: SMTP configuration for sending emails.
- **WATSONX_APIKEY, WATSONX_PROJECT_ID, WATSONX_PASSWORD, WATSONX_USERNAME, WATSONX_URL, MODEL_ID**: Credentials for accessing the IBM WatsonX API and the Allam model for AI interactions.

## How UFUQ Works

1. **User Authentication**: Users can securely sign up, sign in, and recover passwords.

2. **Educational Journey**: The child, represented as "عربي" (Arabi), meets historical figures from different Arab countries. Each character interaction offers a unique learning experience that explores Arabic language and literature in an engaging way.

3. **Real-Time Chat**: Using the **Allam** model, characters respond to user queries with context-appropriate and age-sensitive answers. Langchain allows for personality-specific prompt customization, enriching the dialogue.

4. **Quizzes**: At the end of each level, users answer quiz questions, reinforcing knowledge and enabling progression to subsequent levels.

5. **Email Notifications**: SMTP integration for user notifications, such as password recovery.

## Deployment

UFUQ is optimized for deployment on **Vercel**. Connect the GitHub repository to your Vercel account, configure environment variables, and deploy.



UFUQ offers a unique journey through Arabic history, language, and literature, fostering cultural pride and language proficiency in young learners.
