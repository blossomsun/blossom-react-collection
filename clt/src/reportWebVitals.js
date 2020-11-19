// 页面加载性能
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // 衡量视觉稳定性。为了提供一个好的用户体验，CLS应该小于0.1。
      getFID(onPerfEntry); // 衡量可交互性。为了提供一个好的用户体验，FID应该在100毫秒内     
      getLCP(onPerfEntry); // 衡量加载性能。为了提供一个好的用户体验，LCP应该在2.5秒内。
      getTTFB(onPerfEntry); // 关于加载性能的，有助于诊断LCP (缓慢的服务端响应，或者渲染阻塞的资源)
      getFCP(onPerfEntry); //  关于加载性能的，有助于诊断LCP (缓慢的服务端响应，或者渲染阻塞的资源)
    });
  }
};

export default reportWebVitals;
