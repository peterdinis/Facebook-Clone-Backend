module.exports =  {
    setupFilesAfterEnv: ["jest-extended/all"],
    preset: 'ts-jest',
    transform: {
        "\\.[jt]sx?$": "babel-jest",
    },
  }