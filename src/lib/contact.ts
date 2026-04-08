'use server'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Validate
  if (!name || !email || !subject || !message) {
    return { error: 'All fields are required.' }
  }

  // In production, this would use Resend to send the email
  // For now, just validate and return success
  try {
    // TODO: Add Resend integration when API key is available
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({...})
    console.log('Contact form submitted:', { name, email, subject })
    return { success: true }
  } catch {
    return { error: 'Something went wrong. Please try again.' }
  }
}
