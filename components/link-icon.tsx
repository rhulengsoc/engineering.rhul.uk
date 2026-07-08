import {
  Camera,
  Gamepad2,
  Mail,
  Globe,
  Briefcase,
  AtSign,
  Music2,
  PlayCircle,
  Users,
  Code2,
  Send,
  Link as LinkIconDefault,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  instagram: Camera,
  discord: Gamepad2,
  email: Mail,
  website: Globe,
  linkedin: Briefcase,
  twitter: AtSign,
  x: AtSign,
  tiktok: Music2,
  spotify: Music2,
  youtube: PlayCircle,
  facebook: Users,
  whatsapp: Users,
  github: Code2,
  telegram: Send,
};

export default function LinkIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Icon = ICON_MAP[icon] ?? LinkIconDefault;
  return <Icon className={className} aria-hidden="true" />;
}
