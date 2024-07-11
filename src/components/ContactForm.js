import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mgvwvvaq");
    if (state.succeeded) {
        return <p style={{ fontWeight: 'bold' }}>Thanks for contacting us!</p>
    }
    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.5rem', lineHeight: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold' }}>
                Email Address:
            </label>
            <input
                id='email'
                type="email"
                name='email'
                placeholder='Your Email Address'
                required
                minLength={3}
                maxLength={60}
                style={{
                    width: 'full', color: 'black', borderWidth: '2px', borderStyle: 'solid', borderRadius: '12px', borderColor: 'green', textAlign: 'center', padding: '5px'
                }}
            />

            <label htmlFor="message" style={{ fontWeight: 'bold' }}>Message:</label>
            <textarea
                name="message"
                id="message"
                required
                placeholder='Your message'
                cols={30}
                rows={10}
                style={{
                    width: 'full', color: 'black', borderWidth: '2px', borderStyle: 'solid', borderRadius: '12px', borderColor: 'green', textAlign: 'center', padding: '5px'
                }}
            ></textarea>

            <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors} />

            <button type='submit' disabled={state.submitting}
                style={{
                    width: 'full', color: 'white', backgroundColor: 'green', borderWidth: '1px', borderStyle: 'solid', borderRadius: '12px', borderColor: 'rgb(15 23 42 / var(--tw-border-opacity))', textAlign: 'center', padding: '5px', fontWeight: 'bold'
                }}>
                Submit
            </button>
        </form>
    )
}

export default ContactForm