const tinhToan = () => {
  const tong = (a, b) => {
    return a + b;
  };

  const hieu = (a, b) => {
    return a - b;
  };

  const tich = (a, b) => {
    return a * b;
  };
  const thuong = (a, b) => {
    return a / b;
  };

  return {
    tong: tong,
    hieu: hieu,
    tich: tich,
    thuong: thuong,
  };
};

const tt = tinhToan();
console.log(tt.tong(10, 20));
