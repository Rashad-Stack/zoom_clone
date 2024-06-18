# Zoom Clone Project

This project is a Zoom clone built using modern web technologies including Next.js 14, Tailwind CSS, Shadcn, Stream library for audio/video calls, TypeScript, and React Date Picker.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time audio and video calls
- Schedule and join meetings
- User authentication
- Responsive design

## Technologies Used

- **Next.js 14**: React framework for server-rendered applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn**: UI component library.
- **Stream Library**: For audio and video call functionalities.
- **TypeScript**: JavaScript with static type definitions.
- **React Date Picker**: For scheduling meetings.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x)
- npm or yarn

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/zoom-clone.git
    cd zoom-clone
    ```

2. **Install Dependencies**

    ```bash
    # Using npm
    npm install

    # Or using yarn
    yarn install
    ```

3. **Set Up Environment Variables**

    Create a `.env.local` file in the root directory and add the necessary environment variables. Here is an example:

    ```env
    NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
    NEXT_PUBLIC_STREAM_API_SECRET=your_stream_api_secret
    ```

### Running the Application

1. **Start the Development Server**

    ```bash
    # Using npm
    npm run dev

    # Or using yarn
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Sign Up/Login**: Register a new account or log in with existing credentials.
- **Schedule a Meeting**: Use the date picker to select a date and time for your meeting.
- **Join a Meeting**: Enter the meeting ID to join an existing meeting.
- **Audio/Video Call**: Utilize the Stream library for real-time communication.


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Happy coding! If you have any questions, feel free to open an issue or contact the repository owner.


