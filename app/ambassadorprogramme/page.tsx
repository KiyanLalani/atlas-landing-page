"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Briefcase, Network, ClipboardList, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const workAreas = [
  { area: "Product testing", description: "Trying new features and giving feedback on usability, clarity and issues" },
  { area: "Educational content", description: "Reviewing explanations, questions, mark schemes and revision materials" },
  { area: "Subject feedback", description: "Sharing what your GCSE or A Level subjects require from a tutor" },
  { area: "Outreach", description: "Contributing to materials produced for schools, students and teachers" },
  { area: "Events", description: "Helping run Atlas networking events and attending external industry events, connecting with educators, founders and others across the AI and education space" },
  { area: "Research", description: "Investigating study habits, revision behaviour and the wider market" },
  { area: "Design feedback", description: "Assessing the clarity, usability and overall experience of the platform" },
  { area: "Student insight", description: "Articulating what students want from AI-powered learning tools" },
];

const criteria = [
  "Are studying, or have recently studied, GCSEs, A Levels or equivalent",
  "Understand revision, exam pressure and academic workload from the inside",
  "Can give specific, useful feedback rather than generic approval",
  "Have an interest in education, technology, product development or startups",
  "Can work independently and meet agreed deadlines",
  "Want to contribute to something being built, not observe from a distance",
];

export default function AmbassadorProgrammePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-primary/5 px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="mb-6 flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time>16th May 2026</time>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Announcing: The Atlas Intelligence Student Ambassador Programme
          </h1>
          <p className="text-lg text-muted-foreground">
            We are building Atlas with the students we are building it for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Intro */}
          <Card className="p-6">
            <p className="text-muted-foreground mb-4">
              Atlas Intelligence is building an AI tutor designed for how GCSE and A Level students actually study,
              where they get stuck, and what they need from a teacher. We are building it with the students we are
              building it for.
            </p>
            <p className="text-muted-foreground">
              The Ambassador Programme is how we bring students into the development of the platform from the start.
            </p>
          </Card>

          {/* What it is */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Briefcase className="h-5 w-5 text-primary mt-1 shrink-0" />
              <h2 className="text-2xl font-semibold">What it is</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              This is not a social-media ambassador role. Ambassadors are students engaged on specific projects that
              contribute directly to the development of Atlas Intelligence: testing features, reviewing educational
              content, providing student perspective on product decisions, and informing how the platform evolves.
            </p>
            <p className="text-muted-foreground">
              Each project is scoped and agreed in advance. Before any work begins, you will know what is required,
              the deliverables, the deadline, and the payment terms. The arrangement is transparent on both sides
              and gives you meaningful experience contributing to a live product.
            </p>
          </Card>

          {/* Beyond the work */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Network className="h-5 w-5 text-primary mt-1 shrink-0" />
              <h2 className="text-2xl font-semibold">Beyond the work</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The paid projects are one part of the programme. The other is the network around them. Ambassadors gain
              direct access to the founding team, connections with other students working alongside them, and
              introductions to the wider circle we operate within: educators, founders and people working across the
              AI and education space.
            </p>
            <p className="text-muted-foreground">
              For students thinking about university applications, future opportunities or building their own ventures,
              the relationships and access built through the programme matter as much as the work itself.
            </p>
          </Card>

          {/* What you might work on */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-6">
              <ClipboardList className="h-5 w-5 text-primary mt-1 shrink-0" />
              <h2 className="text-2xl font-semibold">What you might work on</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              We engage ambassadors on different areas depending on what the product needs at the time.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left font-semibold py-2 pr-6 text-foreground w-40">Area</th>
                    <th className="text-left font-semibold py-2 text-foreground">What it involves</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {workAreas.map((row) => (
                    <tr key={row.area}>
                      <td className="py-3 pr-6 font-medium text-foreground align-top">{row.area}</td>
                      <td className="py-3 text-muted-foreground align-top">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Who we're looking for */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Users className="h-5 w-5 text-primary mt-1 shrink-0" />
              <h2 className="text-2xl font-semibold">Who we are looking for</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              We are not looking for formal work experience. We are looking for students who can think clearly,
              communicate honestly, and deliver what they commit to.
            </p>
            <p className="text-muted-foreground mb-4">You may be a good fit if you:</p>
            <ul className="space-y-3">
              {criteria.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* How it works */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <p className="text-muted-foreground mb-4">
              Once accepted onto the programme, we will be in touch when a project arises that matches your
              strengths and availability. You are free to accept or decline; participation is never automatic.
            </p>
            <p className="text-muted-foreground mb-4">
              For each project, the scope, deadline, payment and any confidentiality expectations are agreed in
              writing before work begins. Most projects are completed remotely; some may be undertaken in person
              depending on the work involved.
            </p>
            <p className="text-muted-foreground mb-4">
              Atlas Intelligence reserves the right to request parental or guardian consent before a project begins
              where we consider it necessary.
            </p>
            <p className="text-muted-foreground">
              Because work is engaged on a project basis, ambassadors may be responsible for their own tax reporting
              depending on earnings and personal circumstances. We are happy to point you toward relevant guidance,
              but it is worth being aware of from the outset.
            </p>
          </Card>

          {/* Fine print */}
          <Card className="p-6 border-dashed">
            <h2 className="text-lg font-semibold mb-3 text-muted-foreground">The fine print</h2>
            <p className="text-muted-foreground text-sm">
              Acceptance onto the programme is not an offer of employment, fixed hours or ongoing work. It means
              you are part of the pool of students we approach when a suitable project arises. Each engagement is
              agreed separately, so you are never committed to work you have not accepted.
            </p>
          </Card>

          {/* CTA */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h2 className="text-xl font-semibold mb-3">If this aligns with what you are looking for, apply below.</h2>
            <Link href="/studentform">
              <Button className="group">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
