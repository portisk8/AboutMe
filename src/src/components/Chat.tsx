"use client";
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}
// Add type declaration for WebChat
declare global {
  interface Window {
    WebChat?: {
      createStyleSet: any;
      createDirectLine: any;
      createStore: any;
      renderWebChat: any;
    };
  }
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose }) => {
  const webchatRef = useRef(null);
  const [webChatLoaded, setWebChatLoaded] = useState(false);

  useEffect(() => {
    // Add the WebChat script dynamically
    if (!document.getElementById("webchat-script")) {
      const script = document.createElement("script");
      script.id = "webchat-script";
      script.src =
        "https://cdn.botframework.com/botframework-webchat/latest/webchat.js";
      script.async = true;
      script.onload = () => setWebChatLoaded(true);
      document.body.appendChild(script);
    } else {
      setWebChatLoaded(true);
    }

    // Cleanup
    return () => {
      const script = document.getElementById("webchat-script");
      if (script) {
        script.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen && webchatRef.current && window.WebChat && webChatLoaded) {
      try {
        const styleSet = window.WebChat.createStyleSet({
          bubbleBackground: "#f0f7ff",
          bubbleFromUserBackground: "#2962ff",
          bubbleFromUserTextColor: "white",
          bubbleBorderRadius: "5px",
          bubbleFromUserBorderRadius: "5px",
          rootHeight: "100%",
          rootWidth: "100%",
        });

        styleSet.textContent = {
          ...styleSet.textContent,
          fontFamily: "Arial,normal",
        };

        const avatarOptions = {
          botAvatarInitials: "H",
          botAvatarImage:
            "https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif",
        };

        const store = window.WebChat.createStore({});

        window.WebChat.renderWebChat(
          {
            directLine: window.WebChat.createDirectLine({
              token: "rgAw5IiQRxo.OUqQW33jsMadRyAJ39qz-OBx9lkUuyaSRcr_fntlCzc",
            }),
            styleSet,
            styleOptions: avatarOptions,
            store,
          },
          webchatRef.current
        );
      } catch (error) {
        console.error("Error initializing WebChat:", error);
      }
    }
  }, [isOpen, webChatLoaded]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="flex flex-col w-96">
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Porti Bot Chat</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div
          ref={webchatRef}
          className="h-96 w-full bg-white"
          style={
            {
              "--card-background": "#ffffff",
              "--send-box-background": "#ffffff",
              "--send-box-border": "1px solid #e8eef7",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
};

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <MessageCircle className="text-white" size={24} />
      </button>

      <ChatWidget isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default FloatingChatButton;
