import { Michroma, Roboto_Mono } from "next/font/google";

export const michroma = Michroma({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-michroma",
  weight: "400",
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

