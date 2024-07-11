import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mgvwvvaq");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }
    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.5rem', lineHeight: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label htmlFor="email">
                Email Address:
            </label>
            <input
                id='email'
                type="email"
                name='email'
                placeholder='Your Email Address'
                required
                minLength={3}
                maxLength={60} />

            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message"
                required
                placeholder='Your message'
                cols={30}
                rows={10}
            ></textarea>

            <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors} />

            <button type='submit' disabled={state.submitting}>
                Submit
            </button>
        </form>
    )
}

export default ContactForm