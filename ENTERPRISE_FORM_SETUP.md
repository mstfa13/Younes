# 🏢 Business/Enterprise Form - Google Sheets Setup

## ✅ STEP-BY-STEP GUIDE

### STEP 1: Create a NEW Google Sheet for Business Applications

1. **Create a new Google Sheet** (separate from your individual registrations)
2. **Name it**: "TechBytes - Enterprise Applications" (or any name you prefer)
3. **Add these headers in Row 1** (copy-paste exactly):

```
Timestamp | Company Name | Industry | Contact Name | Job Title | Email | Phone | Company Size | Training Needs | Number of Employees | Timeline | Message
```

### STEP 2: Open Apps Script

1. In your NEW Google Sheet, click: **Extensions** → **Apps Script**
2. Delete any existing code
3. You'll paste NEW code (below)

### STEP 3: Paste This Apps Script Code for Business Form

**Copy this ENTIRE code:**

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    var rowData = [
      timestamp,
      data.companyName || '',
      data.industry || '',
      data.contactName || '',
      data.jobTitle || '',
      data.email || '',
      data.phone || '',
      data.companySize || '',
      data.trainingNeeds || '',
      data.numberOfEmployees || '',
      data.timeline || '',
      data.message || ''
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Enterprise application submitted successfully'
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
      'message': 'Enterprise Apps Script is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### STEP 4: Deploy This Web App

1. Click **Deploy** button (top right)
2. Click **New deployment**
3. Click gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Fill in:
   - **Description**: "Enterprise Form Handler"
   - **Execute as**: **Me**
   - **Who has access**: **Anyone** ⚠️
6. Click **Deploy**
7. Click **Authorize access**
8. Choose your Google account
9. Click **Advanced** → **Go to [project]** → **Allow**

### STEP 5: Copy Your Enterprise Web App URL

You'll get a URL like:
```
https://script.google.com/macros/s/AKfycby_DIFFERENT_CHARACTERS_FOR_ENTERPRISE/exec
```

**COPY THIS URL!**

---

## ✅ Now Send Me Your Enterprise Web App URL

**Reply with your Enterprise/Business form Web App URL and I'll update the EnterpriseForm.jsx!**

---

## 📊 What You'll Have After Both Forms Are Connected

### Individual Registration Form:
- ✅ Connected to your first Google Sheet
- ✅ Collects: Name, Phone, Email, Education, Experience, etc.
- ✅ URL: Already set up! ✅

### Enterprise/Business Form:
- ⏳ Will connect to your second Google Sheet
- ⏳ Collects: Company Name, Industry, Contact Info, Training Needs, etc.
- ⏳ Waiting for your URL...

---

## 🎯 Quick Checklist

- [x] Individual form connected ✅
- [ ] Create new Google Sheet for Enterprise
- [ ] Add column headers
- [ ] Deploy Enterprise Apps Script
- [ ] Copy Enterprise Web App URL
- [ ] Send URL to me
- [ ] I update EnterpriseForm.jsx
- [ ] Test both forms!

---

## 💡 Tips

- Use **different Google Sheets** for individuals and businesses (easier to manage)
- The deployment process is exactly the same
- You can have multiple Apps Script deployments
- Each form goes to its own sheet

---

## 🚀 Ready?

Complete Steps 1-5 above and send me your Enterprise Web App URL!
