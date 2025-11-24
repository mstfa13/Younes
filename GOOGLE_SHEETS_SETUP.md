# Google Sheets Integration Guide for TechBytes Forms

## Step-by-Step Setup Instructions

### Part 1: Set Up Google Apps Script Web App

#### 1. Open Your Google Sheet
- Go to your Google Sheet where you want to collect form submissions
- Make sure you have column headers in the first row:
  - Column A: `Timestamp`
  - Column B: `Name`
  - Column C: `Phone`
  - Column D: `Email`
  - Column E: `Address`
  - Column F: `Current Job`
  - Column G: `Company`
  - Column H: `Years of Experience`
  - Column I: `University`
  - Column J: `Graduation Year`
  - Column K: `Major`
  - Column L: `English Level`
  - Column M: `How Did You Hear`
  - Column N: `Setup Preference`
  - Column O: `Motivation`

#### 2. Open Apps Script Editor
- Click on **Extensions** > **Apps Script**
- Delete any existing code in the editor

#### 3. Copy This Apps Script Code

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Create timestamp
    var timestamp = new Date();
    
    // Prepare the row data in order matching your columns
    var rowData = [
      timestamp,
      data.name || '',
      data.phone || '',
      data.email || '',
      data.address || '',
      data.currentJob || '',
      data.company || '',
      data.yearsOfExperience || '',
      data.university || '',
      data.graduationYear || '',
      data.major || '',
      data.englishLevel || '',
      data.howDidYouHear || '',
      data.setupPreference || '',
      data.motivation || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data added successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify deployment
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Apps Script is running correctly'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

#### 4. Deploy the Web App
1. Click on the **Deploy** button (top right) > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Fill in the details:
   - **Description**: "TechBytes Registration Form Handler" (or any description)
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone** (this is important!)
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** (if you see a warning)
9. Click **Go to [Your Project Name] (unsafe)**
10. Click **Allow**
11. **IMPORTANT**: Copy the **Web App URL** that appears - it will look like:
    ```
    https://script.google.com/macros/s/AKfycby.../exec
    ```
12. **Save this URL** - you'll need it in the next step!

---

### Part 2: Update Your React Registration Form

Now I'll update your RegistrationForm.jsx to connect to Google Sheets.

#### What You Need:
- The Web App URL you copied from Step 1.4.11

#### I'll modify the form to:
1. Remove the simulated submission
2. Add real Google Sheets submission
3. Add proper error handling
4. Show success/error messages
5. Handle file uploads (resume) separately if needed

---

### Part 3: Testing the Integration

#### Test Steps:
1. Fill out the registration form on your website
2. Click Submit
3. Check your Google Sheet - you should see a new row with the data
4. The timestamp should be automatically added

#### Troubleshooting:
- **Error "Script has not been published"**: Go back to Apps Script and ensure you deployed as "Anyone" can access
- **CORS Error**: This is normal in development. The form will work in production
- **No data appearing**: Check the Apps Script logs (View > Logs in Apps Script editor)
- **Permission denied**: Re-deploy the web app and authorize access again

---

### Part 4: Optional - Handle Resume/File Uploads

**Note**: Google Apps Script cannot receive file uploads directly via POST. You have two options:

#### Option A: Skip Resume Upload to Google Sheets
- Store resume file name or URL in the sheet
- Use a separate service (like Cloudinary, AWS S3) for file storage
- Save the file URL in the Google Sheet

#### Option B: Convert Resume to Base64 (Not Recommended for Large Files)
- Convert file to base64 string in React
- Send base64 string to Google Sheets
- This increases payload size significantly

**Recommended**: For now, we'll save a note that "Resume submitted" and you can handle resume collection via email or separate upload service.

---

### Part 5: Security Considerations

#### Current Setup:
- ✅ Anyone can submit to your form (which is what you want)
- ✅ Data is stored in your private Google Sheet
- ⚠️ Web App URL is public but doesn't expose your sheet

#### Recommendations:
1. **Rate Limiting**: Add Apps Script code to limit submissions per IP (optional)
2. **Data Validation**: Add validation in Apps Script to prevent spam
3. **Honeypot Field**: Add hidden field to catch bots
4. **ReCAPTCHA**: Add Google ReCAPTCHA for extra security (optional)

---

## Quick Reference

### Apps Script Web App URL Format:
```
https://script.google.com/macros/s/[DEPLOYMENT_ID]/exec
```

### Form Submission Code Pattern:
```javascript
const response = await fetch('YOUR_WEB_APP_URL', {
  method: 'POST',
  mode: 'no-cors', // Important for Google Apps Script
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

### Expected Sheet Columns:
1. Timestamp (auto-generated)
2. Name
3. Phone
4. Email
5. Address
6. Current Job
7. Company
8. Years of Experience
9. University
10. Graduation Year
11. Major
12. English Level
13. How Did You Hear
14. Setup Preference
15. Motivation

---

## Ready to Implement?

Once you've completed Part 1 (Apps Script deployment) and have your Web App URL, I'll update your RegistrationForm.jsx component to connect to Google Sheets.

**Please provide me with:**
1. ✅ Confirmation that you've deployed the Apps Script
2. ✅ Your Web App URL (the one ending in `/exec`)

Then I'll update the form code for you!
