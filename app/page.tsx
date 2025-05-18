import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/ledgerly_logo.png"
              alt="MyBusinessLedger Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold">MyBusinessLedger</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">Download Now</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Simplify Your Business Finances with AI-Powered Gmail Integration
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Automatically track expenses and income from your Gmail, powered by Apple Sign In for secure
                  authentication
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-black text-white hover:bg-gray-800 h-12 px-6">
                    <Image
                      src="/placeholder.svg?height=20&width=20&query=apple+logo"
                      alt="Apple logo"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Download on the App Store
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/app-interface.png"
                  alt="MyBusinessLedger App Interface"
                  width={350}
                  height={700}
                  className="rounded-2xl shadow-2xl border border-gray-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with MyBusinessLedger in three simple steps
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-blue-100 p-6">
                  <Image src="/images/step1.png" alt="Sign in with Apple" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold">Step 1: Sign in with Apple</h3>
                <p className="text-muted-foreground">
                  Securely authenticate with your Apple ID for maximum privacy and security
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-blue-100 p-6">
                  <Image src="/images/step2.png" alt="Connect Gmail" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold">Step 2: Connect your Gmail</h3>
                <p className="text-muted-foreground">
                  Link your Gmail account to automatically detect financial transactions
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-blue-100 p-6">
                  <Image src="/images/step3.png" alt="Start Tracking" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold">Step 3: Start Tracking</h3>
                <p className="text-muted-foreground">
                  Watch as your expenses and income are automatically categorized and tracked
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your business finances
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">AI-Powered Gmail Integration</h3>
                <p className="text-muted-foreground">
                  Our AI automatically detects and categorizes financial transactions from your Gmail
                </p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Secure Authentication</h3>
                <p className="text-muted-foreground">Sign in with Apple for enhanced privacy and security</p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Automatic Categorization</h3>
                <p className="text-muted-foreground">
                  Expenses and income are automatically sorted into the right categories
                </p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Financial Reports</h3>
                <p className="text-muted-foreground">Generate detailed reports to understand your business finances</p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Tax Preparation</h3>
                <p className="text-muted-foreground">Simplify tax season with organized financial data</p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Cloud Sync</h3>
                <p className="text-muted-foreground">
                  Access your data from any device with secure cloud synchronization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about MyBusinessLedger
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the Gmail integration work?</AccordionTrigger>
                  <AccordionContent>
                    Our app securely connects to your Gmail account and uses AI to identify emails containing financial
                    information such as receipts, invoices, and payment confirmations. It extracts the relevant data and
                    categorizes it automatically, saving you hours of manual data entry.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my data secure?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We use Apple Sign In for authentication, which provides enhanced security and privacy.
                    We never store your Gmail password, and all data is encrypted both in transit and at rest. We also
                    follow strict data privacy practices and do not sell your information to third parties.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What is the pricing structure?</AccordionTrigger>
                  <AccordionContent>
                    MyBusinessLedger offers a free tier with basic features and premium tiers starting at $9.99/month
                    for additional features like unlimited transaction history, advanced reporting, and priority
                    support. Visit our pricing page for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How is my data privacy protected?</AccordionTrigger>
                  <AccordionContent>
                    We take data privacy seriously. Our app only accesses the emails needed for financial tracking, and
                    we use read-only access. Your data is never shared with third parties without your explicit consent,
                    and you can delete your data at any time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I export my data?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can export your financial data in various formats including CSV, PDF, and Excel. This makes
                    it easy to share information with your accountant or import into other financial software.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Simplify Your Business Finances?
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of business owners who are saving time and reducing stress with MyBusinessLedger
                </p>
              </div>
              <Button className="bg-black text-white hover:bg-gray-800 h-12 px-6">
                <Image
                  src="/placeholder.svg?height=20&width=20&query=apple+logo"
                  alt="Apple logo"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Download on the App Store
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/ledgerly_logo.png"
                  alt="MyBusinessLedger Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto brightness-150"
                />
                <span className="text-xl font-bold text-white">MyBusinessLedger</span>
              </div>
              <p className="text-sm">Simplify your business finances with AI-powered Gmail integration</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#features" className="text-sm hover:text-white">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-sm hover:text-white">
                  How It Works
                </Link>
                <Link href="#faq" className="text-sm hover:text-white">
                  FAQ
                </Link>
                <Link href="#" className="text-sm hover:text-white">
                  Support
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Legal</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm hover:text-white">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm hover:text-white">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} MyBusinessLedger. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
