import { FC, useMemo } from 'react'
import { createEditor, BaseEditor, Node } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'

type CustomText = { text: string }
export type CustomElement = { type: 'paragraph'; children: CustomText[] }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

type PlainTextEditorProps = {
  text: CustomElement[]
  setText: (newText: CustomElement[]) => void
}

export const serializeText = (nodes: CustomElement[]) =>
  nodes.map(node => Node.string(node)).join('\n')

const PlainTextEditor: FC<PlainTextEditorProps> = ({ text, setText }) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <Slate
      editor={editor}
      value={text}
      onChange={(newText: CustomElement[]) => setText(newText)}
    >
      <Editable
        placeholder="What do you want to talk about?"
        style={{ height: '8rem' }}
        autoFocus
      />
    </Slate>
  )
}

export default PlainTextEditor
