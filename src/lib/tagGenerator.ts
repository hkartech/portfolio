export function generateAutoTags(title: string, excerpt?: string, categories?: string[]): string[] {
  const tags: string[] = [];
  
  // Always include these base tags
  const baseTags = ['webdev', 'programming', 'tutorial'];
  
  // Common tech keywords to look for
  const techKeywords = {
    'react': ['react', 'reactjs'],
    'nextjs': ['nextjs', 'next.js', 'next'],
    'javascript': ['javascript', 'js', 'es6'],
    'typescript': ['typescript', 'ts'],
    'node': ['node', 'nodejs', 'node.js'],
    'css': ['css', 'tailwind', 'bootstrap'],
    'html': ['html', 'html5'],
    'frontend': ['frontend', 'front-end'],
    'backend': ['backend', 'back-end', 'api'],
    'fullstack': ['fullstack', 'full-stack'],
    'web': ['web', 'website', 'webapp'],
    'development': ['development', 'coding', 'dev'],
    'design': ['design', 'ui', 'ux'],
    'performance': ['performance', 'speed', 'optimization'],
    'seo': ['seo', 'search'],
    'mobile': ['mobile', 'responsive'],
  };
  
  // Combine all text to analyze
  const textToAnalyze = `${title} ${excerpt || ''}`.toLowerCase();
  
  // Add base tags
  tags.push(...baseTags);
  
  // Check for tech keywords in title/excerpt
  Object.entries(techKeywords).forEach(([tag, keywords]) => {
    if (keywords.some(keyword => textToAnalyze.includes(keyword))) {
      tags.push(tag);
    }
  });
  
  // Add categories as tags if they exist
  if (categories && categories.length > 0) {
    categories.forEach(category => {
      const formattedCategory = category.toLowerCase().replace(/\s+/g, '');
      if (!tags.includes(formattedCategory)) {
        tags.push(formattedCategory);
      }
    });
  }
  
  // Extract 2-3 words from title for more specific tags
  const titleWords = title.toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .split(' ')
    .filter(word => word.length > 3) // Filter out short words
    .slice(0, 3); // Take first 3 meaningful words
  
  titleWords.forEach(word => {
    const cleanWord = word.replace(/\s+/g, '');
    if (!tags.includes(cleanWord) && cleanWord.length > 2) {
      tags.push(cleanWord);
    }
  });
  
  // Return unique tags, limit to 6
  return [...new Set(tags)].slice(0, 6);
}