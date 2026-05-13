"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Languages } from "lucide-react"
import Link from "next/link"

const DesignTeamSection = () => {
  const teamMembers = [
    {
      name: "Hasnain Khan",
      role: "Founder & Designer",
      location: "Pakistan",
      bio: "Designer and Vibe Coder with 5+ years of experience creating clean and intuitive digital experiences.",
      image: "/Hasnainkhan.jpg",
      education: "Self-taught Designer",
      languages: ["English", "Urdu"],
      aboutLink: "/about",
      portfolioLink: "/portfolio",
    },
    {
      name: "Fahmida Akhter",
      role: "Graphic Designer",
      location: "Bangladesh",
      bio: "Professional Graphic Designer specializing in logos, branding, and meaningful visual identities.",
      image: "/Fahmidaakhter.png",
      education: "B.A. Political Science",
      languages: ["English", "Bengali"],
      aboutLink: "/fahmidaakhterjhumi",
      portfolioLink: "/#fahmidaakhterportfolio",
    },
  ]

  return (
    <section id="team" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Team</h2>
        <p className="text-muted-foreground text-lg">
           Get to know the designers who turn concepts into captivating visuals and
            <br className="hidden sm:block" />           
            meaningful brand experiences
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 py-0 gap-0"
          >
            {/* Large Image Section */}
            <div className="relative w-full h-58 md:h-58 overflow-hidden bg-gray-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Section */}
            <CardContent className="p-6 space-y-2">
              {/* Name & Role */}
              <div>
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-md text-blue-600 font-medium">{member.role}</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{member.location}</span>
              </div>

              {/* Bio */}
              <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300">
                {member.bio}
              </p>


              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Button asChild variant="outline" className="cursor-pointer">
                  <Link href={member.aboutLink}>About Me</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default DesignTeamSection