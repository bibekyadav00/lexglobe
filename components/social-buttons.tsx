"use client"

import { Mail, MessageCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SocialButtons() {
  const openWhatsApp = () => {
    window.open("https://wa.me/9779746478828", "_blank")
  }

  const openWeChat = () => {
    // WeChat doesn't have a direct web link like WhatsApp
    // Usually we'd show a QR code or instructions
    alert("WeChat ID: +977-9746478828")
  }

  const openEmail = () => {
    window.open("mailto:prabinyadav008@gmail.com", "_blank")
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
            <p>Chat on WhatsApp: +977-9746478828</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={openWeChat}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#07C160] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#06a050] focus:outline-none"
              aria-label="Chat on WeChat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 0 0 .186-.059l2.157-1.23a.931.931 0 0 1 .373-.082.942.942 0 0 1 .37.075 10.43 10.43 0 0 0 2.539.316c.428 0 .847-.04 1.26-.098-.533-1.604-.533-3.107.147-4.592.935-2.039 2.902-3.244 5.153-3.244.428 0 .847.04 1.26.099 1.75-1.857 1.277-4.537-1.26-6.188a9.923 9.923 0 0 0-4.96-1.533zm8.691 7.343c-3.86 0-7 2.774-7 6.201 0 3.426 3.14 6.2 7 6.2a8.78 8.78 0 0 0 2.125-.265.795.795 0 0 1 .312-.064.795.795 0 0 1 .313.069l1.891 1.078a.283.283 0 0 0 .156.05c.137 0 .25-.113.25-.253 0-.062-.026-.124-.042-.182l-.337-1.25a.51.51 0 0 1 .181-.572C23.373 19.07 24.38 17.33 24.38 15.4c0-3.427-3.14-6.2-7-6.2v.531zm3.376 4.656a.627.627 0 0 1 .623-.633.627.627 0 0 1 .624.633.627.627 0 0 1-.624.633.627.627 0 0 1-.623-.633zm-4.468 0a.627.627 0 0 1 .624-.633.627.627 0 0 1 .623.633.627.627 0 0 1-.623.633.627.627 0 0 1-.624-.633zm-3.66-6.2a.767.767 0 0 1-.77.77.767.767 0 0 1-.77-.77.767.767 0 0 1 .77-.77.767.767 0 0 1 .77.77zm5.704 0a.767.767 0 0 1-.77.77.767.767 0 0 1-.77-.77.767.767 0 0 1 .77-.77.767.767 0 0 1 .77.77z" />
              </svg>
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WeChat: +977-9746478828</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={openEmail}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600 focus:outline-none"
              aria-label="Send Email"
            >
              <Mail className="h-8 w-8" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Email: prabinyadav008@gmail.com</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

