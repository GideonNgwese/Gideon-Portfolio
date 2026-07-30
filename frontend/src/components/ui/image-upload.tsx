'use client'

import { useState, useCallback } from 'react'
import { Upload, X, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface ImageUploadProps {
  onUpload: (url: string, path: string) => void
  onRemove: () => void
  currentImage?: string
  bucket?: string
}

export function ImageUpload({
  onUpload,
  onRemove,
  currentImage,
  bucket = 'portfolio-images',
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(currentImage || null)

  const handleFileSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return

      setUploading(true)

      try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('bucket', bucket)

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error || 'Upload failed')
        }

        const data = await response.json()
        setPreview(data.url)
        onUpload(data.url, data.path)
      } catch (error: any) {
        console.error('Upload error:', error)
        alert(error.message || 'Failed to upload image')
      } finally {
        setUploading(false)
      }
    },
    [bucket, onUpload]
  )

  const handleRemove = () => {
    setPreview(null)
    onRemove()
  }

  return (
    <div className="space-y-4">
      {preview ? (
        <Card className="overflow-hidden">
          <div className="relative aspect-video">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={handleRemove}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="border-dashed">
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm font-medium">
                  Upload an image
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, WebP up to 5MB
                </p>
              </div>
              <label>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/gif"
                  className="hidden"
                  onChange={handleFileSelect}
                  disabled={uploading}
                />
                <Button
                  variant="outline"
                  disabled={uploading}
                  asChild
                >
                  <span>
                    {uploading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      'Choose File'
                    )}
                  </span>
                </Button>
              </label>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
