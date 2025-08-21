    // ✅ src/app/projects/personal-portfolio/page.tsx

    import { caseStudyProjects } from '@/app/data/caseStudyProjects'
    import CaseStudyTemplate from '@/components/ui/CaseStudyTemplate'

    export default function EENWebsite() {
    const project = caseStudyProjects.find(p => p.id === 'een-website')
    if (!project) return null

    return <CaseStudyTemplate project={project} />
    }
