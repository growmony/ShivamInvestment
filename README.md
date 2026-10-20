# Shivam Investment — GitHub Pages Website

A responsive bilingual (Hindi + English) static website with:
- Home, About Us, Calculators, Contact Us, Feedback pages
- SIP, Lumpsum, and annual Step-Up SIP calculators
- Responsive mobile navigation and light scroll animations
- Contact and feedback forms configured to send email through FormSubmit
- Privacy and Terms/disclaimer pages

## 1. Add your contact details

Open `script.js` and replace:

```js
const CONTACT_EMAIL = "YOUR_EMAIL_HERE";
```

Never add passwords, API secrets, or other credentials to this public repository.

## 2. Enable email forms

1. Replace `YOUR_EMAIL_HERE` in `script.js` with the email where you want to receive contact and feedback messages.
2. Upload the site and open the Contact page on the published HTTPS website.
3. Submit a test form. FormSubmit may send a verification email to the receiving address; open it and confirm activation.
4. Test both Contact Us and Feedback forms again. Check spam/junk if needed.
5. If AJAX delivery is blocked or FormSubmit changes its current requirements, follow the provider's current instructions at https://formsubmit.co/ and update the form integration.

Form submissions are handled by a third-party service, not stored in a private database by this static site. Review provider terms and privacy practices before using it with visitors.

## 3. Publish using GitHub Pages

1. Sign in at https://github.com/ and create a new repository named `shivam-investment`.
2. For the simplest free GitHub Pages setup, make the repository **Public**.
3. Upload all website files from this folder to the repository's root (the files should not remain nested inside another folder).
4. Open repository **Settings → Pages**.
5. Under Build and deployment, select **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then click **Save**.
7. Wait a few minutes and open the URL GitHub Pages shows, usually `https://YOUR-USERNAME.github.io/shivam-investment/`.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Important before publishing
- Replace the contact email placeholder.
- Verify your ARN and all professional/regulatory disclosures.
- Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully.
- Calculator values are illustrative estimates only and are not guaranteed. Taxes, fees and inflation are not included.
- Do not collect PAN, bank details, OTPs, passwords, folio numbers or other sensitive information through these public forms.
- The website uses Google Fonts from an external CDN; if you prefer no external requests, remove the `@import` line from `style.css`.
