import os
import glob

app_dir = os.path.join('src', 'app')
for filepath in glob.glob(os.path.join(app_dir, '**', 'page.tsx'), recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if content.strip().endswith('\\n'):
        content = content.strip()[:-2] + '\n'
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")
