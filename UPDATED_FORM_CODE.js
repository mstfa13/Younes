// UPDATED RegistrationForm.jsx with Google Sheets Integration
// Replace the handleSubmit function with this code after you get your Web App URL

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Prepare form data for Google Sheets
    const submissionData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      currentJob: formData.currentJob,
      company: formData.company,
      yearsOfExperience: formData.yearsOfExperience,
      university: formData.university,
      graduationYear: formData.graduationYear,
      major: formData.major === 'Other' ? formData.majorOther : formData.major,
      englishLevel: formData.englishLevel,
      howDidYouHear: formData.howDidYouHear,
      setupPreference: formData.setupPreference,
      motivation: formData.motivation
    };

    // TODO: Replace this URL with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE'; // e.g., 'https://script.google.com/macros/s/AKfycby.../exec'

    // Submit to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData)
    });

    // Note: With 'no-cors' mode, we can't read the response
    // We assume success if no error is thrown
    
    // Show success message
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Optional: Send confirmation email or notification here
    
    // Reset form after 2 seconds and close
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        currentJob: '',
        company: '',
        yearsOfExperience: '',
        university: '',
        graduationYear: '',
        major: '',
        majorOther: '',
        englishLevel: '',
        howDidYouHear: '',
        resume: null,
        setupPreference: '',
        motivation: ''
      });
      if (onClose) onClose();
    }, 2000);

  } catch (error) {
    console.error('Error submitting form:', error);
    setIsSubmitting(false);
    
    // Show error message to user
    alert('There was an error submitting your application. Please try again or contact us directly.');
  }
};

// INSTRUCTIONS:
// 1. Copy the Apps Script code from GOOGLE_SHEETS_SETUP.md
// 2. Deploy it as a Web App in Google Apps Script
// 3. Copy your Web App URL
// 4. Replace 'YOUR_WEB_APP_URL_HERE' above with your actual URL
// 5. Test the form submission
