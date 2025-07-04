# 📧 Ethereal Email Account Generator

Simple Node.js script to generate a temporary Ethereal email account for testing purposes using Nodemailer.

## 🇺🇸 English

### 🛠 Requirements

- Node.js >= 14
- NPM

### 📦 Install dependencies

```bash
npm install
```

🚀 Run the script
Run the script using:

```
node createEtherealAccount.js
```

It will print to the console:

A temporary email address

SMTP credentials (host, port, user, pass)

A web URL to preview the inbox

🧪 Use it in development
You can use the generated credentials in .env files of your apps to send test emails using Nodemailer:

```
EMAIL_HOST=smtp.ethereal.email
EMAIL_PORT=587
EMAIL_USER=your_generated_user@ethereal.email
EMAIL_PASSWORD=your_generated_password
```