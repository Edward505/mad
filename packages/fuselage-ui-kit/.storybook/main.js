module.exports = {
  addons: ['@storybook/addon-essentials'],
  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],
  features: {
    postcss: false,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
};
