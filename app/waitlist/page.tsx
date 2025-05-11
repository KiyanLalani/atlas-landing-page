"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WaitlistPage() {
  return (
    <div className="h-screen w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Be the first to experience Atlas Intelligence, the next-generation AI-powered educational platform. 
          Join our waitlist to get early access and exclusive updates about our launch.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 relative z-10">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full"
          />
          <Button className="w-full sm:w-auto">
            Join Waitlist
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}