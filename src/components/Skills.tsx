import { useLanguage } from '../i18n/LanguageProvider';
import { skillGroups } from '../content/skills';
import { Section } from './Section';

export function Skills() {
  const { t, tr } = useLanguage();

  return (
    <Section id="skills" title={t('skills.title')} subtitle={t('skills.subtitle')}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title.en}
            className="card hover:border-brand-500/50 group p-5 transition-colors sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-brand-500/10 text-brand-600 dark:text-brand-400 grid h-9 w-9 place-items-center rounded-lg font-mono text-sm font-bold">
                {group.icon}
              </span>
              <h3 className="font-semibold text-slate-900 dark:text-white">{tr(group.title)}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
