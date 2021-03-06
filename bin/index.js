const path = require('path');

const PHOSPHOR_ASSETS_PATH = path.join(__dirname, '../assets/phosphor');
const EFISHERY_ASSETS_PATH = path.join(__dirname, '../assets/efishery');
const PHOSPHOR_COMPONENTS_PATH = path.join(__dirname, '../src/icons/phosphor');
const EFISHERY_COMPONENTS_PATH = path.join(__dirname, '../src/icons/efishery');
const ICONS_PATH = path.join(__dirname, '../src/icons');
const INDEX_PATH = path.join(__dirname, '../src');
const INDEX_NAME = path.join('index.tsx');

module.exports = {
  PHOSPHOR_ASSETS_PATH,
  EFISHERY_ASSETS_PATH,
  PHOSPHOR_COMPONENTS_PATH,
  EFISHERY_COMPONENTS_PATH,
  ICONS_PATH,
  INDEX_PATH,
  INDEX_NAME,
};
