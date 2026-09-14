import Image from "next/image"
import { PhoneMockup } from "@/components/product/phone-mockup"

type PhoneScreenshotProps = {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
  className?: string
  priority?: boolean
}

/** Convenience wrapper: a single static screenshot inside a PhoneMockup frame. */
export function PhoneScreenshot({
  src,
  alt,
  size = "md",
  className,
  priority,
}: PhoneScreenshotProps) {
  return (
    <PhoneMockup size={size} className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 60vw, 320px"
        className="object-cover object-top"
        priority={priority}
      />
    </PhoneMockup>
  )
}
