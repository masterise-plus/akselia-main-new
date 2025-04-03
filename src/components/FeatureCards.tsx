import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Use alias path

const FeatureCards: React.FC = () => {
  return (
    <div className="relative py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Build software faster</h2>
          <p className="text-xl text-gray-300">
            Intelligent, fast, and familiar, Cursor is the best way to code with AI.
          </p>
          <Button className="mt-8 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 h-auto">
            SEE MORE FEATURES
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">Frontier Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                Powered by a mix of purpose-built and frontier models, Cursor is smart and fast.
              </p>
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    {/* Colorful triangle with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 transform rotate-45 skew-y-12"></div>
                    {/* Dark cubes in background */}
                    <div className="absolute -top-8 -left-8 w-12 h-12 bg-gray-800 rounded-md transform rotate-12"></div>
                    <div className="absolute bottom-0 right-0 w-10 h-10 bg-gray-800 rounded-md transform -rotate-12"></div>
                    <div className="absolute top-10 right-0 w-8 h-8 bg-gray-800 rounded-md transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">Feels Familiar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                Import all your extensions, themes, and keybindings in one click.
              </p>
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 transform rotate-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-md"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-md"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-md"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">Privacy Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                If you enable Privacy Mode, your code is never stored remotely. Cursor is SOC 2 certified.
              </p>
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    {/* 3D cube with colorful circle */}
                    <div className="absolute inset-0 border-2 border-gray-700 bg-gray-900/50 transform rotate-12 skew-y-6"></div>
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 to-yellow-500 to-green-500 to-blue-500 animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 text-xs text-gray-400">SOC2</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
