module.exports = {
  // Nơi lưu trữ source, thường khi khởi tạo là /src
  // `<rootDir>` là mã thay thế của jest
  roots: ["<rootDir>/src"],

  // Biến đổi Jest hỗ trợ cho TS
  // Sử dụng ts-jest
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  },

  // Chạy logic đặc biệt - dọn dẹp các thành phần khi sử dụng thư viện thử nghiệm React
  // mở rộng cho Jest
  setupFilesAfterEnv: [
      "@testing-library/react/cleanup-after-each",
      "@testing-library/jest-dom/extend-expect"
  ],

  // Test tệp đuôi spec khớp với thư mục __tests__ và tên tệp.
  // File test thường có đuôi test hoặc spec
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Mở rộng module để test
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};