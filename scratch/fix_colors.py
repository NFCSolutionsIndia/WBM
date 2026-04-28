import os

path = r'd:\WBMGit\WBM\src\Pages'
files = [f for f in os.listdir(path) if f.endswith('.jsx')]

target_color = '#E54D26'
replacement_color = 'var(--c-lime)'

for file_name in files:
    file_path = os.path.join(path, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if target_color in content:
        new_content = content.replace(target_color, replacement_color)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_name}")
    else:
        print(f"Skipped {file_name}")
