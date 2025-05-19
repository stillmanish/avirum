import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/ledgerly_logo.png"
              alt="AvirumApps Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold">AvirumApps</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#apps" className="text-sm font-medium hover:text-primary">
              Our Apps
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Simple Apps for Everyday Life
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Making technology more accessible through straightforward, easy-to-use applications
              </p>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Apps</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover our suite of carefully crafted applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ledgerly */}
              <Card>
                <CardHeader>
                  <CardTitle>Ledgerly</CardTitle>
                  <CardDescription>Business Finance Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image
                      src="/images/ledgerly_logo.png"
                      alt="Ledgerly Logo"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <p className="text-muted-foreground">
                      Simplify your business finances with AI-powered Gmail integration. Automatically track expenses and income, with secure Apple Sign In authentication.
                    </p>
                    <div className="flex justify-center">
                      <Button className="bg-black text-white hover:bg-gray-800">
                        <Image
                          src="/images/app-store-badge.png"
                          alt="Download on the App Store"
                          width={120}
                          height={40}
                          className="mr-2"
                        />
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* TracePlay ABC */}
              <Card>
                <CardHeader>
                  <CardTitle>TracePlay ABC</CardTitle>
                  <CardDescription>Educational Letter Tracing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image
                      src="/images/traceplay_logo.png"
                      alt="TracePlay ABC Logo"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <p className="text-muted-foreground">
                      An educational app designed for children to practice writing letters through tracing, enhanced with AI technology for guided learning.
                    </p>
                    <div className="flex justify-center">
                      <Button className="bg-black text-white hover:bg-gray-800">
                        <Image
                          src="/images/app-store-badge.png"
                          alt="Download on the App Store"
                          width={120}
                          height={40}
                          className="mr-2"
                        />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Godfrey's Crusade */}
              <Card>
                <CardHeader>
                  <CardTitle>Godfrey's Crusade</CardTitle>
                  <CardDescription>Historical Strategy Game</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image
                      src="/images/godfreys_crusade_logo.png"
                      alt="Godfrey's Crusade Logo"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <p className="text-muted-foreground">
                      A historical strategy game set during the First Crusade, where you lead Godfrey of Bouillon's forces through the challenges of medieval warfare and diplomacy.
                    </p>
                    <div className="flex justify-center">
                      <Button className="bg-black text-white hover:bg-gray-800">
                        <Image
                          src="/images/app-store-badge.png"
                          alt="Download on the App Store"
                          width={120}
                          height={40}
                          className="mr-2"
                        />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About AvirumApps</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                A boutique development studio specializing in consumer applications powered by artificial intelligence. 
                We create innovative solutions that make AI technology accessible and useful in everyday life.
              </p>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Contact us at: <a href="mailto:avirumllc@gmail.com" className="text-blue-600 hover:text-blue-800">avirumllc@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 AvirumApps. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
