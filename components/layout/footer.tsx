import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { DownloadButtons } from "@/components/ui/download-buttons"
import {
  FOOTER_LEGAL_LINKS,
  FOOTER_PRODUCT_LINKS,
  OPERATOR_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/lib/content/site"
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants/links"

const SOCIALS = [
  { href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: SOCIAL_LINKS.facebook, icon: FacebookIcon, label: "Facebook" },
  { href: SOCIAL_LINKS.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: SOCIAL_LINKS.email, icon: Mail, label: "Email" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/15 bg-brand-900 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt={`${SITE_NAME} logo`}
              width={1907}
              height={447}
              className="h-8 w-auto object-contain object-left brightness-0 invert"
            />
            <p className="max-w-sm text-sm leading-6 text-white/70">{SITE_DESCRIPTION}</p>
            <div className="flex items-center gap-3 pt-1">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              {FOOTER_PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={SOCIAL_LINKS.email} className="transition-colors hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Get the app</h3>
            <DownloadButtons
              tone="dark"
              className="w-full flex-col *:flex-none lg:flex-row lg:gap-3 lg:*:flex-1"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}, a {OPERATOR_NAME} product. All rights reserved.
          </p>
          <p>Built for suppliers who deliver.</p>
        </div>
      </div>
    </footer>
  )
}
