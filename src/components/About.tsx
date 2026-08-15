import { useLanguage } from '../i18n/LanguageProvider';
import { profile } from '../content/profile';
import { Section } from './Section';

export function About() {
  const { t, tr, trl } = useLanguage();

  const facts = [
    { label: t('about.location'), value: tr(profile.facts.location) },
    { label: t('about.level'), value: tr(profile.facts.level) },
    { label: t('about.employment'), value: tr(profile.facts.employment) },
    { label: t('about.languages'), value: tr(profile.facts.languages) },
  ];

  return (
    <Section id="about" title={t('about.title')} subtitle={t('about.subtitle')}>
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          {trl(profile.about).map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="card h-fit p-6">
          <h3 className="mb-5 font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-500">
            {t('about.factsTitle')}
          </h3>
          <dl className="space-y-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-medium text-slate-500 dark:text-slate-500">
                  {fact.label}
                </dt>
                <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}
