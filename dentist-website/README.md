# Bright Smile Dental - Professional Website

A modern, responsive website for a dental practice featuring all essential sections and services.

## Features

✨ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

📱 **Mobile Navigation** - Hamburger menu for mobile devices

🎨 **Modern Design** - Clean, professional, and user-friendly interface

📋 **Complete Sections**:
- Hero section with call-to-action
- Services showcase (6 main dental services)
- About practice and team information
- Patient testimonials with ratings
- Contact form and appointment booking
- Location, hours, and contact information
- Social media links

⚡ **Interactive Features**:
- Smooth scrolling navigation
- Scroll animations for cards
- Form submission handling
- Hover effects and transitions

## Files Included

- **index.html** - Main HTML structure
- **styles.css** - Complete styling and responsive design
- **script.js** - Interactive features and form handling
- **README.md** - Documentation

## How to Use

1. Open `index.html` in your browser to view the website
2. Customize the content:
   - Replace "Bright Smile Dental" with your practice name
   - Update address, phone, and email
   - Add your team member names and photos
   - Modify testimonials and services as needed

## Customization

### Change Practice Name
Search for "Bright Smile Dental" and replace with your practice name

### Update Contact Information
- Address: Line 168 in index.html
- Phone: Line 172 in index.html
- Email: Line 176 in index.html
- Hours: Line 180 in index.html

### Modify Colors
Edit the CSS variables in `styles.css` (lines 8-15):
```css
--primary-color: #0066cc;
--secondary-color: #00a8e8;
--accent-color: #00d4ff;
```

### Add Team Photos
Replace placeholder images (line 151) with actual team member photos:
```html
<img src="your-image-url.jpg" alt="Name">
```

### Update Services
Edit the services cards (lines 83-108) to match your offered services

## Deployment

To deploy this website:

1. **GitHub Pages** (Free)
   - Push files to GitHub
   - Go to repository Settings > Pages
   - Select the branch and save

2. **Netlify** (Free tier available)
   - Drag and drop your files or connect GitHub
   - Your site goes live instantly

3. **Traditional Web Hosting**
   - Upload files via FTP
   - Point domain to your host

## Form Handling

Currently, the form shows a success message. To actually send appointment requests:

1. Use a service like **Formspree**, **Netlify Forms**, or **EmailJS**
2. Update the form submission in `script.js`
3. Add backend email handling

## Future Enhancements

- Online appointment booking system integration
- Patient portal
- Blog section
- Payment processing
- SEO optimization
- Email notifications

## License

Free to use and modify for your dental practice.