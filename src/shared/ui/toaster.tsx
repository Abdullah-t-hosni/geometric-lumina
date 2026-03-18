import { useToast } from "@/shared/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/shared/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      <div role="status" aria-live="polite" className="flex flex-col gap-3">
        {toasts.map((toast) => {
          const { id, title, description, action, ...props } = toast

          return (
            <Toast key={id} forceMount {...props}>
              <div className="flex items-start justify-between gap-4 w-full">
                
                <div className="flex flex-1 flex-col gap-1">
                  {title && <ToastTitle>{title}</ToastTitle>}
                  {description && (
                    <ToastDescription>{description}</ToastDescription>
                  )}
                </div>

                {action}
                <ToastClose />
              </div>
            </Toast>
          )
        })}
      </div>
      <ToastViewport />
    </ToastProvider>
  )
}
