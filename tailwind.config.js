module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },
    color: {

    },
  },
  plugins: [require("flowbite/plugin")],
};

// xanh text : #66b5f7
// text xanh dam : #081f47
// xanh nut : #49a9fc
