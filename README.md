# domba
domba is your virtual ai assistant for your web powered by gemini using gemini js sdk and gemini API 
# Wisdom Cafe - AI-Powered Website

A beautiful, modern website for Wisdom Cafe featuring an AI-powered chat assistant powered by Google's Gemini AI.

## Features

- 🌟 **Modern Glassmorphism Design**: Beautiful, responsive UI with glassmorphism effects
- 🤖 **AI Chat Assistant**: Powered by Google Gemini AI for intelligent customer support
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ☕ **Cafe Information**: Complete menu, hours, and contact information
- 🎨 **Beautiful Animations**: Smooth transitions and interactive elements

## Setup Instructions

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key

### 2. Configure the API Key

1. Open `config.js` in your project
2. Replace `'YOUR_API_KEY_HERE'` with your actual API key:

```javascript
const CONFIG = {
    GEMINI_API_KEY: 'your-actual-api-key-here',
    // ... other config
};
```

### 3. Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Upload all project files to the repository
3. Go to repository Settings → Pages
4. Select "GitHub Actions" as the source
5. The website will be automatically deployed when you push to the main branch

## File Structure

```
├── index.html          # Main website file
├── config.js           # Configuration file (API keys, cafe info)
├── metadata.json       # Website metadata
├── cookbook.json       # Gemini cookbook reference
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment workflow
└── README.md          # This file
```

## Customization

### Cafe Information
Edit the `CONFIG` object in `config.js` to customize:
- Cafe name and description
- Contact information (WhatsApp, Instagram)
- Operating hours
- Menu items
- AI assistant behavior

### Styling
The website uses CSS with glassmorphism effects. You can customize:
- Colors and themes
- Fonts and typography
- Layout and spacing
- Animations and transitions

## AI Assistant Features

The AI assistant is specifically trained for Wisdom Cafe and can help with:
- Menu inquiries
- Coffee recommendations
- Reservation information
- Operating hours
- General cafe information

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Security Notes

- Never commit your actual API key to version control
- Use environment variables for production deployments
- The API key is client-side, so consider rate limiting for production use

## Support

For issues or questions:
- Check the browser console for error messages
- Verify your API key is correct
- Ensure you have internet connectivity
- Check GitHub Pages deployment status

## License

This project is open source and available under the MIT License.
