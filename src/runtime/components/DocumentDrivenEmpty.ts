import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
import { ParsedContent } from '../types'

/**
 * Used in `src/runtime/pages/document-driven.vue`
 */
export default defineComponent({
  props: {
    value: {
      type: Object as PropType<ParsedContent>,
      required: true
    }
  },
  render ({ value }) {
    return h('div', undefined, [
      h('p', 'Document is empty'),
      h('p', `Add content to it by opening ${value._source}/${value._file} file.`)
    ])
  }
})
