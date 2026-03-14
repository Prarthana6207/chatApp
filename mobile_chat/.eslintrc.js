module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
      alias: {
        map: [
          ['@mobile_chat', './src'],
          ['@api', './src/api'],
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@screens', './src/screens'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
