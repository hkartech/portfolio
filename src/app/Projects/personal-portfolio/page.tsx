    // ✅ src/app/projects/personal-portfolio/page.tsx

    import { caseStudyProjects } from '@/app/data/caseStudyProjects'
    import CaseStudyTemplate from '@/components/ui/CaseStudyTemplate'

    export default function PersonalPortfolioPage() {
    const project = caseStudyProjects.find(p => p.id === 'personal-portfolio')
    if (!project) return null

    return <CaseStudyTemplate project={project} />
    }
