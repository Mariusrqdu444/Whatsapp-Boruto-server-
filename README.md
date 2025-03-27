# WhatsApp Automation Server

A web-based WhatsApp messaging tool that uses creds.json authentication to send messages to contacts or groups.

## Features

- Send messages to individual contacts or groups
- Upload credentials file (creds.json) for authentication instead of QR code scanning
- Input message text directly or upload a message file
- Configure message delivery settings including:
  - Delay between messages
  - Retry options for failed messages
  - Continuous messaging mode

## Prerequisites

- Node.js 16+
- PostgreSQL database
- Valid WhatsApp credentials file (creds.json)

## Environment Variables

Create a `.env` file with the following variables:

```
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
PORT=3000
```

## Installation

1. Clone the repository
   ```
   git clone https://github.com/Mariusrqdu444/Whatsapp-Boruto-server-.git
   cd Whatsapp-Boruto-server-
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Push database schema
   ```
   npm run db:push
   ```

4. Start the development server
   ```
   npm run dev
   ```

## Deployment on Render

This project includes a `render.yaml` file for easy deployment on Render.com:

1. Fork this repository to your GitHub account
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Render will automatically detect the configuration
5. Set the required environment variables

## Usage

1. Open the application in your web browser
2. Upload your creds.json file for authentication
3. Enter the target phone number(s) or group ID(s)
4. Type your message or upload a message file
5. Configure message delivery settings
6. Click "Start Messaging" to begin sending messages

## Important Notes

- The creds.json file is sensitive and should be kept secure
- Respect WhatsApp's terms of service and avoid spam
- The server requires continuous internet connection while sending messages