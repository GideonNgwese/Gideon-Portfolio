'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Link,
  Code,
  Quote
} from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const ToolbarButton = ({ 
    icon: Icon, 
    command, 
    value,
    title 
  }: { 
    icon: any
    command: string
    value?: string
    title: string
  }) => (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={() => execCommand(command, value)}
      title={title}
      className="h-8 w-8 p-0"
    >
      <Icon className="w-4 h-4" />
    </Button>
  )

  return (
    <Card className="glass-dark">
      <CardContent className="p-0">
        <div className="border-b border-border/50 p-2 flex flex-wrap gap-1">
          <ToolbarButton icon={Heading1} command="formatBlock" value="H1" title="Heading 1" />
          <ToolbarButton icon={Heading2} command="formatBlock" value="H2" title="Heading 2" />
          <div className="w-px bg-border/50 mx-1" />
          <ToolbarButton icon={Bold} command="bold" title="Bold" />
          <ToolbarButton icon={Italic} command="italic" title="Italic" />
          <ToolbarButton icon={Code} command="formatBlock" value="PRE" title="Code" />
          <div className="w-px bg-border/50 mx-1" />
          <ToolbarButton icon={List} command="insertUnorderedList" title="Bullet List" />
          <ToolbarButton icon={ListOrdered} command="insertOrderedList" title="Numbered List" />
          <ToolbarButton icon={Quote} command="formatBlock" value="BLOCKQUOTE" title="Quote" />
          <div className="w-px bg-border/50 mx-1" />
          <ToolbarButton icon={Link} command="createLink" title="Link" />
        </div>
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          className="min-h-[300px] p-4 focus:outline-none prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: value }}
          suppressContentEditableWarning
        />
      </CardContent>
    </Card>
  )
}
