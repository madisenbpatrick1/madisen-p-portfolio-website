// AboutStyles.ts

export const container = `
  flex flex-col min-h-screen
  dark:bg-gray-900
  transition-colors duration-500
  rounded-lg
`;

export const header = `
  w-full text-[#EC4899]
  py-6 text-center
  transition-colors duration-500
`;

export const headerTitle = `
  text-4xl md:text-5xl font-extrabold
`;

export const resumeWrapper = `
  flex justify-center mt-6
`;

export const resumeButton = `
  inline-flex items-center gap-3
  bg-gradient-to-r from-blue-600 to-pink-500
  text-white font-semibold
  py-2 px-6
  rounded-full
  shadow-lg
  transform transition
  hover:scale-105 hover:shadow-xl
  focus:outline-none focus:ring-4 focus:ring-pink-300
  active:scale-95
  max-w-xs
`;

export const sectionWrapper = `
  flex flex-col md:flex-row flex-grow
  px-8 md:px-16 py-16
`;

export const sidebar = `
  md:w-1/4 mb-8 md:mb-0
  flex flex-col gap-4
`;

export const sidebarButton = (isActive: boolean) =>
  `py-2 px-4 text-left rounded-lg transition ${
    isActive
      ? "bg-pink-100 text-pink-700 font-semibold"
      : "hover:bg-gray-100 dark:hover:bg-gray-800"
  }`;

export const mainSection = `
  md:w-3/4 md:pl-12
`;

export const sectionTitle = `
  text-2xl font-bold text-blue-700 mb-4
  dark:text-blue-400
  transition-colors duration-500
`;

export const contactLink = `
  text-pink-500 dark:text-pink-400
  hover:underline
  transition-colors duration-500
`;

export const paragraph = `
  text-gray-800 dark:text-gray-300
  transition-colors duration-500
`;

export const cardsGrid = `
  grid md:grid-cols-2 gap-6 mt-6
`;

export const card = `
  flex gap-4 p-4
  bg-white dark:bg-gray-800
  rounded-xl shadow-md
  hover:shadow-lg
  transition-all
`;

export const cardImage = `
  w-16 h-16 object-contain rounded-lg
`;

export const cardCompany = `
  font-bold text-lg text-blue-800 dark:text-blue-400
  transition-colors duration-500
`;

export const cardRole = `
  text-gray-600 font-semibold dark:text-gray-300
`;

export const cardDescription = `
  text-gray-700 dark:text-gray-200 mt-1
`;

export const cardYears = `
  text-gray-400 dark:text-gray-400 mt-1 text-sm
`;
