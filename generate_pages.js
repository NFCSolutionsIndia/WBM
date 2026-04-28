const fs = require('fs');
const path = require('path');

/**
 * generate_pages.js
 * 
 * This script generates Next.js App Router pages (page.tsx) that act as 
 * thin wrappers around the components located in src/pages-source.
 * 
 * This prevents duplication and keeps the logic in one place while 
 * satisfying the App Router's directory structure requirements.
 */

const appDir = path.join(__dirname, 'src', 'app');

// Mapping of route folder name to the source component name in src/pages-source
const routes = [
  { route: 'about', component: 'About' },
  { route: 'technology', component: 'Technology' },
  { route: 'process', component: 'Process' },
  { route: 'industries', component: 'Industries' },
  { route: 'materials', component: 'Materials' },
  { route: 'sustainability', component: 'Sustainability' },
  { route: 'data-centers', component: 'DataCenters' },
  { route: 'partners', component: 'Partners' },
  { route: 'case-studies', component: 'CaseStudies' },
  { route: 'contact', component: 'Contact' },
  { route: 'insights', component: 'Insights' }
];

routes.forEach(({ route, component }) => {
  const dirPath = path.join(appDir, route);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const content = `"use client";

import ${component} from "@/pages-source/${component}";

/**
 * Automatically generated page wrapper for ${route}
 * Source: src/pages-source/${component}.jsx
 */
export default function Page() {
  return <${component} />;
}
`;
  
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
  console.log(`✅ Created src/app/${route}/page.tsx (linked to ${component}.jsx)`);
});

// Also handle the root not-found page if source exists
const notFoundSource = path.join(__dirname, 'src', 'pages-source', 'NotFound.jsx');
if (fs.existsSync(notFoundSource)) {
  const content = `"use client";

import NotFound from "@/pages-source/NotFound";

export default function GlobalNotFound() {
  return <NotFound />;
}
`;
  fs.writeFileSync(path.join(appDir, 'not-found.tsx'), content);
  console.log(`✅ Created src/app/not-found.tsx (linked to NotFound.jsx)`);
}

console.log('\nAll pages have been successfully generated into src/app/');
