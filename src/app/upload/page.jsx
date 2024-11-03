'use client'

import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File, X } from 'lucide-react'

const UploadPage = () => {
  const [files, setFiles] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(prevFiles => [
      ...prevFiles,
      ...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
    ])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {'image/*': [], 'application/pdf': []},
    multiple: true
  })

  const removeFile = (file) => {
    setFiles(prevFiles => prevFiles.filter(f => f !== file))
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6 sm:p-8 bg-background text-foreground">
      <div className="w-full max-w-3xl p-8 space-y-6 flex flex-col items-center rounded-lg bg-card text-card-foreground shadow-lg">
        <h1 className="text-3xl font-bold text-primary">Upload Files</h1>
        <div 
          {...getRootProps()} 
          className={`w-full p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-200 ease-in-out ${
            isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/50'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-primary/50" />
          <p className="mt-2 text-sm text-muted-foreground">
            Drag and drop some files here, or click to select files
          </p>
        </div>
        {files.length > 0 && (
          <div className="w-full space-y-4">
            <h2 className="text-xl font-semibold text-primary">Uploaded Files</h2>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li key={`${file.name}-${index}`} className="flex items-center justify-between p-3 bg-muted rounded-md">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <File className="h-6 w-6 flex-shrink-0 text-primary" />
                    <span className="text-sm truncate">{file.name}</span>
                  </div>
                  <button
                    onClick={() => removeFile(file)}
                    className="flex-shrink-0 text-destructive hover:text-destructive/80 transition-colors"
                    aria-label={`Remove ${file.name}`}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadPage