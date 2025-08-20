    // ✅ src/app/projects/personal-portfolio/page.tsx

    import { caseStudyProjects } from '@/app/data/caseStudyProjects'
    import CaseStudyTemplate from '@/components/ui/caseStudyTemplate'

    export default function CMSShopifyApp() {
    const project = caseStudyProjects.find(p => p.id === 'unum-pay-shopify-app')
    if (!project) return null

    return <CaseStudyTemplate project={project} />
    }
