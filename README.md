# WhatsApp Automation Server

A web-based WhatsApp messaging tool that uses creds.json authentication to send messages to contacts or groups without QR code scanning.

## Features

- **No QR Code Scanning**: Uses creds.json authentication to connect to WhatsApp
- **Flexible Messaging**: Send to individuals or groups
- **Message Input Options**: Type messages directly or upload a file
- **Customizable Delay**: Set delay between messages to avoid rate limiting
- **Continuous Messaging**: Enable non-stop messaging with configurable intervals
- **Retry Mechanism**: Automatically retry failed messages
- **Cloud Deployment**: Ready to deploy on Render.com or Heroku

## How to Use

1. **Obtain creds.json**:
   - You need a valid WhatsApp credentials file (creds.json) from a previous session.
   - This file contains your authenticated session data so you can connect without QR code scanning.

2. **Start the Application**:
   - For local development: `npm run dev`
   - For production: `npm run build` followed by `npm run start`

3. **Configure and Send Messages**:
   - Upload your creds.json file
   - Enter the target phone number (including country code without '+' or spaces)
   - Select target type (individual or group)
   - Enter message or upload message file
   - Configure optional settings (delay, retries, continuous messaging)
   - Click "Start Messaging" button

4. **Monitor Status**:
   - The application provides real-time status updates
   - Check the log section for detailed information about message delivery

## Deployment Options

### Deploy to Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

The repository includes a render.yaml file that configures:
- Web service with proper build settings
- PostgreSQL database for session storage
- Environment variables

### Deploy to Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

The repository includes a Procfile and necessary configuration for Heroku deployment.

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string (provided by Render or Heroku)
- `PORT`: Port for the server (defaults to 3000 if not specified)
- `NODE_ENV`: Environment setting (production/development)

## Technical Architecture

- **Frontend**: React with TailwindCSS and shadcn/ui components
- **Backend**: Express.js REST API
- **Database**: PostgreSQL with Drizzle ORM
- **WhatsApp Integration**: Baileys library with creds.json authentication

## Security Considerations

- This tool requires a valid WhatsApp credentials file which contains sensitive authentication data.
- Never share your creds.json file as it could allow others to access your WhatsApp account.
- Use this tool responsibly and in compliance with WhatsApp's terms of service.
- Avoid sending spam or bulk messages that could get your number blocked.

## License

MIT