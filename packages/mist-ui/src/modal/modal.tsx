import { defineComponent } from 'vue'
import { modalProps } from './props'
export default defineComponent({
  name: 'MModal',
  // inheritAttrs: false,
  props: {
    ...modalProps,
  },
  setup(props) {
    return () => {
      return (
        <>
          <div>
            {`${props.visible}`}
          </div>
        </>
      )
    }
  },
})
