export const main = `
  min-h-screen bg-tanBg dark:bg-gray-900
  text-[#1E1E1E] dark:text-gray-200
  px-6 md:px-12 py-16
  transition-colors duration-500
`;

export const header = `
  text-center max-w-3xl mx-auto mb-16
`;

export const title = `
  text-4xl md:text-5xl font-extrabold
  text-bluePrimary dark:text-blue-400
  mb-4 transition-colors duration-500
`;

export const subtitle = `
  text-lg text-gray-700 dark:text-gray-300
  transition-colors duration-500
`;

export const grid = `
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-10 max-w-6xl mx-auto
`;

export const card = `
  bg-white dark:bg-gray-800
  shadow-lg dark:shadow-gray-700
  rounded-2xl p-6
  flex flex-col justify-between
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
  border border-pinkAccent/30 dark:border-pink-500/30
`;

export const projectTitle = `
  text-2xl font-semibold
  text-bluePrimary dark:text-blue-400
  mb-2 transition-colors duration-500
`;

export const projectDescription = `
  text-gray-700 dark:text-gray-300
  mb-4 transition-colors duration-500
`;

export const techTag = `
  bg-bluePrimary/10 dark:bg-blue-400/20
  text-bluePrimary dark:text-blue-300
  text-sm px-3 py-1 rounded-full
  font-medium transition-colors duration-500
`;

export const githubButton = `
  inline-block text-center
  bg-pinkAccent dark:bg-pink-500 text-white
  px-5 py-2 rounded-xl font-semibold
  hover:bg-pinkAccent/80 dark:hover:bg-pink-400
  transition-colors duration-300
`;
