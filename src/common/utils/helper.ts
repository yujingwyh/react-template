//异步休眠
export const sleep = (time: number = 5000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

// 生成类名
export const classNames = (
  names: Array<string | null | boolean | undefined>
) => {
  return names
    .filter((item) => typeof item === "string" && item.trim())
    .join(" ");
};

//hooks中要用callback包裹
export const throttle = (fn: (...args: any[]) => any, wait: number) => {
  let timer = null as any;
  let args = [] as any[];

  return (...arr: any[]) => {
    //保证最新的参数
    args = arr;

    if (!timer) {
      timer = setTimeout(function () {
        fn(...args);
        timer = null;
      }, wait);
    }
  };
};

export const debounce = (fn: (...args: any[]) => any, wait: number = 300) => {
  let timer = null as any;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
};
//获得唯一key
export const getUniqueKey = (() => {
  let index = 1000;

  return () => {
    index += 1;

    return "uuid" + index;
  };
})();

//转化百分比
export const toPercent = (num: number) => {
  const number = parseFloat(String(num)) || 0;
  return parseFloat((number * 100).toFixed(2));
};
