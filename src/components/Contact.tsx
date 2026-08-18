import { useState, type ComponentType, type FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { profile } from '../content/profile';
import { Section } from './Section';
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, TelegramIcon } from './Icons';

type Status = 'idle' | 'sending' | 'success' | 'error';
type Errors = Partial<Record<'name' | 'email' | 'message', string>>;
type IconComponent = ComponentType<{ className?: string }>;

type ContactItem = {
  href: string;
  label: string;
  value: string;
  Icon: IconComponent;
  copyValue?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactLink({
  href,
  label,
  value,
  Icon,
  copyValue,
}: ContactItem) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  };

  return (
    <li className="flex items-center gap-3">
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer noopener"
        className="hover:border-brand-500/50 flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-slate-200 p-3 transition-colors dark:border-slate-800"
      >
        <span className="bg-brand-500/10 text-brand-600 dark:text-brand-400 grid h-9 w-9 shrink-0 place-items-center rounded-lg">
          <Icon className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs text-slate-500 dark:text-slate-500">{label}</span>
          <span className="block truncate text-sm font-medium text-slate-800 sm:text-base dark:text-slate-200">
            {value}
          </span>
        </span>
      </a>
      {copyValue && (
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? t('contact.copied') : t('contact.copy')}
          title={copied ? t('contact.copied') : t('contact.copy')}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        </button>
      )}
    </li>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});

  const isConfigured = profile.formspreeId.trim().length > 0;

  const contacts = [
    profile.email && {
      href: `mailto:${profile.email}`,
      label: 'Email',
      value: profile.email,
      Icon: MailIcon,
      copyValue: profile.email,
    },
    profile.phone && {
      href: `tel:${profile.phone.replace(/[^\d+]/g, '')}`,
      label: t('contact.phone'),
      value: profile.phone,
      Icon: PhoneIcon,
      copyValue: profile.phone,
    },
    profile.telegram && {
      href: profile.telegram,
      label: 'Telegram',
      value: profile.telegram.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      Icon: TelegramIcon,
    },
    profile.github && {
      href: profile.github,
      label: 'GitHub',
      value: profile.github.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      Icon: GitHubIcon,
    },
    profile.linkedin && {
      href: profile.linkedin,
      label: 'LinkedIn',
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      Icon: LinkedInIcon,
    },
  ].filter(Boolean) as ContactItem[];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = t('contact.required');
    if (!email) nextErrors.email = t('contact.required');
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = t('contact.invalidEmail');
    if (!message) nextErrors.message = t('contact.required');

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (!isConfigured) return;

    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!response.ok) throw new Error(`Formspree ответил ${response.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-slate-900 transition-colors placeholder:text-slate-400 focus:outline-none dark:bg-slate-900 dark:text-white ${
      hasError
        ? 'border-red-500/70'
        : 'border-slate-300 focus:border-brand-500 dark:border-slate-700 dark:focus:border-brand-500'
    }`;

  return (
    <Section id="contact" title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={handleSubmit} noValidate className="card min-w-0 space-y-5 p-5 sm:p-8">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              {t('contact.name')}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={fieldClass(Boolean(errors.name))}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              {t('contact.email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={fieldClass(Boolean(errors.email))}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t('contact.messagePlaceholder')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${fieldClass(Boolean(errors.message))} min-w-0 resize-y`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'sending' || !isConfigured}
            className="bg-brand-600 hover:bg-brand-500 w-full rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'sending' ? t('contact.sending') : t('contact.send')}
          </button>

          <div aria-live="polite">
            {!isConfigured && (
              <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-700 dark:text-amber-400">
                {t('contact.notConfigured')}
              </p>
            )}
            {status === 'success' && (
              <p className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-400">
                {t('contact.success')}
              </p>
            )}
            {status === 'error' && (
              <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-400">
                {t('contact.error')}
              </p>
            )}
          </div>
        </form>

        <div className="min-w-0">
          <h3 className="mb-4 font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-500">
            {t('contact.orDirect')}
          </h3>
          <ul className="space-y-3">
            {contacts.map((contact) => (
              <ContactLink key={contact.label + contact.value} {...contact} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
