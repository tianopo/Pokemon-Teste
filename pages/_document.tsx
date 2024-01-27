import { Html, Head, Main, NextScript }from 'next/document'
import { inter } from '../app/font'

export default function Document() {
  const HtmlAny: any = Html
  const HeadAny: any = Head
  const MainAny: any = Main
  const NextScriptAny: any = NextScript

  return (
    <HtmlAny lang="pt-br"  className={inter.className}>
      <HeadAny><title>Pokemon</title></HeadAny>
      <body>
        <MainAny />
        <NextScriptAny />
      </body>
    </HtmlAny>
  )
}
