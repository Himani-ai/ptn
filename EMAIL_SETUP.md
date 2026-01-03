# Email Setup Instructions

To enable email notifications for enquiry form submissions, follow these steps:

## Gmail App Password Setup

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Find "2-Step Verification" and turn it ON

2. **Generate App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - You might need to sign in again
   - Select "Mail" as the app
   - Select "Other" as the device and name it "PTN Website"
   - Click "Generate"
   - Google will show you a 16-character password

3. **Add to Environment Variables**:
   - Create a `.env` file in the `backend/` directory (if not exists)
   - Add the following lines:
   ```
   EMAIL_USER=pictournic@gmail.com
   EMAIL_PASSWORD=your-16-character-app-password
   ```
   - Replace `your-16-character-app-password` with the actual password from step 2

4. **Restart the Backend Server**:
   ```bash
   cd backend
   npm start
   ```

## Testing

After setup, when someone submits the "Plan Your Journey" enquiry form:
- The details will be saved to `backend/contacts.json`
- An email will be sent to `pictournic@gmail.com` with all the enquiry details

## For Render Deployment

When deploying to Render:
1. Go to your Render dashboard
2. Select your backend service
3. Go to "Environment" tab
4. Add the environment variables:
   - `EMAIL_USER`: pictournic@gmail.com
   - `EMAIL_PASSWORD`: your-app-password
5. Save and redeploy

## Troubleshooting

- **"Less secure app access"**: Gmail no longer supports this. Use App Passwords instead.
- **Still not working?**: Check that 2-Step Verification is enabled first.
- **Email not sending**: Check the backend console logs for error messages.
