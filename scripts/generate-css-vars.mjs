// scripts/generate-css-vars.mjs

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Import your theme object from the index.ts file
// Adjust this path if your theme directory structure is different
import { theme } from '../dist/src/styles/themes/index.js';


// Helper to get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to your globals.css file
const GLOBALS_CSS_PATH = path.resolve(__dirname, '../src/styles/globals.css');

// Function to convert camelCase to kebab-case for CSS properties
const toKebabCase = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

// Function to recursively flatten the theme object into CSS variables
const generateCssVariables = (obj, currentPath = '') => {
  let cssVars = '';
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      // Construct the full path segment (e.g., 'color-primary-50')
      const newPath = currentPath ? `${currentPath}-${toKebabCase(key)}` : toKebabCase(key);

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Recursively generate variables for nested objects
        cssVars += generateCssVariables(value, newPath);
      } else {
        // Directly append the CSS variable with the full path, prefixed with '--'
        cssVars += `--${newPath}: ${value};\n`;
      }
    }
  }
  return cssVars;
};


// Function to generate CSS variables specifically for typography,
// matching the structure needed for individual properties
const generateTypographyCssVariables = (typographyObj) => {
  let cssVars = '';

  // Helper to process a specific style object (e.g., semiBold, bold, medium)
  const processStyleProperties = (style, baseVarName) => {
    if (style.fontSize) {
      cssVars += `--font-size-${baseVarName}: ${style.fontSize};\n`;
    }
    if (style.lineHeight) {
      cssVars += `--line-height-${baseVarName}: ${style.lineHeight};\n`;
    }
    if (style.fontWeight) {
      cssVars += `--font-weight-${baseVarName}: ${style.fontWeight};\n`;
    }
    if (style.letterSpacing) {
      cssVars += `--letter-spacing-${baseVarName}: ${style.letterSpacing};\n`;
    }
    // The font-family is handled globally by --font-primary in :root,
    // and then explicitly in @theme for each utility.
    // We don't need a separate CSS variable for each font-family here.
  };

  // Process base typography separately as it's not nested under a style (semiBold, etc.)
  if (typographyObj.base) {
    cssVars += `--font-size-base: ${typographyObj.base.fontSize};\n`;
    cssVars += `--line-height-base: ${typographyObj.base.lineHeight};\n`;
  }

  // Process display, heading, and label levels
  for (const typeKey in typographyObj) {
    if (Object.prototype.hasOwnProperty.call(typographyObj, typeKey) && typeKey !== 'base') {
      const typeLevel = typographyObj[typeKey]; // e.g., typography.display
      const kebabTypeKey = toKebabCase(typeKey); // e.g., 'display'

      for (const sizeKey in typeLevel) {
        if (Object.prototype.hasOwnProperty.call(typeLevel, sizeKey)) {
          const sizeLevel = typeLevel[sizeKey]; // e.g., typography.display['2']
          const kebabSizeKey = toKebabCase(sizeKey); // e.g., '2'

          for (const styleKey in sizeLevel) {
            if (Object.prototype.hasOwnProperty.call(sizeLevel, styleKey)) {
              const style = sizeLevel[styleKey]; // e.g., typography.display['2'].semiBold
              const kebabStyleKey = toKebabCase(styleKey); // e.g., 'semi-bold'

              // Construct the base variable name for this specific style (e.g., 'display-2-semi-bold')
              const baseVarName = `${kebabTypeKey}-${kebabSizeKey}-${kebabStyleKey}`;
              processStyleProperties(style, baseVarName);
            }
          }
        }
      }
    }
  }
  return cssVars;
};


// Main function to read theme and update globals.css
const updateGlobalsCss = async () => {
  try {
    const globalsCssContent = await fs.readFile(GLOBALS_CSS_PATH, 'utf8');

    // Generate CSS variables for colors
    let generatedColorVars = generateCssVariables(theme.colors, 'color');

    // Generate CSS variables for spacing
    let generatedSpacingVars = generateCssVariables(theme.spacing, 'spacing');

    // Generate CSS variables for effects (radius, boxShadow)
    let generatedEffectsVars = '';
    if (theme.effects.radius) {
      generatedEffectsVars += generateCssVariables(theme.effects.radius, 'border-radius');
    }
    if (theme.effects.boxShadow) {
      generatedEffectsVars += generateCssVariables(theme.effects.boxShadow, 'box-shadow');
    }

    // Generate CSS variables for typography (font-size, line-height, font-weight, letter-spacing)
    let generatedTypographyVars = generateTypographyCssVariables(theme.typography);

    // Combine all generated variables
    const allGeneratedVars = `
  /* Fonts */
  --font-primary: "${theme.fonts.primary.replace(/"/g, '\\"')}";
  --font-secondary: "${theme.fonts.secondary.replace(/"/g, '\\"')}";

  /* Colors */
  ${generatedColorVars}

  /* Spacing */
  ${generatedSpacingVars}

  /* Typography - Font Sizes, Line Heights, Font Weights, Letter Spacing */
  ${generatedTypographyVars}

  /* Effects - Border Radius */
  ${generatedEffectsVars}
`;

    // Regex to find the :root {} block and replace its content
    // This regex matches ':root {' followed by any content (including newlines/comments) until the closing '}'
    const rootRegex = /:root\s*\{[\s\S]*?\}/;

    // Construct the new :root block
    const newRootBlock = `:root {\n${allGeneratedVars}\n}`;

    let updatedContent;
    if (globalsCssContent.match(rootRegex)) {
      // If :root exists, replace its content
      updatedContent = globalsCssContent.replace(rootRegex, newRootBlock);
    } else {
      // If :root doesn't exist (unlikely given your current file), prepend it
      updatedContent = `${newRootBlock}\n${globalsCssContent}`;
    }

    await fs.writeFile(GLOBALS_CSS_PATH, updatedContent, 'utf8');
    console.log('✅ globals.css updated successfully with design tokens!');

  } catch (error) {
    console.error('❌ Error updating globals.css:', error);
  }
};

updateGlobalsCss();
