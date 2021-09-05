import { FC, useMemo } from 'react'
import { createEditor, Descendant, BaseEditor, Node } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'

type CustomText = { text: string }
type CustomElement = { type: 'paragraph'; children: CustomText[] }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

type PlainTextEditorProps = {
  text: Descendant[]
  setText: (newText: Descendant[]) => void
}

export const serializeText = (nodes: Descendant[]) =>
  nodes.map(node => Node.string(node)).join('\n')

const PlainTextEditor: FC<PlainTextEditorProps> = ({ text, setText }) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <Slate editor={editor} value={text} onChange={newText => setText(newText)}>
      <Editable placeholder="What do you want to talk about?" autoFocus />
    </Slate>
  )
}

export default PlainTextEditor
