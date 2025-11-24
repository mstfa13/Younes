# 🚀 Quick Start: Connect Your Form to Google Sheets

## ✅ What You Need to Do RIGHT NOW

### STEP 1: Set Up Your Google Sheet (2 minutes)

1. **Open your Google Sheet** where you want form data
2. **Add these headers in Row 1** (copy-paste exactly):
   ```
   Timestamp | Name | Phone | Email | Address | Current Job | Company | Years of Experience | University | Graduation Year | Major | English Level | How Did You Hear | Setup Preference | Motivation
   ```

### STEP 2: Open Apps Script (1 minute)

1. In your Google Sheet, click: **Extensions** → **Apps Script**
2. You'll see a code editor open
3. **Delete everything** in the editor (select all and delete)

### STEP 3: Paste the Apps Script Code (1 minute)

**Copy this ENTIRE code and paste it:**

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
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
    
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data added successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Apps Script is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### STEP 4: Deploy the Web App (3 minutes)

1. Click the **Deploy** button (top right corner)
2. Click **New deployment**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Fill in:
   - **Description**: "Form Handler"
   - **Execute as**: **Me**
   - **Who has access**: **Anyone** ⚠️ IMPORTANT!
6. Click **Deploy**
7. Click **Authorize access**
8. Choose your Google account
9. You might see a warning - click **Advanced**
10. Click **Go to [project name] (unsafe)**
11. Click **Allow**

### STEP 5: Copy Your Web App URL 📋

After deployment, you'll see a URL like this:
```
https://script.google.com/macros/s/AKfycby_SOME_RANDOM_CHARACTERS_HERE/exec
```

**COPY THIS ENTIRE URL!** You'll need it in the next step.

---

## ✅ NOW - Send Me Your Web App URL

**Reply with your Web App URL and I'll update your form code immediately!**

Format should be:
```
https://script.google.com/macros/s/AKfycby.../exec
```

---

## 🔧 What I'll Do After You Send the URL

1. Update `RegistrationForm.jsx` with your URL
2. Replace the fake submission with real Google Sheets connection
3. Test that everything works

---

## 🎯 Expected Result

After I update the code:
- User fills form on your website
- Clicks "Submit"
- Data instantly appears in your Google Sheet
- User sees success message
- You get notified (optional)

---

## ❓ Troubleshooting

### "I don't see the Deploy button"
- Make sure you're in the Apps Script editor (Extensions > Apps Script)
- The Deploy button is in the top-right corner

### "It says I need permissions"
- Click "Review Permissions"
- Choose your Google account
- Click "Advanced" then "Go to [project]"
- Click "Allow"

### "The Web App URL doesn't work"
- Make sure you selected "Anyone" for "Who has access"
- Try re-deploying the web app

### "I'm stuck"
- Take a screenshot of where you're stuck
- Send it to me and I'll help immediately

---

## 📱 Quick Summary

1. ✅ Add headers to Google Sheet
2. ✅ Open Apps Script
3. ✅ Paste the code
4. ✅ Deploy as Web App (Execute as: Me, Access: Anyone)
5. ✅ Copy the Web App URL
6. ✅ Send URL to me
7. ✅ I update your form
8. ✅ Test it works!

**Total Time: ~7 minutes**

---

## 🎉 Ready?

Start with Step 1 and send me your Web App URL when you get to Step 5!
