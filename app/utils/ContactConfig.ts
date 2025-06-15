import { ContactConfig } from '@/app/types/ContactType';

export const contactConfig: ContactConfig = {
  title: "Let's work together",
  description: "Feel free to reach out for collaboration opportunities or freelance work. I am open to exciting projects and look forward to hearing from you!",
  emailSection: {
    title: "Mail me",
    email: "sritharkalimuthu@gmail.com"
  },
  accessKey: process.env.NEXT_PUBLIC_ACCESS_KEY!,
  apiUrl: "https://api.web3forms.com/submit"
};