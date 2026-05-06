import os
import re

TARGET_COLOR = "#839470"
DIRS = ["src/pages-source", "src/components/home"]

# Pattern to match any tailwind class that contains a large font size
# This includes prefixes like md:, lg:, group-hover:, etc.
SIZE_TOKEN_REGEX = r'(?<=[\s"])[^\s"]*?\b(text-[34567]xl|text-\[52px\]|text-\[80px\])\b[^\s"]*'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = content
    
    # 1. Target h2 and h3 tags
    def heading_replacer(match):
        full_tag = match.group(0)
        # Find the className attribute
        class_match = re.search(r'className="([^"]*)"', full_tag)
        if not class_match: return full_tag
        
        classes = class_match.group(1)
        
        # Check if it has any large size classes
        if re.search(SIZE_TOKEN_REGEX, ' ' + classes + ' '):
            # Remove all tokens that match the size regex
            new_classes = re.sub(SIZE_TOKEN_REGEX, '', ' ' + classes + ' ')
            # Clean up and add section-title
            new_classes = 'section-title ' + ' '.join(new_classes.split())
            return full_tag.replace(f'className="{classes}"', f'className="{new_classes.strip()}"')
        
        return full_tag

    # Replace within h2 and h3
    modified = re.sub(r'<h[23][^>]*>', heading_replacer, modified)

    # 2. Cleanup debris like 'md:' or 'lg:' left by previous bad runs
    # This matches a prefix followed by a space or end of quotes
    modified = re.sub(r'\b(md|lg|sm|xl|2xl|hover|group-hover|dark):(?=\s|")', '', modified)

    # 3. Global color replacements
    COLOR_MAP = {
        r'#C1FF00': TARGET_COLOR,
        r'#78B933': TARGET_COLOR,
        r'#7ECCD6': TARGET_COLOR,
    }
    for color, replacement in COLOR_MAP.items():
        modified = re.sub(color, replacement, modified, flags=re.IGNORECASE)
    
    if modified != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(modified)
        return True
    return False

def main():
    count = 0
    for d in DIRS:
        full_dir = os.path.join(os.getcwd(), d)
        if not os.path.exists(full_dir): continue
        for root, _, files in os.walk(full_dir):
            for file in files:
                if file.endswith(('.jsx', '.tsx')):
                    if process_file(os.path.join(root, file)):
                        count += 1
                        print(f"Updated {file}")
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    main()
