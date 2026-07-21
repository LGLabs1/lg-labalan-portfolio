function Contact() {
  const email = 'you@example.com';

  return (
    <div className="space-y-8">
      <div>
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          I&apos;m currently open to new opportunities, collaborations, or just
          friendly chats. The best way to reach me is via email, but you can
          also find me on social media.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="text-base font-semibold mb-1">Email</h3>
            <a
              href={`mailto:${email}`}
              className="text-brand-400 hover:text-brand-300 break-all"
            >
              {email}
            </a>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-1">Location</h3>
            <p className="text-slate-300">Your City, Your Country</p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-1">Links</h3>
            <ul className="space-y-1 text-slate-300">
              <li>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-300">
          <p className="mb-4 font-medium text-slate-100">Quick message</p>
          <p className="mb-3">
            If you prefer, you can send me a short email with:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-5">
            <li>Who you are</li>
            <li>What you&apos;re looking for</li>
            <li>Any links to your project or job description</li>
          </ul>
          <p>
            I&apos;ll do my best to get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
