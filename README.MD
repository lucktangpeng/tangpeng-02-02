## 简答题

1. Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。
   1. webpack启动后，会从Entry开始，循环解析Entry依赖的所有Module，每找到一个module，就会根据Module.rules里配置的loader规则进行相应的转换处理，对Module进行转换后，再解析出当前module依赖的module，这些Module会以Entry为单位进行分组，即为一个chunk，一个chunk就是最后一个Entry及其所有依赖的Module合并的结果，最后webpack会将所有的Chunk转换成文件输出Output,在这个过程中webpack会在对应的时机调用对应的钩子，从而执行对应的Plugin插件的优化任务
2. Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。
   1. loader是类型文件的解析器主要对内容进行编译，Plugin相当于是一个事件函数，
   2. 开发loader就是对接受到的内容进行处理，处理结束后将结果作为一个javascript代码返回
   3. 开发Plugin，需要先定义Plugin在webpack中的时间事件，然后会接收到文件的上下文字典，从上下文字典中拿到自己需要的内容，然后进行操作，然后将结果覆盖原来的字典字段即可

​	

