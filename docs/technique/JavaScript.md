## 客户端操作
### BOM对象
1. window 对象：
    1. 当使用 window.open来打开新的页面的时候  他会返回一个对象， 也就是window本身，可以借助这个值来判断浏览器是否关闭了弹窗的限制
2. loaction 对象
    1. 这个脸面包含了一些 关于 地址栏的操作，search 只能获取？之后的字符串，具体的参数需要自己截取
3. navigator
    1. 可以使用navigator  上的plugins 来监听插件的使用
### DOM对象
1. MutationObserver
    1. 这个会提供一些对于DOM属性监视的API ，只要当前监听元素的属性发生变化，都会被监听到

    ```jsx
    // 选择需要观察变动的节点
    const targetNode = document.getElementById('some-id');
    
    // 观察器的配置（需要观察什么变动）
    const config = { attributes: true, childList: true, subtree: true };
    
    // 当观察到变动时执行的回调函数
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log('A child node has been added or removed.');
            }
            else if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }
    };
    
    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback);
    
    // 以上述配置开始观察目标节点
    observer.observe(targetNode, config);
    
    // 之后，可停止观察
    observer.disconnect();
    ```

    1. NodeList 对象是`实时更新`的，