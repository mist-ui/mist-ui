# Button

Button is used to start an immediate operation.


## Examples

<div class="flex flex-col gap-4">

<demo-box src="/button/demos/basic.vue" />

<demo-box src="/button/demos/size.vue" />

<demo-box src="/button/demos/link.vue" />

<demo-box src="/button/demos/disabled.vue" />

<demo-box src="/button/demos/block.vue" />

<demo-box src="/button/demos/round.vue" />

<demo-box src="/button/demos/circle.vue" />
</div>


## Props

| Prop | Description | Type | Default | Version |
|------| ------------ | --------------------------- | ------ | ---- |
| size | Set button size | `default` \| `small` \| `large` |   `default`     |      |
| type | Set button type | `default` \| `primary`  \| `success` \| `warning` \| `error` |  |      |
| nativeType | Set button native attribute `type` refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | `string` | `button` |      |
| link | Link mode | `boolean` |        |      |
| disabled | Disabled mode | `boolean` |        |      |
| dashed | Set dashed border | `boolean` |        |      |
| block | Whether to occupy the entire line | `boolean` |        |      |
| round | Whether to have rounded corners | `boolean` |        |      |
| cricle | Whether to set it to a circle | `boolean` |        |      |
| loading | Set button loading state | `boolean` | | |
## Events

| Event Name | Description | Type | Version |
| -------- | ------------------ | --------------- | ---- |
| click    | Set button click event | `(event)=>void` |      |
