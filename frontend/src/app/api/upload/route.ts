import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const bucket = formData.get('bucket') as string || 'portfolio-images'

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      )
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed' },
        { status: 400 }
      )
    }

    // Generate unique filename
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
    
    // Determine upload directory based on bucket
    let uploadDir = path.join(process.cwd(), 'public', 'images')
    if (bucket === 'project-previews') {
      uploadDir = path.join(uploadDir, 'projects')
    }
    
    // Create directory if it doesn't exist
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }
    
    const filePath = path.join(uploadDir, fileName)
    
    // Convert file to buffer and save
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filePath, buffer)
    
    // Generate public URL
    const publicUrl = `/images${bucket === 'project-previews' ? '/projects' : ''}/${fileName}`

    return NextResponse.json({
      path: fileName,
      url: publicUrl,
    })
  } catch (error: any) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to upload file' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { path: filePath, bucket } = await request.json()

    if (!filePath) {
      return NextResponse.json(
        { error: 'No path provided' },
        { status: 400 }
      )
    }
    
    // Determine file location
    let fullPath = path.join(process.cwd(), 'public', 'images', filePath)
    if (bucket === 'project-previews') {
      fullPath = path.join(process.cwd(), 'public', 'images', 'projects', filePath)
    }
    
    // Delete file if it exists
    const { unlink } = await import('fs/promises')
    try {
      await unlink(fullPath)
    } catch (err) {
      // File might not exist, that's okay
      console.log('File not found or already deleted:', fullPath)
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to delete file' },
      { status: 500 }
    )
  }
}
