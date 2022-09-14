# Button 按钮

按钮用于开始一个即时操作。


## 例子

<div class="flex flex-col gap-4">

<demo-box src="/button/demos/basic.vue" />

<demo-box src="/button/demos/size.vue" />

<demo-box src="/button/demos/link.vue" />

<demo-box src="/button/demos/disabled.vue" />

<demo-box src="/button/demos/block.vue" />

<demo-box src="/button/demos/round.vue" />

<demo-box src="/button/demos/circle.vue" />
</div>


## 属性

| 属性   | 描述         | 类型                        | 默认值 | 版本 |
|------| ------------ | --------------------------- | ------ | ---- |
| size | 设置按钮大小 | `default` \| `small` \| `large` |   `default`     |      |
| type | 设置按钮类型 | `default` \| `primary`  \| `success` \| `warning` \| `error` |  |      |
| nativeType | 设置按钮原生属性`type`参考[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | `string` | `button` |      |
| link | 链接模式 | `boolean` |        |      |
| disabled | 禁用模式 | `boolean` |        |      |
| dashed | 设置虚线边框 | `boolean` |        |      |
| block | 是否占满整行 | `boolean` |        |      |
| round | 是否有圆角 | `boolean` |        |      |
| cricle | 是否设置为圆形 | `boolean` |        |      |
| loading | 设置按钮加载状态 | `boolean` | | |



## 事件

| 事件名称 | 描述               | 类型            | 版本 |
| -------- | ------------------ | --------------- | ---- |
| click    | 设置按钮的点击事件 | `(event)=>void` |      |

