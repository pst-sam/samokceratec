import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mgvwvvaq");
    if (state.succeeded) {
        return <div style={{ fontWeight: 'bold', display: 'flex', margin: '3rem', justifyContent: 'center' }}>Thank you for contacting us!</div>
    }
    return (
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '25px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Contact Us</h2>

            <form onSubmit={handleSubmit} style={{ maxWidth: 'auto', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.5rem', lineHeight: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    id='email'
                    type="email"
                    name='email'
                    placeholder='Your email'
                    required
                    minLength={3}
                    maxLength={60}
                    style={{
                        width: 'auto', color: 'black', borderWidth: '2px', borderStyle: 'solid', borderRadius: '12px', borderColor: 'rgb(15 118 110)', padding: '10px'
                    }}
                />

                <label htmlFor="message" >Message:</label>
                <textarea
                    name="message"
                    id="message"
                    required
                    placeholder='Your message'
                    cols={30}
                    rows={10}
                    style={{
                        width: 'auto', color: 'black', borderWidth: '2px', borderStyle: 'solid', borderRadius: '12px', borderColor: 'rgb(15 118 110)', padding: '10px'
                    }}
                ></textarea>

                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors} />

                <button type='submit' disabled={state.submitting}
                    style={{
                        width: 'auto', color: 'white', backgroundColor: 'rgb(15 118 110)', borderWidth: '1px', borderStyle: 'solid', borderRadius: '12px', borderColor: 'rgb(15 23 42 / var(--tw-border-opacity))', textAlign: 'center', padding: '5px'
                    }}>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default ContactForm