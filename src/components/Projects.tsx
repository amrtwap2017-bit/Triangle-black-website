import React, { useState } from 'react';
import { Translation, Lang, projectsData, ProjectItem } from '../data/content';
import { MapPin, X, Clock, Briefcase, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  t: Translation;
  currentLang: Lang;
}

export const Projects: React.FC<ProjectsProps> = ({ t, currentLang }) => {
  const isRtl = currentLang === 'ar';
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'renovations', label: t.projects.filterRenovations },
    { id: 'maintenance', label: t.projects.filterMaintenance },
    { id: 'procurement', label: t.projects.filterProcurement },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-black relative" id="projects" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#d4af37]/30 to-transparent pointer-events-none" />

      <div className="w-[90%] max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37] block mb-3 font-mono">
            {t.projects.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif leading-tight mb-4">
            {t.projects.heading}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl mx-auto">
            {t.projects.subheading}
          </p>
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-neutral-950 rounded-2xl border border-neutral-900 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2.5 text-xs uppercase tracking-wider font-medium rounded-xl transition-all ${
                filter === cat.id
                  ? 'bg-[#d4af37] text-black font-bold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-950/80 border border-neutral-900 rounded-3xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 text-[9px] uppercase tracking-wider font-bold bg-[#d4af37] text-black px-2.5 py-1 rounded-full">
                  {project.category}
                </span>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[10px] text-white/80">
                  <MapPin className="w-3 h-3" />
                  {project.location[currentLang]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mb-1">
                  {t.projects.clientLabel}: {project.client[currentLang]}
                </span>
                <h3 className="text-lg font-bold text-white font-serif mb-3 group-hover:text-[#d4af37] transition-colors">
                  {project.title[currentLang]}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                  {project.scope[currentLang]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags[currentLang].map((tag, i) => (
                    <span key={i} className="text-[9px] text-neutral-500 bg-neutral-900 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 bg-neutral-900 hover:bg-[#d4af37] text-neutral-300 hover:text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>{t.projects.viewSpecs}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-900">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-[#d4af37]" />
                <span className="text-sm font-bold text-white">{t.projects.scopeLabel}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-neutral-900 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-neutral-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <h3 className="text-2xl font-bold text-white font-serif mb-2">
                {selectedProject.title[currentLang]}
              </h3>
              <p className="text-sm text-neutral-500 mb-6">
                {selectedProject.client[currentLang]} — {selectedProject.location[currentLang]}
              </p>

              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-medium block mb-2">
                  {t.projects.scopeLabel}
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {selectedProject.scope[currentLang]}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black border border-neutral-900 rounded-xl p-4">
                  <Clock className="w-4 h-4 text-[#d4af37] mb-2" />
                  <span className="text-[10px] text-neutral-500 uppercase block">{t.projects.durationLabel}</span>
                  <span className="text-sm text-white font-medium">{selectedProject.timeline[currentLang]}</span>
                </div>
                <div className="bg-black border border-neutral-900 rounded-xl p-4">
                  <Briefcase className="w-4 h-4 text-[#d4af37] mb-2" />
                  <span className="text-[10px] text-neutral-500 uppercase block">{t.projects.operationsClass}</span>
                  <span className="text-sm text-white font-medium">{t.projects.enterpriseSla}</span>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-medium block mb-3">
                  {t.projects.deliverableLogs}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.kpis.map((kpi, i) => (
                    <div key={i} className="bg-neutral-900/50 rounded-xl p-4 text-center">
                      <span className="text-xl font-bold text-[#d4af37]">{kpi.value}</span>
                      <span className="text-[10px] text-neutral-500 block mt-1">{kpi.label[currentLang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[10px] text-neutral-600 italic">
                {t.projects.oemNote}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-neutral-900">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-3 bg-[#d4af37] hover:bg-[#c49b2f] text-black font-bold text-sm uppercase tracking-wider rounded-xl transition-all"
              >
                {t.projects.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
