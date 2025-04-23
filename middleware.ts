import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const tenant = host.replace(/^www\./, '')

  const url = request.nextUrl.clone()
  url.searchParams.set('gateway', tenant)

  return NextResponse.rewrite(url)
}


// const allowedTenants = ['gateway.campsinternational.local', 'gateway.rootsinterns.local']

// export function middleware(req: NextRequest) {
//   const host = req.headers.get('host') || ''
//   const cleanHost = host.replace(/^www\./, '')

//   // Check if domain is in the allowed list
//   const isAllowed = allowedTenants.includes(cleanHost)

//   if (!isAllowed) {
//     const url = req.nextUrl.clone()
//     url.pathname = '/not-supported'
//     return NextResponse.rewrite(url)
//   }

//   // If valid tenant, pass tenant in search param
//   const url = req.nextUrl.clone()
//   url.searchParams.set('tenant', cleanHost)

//   return NextResponse.rewrite(url)
// }