export const contactStyles = {
    container: `
    min-h-screen 
    flex flex-col items-center justify-center 
    px-8 md:px-16 py-24 
    bg-tanBg dark:bg-gray-900 
    text-[#1E1E1E] dark:text-gray-200 
    transition-colors duration-500
  `,

    header: `
    text-center max-w-2xl mb-16
  `,

    title: `
    text-4xl md:text-5xl font-extrabold 
    text-blue-600 dark:text-blue-400 
    mb-4 transition-colors duration-500
  `,

    subtitle: `
    text-lg text-gray-700 dark:text-gray-300 
    transition-colors duration-500
  `,

    card: `
    bg-white dark:bg-gray-800 
    shadow-lg dark:shadow-gray-700 
    rounded-2xl p-8 max-w-lg 
    text-center border border-pink-200 dark:border-pink-500/30 
    transition-all duration-500 hover:shadow-xl hover:-translate-y-1
  `,

    cardTitle: `
    text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3
  `,

    cardText: `
    text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-500
  `,

    buttonContainer: `
    flex flex-col sm:flex-row gap-4 justify-center
  `,

    emailButton: `
    inline-flex items-center justify-center gap-2 
    bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 
    text-white font-semibold py-3 px-6 rounded-xl 
    transition-all duration-300 shadow-md hover:shadow-lg
  `,

    linkedinButton: `
    inline-flex items-center justify-center gap-2 
    border-2 border-pink-500 text-pink-500 
    hover:bg-pink-500 hover:text-white 
    dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-400 dark:hover:text-gray-900 
    font-semibold py-3 px-6 rounded-xl 
    transition-all duration-300 shadow-md hover:shadow-lg
  `,
};
