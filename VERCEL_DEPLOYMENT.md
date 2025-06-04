# Vercel Deployment Guide

## Setting Up Environment Variables on Vercel Dashboard

### Step 1: Access Your Vercel Project
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Find and click on your **Portfolio** project

### Step 2: Navigate to Environment Variables
1. Click on **Settings** tab in your project dashboard
2. Click on **Environment Variables** in the left sidebar

### Step 3: Add Your Web3Forms Key
1. Click **Add New** button
2. Fill in the details:
   - **Name**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: `8548bbef-eed7-4f56-a5c2-8af538e5aee9`
   - **Environments**: Check all boxes (Production, Preview, Development)
3. Click **Save**

### Step 4: Redeploy Your Application
1. Go to **Deployments** tab
2. Click the **...** menu on your latest deployment
3. Click **Redeploy** to apply the new environment variable

## Alternative: Using Vercel CLI (Advanced)

If you prefer using the command line:

```bash
# Link your local project to Vercel (one-time setup)
vercel link

# Add environment variable
vercel env add VITE_WEB3FORMS_ACCESS_KEY

# When prompted, enter: 8548bbef-eed7-4f56-a5c2-8af538e5aee9
# Select environments: Production, Preview, Development

# Deploy with new environment variable
vercel --prod
```

## Verification

After deployment, you can verify the environment variable is working by:

1. **Check the contact form** on your live site
2. **Submit a test message** to see if emails are sent
3. **Check browser console** for any environment variable errors
4. **Check Vercel deployment logs** if issues persist

## Security Notes

✅ **Safe to expose**: `VITE_` prefixed variables are meant to be public  
✅ **Web3Forms key**: Safe to use client-side (designed for frontend)  
⚠️ **Domain restrictions**: Consider adding domain restrictions in Web3Forms dashboard for extra security

## Troubleshooting

**If the contact form doesn't work after deployment:**
1. Check that the environment variable is set correctly
2. Ensure you redeployed after adding the variable
3. Check browser network tab for API request errors
4. Verify your Web3Forms key is still active

**If you can't find your project on Vercel:**
1. Make sure you're signed in with the correct GitHub account
2. Check if the repository is connected to Vercel
3. Import the project manually if needed: **Add New** → **Project** → **Import Git Repository**

## Next Steps

Once deployed:
- ✅ Test the contact form on your live site
- ✅ Monitor emails in your Gmail inbox
- ✅ Consider setting up domain restrictions in Web3Forms
- ✅ Update your portfolio README with the live URL
