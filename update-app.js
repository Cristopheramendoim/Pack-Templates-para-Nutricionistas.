import fs from 'fs';

const content = fs.readFileSync('src/App.tsx', 'utf-8');
const reactContent = fs.readFileSync('react-content.jsx', 'utf-8');

const startTarget = 'return (\n    <>\n      <nav className="nav">';
const endTarget = '</footer>\n    </>\n  );\n}';

const startIndex = content.indexOf(startTarget);
const endIndex = content.indexOf(endTarget) + endTarget.length;

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find targets");
  process.exit(1);
}

const newContent = content.substring(0, startIndex) + 'return (\n    <>\n' + reactContent + '\n    </>\n  );\n}' + content.substring(endIndex);

fs.writeFileSync('src/App.tsx', newContent);
console.log("App.tsx updated successfully.");
