import os

pages_dir = r'd:\WBMGit\WBM\src\app'
src_pages_dir = r'd:\WBMGit\WBM\src\Pages'

mapping = {
    'about': 'About',
    'case-studies': 'CaseStudies',
    'contact': 'Contact',
    'data-centers': 'DataCenters',
    'industries': 'Industries',
    'insights': 'Insights',
    'materials': 'Materials',
    'process': 'Process',
    'technology': 'Technology'
}

for route, component in mapping.items():
    page_file = os.path.join(pages_dir, route, 'page.tsx')
    if os.path.exists(page_file):
        content = f'"use client";\nimport {component} from "@/Pages/{component}";\n\nexport default function Page() {{\n  return <{component} />;\n}}\n'
        with open(page_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {page_file}")
    else:
        print(f"Path not found: {page_file}")
