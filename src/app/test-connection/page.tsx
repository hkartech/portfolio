import { client } from '@/lib/sanity'

export default async function TestConnection() {
  try {
    // Simple query to test connection
    const data = await client.fetch('count(*[_type == "post"])')
    
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">✅ Sanity Connection Test</h1>
          <p className="text-lg">Connected successfully!</p>
          <p className="mt-2">Total blog posts: <strong>{data}</strong></p>
          <a href="/blog" className="text-blue-600 hover:underline mt-4 block">
            Go to Blog →
          </a>
        </div>
      </div>
    )
  } catch (error: any) { // ← Add type annotation here
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600">❌ Connection Failed</h1>
          <p className="text-gray-600">Error: {error?.message || 'Unknown error'}</p>
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <p className="text-sm">Check these:</p>
            <ul className="text-sm text-left mt-2">
              <li>1. Project ID in .env.local</li>
              <li>2. Sanity Studio running (localhost:3333)</li>
              <li>3. Internet connection</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}