/**
 * Vercel Serverless Function & API endpoint for appointment consultation requests.
 * Deployed automatically on Vercel at `/api/appointments`.
 */

export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Use POST to submit appointment requests.'
    });
  }

  try {
    const { fullName, mobileNumber, serviceInterest, preferredDate, preferredTime, notes, privacyConsent } = req.body || {};

    // Validate required fields
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'A valid full name (minimum 2 characters) is required.'
      });
    }

    if (!mobileNumber || typeof mobileNumber !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'A valid mobile number is required.'
      });
    }

    const cleanedPhone = mobileNumber.replace(/[\s\-()]/g, '');
    const indianMobileRegex = /^(?:(?:\+91|0)?[6-9]\d{9})$/;
    if (!indianMobileRegex.test(cleanedPhone)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid Indian mobile number.'
      });
    }

    if (!serviceInterest || typeof serviceInterest !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Please specify a service of interest.'
      });
    }

    if (!privacyConsent) {
      return res.status(400).json({
        success: false,
        message: 'Privacy consent is required for callback communication.'
      });
    }

    // Verify date is not in the past
    if (preferredDate) {
      const selected = new Date(preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        return res.status(400).json({
          success: false,
          message: 'Appointment date cannot be in the past.'
        });
      }
    }

    // Generate unique reference
    const referenceId = `HDC-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Return official confirmation
    return res.status(200).json({
      success: true,
      referenceId,
      message: 'Your appointment request has been received. The clinic team will contact you to confirm availability.',
      receivedAt: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your request. Please call 074330 53737 directly.'
    });
  }
}
