"use client"

import { Mail, MessageCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SocialButtons() {
  const openWhatsApp = () => {
    window.open("https://wa.me/9779700499414", "_blank")
  }

  const openWeChat = () => {
    // WeChat doesn't have a direct web link like WhatsApp
    // Usually we'd show a QR code or instructions
    alert("WeChat ID: +977-9700499414")
  }

  const openEmail = () => {
    window.open("mailto:infolexglobepartners@gmail.com", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={openWhatsApp}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-8 w-8" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WhatsApp: +977-9700499414</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={openWeChat}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#07C160] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#06a050] focus:outline-none"
              aria-label="Chat on WeChat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              ></svg>
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>WeChat ID: +977-9700499414</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={openEmail}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600 focus:outline-none"
              aria-label="Send an Email"
            >
              <Mail className="h-8 w-8" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Send an Email to infolexglobepartners@gmail.com</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
