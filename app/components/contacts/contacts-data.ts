export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: "Active" | "Inactive" | "Lead";
  avatar: string;
};

export const MOCK_CONTACTS: Contact[] = [
  {
    id: "1",
    name: "Alex Rivera",
    email: "alex.rivera@acme.com",
    phone: "+1 (555) 019-2834",
    company: "Acme Corp",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.chen@techflow.io",
    phone: "+1 (555) 012-8821",
    company: "TechFlow",
    status: "Lead",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    id: "3",
    name: "Marcus Vance",
    email: "m.vance@nexus.org",
    phone: "+1 (555) 017-4491",
    company: "Nexus Systems",
    status: "Inactive",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
];