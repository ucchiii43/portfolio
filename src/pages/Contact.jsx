// TODO: GoogleフォームのURLを設定してください
const CONTACT_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe8dq_dz9O2UVAJz-TR9KE1EvhMEctM7V9a0BTbtsgACLC8ig/viewform?usp=header'

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>お気軽にご連絡ください。</p>
      <a
        href={CONTACT_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        お問い合わせフォームへ
      </a>
    </section>
  )
}

export default Contact
