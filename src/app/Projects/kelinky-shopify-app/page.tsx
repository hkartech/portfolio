    // ✅ src/app/projects/personal-portfolio/page.tsx

    import { caseStudyProjects } from '@/app/data/caseStudyProjects'
    import CaseStudyTemplate from '@/components/ui/caseStudyTemplate'

    export default function KelinkyApp() {
    const project = caseStudyProjects.find(p => p.id === 'kelinky-shopify-app')
    if (!project) return null

    return <CaseStudyTemplate project={project} />
    }
