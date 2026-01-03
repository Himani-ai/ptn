# Environment Variables Setup Guide

## Quick Setup

### Step 1: Copy the Example File
```bash
cd backend
cp .env.example .env
```

### Step 2: Get Gmail App Password

Follow these steps to get your Gmail App Password:

1. **Go to Google Account Security:**
   - Visit: https://myaccount.google.com/security

2. **Enable 2-Step Verification (if not already enabled):**
   - Look for "2-Step Verification"
   - Click it and follow the prompts
   - Confirm your phone number

3. **Generate App Password:**
   - Visit: https://myaccount.google.com/apppasswords
   - You may need to sign in again
   - Select **App**: Mail
   - Select **Device**: Other (custom name)
   - Enter: "PTN Website"
   - Click **Generate**
   - Google will show a 16-character password like: `xxxx xxxx xxxx xxxx`

4. **Copy the password** (remove spaces if any)

### Step 3: Update .env File

Open `backend/.env` and update these fields:

```env
PORT=5000
MONGO_URI=

EMAIL_USER=pictournic@gmail.com
EMAIL_PASSWORD=your-16-character-password-here
```

Replace `your-16-character-password-here` with the password from Step 2.

### Step 4: Restart Backend Server

```bash
cd backend
npm start
```

You should see:
```
Server listening 5000
```

## Testing Locally

1. Go to http://localhost:5173 (frontend)
2. Fill the "Plan Your Journey" form
3. Click "Send Enquiry"
4. Check your email at pictournic@gmail.com

## For Render Deployment

1. Log in to https://dashboard.render.com
2. Select your backend service (ptn-backend or similar)
3. Go to **Settings** → **Environment**
4. Add these variables:
   - Key: `EMAIL_USER` | Value: `pictournic@gmail.com`
   - Key: `EMAIL_PASSWORD` | Value: `your-app-password`
5. Click **Save**
6. Your service will auto-redeploy

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Less secure app access is disabled" | Use App Passwords instead (follow steps above) |
| Email not sending | Check that 2-Step Verification is enabled |
| Backend won't start | Make sure you have all required dependencies: `npm install` |
| "ECONNREFUSED" errors | Make sure backend is running on port 5000 |

## Environment Variables Reference

| Variable | Value | Required | Example |
|----------|-------|----------|---------|
| PORT | Server port | No | 5000 |
| MONGO_URI | MongoDB connection string | No | mongodb://localhost:27017/ptn |
| EMAIL_USER | Gmail address | Yes* | pictournic@gmail.com |
| EMAIL_PASSWORD | Gmail App Password | Yes* | xxxxxxxxxxxx |

*Required only if you want email notifications enabled

## Security Notes

- ⚠️ Never commit `.env` file to Git
- ⚠️ Keep your Gmail App Password private
- ✅ The `.env` file is already in `.gitignore`
- ✅ For Render, use the dashboard to set env variables (not in code)

## Questions?

If emails still aren't working:
1. Check backend console logs for errors
2. Verify 2-Step Verification is ON
3. Verify the App Password is correct (no extra spaces)
4. Check that EMAIL_PASSWORD is set in your .env file
