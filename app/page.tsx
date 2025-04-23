// import Image from "next/image";

// export default function Home() {
// 	return (
// 		<section className="py-24">
// 			<div className="container">
// 				<h1 className="text-3x1 font-bold"> Next TS Starter</h1>
// 			</div>
// 		</section>

//   	);
// }

import { headers } from 'next/headers'

export default function Home() {
  const headersList = headers()
  const host = headersList.get('host') || ''
  const tenant = host.replace(/^www\./, '')

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to {tenant}!</h1>
      <p>This is the homepage for this tenant.</p>
    </main>
  )
}