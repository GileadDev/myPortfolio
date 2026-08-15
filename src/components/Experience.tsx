import { useLanguage } from '../i18n/LanguageProvider';
import { education, jobs } from '../content/experience';
import { Section } from './Section';
import { ExternalLinkIcon, LocationIcon } from './Icons';

export function Experience() {
  const { t, tr, trl } = useLanguage();

  return (
    <Section id="experience" title={t('experience.title')} subtitle={t('experience.subtitle')}>
      {/* Таймлайн: вертикальная линия слева, точка у каждой записи */}
      <ol className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-800">
        {jobs.map((job, index) => (
          <li key={`${job.company.en}-${index}`} className="relative">
            <span
              aria-hidden="true"
              className="border-brand-500 absolute top-1.5 -left-[2.28rem] h-3.5 w-3.5 rounded-full border-2 bg-slate-50 dark:bg-slate-950"
            />

            {/* Даты может не быть — тогда строку не рисуем вовсе */}
            {tr(job.start) && (
              <p className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-500">
                {tr(job.start)} — {tr(job.end) || t('experience.present')}
              </p>
            )}

            <h3 className="mt-1.5 text-xl font-bold text-slate-900 dark:text-white">
              {tr(job.position)}
            </h3>

            <p className="text-brand-600 dark:text-brand-400 mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-medium">
              {tr(job.company)}
              <span className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500">
                <LocationIcon className="h-3.5 w-3.5" />
                {tr(job.location)}
              </span>
            </p>

            <ul className="mt-4 space-y-2">
              {trl(job.highlights).map((highlight, i) => (
                <li key={i} className="flex gap-3 text-pretty text-slate-600 dark:text-slate-400">
                  <span aria-hidden="true" className="text-brand-500 mt-1 shrink-0 text-xs">
                    ▸
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {education.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
            {t('experience.educationTitle')}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item, index) => (
              <article key={index} className="card p-5">
                <p className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-500">
                  {tr(item.period)}
                </p>
                <h4 className="mt-2 font-semibold text-slate-900 dark:text-white">
                  {tr(item.title)}
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {tr(item.institution)}
                </p>
                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-600 dark:text-brand-400 link-underline mt-3 inline-flex items-center gap-1.5 text-sm font-medium"
                  >
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                    {tr({ ru: 'Сертификат', en: 'Certificate' })}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
