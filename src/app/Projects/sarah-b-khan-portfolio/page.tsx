    // ✅ src/app/projects/personal-portfolio/page.tsx

    import { caseStudyProjects } from '@/app/data/caseStudyProjects'
    import CaseStudyTemplate from '@/components/ui/caseStudyTemplate'

    export default function SarahBKhanPortolio() {
    const project = caseStudyProjects.find(p => p.id === 'sarah-b-khan-portfolio')
    if (!project) return null

    return <CaseStudyTemplate project={project} />
    }
