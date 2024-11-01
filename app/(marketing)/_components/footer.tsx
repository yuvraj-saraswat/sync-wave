import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export const Footer = ()=>{
  return (
    <div className="fixed bottom-0 w-full h-14 p-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo/>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button  size="sm" variant="ghost">
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  )
}