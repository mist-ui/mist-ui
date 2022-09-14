import { Teleport, defineComponent } from 'vue'
import { modalProps } from './props'
export default defineComponent({
  name: 'MModal',
  props: {
    ...modalProps,
  },
  setup(props) {
    return () => {
      const container = props?.getContainer?.() || 'body'
      return (
        <Teleport to={container}>
        </Teleport>
      )
    }
  },
})
