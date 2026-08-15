import { useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { projects, type Project } from '../content/projects';
import { Section } from './Section';
import { ExternalLinkIcon, GitHubIcon } from './Icons';

const INITIAL_COUNT = 4;

function ProjectCard({ project }: { project: Project }) {
  const { t, tr } = useLanguage();

  return (
    <article
      className={`card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5 ${
        project.featured ? 'lg:col-span-2 lg:flex-row' : ''
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800 ${
          project.featured ? 'lg:w-1/2' : ''
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={tr(project.title)}
            loading="lazy"
            className="aspect-16/10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Заглушка, пока нет скриншота: инициалы проекта на градиенте
          <div className="from-brand-500/20 to-brand-700/20 grid aspect-16/10 h-full w-full place-items-center bg-gradient-to-br">
            <span className="text-brand-600/40 dark:text-brand-400/40 font-mono text-5xl font-bold">
              {tr(project.title).slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        {project.featured && (
          <span className="bg-brand-600 absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {t('projects.featured')}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{tr(project.title)}</h3>
        <p className="text-brand-600 dark:text-brand-400 mt-1 text-sm font-medium">
          {tr(project.summary)}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
          {tr(project.description)}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        {(project.demoUrl || project.codeUrl) && (
          <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brand-600 hover:bg-brand-500 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                {t('projects.demo')}
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600"
              >
                <GitHubIcon className="h-4 w-4" />
                {t('projects.code')}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Ключевые проекты идут первыми — их видят даже те, кто не долистает
  const sorted = useMemo(
    () => [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)),
    [],
  );

  const visible = showAll ? sorted : sorted.slice(0, INITIAL_COUNT);

  return (
    <Section id="projects" title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <div className="grid gap-6 lg:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {sorted.length > INITIAL_COUNT && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600"
          >
            {showAll ? t('projects.showLess') : t('projects.showAll')}
          </button>
        </div>
      )}
    </Section>
  );
}
