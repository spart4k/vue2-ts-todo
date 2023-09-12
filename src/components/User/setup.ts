import { defineComponent, PropType } from '@vue/composition-api'
import { IUser } from '@/schemes'
export default defineComponent({
	name: 'User',
	props: {
		user: Object as PropType<IUser>
	}
})