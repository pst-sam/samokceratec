import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mgvwvvaq");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address:
            </label>
            <input
                id='email'
                type="email"
                name='email'
                placeholder='Your Email Address'
                required />

            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message"
                required
                placeholder='Your message'
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