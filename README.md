# WhatsApp Automation Server

A web-based WhatsApp messaging tool that uses creds.json authentication to send messages to contacts or groups.

## Features

- **No QR Code Authentication**: Uses creds.json file for direct connection to WhatsApp
- **Multiple Target Options**: Send to individual contacts or groups
- **Flexible Message Input**: Enter message text directly or upload from a file
- **Customizable Messaging**: Set delay between messages and enable continuous sending
- **Robust Session Management**: Database-backed session persistence
- **User-friendly Interface**: Clean, responsive UI for easy navigation

## Setup Instructions

### Prerequisites

- Node.js 16+ installed
- PostgreSQL database
- WhatsApp account with an active phone number

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Mariusrqdu444/Whatsapp-Boruto-server-.git
   cd Whatsapp-Boruto-server-
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the example:
   ```
   cp .env.example .env
   ```
   
4. Update the `.env` file with your PostgreSQL credentials.

5. Run database migrations:
   ```
   npm run db:push
   ```

6. Start the application:
   ```
   npm run dev
   ```

### Obtaining creds.json

The `creds.json` file contains authentication credentials for your WhatsApp account. You'll need to generate this file once using a separate WhatsApp client library that supports saving credentials.

## Deployment

### Deploying to Render.com

1. Connect your GitHub repository to Render
2. Configure a new Web Service with the following settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   - Add the environment variables from your `.env` file

### Deploying to Heroku

1. Create a new app on Heroku
2. Connect to your GitHub repository
3. Add the PostgreSQL add-on
4. Configure the environment variables
5. Deploy the application

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Notes

- This application is for educational purposes only
- Please use responsibly and comply with WhatsApp's terms of service