Here's a single text file with the entire code for the Ledgerly landing page:

```plaintext
// =====================================================================
// app/layout.tsx
// =====================================================================
import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ledgerly - Simplify Your Business Finances",
  description:
    "Add transactions by text, image, or Gmail tagging - all securely stored in your personal iCloud account",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}

          <footer className="w-full py-12 bg-gray-900 text-gray-300">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/ledgerly_logo_transparent.png"
                      alt="Ledgerly Logo"
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                    />
                    <span className="text-xl font-bold text-white">Ledgerly</span>
                  </div>
                  <p className="text-sm">Simplify your business finances with AI-powered transaction management</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Quick Links</h3>
                  <nav className="flex flex-col space-y-3">
                    <Link href="/#features" className="text-sm hover:text-white">
                      Features
                    </Link>
                    <Link href="/#how-it-works" className="text-sm hover:text-white">
                      How It Works
                    </Link>
                    <Link href="/#faq" className="text-sm hover:text-white">
                      FAQ
                    </Link>
                    <Link href="#" className="text-sm hover:text-white">
                      Support
                    </Link>
                  </nav>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Legal</h3>
                  <nav className="flex flex-col space-y-3">
                    <Link href="/terms" className="text-sm hover:text-white">
                      Terms of Service
                    </Link>
                    <Link href="/privacy" className="text-sm hover:text-white">
                      Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm hover:text-white">
                      Cookie Policy
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
                <p>© {new Date().getFullYear()} Ledgerly. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

// =====================================================================
// app/page.tsx
// =====================================================================
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PlusCircle, BarChart2, CloudIcon as CloudCheck } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/ledgerly_logo_transparent.png"
              alt="Ledgerly Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold">Ledgerly</span>
          </div>
          <nav className="hidden md:flex gap-8">
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
          <Button className="bg-green-600 hover:bg-green-700 px-6">Download Now</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Simplify Your Business Finances with AI-Powered Ledger Management
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Add transactions by text, image, or Gmail tagging - all securely stored in your personal iCloud
                  account
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a href="#" className="inline-block">
                    <Image
                      src="/images/app-store-badge.png"
                      alt="Download on the App Store"
                      width={180}
                      height={60}
                      className="h-auto w-auto"
                    />
                  </a>
                </div>
              </div>
              <div className="flex justify-center md:justify-end gap-4">
                <div className="relative w-[200px] h-[410px] shadow-xl rounded-3xl border border-gray-200 overflow-hidden">
                  <Image
                    src="/images/app-chat-screen.png"
                    alt="Ledgerly Chat Interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative hidden md:block w-[200px] h-[410px] shadow-xl rounded-3xl border border-gray-200 overflow-hidden">
                  <Image
                    src="/images/app-transactions-screen-updated.png"
                    alt="Ledgerly Transactions Screen"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Get started with Ledgerly in three simple steps
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-blue-100 p-6">
                  <PlusCircle className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Step 1: Add Transactions</h3>
                <p className="text-muted-foreground">
                  Simply type your transactions, upload an image, or tag emails in Gmail - our AI does the rest
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-blue-100 p-6">
                  <BarChart2 className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Step 2: Track & Analyse</h3>
                <p className="text-muted-foreground">
                  Generate reports and easily track expenses, income, and invoices
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-blue-100 p-6">
                  <CloudCheck className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Step 3: Securely backup with iCloud</h3>
                <p className="text-muted-foreground">
                  Your data is securely backed up in your personal iCloud account for complete privacy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Everything you need to manage your business finances
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">AI-Powered Transaction Entry</h3>
                <p className="text-muted-foreground">
                  Add transactions by typing text, uploading images, or tagging emails in Gmail
                </p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">iCloud Privacy</h3>
                <p className="text-muted-foreground">
                  All your data is securely stored in your personal iCloud account
                </p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Expense Tracking</h3>
                <p className="text-muted-foreground">Easily monitor and categorize all your business expenses</p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Income Management</h3>
                <p className="text-muted-foreground">Track all sources of revenue for your business</p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Invoice Tracking</h3>
                <p className="text-muted-foreground">Keep track of all your invoices in one place</p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Detailed Reports</h3>
                <p className="text-muted-foreground">
                  Generate comprehensive financial reports to understand your business
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Find answers to common questions about Ledgerly
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-16">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the AI transaction entry work?</AccordionTrigger>
                  <AccordionContent>
                    Ledgerly uses AI to understand transactions whether you type them in text format, upload an image of
                    a receipt, or tag an email in Gmail. The AI extracts the relevant information like amount, date,
                    category, and vendor, saving you time on manual data entry.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my data secure?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. Ledgerly stores all your financial data in your personal iCloud account, not on our
                    servers. This means you maintain complete control and privacy of your information. We use Apple Sign
                    In for authentication, which provides enhanced security and privacy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What is the pricing structure?</AccordionTrigger>
                  <AccordionContent>
                    Ledgerly offers a free tier with basic features and premium tiers starting at $9.99/month for
                    additional features like unlimited transaction history, advanced reporting, and priority support.
                    Visit our pricing page for more details.
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
        <section className="w-full py-16 md:py-20 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Simplify Your Business Finances?
                </h2>
                <p className="text-xl md:text-2xl">
                  Start managing your business finances more efficiently with Ledgerly
                </p>
              </div>
              <a href="#" className="inline-block mt-4 bg-black rounded-lg overflow-hidden">
                <Image
                  src="/images/app-store-badge.png"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  className="h-auto w-auto max-w-[135px]"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// =====================================================================
// app/terms/page.tsx
// =====================================================================
import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/ledgerly_logo_transparent.png"
                alt="Ledgerly Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="/" className="text-xl font-bold">
              Ledgerly
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="/#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl mx-auto py-12 px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

          <div className="text-sm text-gray-500 mb-8">
            <p>
              <strong>Effective Date:</strong> 17 May 2025
              <br />
              <strong>Company:</strong> Avirum LLC
              <br />
              <strong>Contact:</strong> admin@avirumapps.com
            </p>
          </div>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By downloading, installing, or using the MyBusinessLedger app ("the App"), you agree to be bound by these
              Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              MyBusinessLedger is a personal finance tracking application that allows users to record, organize, and
              analyze their financial transactions. The App provides features such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Natural language transaction entry</li>
              <li>AI-powered receipt scanning and data extraction</li>
              <li>Transaction editing and categorization</li>
              <li>Financial summaries and CSV export</li>
              <li>AI-powered receipt scanning and data extraction</li>
              <li>iCloud sync for data backup</li>
            </ul>
            <p className="mb-4">
              <strong>
                The App is intended for casual, personal, and small business use only. It is not a substitute for
                professional accounting, tax, or financial advice.
              </strong>
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. User Responsibilities</h2>
            <ul className="mb-4">
              <li className="mb-2">
                <strong>Accuracy:</strong> You are solely responsible for reviewing, editing, and ensuring the accuracy
                of all transactions and data entered or imported into the App, including those processed by AI or
                imported from your bank account.
              </li>
              <li className="mb-2">
                <strong>AI Limitations:</strong> The App uses artificial intelligence (AI) to extract and categorize
                data from receipts and natural language input. AI systems may occasionally make mistakes, misinterpret
                data, or behave unpredictably. You must review and correct all AI-generated entries.
              </li>
              <li className="mb-2">
                <strong>Data Security:</strong> You are responsible for maintaining the security of your device and your
                Apple ID. Do not share your login credentials with others.
              </li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. AI and Automated Features</h2>
            <ul className="mb-4">
              <li className="mb-2">
                The App uses AI and machine learning models to process receipt images and natural language text. While
                we strive for high accuracy,{" "}
                <strong>AI-generated results may be incomplete, incorrect, or misleading.</strong>
              </li>
              <li className="mb-2">
                <strong>You must review and verify all AI-generated or imported transactions.</strong> Avirum LLC is not
                responsible for any errors, omissions, or inaccuracies in your financial records resulting from AI or
                automated features.
              </li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. No Financial, Legal, or Tax Advice</h2>
            <ul className="mb-4">
              <li className="mb-2">
                The App is <strong>not</strong> a financial, accounting, or tax service. It does <strong>not</strong>{" "}
                provide financial, investment, legal, or tax advice.
              </li>
              <li className="mb-2">
                The App is intended for <strong>tracking and organizational purposes only</strong>. You should consult a
                qualified professional for any financial, accounting, or tax matters.
              </li>
              <li className="mb-2">
                <strong>
                  Avirum LLC assumes no liability for any actions taken based on information provided by the App.
                </strong>
              </li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Limitation of Liability</h2>
            <ul className="mb-4">
              <li className="mb-2">
                <strong>No Warranty:</strong> The App is provided "as is" and "as available" without warranties of any
                kind, express or implied.
              </li>
              <li className="mb-2">
                <strong>No Liability:</strong> To the maximum extent permitted by law, Avirum LLC and its affiliates,
                officers, employees, and agents shall not be liable for any direct, indirect, incidental, special,
                consequential, or exemplary damages, including but not limited to loss of data, loss of profits, or
                other intangible losses, resulting from:
                <ul className="list-disc pl-6 mt-2">
                  <li>Your use or inability to use the App</li>
                  <li>
                    Any errors, inaccuracies, or omissions in the App's data or features (including AI-generated
                    content)
                  </li>
                  <li>Unauthorized access to or alteration of your data</li>
                  <li>Any other matter relating to the App</li>
                </ul>
              </li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. User Data and Privacy</h2>
            <ul className="mb-4">
              <li className="mb-2">
                The App may collect and store data you provide, including transaction details, receipt images, and bank
                transaction data (if bank integration is enabled).
              </li>
              <li className="mb-2">
                Data is stored locally on your device and, if enabled, in your iCloud account. Some features may require
                secure transmission to Avirum LLC's servers or third-party services for processing (e.g., AI receipt
                extraction).
              </li>
              <li className="mb-2">
                Please review our{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                for details on data collection, use, and storage.
              </li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. Subscription and Payments</h2>
            <ul className="mb-4">
              <li className="mb-2">
                The App offers a free trial and paid subscription options. Subscriptions are managed via your Apple ID
                and the App Store.
              </li>
              <li className="mb-2">
                All payments, renewals, and cancellations are handled by Apple. Please refer to Apple's terms for
                details.
              </li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">9. Modifications to Service</h2>
            <p className="mb-4">
              Avirum LLC reserves the right to modify, suspend, or discontinue the App or any part thereof at any time,
              with or without notice.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">10. Termination</h2>
            <p className="mb-4">
              Avirum LLC may terminate or suspend your access to the App at any time, without notice, for conduct that
              it believes violates these Terms or is harmful to other users or the business.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the State of Washington, United States, without regard to its
              conflict of law principles.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">12. Contact</h2>
            <p className="mb-4">
              For questions or support, contact:
              <br />
              <strong>Avirum LLC</strong>
              <br />
              Email: admin@avirumapps.com
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">13. Changes to Terms</h2>
            <p className="mb-4">
              Avirum LLC may update these Terms at any time. Continued use of the App after changes constitutes
              acceptance of the new Terms.
            </p>
          </section>

          <hr className="my-8" />

          <p className="font-bold mb-8">
            By using MyBusinessLedger, you acknowledge that you have read, understood, and agree to these Terms and
            Conditions.
          </p>

          <p className="text-center font-bold mb-8">[End of Terms]</p>
        </div>
      </main>
    </div>
  )
}

// =====================================================================
// app/privacy/page.tsx
// =====================================================================
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/ledgerly_logo_transparent.png"
                alt="Ledgerly Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="/" className="text-xl font-bold">
              Ledgerly
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="/#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl mx-auto py-12 px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="text-sm text-gray-500 mb-8">
            <p>
              <strong>Effective Date:</strong> 17 May 2025
              <br />
              <strong>Company:</strong> Avirum LLC
              <br />
              <strong>Contact:</strong> admin@avirumapps.com
            </p>
          </div>

          <p className="mb-4">
            This Privacy Policy page is currently under development. Please check back later for the complete privacy
            policy.
          </p>

          <p className="mb-4">For any privacy-related questions, please contact us at admin@avirumapps.com.</p>

          <div className="mt-8">
            <Link href="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

// =====================================================================
// app/globals.css
// =====================================================================
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 201 100% 36%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 201 100% 36%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 201 100% 36%;
    --primary-foreground: 210 40% 98%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 201 100% 36%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

// =====================================================================
// tailwind.config.ts
// =====================================================================
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

// =====================================================================
// next.config.mjs
// =====================================================================
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ledgerly',
  // Other existing configuration...
};

export default nextConfig;
```

This single text file contains all the code for the Ledgerly landing page, including:

1. The main layout (app/layout.tsx)
2. The home page (app/page.tsx)
3. The Terms and Conditions page (app/terms/page.tsx)
4. The Privacy Policy page (app/privacy/page.tsx)
5. Global CSS styles (app/globals.css)
6. Tailwind configuration (tailwind.config.ts)
7. Next.js configuration (next.config.mjs) with the basePath set to '/ledgerly' for your subdirectory deployment


I've organized the file with clear section headers to make it easy to identify each component. The code is ready to be deployed to avirumapps.com/ledgerly via Vercel as we discussed.