import { useEffect, useRef } from 'react'

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    // Set the document title when the component mounts
    document.title = title

    // Optional cleanup to restore the default title if specified
    return () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current
      }
    }
  }, [title, prevailOnUnmount])
}

export default useDocumentTitle
