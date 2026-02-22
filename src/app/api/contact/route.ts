import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, services, budget } = await request.json();

    // Validate required fields
    if (!name || !email || !message || !services || services.length === 0) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Format services list for email
    const servicesList = services.map((service: string) => `• ${service}`).join('<br>');
    
    // Format budget label
    const budgetLabels: Record<string, string> = {
      "<500": "Under $500",
      "500-1000": "$500 - $1,000",
      "1000-3000": "$1,000 - $3,000",
      "3000-5000": "$3,000 - $5,000",
      "5000-10000": "$5,000 - $10,000",
      ">10000": "$10,000+",
      "flexible": "Flexible / Need Consultation"
    };
    
    const budgetLabel = budget ? budgetLabels[budget] || budget : 'Not specified';

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'info.hkartech@gmail.com',
        pass: process.env.EMAIL_PASSWORD, // Use app password here
      },
    });

    // Verify transporter connection
    await transporter.verify();

    // Email options - you'll receive this email
    const mailOptions = {
      from: `"Hk Artech" <${process.env.EMAIL_USER || 'info.hkartech@gmail.com'}>`,
      to: process.env.EMAIL_TO || 'info.hkartech@gmail.com', // Where you want to receive emails
      replyTo: email, // So you can reply directly to the sender
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">
            🚀 New Project Inquiry
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong style="color: #555;">👤 From:</strong> ${name}</p>
            <p><strong style="color: #555;">📧 Email:</strong> <a href="mailto:${email}" style="color: #0070f3;">${email}</a></p>
            <p><strong style="color: #555;">📅 Date:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div style="background-color: #f0f7ff; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0070f3;">
            <h3 style="color: #0070f3; margin-top: 0; margin-bottom: 15px;">📋 Project Details</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555; display: block; margin-bottom: 5px;">Services Required:</strong>
              <div style="background-color: white; padding: 12px; border-radius: 4px;">
                ${servicesList}
              </div>
            </div>
            
            <div>
              <strong style="color: #555; display: block; margin-bottom: 5px;">💰 Estimated Budget:</strong>
              <div style="background-color: white; padding: 12px; border-radius: 4px;">
                ${budgetLabel}
              </div>
            </div>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
            <h3 style="color: #555; margin-top: 0; margin-bottom: 10px;">📝 Message:</h3>
            <p style="line-height: 1.6; color: #333; white-space: pre-wrap; background-color: #fafafa; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #777;">
            <p>This inquiry was sent from your portfolio contact form.</p>
            <p style="margin-top: 5px;">You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
🚀 NEW PROJECT INQUIRY

👤 From: ${name}
📧 Email: ${email}
📅 Date: ${new Date().toLocaleString()}

📋 PROJECT DETAILS
────────────────
Services Required:
${services.map((service: string) => `  • ${service}`).join('\n')}

💰 Budget: ${budgetLabel}

📝 MESSAGE:
────────────────
${message}

────────────────
This inquiry was sent from your portfolio contact form.
You can reply directly to ${email} to respond.
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        message: 'Message sent successfully! I will get back to you soon.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // More specific error messages
    let errorMessage = 'Failed to send email';
    let statusCode = 500;

    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your email configuration.';
    } else if (error.code === 'EENVELOPE') {
      errorMessage = 'Invalid email address provided.';
    } else if (error.message?.includes('ENOTFOUND')) {
      errorMessage = 'Email service not available. Please try again later.';
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}