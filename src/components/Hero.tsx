import React from "react";
import { Button } from "@/components/ui/button"; // Use alias path

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-900 via-red-500 to-green-500 z-0"
        style={{ 
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 15s ease infinite"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          The AI Code Editor
        </h1>
        <p className="text-xl md:text-2xl text-white mb-12">
          Built to make you extraordinarily productive, Cursor is the best way to code with AI.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-white text-black hover:bg-white/90 px-6 py-6 h-auto text-lg">
            <span className="mr-2">⊞</span> DOWNLOAD FOR WINDOWS
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 h-auto text-lg">
            ALL DOWNLOADS
          </Button>
        </div>
      </div>
      
      {/* Code editor image */}
      <div className="relative z-10 mt-16 max-w-5xl mx-auto w-full">
        <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
          {/* Editor header */}
          <div className="flex items-center px-4 py-2 bg-black/80">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center mx-auto">
              <div className="px-3 py-1 rounded text-gray-400 text-sm">mod.rs</div>
            </div>
            <div className="flex space-x-2">
              <div className="w-5 h-5 text-gray-400">⊞</div>
              <div className="w-5 h-5 text-gray-400">□</div>
              <div className="w-5 h-5 text-gray-400">⊟</div>
              <div className="w-5 h-5 text-gray-400">⚙</div>
            </div>
          </div>
          
          {/* Editor content */}
          <div className="flex">
            {/* Code area */}
            <div className="w-full md:w-1/2 bg-gray-900 p-4 text-left">
              <div className="mb-4 bg-gray-800/50 p-3 rounded-md">
                <p className="text-gray-300 text-sm">Implement the cleanup function for the transport stack. Do not make the upgrade listeners optional.</p>
                <div className="flex items-center mt-2">
                  <Button variant="default" size="sm" className="bg-blue-600 text-white hover:bg-blue-700 text-xs px-2 py-1 h-auto mr-2">Accept</Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:bg-gray-700 hover:text-gray-300 text-xs px-2 py-1 h-auto">Reject</Button>
                  <span className="text-gray-400 text-xs ml-auto">Follow-up instructions...</span>
                </div>
              </div>
              
              <div className="font-mono text-sm">
                <pre className="text-gray-300">
                  <span className="text-gray-500">72</span> <span className="text-purple-400">pub</span>(<span className="text-blue-400">crate</span>) <span className="text-purple-400">struct</span> <span className="text-yellow-400">TransportStack</span> {'{'}
                  <span className="text-gray-500">73</span>   <span className="text-blue-400">l4</span>: <span className="text-yellow-400">ListenerEndpoint</span>,
                  <span className="text-gray-500">74</span>   <span className="text-blue-400">tls</span>: <span className="text-yellow-400">Option</span>{'<'}<span className="text-yellow-400">Acceptor</span>{'>'},
                  <span className="text-gray-500">75</span>   <span className="text-green-400">// We need to free the old process for graceful upgrade</span>
                  <span className="text-gray-500">76</span>   <span className="text-green-400">#[cfg(unix)]</span>
                  <span className="text-red-400"><span className="text-gray-500">77</span>   <span className="text-blue-400">upgrade_listeners</span>: <span className="text-yellow-400">Option</span>{'<'}<span className="text-yellow-400">ListenerFds</span>{'>'}{','}</span>
                  <span className="text-red-400"><span className="text-gray-500">78</span>   <span className="text-blue-400">upgrade_listeners</span>: <span className="text-yellow-400">ListenerFds</span>,</span>
                  <span className="text-gray-500">79</span> {'}'}
                </pre>
              </div>
            </div>
            
            {/* Chat area */}
            <div className="hidden md:block w-1/2 bg-gray-900 border-l border-gray-700 p-4 text-left">
              <div className="flex items-center justify-between mb-4">
                <Button variant="secondary" size="sm" className="bg-gray-800 text-gray-300 hover:bg-gray-700 text-sm px-3 py-1 h-auto">CHAT</Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-800 hover:text-gray-400 text-sm px-3 py-1 h-auto">COMPOSER</Button>
              </div>
              
              <div className="text-sm text-gray-300">
                <p className="mb-2">Could you make it easier to switch certificates in the transport listeners?</p>
                <p className="text-gray-400 mb-4">I'll help modify the code to make certificate switching more flexible. The main changes will be to enhance the <span className="text-blue-400">TlsAccept</span> trait and modify how certificates are handled in the <span className="text-blue-400">TlsSettings</span>. Here are the key changes:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
