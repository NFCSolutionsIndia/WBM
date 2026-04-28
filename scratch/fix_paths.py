import os
import re

directories = [r'd:\WBMGit\WBM\src\Pages', r'd:\WBMGit\WBM\src\components\home', r'd:\WBMGit\WBM\src\components\ui']
base_path = '/WBM'

for directory in directories:
    if not os.path.exists(directory):
        continue
    files = [f for f in os.listdir(directory) if f.endswith(('.jsx', '.tsx'))]

    for file_name in files:
        file_path = os.path.join(directory, file_name)
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Regex to find paths starting with /media/ or /WBMLogo that aren't already prefixed with /WBM
        new_content = re.sub(r'(?<!/WBM)([\'"])/media/', rf'\1{base_path}/media/', content)
        new_content = re.sub(r'(?<!/WBM)([\'"])/WBMLogo', rf'\1{base_path}/WBMLogo', new_content)
        
        new_content = re.sub(r'url\(\s*[\'"]?/media/', f'url({base_path}/media/', new_content)

        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated paths in {file_name}")
        else:
            print(f"No path changes in {file_name}")
