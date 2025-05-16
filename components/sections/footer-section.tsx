import { Heart, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="relative border-t bg-black px-4 py-12 overflow-hidden">
      {/* Grok gradient background */}
      <div className="absolute inset-0">
        <Image
          src="https://x.ai/bg/footer-gradient.webp"
          alt="Footer gradient"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">Atlas Intelligence</h3>
            <p className="mb-4 max-w-md text-muted-foreground">
              Next-generation AI-powered educational platform designed for GCSE and A-Level students,
              developed as part of the Tycoon 1K school enterprise initiative.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>10% of profits donated to </span>
              <Heart className="mx-1 h-4 w-4 text-destructive" />
              <span>Evelina Children's Hospital</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Home</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><a href="#roadmap" className="text-muted-foreground hover:text-foreground">Roadmap</a></li>
              <li><Link href="/privacypolicy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Stay Updated</h4>
            <p className="mb-4 text-muted-foreground">
              Subscribe to our newsletter for updates on our launch and early access opportunities.
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="/waitlist">
                <Button className="w-full">Join Waitlist</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a 
              href="https://x.com/atlas_groupai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/atlas_group_intelligence" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">2025 Atlas Group - subsidiary of iDIGITECH Consulting Limited</p>
          <p className="mt-2 text-sm text-muted-foreground mb-96">
            Intelligence Amplified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;